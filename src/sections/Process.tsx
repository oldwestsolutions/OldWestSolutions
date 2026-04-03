"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { processSteps } from "@/lib/constants";

export default function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-20"
        >
          <span className="text-accent text-xs font-semibold tracking-widest uppercase">
            Our Process
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-tight">
            How We Deliver Results
          </h2>
          <p className="mt-4 text-text-muted text-base sm:text-lg leading-relaxed px-0">
            A structured, proven delivery framework that eliminates risk and
            ensures predictable outcomes at every stage.
          </p>
        </motion.div>

        {/* Process timeline */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="relative"
        >
          {/* Vertical line (md+) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/[0.06]" />

          <div className="space-y-6 md:space-y-0">
            {processSteps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.step}
                  variants={fadeUp}
                  custom={i * 0.1}
                  className={`relative md:flex items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`md:w-1/2 ${isLeft ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <div className="rounded-2xl bg-[#242424] border border-white/[0.04] p-6 md:p-8 hover:border-accent/15 transition-all duration-300 group">
                      <div className="flex items-center gap-3 mb-3 md:hidden">
                        <span className="text-accent font-bold text-lg">{step.step}</span>
                        <div className="h-px flex-1 bg-white/[0.06]" />
                      </div>
                      <h3 className="text-white font-semibold text-xl mb-2 group-hover:text-accent transition-colors duration-200">
                        {step.title}
                      </h3>
                      <p className="text-text-muted text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#1a1a1a] border-2 border-white/[0.08] items-center justify-center z-10">
                    <span className="text-accent font-bold text-xs">{step.step}</span>
                  </div>

                  {/* Spacer */}
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
