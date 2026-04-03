"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";

export type PinnedStep = {
  kicker?: string;
  title: string;
  description: string;
};

export type PinnedSectionProps = {
  steps: PinnedStep[];
  heightVh?: number;
  mobileHeightVh?: number;
  eyebrow?: string;
  headline?: string;
  subline?: string;
  illustration?: ReactNode;
};

export default function PinnedSection({
  steps,
  heightVh = 260,
  mobileHeightVh = 200,
  eyebrow,
  headline,
  subline,
  illustration,
}: PinnedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const n = Math.max(steps.length, 1);
  const seg = 1 / n;

  if (reduce) {
    return (
      <section className="bg-[#1a1a1a] py-24 md:py-32 border-y border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {eyebrow && (
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">{eyebrow}</span>
          )}
          {headline && (
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white max-w-2xl">{headline}</h2>
          )}
          {subline && <p className="mt-4 text-text-muted max-w-xl">{subline}</p>}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {steps.map((s) => (
              <div key={s.title} className="rounded-2xl border border-white/[0.06] bg-[#242424] p-6">
                {s.kicker && (
                  <span className="text-accent text-[10px] font-semibold tracking-widest uppercase">{s.kicker}</span>
                )}
                <h3 className="mt-2 text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
          {illustration && <div className="mt-12 flex justify-center max-w-md mx-auto">{illustration}</div>}
        </div>
      </section>
    );
  }

  return (
    <section
      ref={ref}
      className="relative w-full bg-[#1a1a1a] md:[height:var(--pin-height)] [height:var(--pin-height-mobile)]"
      style={
        {
          "--pin-height": `${heightVh}vh`,
          "--pin-height-mobile": `${mobileHeightVh}vh`,
        } as React.CSSProperties
      }
    >
      <div className="sticky top-0 h-[100dvh] min-h-[100svh] flex flex-col justify-center overflow-hidden border-y border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 md:py-0">
          <div className="max-w-2xl mb-8 md:mb-12">
            {eyebrow && (
              <span className="text-accent text-xs font-semibold tracking-widest uppercase">{eyebrow}</span>
            )}
            {headline && (
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight text-balance">
                {headline}
              </h2>
            )}
            {subline && (
              <p className="mt-3 text-text-muted text-sm sm:text-base leading-relaxed">{subline}</p>
            )}
          </div>

          <div className="relative min-h-[280px] sm:min-h-[320px] md:min-h-[340px]">
            {steps.map((step, i) => (
              <PinnedStepCard
                key={`${step.title}-${i}`}
                step={step}
                index={i}
                total={n}
                seg={seg}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>

          {illustration && (
            <div className="mt-8 md:mt-10 flex justify-center opacity-80 max-h-[110px] md:max-h-[140px] overflow-hidden">
              {illustration}
            </div>
          )}
        </div>

        {/* Progress rail */}
        <div className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-2">
          {steps.map((_, i) => (
            <ProgressDot key={i} index={i} seg={seg} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PinnedStepCard({
  step,
  index,
  total,
  seg,
  scrollYProgress,
}: {
  step: PinnedStep;
  index: number;
  total: number;
  seg: number;
  scrollYProgress: MotionValue<number>;
}) {
  const enter = index * seg;
  const peak = enter + seg * 0.45;
  const exit = Math.min(enter + seg * 0.92, 0.97);

  const opacity = useTransform(scrollYProgress, [enter, peak, exit], [0, 1, index < total - 1 ? 0 : 1]);
  const y = useTransform(scrollYProgress, [enter, peak, exit], [28, 0, index < total - 1 ? -16 : 0]);
  const scale = useTransform(scrollYProgress, [enter, peak], [0.97, 1]);

  return (
    <motion.div
      className="absolute inset-0 flex items-center md:items-start md:pt-0"
      style={{ opacity, y, scale }}
    >
      <div className="w-full max-w-xl rounded-2xl border border-white/[0.08] bg-[#242424]/95 backdrop-blur-sm p-6 sm:p-8 shadow-xl shadow-black/40">
        {step.kicker && (
          <span className="text-accent text-[10px] sm:text-xs font-semibold tracking-widest uppercase">
            {step.kicker}
          </span>
        )}
        <h3 className="mt-2 text-xl sm:text-2xl font-semibold text-white leading-snug">{step.title}</h3>
        <p className="mt-3 text-text-muted text-sm sm:text-base leading-relaxed">{step.description}</p>
      </div>
    </motion.div>
  );
}

function ProgressDot({
  index,
  seg,
  progress,
}: {
  index: number;
  seg: number;
  progress: MotionValue<number>;
}) {
  const start = index * seg;
  const opacity = useTransform(progress, [start - 0.02, start + seg * 0.5], [0.25, 1]);
  const scale = useTransform(progress, [start - 0.02, start + seg * 0.5], [1, 1.35]);

  return (
    <motion.div
      className="w-1.5 h-1.5 rounded-full bg-accent origin-center"
      style={{ opacity, scale }}
    />
  );
}
