"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { caseStudies } from "@/lib/constants";

export default function CaseStudies() {
  return (
    <section
      id="news"
      aria-labelledby="news-heading"
      className="relative border-t border-white/[0.06] bg-[#111113] pt-10 pb-10 md:pt-14 md:pb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          className="max-w-2xl mb-10 md:mb-12"
        >
          <span className="label-caps text-accent">News</span>
          <h2
            id="news-heading"
            className="luxury-title mt-3 text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-tight tracking-[-0.02em]"
          >
            Latest updates
          </h2>
          <p className="mt-4 text-pretty text-text-muted text-base leading-relaxed sm:text-lg">
            Short briefs from our team — what we are seeing in the field, what
            we shipped, and what it means for customers. Same format as before,
            written like newsroom notes instead of slide decks.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch"
        >
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.title}
              variants={fadeUp}
              custom={i * 0.1}
              className="group flex h-full min-h-0 flex-col overflow-hidden rounded-[1.5rem] border border-white/[0.06] bg-[#1a1a1e] shadow-card transition-all duration-300 hover:border-accent/20"
            >
              <div className="shrink-0 px-7 pt-7 pb-5 border-b border-white/[0.04]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-accent bg-accent/[0.08] px-2.5 py-1 rounded-md">
                    {study.industry}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-xl group-hover:text-accent transition-colors duration-200">
                  {study.title}
                </h3>
              </div>

              <div className="flex flex-1 flex-col px-7 py-5 space-y-4">
                <div>
                  <div className="text-[10px] font-semibold tracking-widest uppercase text-text-muted mb-1.5">
                    Lead
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {study.problem}
                  </p>
                </div>
                <div>
                  <div className="text-[10px] font-semibold tracking-widest uppercase text-text-muted mb-1.5">
                    Report
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {study.solution}
                  </p>
                </div>
                <div>
                  <div className="text-[10px] font-semibold tracking-widest uppercase text-emerald-400 mb-1.5">
                    Impact
                  </div>
                  <p className="text-emerald-400/90 text-sm leading-relaxed font-medium">
                    {study.outcome}
                  </p>
                </div>
              </div>

              <div className="mt-auto shrink-0 border-t border-white/[0.04] px-7 py-4">
                <a
                  href="/systems"
                  className="inline-flex min-h-[40px] w-full items-center justify-center gap-1.5 rounded-full border border-white/[0.12] bg-white/[0.03] px-4 py-2.5 text-xs font-medium text-text-secondary transition-all duration-200 hover:border-accent/30 hover:text-white sm:w-auto"
                >
                  Read More
                  <svg className="h-3 w-3 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
