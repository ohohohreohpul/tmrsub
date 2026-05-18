'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

// ── Tuning ─────────────────────────────────────────────────────────────────────
const FLIP_DURATION = 1.1;  // seconds — slow, cinematic sweep
const TILT_DEG      = 8;    // starting tilt; small enough to stay on-screen

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
  // backgroundColor goes on the inner div only — outer section stays transparent
  // so that during the rotation the active section below shows through.
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
  const wrapRef  = useRef<HTMLDivElement>(null);
  const goToRef  = useRef<(n: number) => void>(() => {});
  const [currentIdx, setCurrentIdx] = useState(0);
  const sectionCount = React.Children.count(children);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const sections = Array.from(wrap.querySelectorAll<HTMLElement>('[data-flow-section]'));
    if (!sections.length) return;

    const s = { current: 0, animating: false };

    // ── z-index helpers ──────────────────────────────────────────────────────
    // Only 1–2 sections are ever visible at a time:
    //   z=2  active section
    //   z=3  incoming (forward animation)
    //   z=1  outgoing (backward animation, revealed below)
    //   z=0  everything else
    const show = (idx: number) => gsap.set(sections[idx], { zIndex: 2 });
    const hide = (idx: number) => gsap.set(sections[idx], { zIndex: 0 });

    sections.forEach((sec, i) => {
      gsap.set(sec, { zIndex: 0 });
      const inner = sec.querySelector<HTMLElement>('.flow-art-container');
      if (inner) gsap.set(inner, { rotation: i === 0 ? 0 : TILT_DEG, transformOrigin: 'bottom left' });
    });
    show(0);

    // ── Transition ──────────────────────────────────────────────────────────
    const goTo = (next: number) => {
      if (s.animating) return;
      if (next < 0 || next >= sections.length) return;

      s.animating = true;

      const forward   = next > s.current;
      const currSec   = sections[s.current];
      const nextSec   = sections[next];
      const currInner = currSec.querySelector<HTMLElement>('.flow-art-container');
      const nextInner = nextSec.querySelector<HTMLElement>('.flow-art-container');

      const done = () => {
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
        gsap.set(currSec, { zIndex: 2 });
        gsap.set(nextSec, { zIndex: 3 });
        if (nextInner) {
          gsap.fromTo(
            nextInner,
            { rotation: TILT_DEG },
            { rotation: 0, duration: FLIP_DURATION, ease: 'power2.inOut', onComplete: done },
          );
        } else done();
      } else {
        gsap.set(nextSec, { zIndex: 1 });
        gsap.set(currSec, { zIndex: 2 });
        if (nextInner) gsap.set(nextInner, { rotation: 0 });
        if (currInner) {
          gsap.to(currInner, {
            rotation: TILT_DEG,
            duration: FLIP_DURATION * 0.7,
            ease: 'power2.inOut',
            onComplete: done,
          });
        } else done();
      }
    };

    goToRef.current = goTo;

    // ── Wheel — one scroll event = one page turn ─────────────────────────────
    const onWheel = (e: WheelEvent) => {
      // Let content scroll internally if it hasn't reached its boundary yet.
      const inner = (e.target as HTMLElement).closest<HTMLElement>('.flow-art-container');
      if (inner) {
        const atBottom = inner.scrollTop + inner.clientHeight >= inner.scrollHeight - 2;
        const atTop    = inner.scrollTop <= 2;
        if ((e.deltaY > 0 && !atBottom) || (e.deltaY < 0 && !atTop)) return;
      }
      e.preventDefault();
      if (s.animating || Math.abs(e.deltaY) < 10) return;
      goTo(s.current + Math.sign(e.deltaY));
    };

    // ── Touch ────────────────────────────────────────────────────────────────
    let touchY = 0;
    const onTouchStart = (e: TouchEvent) => { touchY = e.touches[0].clientY; };
    const onTouchEnd   = (e: TouchEvent) => {
      const dy = touchY - e.changedTouches[0].clientY;
      if (Math.abs(dy) > 40) goTo(s.current + Math.sign(dy));
    };

    // ── Keyboard ─────────────────────────────────────────────────────────────
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
