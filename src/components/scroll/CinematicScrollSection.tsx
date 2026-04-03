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

type CinematicStripProps = {
  index: number;
  total: number;
  progress: MotionValue<number>;
};

function CinematicStrip({ index, total, progress }: CinematicStripProps) {
  const safeTotal = Math.max(total, 1);
  const span = 0.78;
  const start = (index / safeTotal) * span + 0.04;
  const end = Math.min(start + 0.14, 0.96);
  const opacity = useTransform(progress, [start, end], [1, 0]);

  return (
    <motion.div
      className="absolute left-0 right-0 bg-[#1F1F1F]/95 backdrop-blur-[2px]"
      style={{
        top: `${(index / safeTotal) * 100}%`,
        height: `${100 / safeTotal + 0.4}%`,
        opacity,
      }}
    />
  );
}

function PhaseBlock({
  phase,
  phaseIndex,
  totalPhases,
  progress,
}: {
  phase: CinematicPhase;
  phaseIndex: number;
  totalPhases: number;
  progress: MotionValue<number>;
}) {
  const safePhases = Math.max(totalPhases, 1);
  const slot = (1 - 0.16) / safePhases;
  const start = 0.08 + phaseIndex * slot;
  const mid = start + slot * 0.4;
  const end = start + slot * 0.85;

  const opacity = useTransform(progress, [start, mid, end], [0, 1, 0]);
  const y = useTransform(progress, [start, mid], [20, 0]);

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center px-4 pointer-events-none"
      style={{ opacity }}
    >
      <motion.div className="max-w-2xl text-center will-change-transform" style={{ y }}>
        {phase.eyebrow && (
          <span className="inline-block text-accent text-xs font-semibold tracking-widest uppercase mb-4 sm:mb-5">
            {phase.eyebrow}
          </span>
        )}
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-white leading-[1.08] text-balance">
          {phase.title}
        </h2>
        {phase.subtitle && (
          <p className="mt-4 sm:mt-6 text-text-muted text-sm sm:text-lg leading-relaxed max-w-lg mx-auto">
            {phase.subtitle}
          </p>
        )}
      </motion.div>
    </motion.div>
  );
}

export type CinematicScrollSectionProps = {
  imageSrc?: string;
  imageAlt?: string;
  phases: CinematicPhase[];
  sliceCount?: number;
  heightVh?: number;
  mobileHeightVh?: number;
  decoration?: ReactNode;
};

export default function CinematicScrollSection({
  imageSrc = DEFAULT_IMAGE,
  imageAlt = "Structural composition",
  phases,
  sliceCount = 8,
  heightVh = 300,
  mobileHeightVh = 240,
  decoration,
}: CinematicScrollSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const reduce = reduceMotion === true;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scrim = useTransform(scrollYProgress, [0, 0.5, 1], [0.55, 0.35, 0.5]);
  const stripCount = Math.max(sliceCount, 1);

  if (reduce) {
    return (
      <section className="relative bg-[#141414] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="relative aspect-[21/9] max-h-[360px] rounded-2xl overflow-hidden border border-white/[0.06]">
            <Image src={imageSrc} alt={imageAlt} fill className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-[#1F1F1F]/50" />
          </div>
          {phases.map((p) => (
            <div key={p.title} className="text-center max-w-2xl mx-auto">
              {p.eyebrow && (
                <span className="text-accent text-xs font-semibold tracking-widest uppercase">{p.eyebrow}</span>
              )}
              <h2 className="mt-3 text-3xl font-bold text-white">{p.title}</h2>
              {p.subtitle && <p className="mt-3 text-text-muted">{p.subtitle}</p>}
            </div>
          ))}
          {decoration && <div className="flex justify-center opacity-70">{decoration}</div>}
        </div>
      </section>
    );
  }

  return (
    <section
      ref={ref}
      className="relative w-full bg-black md:[height:var(--cin-height)] [height:var(--cin-height-mobile)]"
      style={
        {
          "--cin-height": `${heightVh}vh`,
          "--cin-height-mobile": `${mobileHeightVh}vh`,
        } as CSSProperties
      }
    >
      <div className="sticky top-0 h-[100dvh] min-h-[100svh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-[center_40%] scale-[1.03]"
            sizes="100vw"
            priority={false}
          />
          <motion.div
            className="absolute inset-0 pointer-events-none bg-[#1F1F1F]"
            style={{ opacity: scrim }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-[#1F1F1F]/80" />
        </div>

        <div className="absolute inset-0 z-[15] pointer-events-none">
          {Array.from({ length: stripCount }).map((_, i) => (
            <CinematicStrip key={i} index={i} total={stripCount} progress={scrollYProgress} />
          ))}
        </div>

        <div className="relative z-20 h-full">
          {phases.map((phase, i) => (
            <PhaseBlock
              key={`${phase.title}-${i}`}
              phase={phase}
              phaseIndex={i}
              totalPhases={Math.max(phases.length, 1)}
              progress={scrollYProgress}
            />
          ))}
        </div>

        {decoration && (
          <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-30 w-[min(90vw,420px)] opacity-[0.65] pointer-events-none">
            {decoration}
          </div>
        )}
      </div>
    </section>
  );
}
