'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

// ── Tuning ─────────────────────────────────────────────────────────────────────
// How much total wheel-delta must accumulate before the page turns.
// Higher = user must scroll harder / longer before advancing.
const SCROLL_THRESHOLD = 700;
// GSAP flip duration (seconds).
const FLIP_DURATION = 0.75;
// How fast the accumulator decays toward zero when the user stops scrolling.
const DECAY = 0.88;

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
  const { backgroundColor, color, ...innerStyle } = style as React.CSSProperties & {
    backgroundColor?: string;
    color?: string;
  };
  return (
    <section
      data-flow-section
      aria-label={ariaLabel}
      // All sections share the same absolute slot; z-index is managed by GSAP.
      className={cx('absolute inset-0 w-full h-full overflow-hidden', className)}
      style={{ backgroundColor, color }}
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
  const wrapRef    = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  // Stable ref so dot-nav buttons can call goTo without stale closures.
  const goToRef    = useRef<(n: number) => void>(() => {});
  const [currentIdx, setCurrentIdx] = useState(0);
  const sectionCount = React.Children.count(children);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const sections = Array.from(wrap.querySelectorAll<HTMLElement>('[data-flow-section]'));
    if (!sections.length) return;

    // ── State (all mutable, lives in a single object to avoid stale closures) ──
    const s = { current: 0, animating: false, accumulator: 0 };

    // ── Initial z-index + rotation ──────────────────────────────────────────────
    // Section[i] lives at z = i+1. Section[0] is at z=1 (bottom), the last
    // section is at z=N (top), but all sections i>0 start rotated 30° so they
    // are hidden behind the card above them. The first section is flat (0°).
    //
    // When we advance, section[current+1] (already at higher z) rotates 30→0,
    // sweeping in over section[current]. When we go back, section[current]
    // rotates 0→30, revealing section[current-1] which was already flat.
    sections.forEach((sec, i) => {
      gsap.set(sec, { zIndex: i + 1 });
      const inner = sec.querySelector<HTMLElement>('.flow-art-container');
      if (inner && i > 0) gsap.set(inner, { rotation: 30, transformOrigin: 'bottom left' });
    });

    // ── Transition ──────────────────────────────────────────────────────────────
    const goTo = (next: number) => {
      if (s.animating) return;
      if (next < 0 || next >= sections.length) {
        // Edge: bounce accumulator back so user feels resistance.
        s.accumulator = 0;
        if (progressRef.current) gsap.to(progressRef.current, { scaleX: 0, duration: 0.4 });
        return;
      }

      s.animating = true;
      s.accumulator = 0;
      if (progressRef.current) gsap.to(progressRef.current, { scaleX: 0, duration: 0.25 });

      const forward     = next > s.current;
      const currSec     = sections[s.current];
      const nextSec     = sections[next];
      const currInner   = currSec.querySelector<HTMLElement>('.flow-art-container');
      const nextInner   = nextSec.querySelector<HTMLElement>('.flow-art-container');

      const done = () => { s.current = next; s.animating = false; setCurrentIdx(next); };

      if (reducedMotion) {
        if (nextInner)   gsap.set(nextInner, { rotation: 0 });
        if (!forward && currInner) gsap.set(currInner, { rotation: 30 });
        done();
        return;
      }

      if (forward) {
        // Next card swings in: rotation 30 → 0.
        if (nextInner) {
          gsap.fromTo(
            nextInner,
            { rotation: 30, transformOrigin: 'bottom left' },
            { rotation: 0, duration: FLIP_DURATION, ease: 'power2.out', onComplete: done },
          );
        } else done();
      } else {
        // Current card folds back: rotation 0 → 30, revealing the card below.
        if (currInner) {
          gsap.to(currInner, {
            rotation: 30,
            duration: FLIP_DURATION * 0.6,
            ease: 'power2.in',
            onComplete: done,
          });
        } else done();
      }
    };

    // Expose to dot-nav buttons.
    goToRef.current = goTo;

    // ── Accumulator decay ───────────────────────────────────────────────────────
    const decayTimer = setInterval(() => {
      if (s.animating || s.accumulator === 0) return;
      s.accumulator *= DECAY;
      if (Math.abs(s.accumulator) < 2) s.accumulator = 0;
      const p = Math.abs(s.accumulator) / SCROLL_THRESHOLD;
      if (progressRef.current) gsap.to(progressRef.current, { scaleX: p, duration: 0.3, ease: 'power1.out' });
    }, 80);

    // ── Wheel ───────────────────────────────────────────────────────────────────
    const onWheel = (e: WheelEvent) => {
      // If the event target is inside an overflowing inner container that isn't
      // yet at its scroll boundary, let the browser handle it (internal scroll).
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

    // ── Touch ───────────────────────────────────────────────────────────────────
    let touchY = 0;
    const onTouchStart = (e: TouchEvent) => { touchY = e.touches[0].clientY; };
    const onTouchEnd   = (e: TouchEvent) => {
      const dy = touchY - e.changedTouches[0].clientY;
      if (Math.abs(dy) > 55) goTo(s.current + Math.sign(dy));
    };

    // ── Keyboard ────────────────────────────────────────────────────────────────
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') { e.preventDefault(); goTo(s.current + 1); }
      if (e.key === 'ArrowUp'   || e.key === 'PageUp')   { e.preventDefault(); goTo(s.current - 1); }
    };

    window.addEventListener('wheel',      onWheel,      { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: true  });
    window.addEventListener('touchend',   onTouchEnd,   { passive: true  });
    window.addEventListener('keydown',    onKey);

    return () => {
      window.removeEventListener('wheel',      onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend',   onTouchEnd);
      window.removeEventListener('keydown',    onKey);
      clearInterval(decayTimer);
    };
  }, []); // runs once — page sections are static

  return (
    <div
      aria-label={ariaLabel}
      className={cx('relative w-screen h-screen overflow-hidden', className)}
    >
      {/* Section stack */}
      <div ref={wrapRef} className="relative h-full w-full">
        {children}
      </div>

      {/* Scroll-resistance progress bar — grows as you scroll, resets on page turn */}
      <div
        aria-hidden
        className="pointer-events-none fixed bottom-0 left-0 z-50 h-[2px] w-full"
      >
        <div
          ref={progressRef}
          className="h-full w-full origin-left bg-white/50"
          style={{ transform: 'scaleX(0)' }}
        />
      </div>

      {/* Section dot navigator */}
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
