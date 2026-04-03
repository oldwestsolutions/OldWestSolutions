"use client";

import { motion, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { processSteps } from "@/lib/constants";
import PinnedSection from "@/components/scroll/PinnedSection";

function StepCard({
  step,
  index,
  total,
  progress,
}: {
  step: (typeof processSteps)[number];
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const span = Math.max(total - 1, 1);

  const opacity = useTransform(progress, (v) => {
    const c = v * span;
    const d = Math.abs(c - index);
    return Math.min(1, 0.3 + Math.max(0, 1 - d * 1.15) * 0.7);
  });

  const x = useTransform(progress, (v) => {
    const c = v * span;
    const d = c - index;
    const slide = -d * 18;
    return Math.min(20, Math.max(-20, slide));
  });

  const scale = useTransform(progress, (v) => {
    const c = v * span;
    const d = Math.abs(c - index);
    return 0.985 + Math.max(0, 1 - d * 1.25) * 0.015;
  });

  const ringAlpha = useTransform(progress, (v) => {
    const c = v * span;
    const d = Math.abs(c - index);
    return d < 0.48 ? 0.4 + (1 - d / 0.48) * 0.25 : 0.08;
  });

  return (
    <motion.article
      className="relative rounded-2xl border border-white/[0.06] bg-[#242424] p-5 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.9)] md:p-7"
      style={{ opacity, x, scale }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-accent"
        style={{ opacity: ringAlpha }}
        aria-hidden
      />
      <div className="flex items-center gap-3 border-b border-white/[0.05] pb-4 md:border-0 md:pb-0">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1F1F1F] text-sm font-bold text-accent ring-1 ring-white/[0.08]">
          {step.step}
        </span>
        <h3 className="text-lg font-semibold text-white">{step.title}</h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-text-muted md:mt-4 md:pl-14 md:text-[15px]">
        {step.description}
      </p>
    </motion.article>
  );
}

function ProcessPinnedInner({ progress }: { progress: MotionValue<number> }) {
  const total = processSteps.length;
  const headerLineScale = useTransform(progress, [0, 0.15, 1], [0.35, 1, 1]);

  return (
    <div className="mx-auto flex h-full max-w-7xl flex-col justify-center px-4 pb-10 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pb-14 lg:pt-10">
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-14 xl:gap-20">
        <header className="max-w-xl lg:sticky lg:top-24">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Our Process
          </span>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-[44px]">
            How We Deliver Results
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted sm:text-lg">
            A structured, proven delivery framework that eliminates risk and
            ensures predictable outcomes at every stage.
          </p>
          <motion.div
            className="mt-8 h-px w-full max-w-[12rem] origin-left bg-gradient-to-r from-accent/80 to-transparent"
            style={{ scaleX: headerLineScale }}
            aria-hidden
          />
        </header>

        <div className="relative flex flex-col gap-4 md:gap-5">
          <div
            className="pointer-events-none absolute left-5 top-6 hidden h-[calc(100%-3rem)] w-px bg-gradient-to-b from-accent/25 via-white/[0.08] to-transparent md:block"
            aria-hidden
          />
          {processSteps.map((step, i) => (
            <StepCard
              key={step.step}
              step={step}
              index={i}
              total={total}
              progress={progress}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProcessReducedTimeline() {
  return (
    <section id="process" className="relative bg-[#1F1F1F] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto mb-12 max-w-2xl text-center md:mb-20"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Our Process
          </span>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-[44px]">
            How We Deliver Results
          </h2>
          <p className="mt-4 px-0 text-base leading-relaxed text-text-muted sm:text-lg">
            A structured, proven delivery framework that eliminates risk and
            ensures predictable outcomes at every stage.
          </p>
        </motion.div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="relative"
        >
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-white/[0.06] md:block" />
          <div className="space-y-6 md:space-y-0">
            {processSteps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.step}
                  variants={fadeUp}
                  className={`relative md:flex md:items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`md:w-1/2 ${isLeft ? "md:pr-16 md:text-right" : "md:pl-16"}`}
                  >
                    <div className="rounded-2xl border border-white/[0.04] bg-[#242424] p-6 transition-all duration-300 md:p-8">
                      <div className="mb-3 flex items-center gap-3 md:hidden">
                        <span className="text-lg font-bold text-accent">{step.step}</span>
                        <div className="h-px flex-1 bg-white/[0.06]" />
                      </div>
                      <h3 className="mb-2 text-xl font-semibold text-white">{step.title}</h3>
                      <p className="text-sm leading-relaxed text-text-muted">{step.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 top-1/2 z-10 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/[0.08] bg-[#1F1F1F] text-xs font-bold text-accent md:flex">
                    {step.step}
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Process() {
  return (
    <PinnedSection
      id="process"
      scrollHeightVh={280}
      mobileScrollHeightVh={220}
      reducedMotionFallback={<ProcessReducedTimeline />}
    >
      {(progress) => <ProcessPinnedInner progress={progress} />}
    </PinnedSection>
  );
}
