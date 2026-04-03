"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { solutions } from "@/lib/constants";
import SectionHeading from "@/components/SectionHeading";

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-24 md:py-32 bg-[#181818]">
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Solutions"
          title="Outcome-Driven Systems"
          description="Industry-specific platforms engineered for measurable results and operational control."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-4"
        >
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.title}
              variants={fadeIn}
              custom={i * 0.08}
              className="group relative rounded-xl bg-gradient-card border border-white/[0.04] hover:border-accent/20 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6 p-6 md:p-8">
                <div className="flex-1 min-w-0">
                  <h3 className="text-text-primary font-medium text-lg mb-2 group-hover:text-white transition-colors duration-200">
                    {solution.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {solution.description}
                  </p>
                </div>

                <div className="flex items-center gap-8 md:gap-12 shrink-0">
                  <div className="text-right">
                    <div className="text-2xl md:text-3xl font-semibold text-accent tracking-tight">
                      {solution.metric}
                    </div>
                    <div className="text-xs text-text-muted mt-0.5">
                      {solution.metricLabel}
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-text-muted group-hover:border-accent/30 group-hover:text-accent transition-all duration-300">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
