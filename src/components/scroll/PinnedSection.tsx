"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import { useScroll, useMotionValue, useReducedMotion } from "framer-motion";
import type { MotionValue } from "framer-motion";

export type PinnedSectionProps = {
  id?: string;
  /** Extra scroll distance; inner viewport stays sticky while this height scrolls by */
  scrollHeightVh?: number;
  mobileScrollHeightVh?: number;
  className?: string;
  /** Sticky frame + overflow; receive scroll-linked motion values */
  children: (progress: MotionValue<number>) => ReactNode;
  /** Shown when `prefers-reduced-motion` is set (optional — otherwise first frame of `children`) */
  reducedMotionFallback?: ReactNode;
};

function PinnedStatic({
  id,
  className = "",
  children,
  reducedMotionFallback,
}: Omit<PinnedSectionProps, "scrollHeightVh" | "mobileScrollHeightVh">) {
  const frozen = useMotionValue(0);
  return (
    <section id={id} className={`relative bg-[#1F1F1F] ${className}`.trim()}>
      {reducedMotionFallback ?? children(frozen)}
    </section>
  );
}

function PinnedAnimated({
  id,
  scrollHeightVh = 260,
  mobileScrollHeightVh = 200,
  className = "",
  children,
}: Omit<PinnedSectionProps, "reducedMotionFallback">) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={ref}
      id={id}
      className={`relative w-full [height:var(--pin-h)] md:[height:var(--pin-h-lg)] ${className}`.trim()}
      style={
        {
          "--pin-h": `${mobileScrollHeightVh}vh`,
          "--pin-h-lg": `${scrollHeightVh}vh`,
        } as CSSProperties
      }
    >
      <div className="sticky top-0 h-[100dvh] min-h-[100svh] w-full overflow-hidden bg-[#1F1F1F]">
        {children(scrollYProgress)}
      </div>
    </section>
  );
}

/**
 * Tall scroll track + sticky viewport. Drive inner animations with `scrollYProgress` (0–1).
 */
export default function PinnedSection({
  reducedMotionFallback,
  ...props
}: PinnedSectionProps) {
  const reduced = useReducedMotion();
  if (reduced) {
    return (
      <PinnedStatic reducedMotionFallback={reducedMotionFallback} {...props} />
    );
  }
  return <PinnedAnimated {...props} />;
}
