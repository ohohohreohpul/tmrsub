'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

// ── Tuning ─────────────────────────────────────────────────────────────────────
const SCROLL_THRESHOLD = 700;  // wheel delta needed to turn page
const FLIP_DURATION    = 0.65; // seconds
const DECAY            = 0.88; // accumulator decay per 80 ms tick
// Starting tilt for the incoming card. 30° clips most of the card outside the
// viewport, making it look like it snaps in. 8° keeps the card nearly on-screen
// so the sweep is smooth and readable throughout the entire arc.
const TILT_DEG         = 8;

function cx(...parts: Array<string | undefined | false | null>): string {
  return parts.filter(Boolean).join(' ');
}

// ── FlowSection ────────────────────────────────────────────────────────────────

export interface FlowSectionProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  'aria-label'?: string;
}

export const FlowSection: React.FC<FlowSectionProps> = ({
  className,
  style = {},
  children,
  'aria-label': ariaLabel,
}) => {
  // NOTE: backgroundColor goes on the INNER div only, not the outer section.
  // The outer section must stay transparent so that during the rotation
  // animation the active section below shows through the uncovered area.
  const { backgroundColor, color, ...innerStyle } = style as React.CSSProperties & {
    backgroundColor?: string;
    color?: string;
  };
  return (
    <section
      data-flow-section
      aria-label={ariaLabel}
      className={cx('absolute inset-0 w-full h-full overflow-hidden', className)}
      style={{ color }}
    >
      <div
        data-flow-inner
        className={cx(
          'flow-art-container relative flex h-full w-full flex-col justify-between gap-6',
          'px-[4vw] pt-[clamp(2rem,8vw,4vw)] pb-[4vw] overflow-y-auto will-change-transform',
        )}
        style={{ transformOrigin: 'bottom left', backgroundColor, color, ...innerStyle }}
      >
        {children}
      </div>
    </section>
  );
};

// ── FlowArt ────────────────────────────────────────────────────────────────────

export interface FlowArtProps {
  children: React.ReactNode;
  className?: string;
  'aria-label'?: string;
}

const FlowArt: React.FC<FlowArtProps> = ({
  children,
  className,
  'aria-label': ariaLabel = 'Story scroll',
}) => {
  const wrapRef     = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  // Stable ref so dot-nav buttons always call the latest goTo.
  const goToRef     = useRef<(n: number) => void>(() => {});
  const [currentIdx, setCurrentIdx] = useState(0);
  const sectionCount = React.Children.count(children);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const sections = Array.from(wrap.querySelectorAll<HTMLElement>('[data-flow-section]'));
    if (!sections.length) return;

    const s = { current: 0, animating: false, accumulator: 0 };

    // ── Initial z-index layout ───────────────────────────────────────────────
    // Only the active section (s.current) is ever "visible" (z ≥ 1).
    // All others are at z=0 — completely hidden beneath it.
    // The incoming section temporarily gets z=3 during the animation so it
    // sweeps in above the current section (z=2). The outer <section> elements
    // are transparent; only the inner .flow-art-container has a background.
    const show = (idx: number) => gsap.set(sections[idx], { zIndex: 2 });
    const hide = (idx: number) => gsap.set(sections[idx], { zIndex: 0 });

    sections.forEach((sec, i) => {
      gsap.set(sec, { zIndex: 0 });
      const inner = sec.querySelector<HTMLElement>('.flow-art-container');
      if (inner) {
        // All inner cards start at rotation 30 (folded); section 0 starts flat.
        gsap.set(inner, {
          rotation: i === 0 ? 0 : TILT_DEG,
          transformOrigin: 'bottom left',
        });
      }
    });
    show(0);

    // ── Transition ──────────────────────────────────────────────────────────
    const goTo = (next: number) => {
      if (s.animating) return;
      if (next < 0 || next >= sections.length) {
        s.accumulator = 0;
        if (progressRef.current) gsap.to(progressRef.current, { scaleX: 0, duration: 0.4 });
        return;
      }

      s.animating   = true;
      s.accumulator = 0;
      if (progressRef.current) gsap.to(progressRef.current, { scaleX: 0, duration: 0.25 });

      const forward   = next > s.current;
      const currSec   = sections[s.current];
      const nextSec   = sections[next];
      const currInner = currSec.querySelector<HTMLElement>('.flow-art-container');
      const nextInner = nextSec.querySelector<HTMLElement>('.flow-art-container');

      const done = () => {
        // Hide the section we left; reveal only the new active one.
        sections.forEach((_, i) => hide(i));
        show(next);
        s.current   = next;
        s.animating = false;
        setCurrentIdx(next);
      };

      if (reducedMotion) {
        if (nextInner) gsap.set(nextInner, { rotation: 0 });
        if (!forward && currInner) gsap.set(currInner, { rotation: TILT_DEG });
        done();
        return;
      }

      if (forward) {
        // Incoming card (z=3) sweeps over the current card (z=2).
        gsap.set(currSec, { zIndex: 2 });
        gsap.set(nextSec, { zIndex: 3 });
        if (nextInner) {
          gsap.fromTo(
            nextInner,
            { rotation: TILT_DEG },
            { rotation: 0, duration: FLIP_DURATION, ease: 'power2.out', onComplete: done },
          );
        } else {
          done();
        }
      } else {
        // Current card (z=2) folds back, revealing the section below (z=1).
        gsap.set(nextSec, { zIndex: 1 });
        gsap.set(currSec, { zIndex: 2 });
        // Ensure the target section's inner is flat so it looks correct.
        if (nextInner) gsap.set(nextInner, { rotation: 0 });
        if (currInner) {
          gsap.to(currInner, {
            rotation: TILT_DEG,
            duration: FLIP_DURATION * 0.6,
            ease: 'power2.in',
            onComplete: done,
          });
        } else {
          done();
        }
      }
    };

    goToRef.current = goTo;

    // ── Accumulator decay ────────────────────────────────────────────────────
    const decayTimer = setInterval(() => {
      if (s.animating || s.accumulator === 0) return;
      s.accumulator *= DECAY;
      if (Math.abs(s.accumulator) < 2) s.accumulator = 0;
      const p = Math.abs(s.accumulator) / SCROLL_THRESHOLD;
      if (progressRef.current) gsap.to(progressRef.current, { scaleX: p, duration: 0.3, ease: 'power1.out' });
    }, 80);

    // ── Wheel ────────────────────────────────────────────────────────────────
    const onWheel = (e: WheelEvent) => {
      // Allow internal scroll if the section's content overflows.
      const inner = (e.target as HTMLElement).closest<HTMLElement>('.flow-art-container');
      if (inner) {
        const atBottom = inner.scrollTop + inner.clientHeight >= inner.scrollHeight - 2;
        const atTop    = inner.scrollTop <= 2;
        if ((e.deltaY > 0 && !atBottom) || (e.deltaY < 0 && !atTop)) return;
      }
      e.preventDefault();
      if (s.animating) return;
      s.accumulator += e.deltaY;
      const p = Math.min(Math.abs(s.accumulator) / SCROLL_THRESHOLD, 1);
      if (progressRef.current) gsap.to(progressRef.current, { scaleX: p, duration: 0.05 });
      if (s.accumulator >=  SCROLL_THRESHOLD) goTo(s.current + 1);
      if (s.accumulator <= -SCROLL_THRESHOLD) goTo(s.current - 1);
    };

    // ── Touch ────────────────────────────────────────────────────────────────
    let touchY = 0;
    const onTouchStart = (e: TouchEvent) => { touchY = e.touches[0].clientY; };
    const onTouchEnd   = (e: TouchEvent) => {
      const dy = touchY - e.changedTouches[0].clientY;
      if (Math.abs(dy) > 55) goTo(s.current + Math.sign(dy));
    };

    // ── Keyboard ─────────────────────────────────────────────────────────────
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') { e.preventDefault(); goTo(s.current + 1); }
      if (e.key === 'ArrowUp'   || e.key === 'PageUp')   { e.preventDefault(); goTo(s.current - 1); }
    };

    window.addEventListener('wheel',      onWheel,      { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend',   onTouchEnd,   { passive: true });
    window.addEventListener('keydown',    onKey);

    return () => {
      window.removeEventListener('wheel',      onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend',   onTouchEnd);
      window.removeEventListener('keydown',    onKey);
      clearInterval(decayTimer);
    };
  }, []);

  return (
    <div
      aria-label={ariaLabel}
      className={cx('relative w-screen h-screen overflow-hidden', className)}
    >
      <div ref={wrapRef} className="relative h-full w-full">
        {children}
      </div>

      {/* Progress bar — fills as accumulator grows toward threshold */}
      <div aria-hidden className="pointer-events-none fixed bottom-0 left-0 z-50 h-[2px] w-full">
        <div
          ref={progressRef}
          className="h-full w-full origin-left bg-white/50"
          style={{ transform: 'scaleX(0)' }}
        />
      </div>

      {/* Dot navigator */}
      <nav
        aria-label="Section navigation"
        className="pointer-events-auto fixed right-4 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-[7px]"
      >
        {Array.from({ length: sectionCount }, (_, i) => (
          <button
            key={i}
            onClick={() => goToRef.current(i)}
            className={cx(
              'rounded-full transition-all duration-300',
              i === currentIdx
                ? 'h-3 w-1.5 bg-white opacity-80'
                : 'h-1.5 w-1.5 bg-white opacity-25 hover:opacity-55',
            )}
            aria-label={`Go to section ${i + 1}`}
            aria-current={i === currentIdx ? 'true' : undefined}
          />
        ))}
      </nav>
    </div>
  );
};

export default FlowArt;
