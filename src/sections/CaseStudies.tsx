"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { caseStudies } from "@/lib/constants";

export default function CaseStudies() {
  return (
    <section
      id="news"
      className="relative border-t border-white/[0.06] bg-[#111113] py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          className="max-w-2xl mb-16"
        >
          <span className="label-caps text-accent">News</span>
          <h2 className="luxury-title mt-3 text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-tight tracking-[-0.02em]">
            From the OldWestSolutions wire
          </h2>
          <p className="mt-4 text-text-muted text-lg leading-relaxed">
            Product milestones, platform updates, and customer-facing programs
            across domains, managed services, and our product lines — short
            briefs you can forward to stakeholders.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-5"
        >
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.title}
              variants={fadeUp}
              custom={i * 0.1}
              className="group overflow-hidden rounded-[1.5rem] border border-white/[0.06] bg-[#1a1a1e] shadow-card transition-all duration-300 hover:border-accent/20"
            >
              <div className="px-7 pt-7 pb-5 border-b border-white/[0.04]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-accent bg-accent/[0.08] px-2.5 py-1 rounded-md">
                    {study.industry}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-xl group-hover:text-accent transition-colors duration-200">
                  {study.title}
                </h3>
              </div>

              <div className="px-7 py-5 space-y-4">
                <div>
                  <div className="text-[10px] font-semibold tracking-widest uppercase text-text-muted mb-1.5">
                    Challenge
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {study.problem}
                  </p>
                </div>
                <div>
                  <div className="text-[10px] font-semibold tracking-widest uppercase text-text-muted mb-1.5">
                    Solution
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {study.solution}
                  </p>
                </div>
                <div>
                  <div className="text-[10px] font-semibold tracking-widest uppercase text-emerald-400 mb-1.5">
                    Outcome
                  </div>
                  <p className="text-emerald-400/90 text-sm leading-relaxed font-medium">
                    {study.outcome}
                  </p>
                </div>
              </div>

              <div className="px-7 pb-6 pt-2 flex flex-wrap gap-1.5">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] text-text-muted bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
