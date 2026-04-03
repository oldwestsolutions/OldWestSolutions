"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=80";

export type CinematicPhase = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export type CinematicScrollSectionProps = {
  imageSrc?: string;
  imageAlt?: string;
  phases: CinematicPhase[];
  /** Horizontal mask strips — more = finer reveal */
  sliceCount?: number;
  heightVh?: number;
  mobileHeightVh?: number;
  decoration?: ReactNode;
};

function MaskStrip({
  index,
  total,
  progress,
}: {
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const n = Math.max(total, 1);
  const span = 0.8;
  const start = (index / n) * span + 0.03;
  const end = Math.min(start + 0.12, 0.96);
  const opacity = useTransform(progress, [start, end], [1, 0]);

  return (
    <motion.div
      className="absolute inset-x-0 bg-[#1F1F1F] border-b border-white/[0.03]"
      style={{
        top: `${(index / n) * 100}%`,
        height: `${100 / n + 0.35}%`,
        opacity,
      }}
    />
  );
}

function PhaseLayer({
  phase,
  phaseIndex,
  phaseCount,
  progress,
}: {
  phase: CinematicPhase;
  phaseIndex: number;
  phaseCount: number;
  progress: MotionValue<number>;
}) {
  const n = Math.max(phaseCount, 1);
  const slot = (1 - 0.14) / n;
  const t0 = 0.07 + phaseIndex * slot;
  const t1 = t0 + slot * 0.38;
  const t2 = t0 + slot * 0.82;

  const opacity = useTransform(progress, [t0, t1, t2], [0, 1, 0]);
  const y = useTransform(progress, [t0, t1], [18, 0]);

  return (
    <motion.div
      className="absolute inset-0 z-20 flex items-center justify-center px-4 sm:px-8 pointer-events-none"
      style={{ opacity }}
    >
      <motion.div className="max-w-2xl text-center" style={{ y }}>
        {phase.eyebrow && (
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent/90 mb-4 sm:mb-5">
            {phase.eyebrow}
          </span>
        )}
        <h2 className="text-2xl sm:text-4xl md:text-[2.75rem] font-semibold text-white leading-[1.12] tracking-tight text-balance">
          {phase.title}
        </h2>
        {phase.subtitle && (
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-text-muted leading-relaxed max-w-lg mx-auto">
            {phase.subtitle}
          </p>
        )}
      </motion.div>
    </motion.div>
  );
}

function CinematicReduced({
  imageSrc = DEFAULT_IMAGE,
  imageAlt = "Architecture",
  phases,
  decoration,
}: CinematicScrollSectionProps) {
  return (
    <section className="relative bg-[#1a1a1a] py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <div className="relative aspect-[21/10] max-h-[320px] sm:max-h-[400px] rounded-2xl overflow-hidden border border-white/[0.06] bg-[#2B2B2B]">
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" sizes="100vw" priority={false} />
          <div className="absolute inset-0 bg-[#1F1F1F]/45" />
        </div>
        {phases.map((p, i) => (
          <div key={`${p.title}-${i}`} className="text-center max-w-2xl mx-auto">
            {p.eyebrow && (
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">{p.eyebrow}</span>
            )}
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-white tracking-tight">{p.title}</h2>
            {p.subtitle && <p className="mt-3 text-text-muted leading-relaxed">{p.subtitle}</p>}
          </div>
        ))}
        {decoration ? <div className="flex justify-center opacity-60 pt-4">{decoration}</div> : null}
      </div>
    </section>
  );
}

function CinematicAnimated({
  imageSrc = DEFAULT_IMAGE,
  imageAlt = "Architecture",
  phases,
  sliceCount = 8,
  heightVh = 300,
  mobileHeightVh = 240,
  decoration,
}: CinematicScrollSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scrimOpacity = useTransform(scrollYProgress, [0, 0.45, 1], [0.5, 0.32, 0.48]);
  const slices = Math.max(sliceCount, 1);

  return (
    <section
      ref={ref}
      className="relative w-full bg-[#141414] [height:var(--cin-h)] md:[height:var(--cin-h-lg)]"
      style={
        {
          "--cin-h": `${mobileHeightVh}vh`,
          "--cin-h-lg": `${heightVh}vh`,
        } as CSSProperties
      }
    >
      <div className="sticky top-0 h-[100dvh] min-h-[100svh] w-full overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-[50%_42%] scale-[1.02]"
            sizes="100vw"
            priority={false}
          />
          <motion.div
            className="absolute inset-0 bg-[#1F1F1F] pointer-events-none"
            style={{ opacity: scrimOpacity }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1F1F1F]/75 via-transparent to-[#141414]/90 pointer-events-none" />
        </div>

        {/* Mask strips — progressive reveal */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {Array.from({ length: slices }, (_, i) => (
            <MaskStrip key={i} index={i} total={slices} progress={scrollYProgress} />
          ))}
        </div>

        {/* Phased copy */}
        <div className="absolute inset-0 z-[15]">
          {phases.map((phase, i) => (
            <PhaseLayer
              key={`${phase.title}-${i}`}
              phase={phase}
              phaseIndex={i}
              phaseCount={Math.max(phases.length, 1)}
              progress={scrollYProgress}
            />
          ))}
        </div>

        {decoration ? (
          <div className="absolute bottom-6 sm:bottom-10 left-1/2 z-20 w-[min(88vw,400px)] -translate-x-1/2 opacity-[0.55] pointer-events-none">
            {decoration}
          </div>
        ) : null}
      </div>
    </section>
  );
}

/**
 * Pinned cinematic section: sticky viewport + scroll-driven masks + phased narrative.
 * Reduced-motion users get a static stack (no useScroll on an unmounted ref).
 */
export default function CinematicScrollSection(props: CinematicScrollSectionProps) {
  const reduced = useReducedMotion();
  if (reduced === true) {
    return <CinematicReduced {...props} />;
  }
  return <CinematicAnimated {...props} />;
}
