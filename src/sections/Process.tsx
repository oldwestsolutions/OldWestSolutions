"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { processSteps } from "@/lib/constants";

export default function Process() {
  return (
    <section
      id="process"
      className="relative border-t border-white/[0.06] bg-[#141416] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          className="mx-auto mb-12 max-w-2xl text-center md:mb-20"
        >
          <span className="label-caps text-accent">Our Process</span>
          <h2 className="luxury-title luxury-title-center mt-3 text-3xl font-bold leading-tight tracking-[-0.02em] text-white md:text-4xl lg:text-[44px]">
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
                  custom={i * 0.1}
                  className={`relative md:flex md:items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`md:w-1/2 ${isLeft ? "md:pr-16 md:text-right" : "md:pl-16"}`}
                  >
                    <div className="group rounded-2xl border border-white/[0.04] bg-[#1a1a1e] p-6 transition-all duration-300 hover:border-accent/15 md:p-8">
                      <div className="mb-3 flex items-center gap-3 md:hidden">
                        <span className="text-lg font-bold text-accent">{step.step}</span>
                        <div className="h-px flex-1 bg-white/[0.06]" />
                      </div>
                      <h3 className="mb-2 text-xl font-semibold text-white transition-colors duration-200 group-hover:text-accent">
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-text-muted">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 top-1/2 z-10 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-accent/25 bg-[#141416] text-xs font-bold text-accent shadow-glow-sm md:flex">
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
