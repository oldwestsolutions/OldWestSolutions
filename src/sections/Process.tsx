"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { processSteps } from "@/lib/constants";

export default function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 bg-[#080808]">
      <div className="absolute inset-0 grid-pattern opacity-15" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="text-accent text-[11px] font-mono font-semibold tracking-[0.25em] uppercase">
            {"// Delivery Framework"}
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-[44px] tracking-[-0.02em]">
            How We Ship{" "}
            <span className="bg-gradient-to-r from-accent to-accent-violet bg-clip-text text-transparent">
              Protocols
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted sm:text-lg">
            A battle-tested pipeline from threat model to mainnet —
            no ambiguity, no shortcuts.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="relative max-w-3xl mx-auto"
        >
          {/* Vertical neon line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent-violet/20 to-transparent" />

          <div className="space-y-0">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                variants={fadeUp}
                custom={i * 0.1}
                className="group relative flex gap-6 md:gap-8 py-8 first:pt-0 last:pb-0"
              >
                {/* Step indicator */}
                <div className="relative z-10 shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl glass glass-border flex items-center justify-center group-hover:border-accent/30 group-hover:shadow-glow-sm transition-all duration-500">
                    <span className="text-accent font-mono font-bold text-sm md:text-base">
                      {step.step}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-1 md:pt-3">
                  <h3 className="text-white font-semibold text-lg md:text-xl mb-2 group-hover:text-accent transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed md:text-[15px]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
