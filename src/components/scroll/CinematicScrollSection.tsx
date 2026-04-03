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
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80";

export type CinematicPhase = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export type CinematicScrollSectionProps = {
  imageSrc?: string;
  imageAlt?: string;
  phases: CinematicPhase[];
  sliceCount?: number;
  heightVh?: number;
  mobileHeightVh?: number;
  decoration?: ReactNode;
};

/** Soft-stepped mask fade — avoids linear “blinds” popping */
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
  const revealSpan = 0.74;
  const wave = 0.04;
  const start = (index / n) * revealSpan + 0.05 + wave * Math.sin((index / Math.max(n - 1, 1)) * Math.PI * 0.35);
  const fadeLen = 0.2;
  const a = start;
  const b = Math.min(start + fadeLen * 0.35, 0.94);
  const c = Math.min(start + fadeLen * 0.72, 0.97);
  const d = Math.min(start + fadeLen, 0.99);

  const opacity = useTransform(progress, [a, b, c, d], [1, 0.88, 0.22, 0]);

  return (
    <motion.div
      className="absolute inset-x-0 bg-gradient-to-b from-[#1F1F1F] via-[#1F1F1F] to-[#1F1F1F]/92 border-b border-white/[0.02] shadow-[inset_0_-20px_30px_-18px_rgba(0,0,0,0.35)]"
      style={{
        top: `${(index / n) * 100}%`,
        height: `${100 / n + 0.45}%`,
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
  const slot = (1 - 0.1) / n;
  const t0 = 0.05 + phaseIndex * slot;
  const tIn0 = t0 + slot * 0.08;
  const tIn1 = t0 + slot * 0.22;
  const tOut0 = t0 + slot * 0.62;
  const tOut1 = t0 + slot * 0.9;

  const opacity = useTransform(progress, [t0, tIn0, tIn1, tOut0, tOut1], [0, 0.35, 1, 1, 0]);
  const y = useTransform(progress, [t0, tIn1], [22, 0]);

  return (
    <motion.div
      className="absolute inset-0 z-20 flex items-center justify-center px-5 sm:px-10 pointer-events-none"
      style={{ opacity }}
    >
      <motion.div className="max-w-[34rem] sm:max-w-2xl text-center" style={{ y }}>
        {phase.eyebrow && (
          <span className="inline-block text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-accent mb-5 sm:mb-6">
            {phase.eyebrow}
          </span>
        )}
        <h2 className="text-[1.65rem] leading-[1.15] sm:text-4xl md:text-[2.85rem] font-semibold text-white tracking-[-0.02em] text-balance">
          {phase.title}
        </h2>
        {phase.subtitle && (
          <p className="mt-5 sm:mt-7 text-sm sm:text-base text-text-secondary leading-[1.65] max-w-md sm:max-w-lg mx-auto">
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
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-accent">{p.eyebrow}</span>
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
  sliceCount = 12,
  heightVh = 380,
  mobileHeightVh = 280,
  decoration,
}: CinematicScrollSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scrimOpacity = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.52, 0.28, 0.26, 0.42]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.09, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["-2%", "0%"]);
  const progressScale = useTransform(scrollYProgress, [0, 1], [0.04, 1]);
  const slices = Math.max(sliceCount, 1);

  return (
    <section
      ref={ref}
      className="relative w-full bg-[#0a0a0a] [height:var(--cin-h)] md:[height:var(--cin-h-lg)]"
      style={
        {
          "--cin-h": `${mobileHeightVh}vh`,
          "--cin-h-lg": `${heightVh}vh`,
        } as CSSProperties
      }
    >
      <div className="sticky top-0 h-[100dvh] min-h-[100svh] w-full overflow-hidden ring-1 ring-inset ring-white/[0.06]">
        {/* Background + Ken Burns */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            className="absolute inset-[-8%] will-change-transform"
            style={{ scale: imageScale, y: imageY }}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover object-[50%_45%]"
              sizes="100vw"
              priority={false}
            />
          </motion.div>
          <motion.div
            className="absolute inset-0 bg-[#1F1F1F] pointer-events-none"
            style={{ opacity: scrimOpacity }}
          />
          <div
            className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_85%_70%_at_50%_45%,transparent_0%,rgba(10,10,10,0.5)_70%,rgba(10,10,10,0.88)_100%)]"
            aria-hidden
          />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#1F1F1F]/90 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#141414] to-transparent pointer-events-none" />
        </div>

        {/* Masks */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {Array.from({ length: slices }, (_, i) => (
            <MaskStrip key={i} index={i} total={slices} progress={scrollYProgress} />
          ))}
        </div>

        {/* Copy */}
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

        {/* Scroll progress */}
        <div className="absolute bottom-0 left-0 right-0 z-[30] h-px bg-white/[0.08] pointer-events-none">
          <motion.div
            className="h-full w-full bg-accent/45 origin-left will-change-transform"
            style={{ scaleX: progressScale }}
          />
        </div>

        {decoration ? (
          <div className="absolute bottom-5 sm:bottom-8 left-1/2 z-20 w-[min(88vw,420px)] -translate-x-1/2 opacity-[0.5] pointer-events-none">
            {decoration}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default function CinematicScrollSection(props: CinematicScrollSectionProps) {
  const reduced = useReducedMotion();
  if (reduced === true) {
    return <CinematicReduced {...props} />;
  }
  return <CinematicAnimated {...props} />;
}
