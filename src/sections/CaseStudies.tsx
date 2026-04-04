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
          className="grid grid-cols-1 gap-6 md:grid-cols-3 md:items-stretch"
        >
          {caseStudies.map((study, i) => (
            <motion.article
              key={study.title}
              variants={fadeUp}
              custom={i * 0.1}
              className="group flex h-full min-h-0 flex-col overflow-hidden rounded-[1.5rem] border border-white/[0.06] bg-[#1a1a1e] shadow-card transition-all duration-300 hover:border-accent/20"
            >
              <div className="shrink-0 border-b border-white/[0.04] px-7 pb-5 pt-7">
                <div className="mb-3 flex min-h-[1.75rem] items-center">
                  <span className="rounded-md bg-accent/[0.08] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-accent">
                    {study.industry}
                  </span>
                </div>
                <h3 className="min-h-[4rem] text-xl font-semibold leading-snug text-white transition-colors duration-200 group-hover:text-accent md:min-h-[4.5rem]">
                  {study.title}
                </h3>
              </div>

              <div className="flex flex-1 flex-col space-y-4 px-7 py-5">
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
                  href="/news"
                  className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-medium text-accent underline-offset-2 transition-colors hover:text-white hover:underline touch-manipulation"
                >
                  Read More
                  <svg className="h-3.5 w-3.5 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
