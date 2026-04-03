"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { caseStudies } from "@/lib/constants";

export default function CaseStudies() {
  return (
    <section id="projects" className="relative py-24 md:py-32 bg-[#0a0a0a]">
      <div className="absolute inset-0 grid-pattern opacity-15" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          className="max-w-2xl mb-16"
        >
          <span className="text-accent text-[11px] font-mono font-semibold tracking-[0.25em] uppercase">
            {"// Deployments"}
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-tight tracking-[-0.02em]">
            Shipped to{" "}
            <span className="bg-gradient-to-r from-accent to-accent-violet bg-clip-text text-transparent">
              Mainnet
            </span>
          </h2>
          <p className="mt-4 text-text-muted text-lg leading-relaxed">
            Production protocols engineered for adversarial environments
            and real capital at stake.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-4"
        >
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.title}
              variants={fadeUp}
              custom={i * 0.1}
              className="group rounded-2xl glass glass-border overflow-hidden hover:border-accent/20 transition-all duration-500"
            >
              {/* Header */}
              <div className="px-7 pt-7 pb-5 border-b border-white/[0.04]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-semibold tracking-[0.2em] uppercase text-accent bg-accent/[0.08] px-2.5 py-1 rounded-md border border-accent/[0.12]">
                    {study.industry}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-xl group-hover:text-accent transition-colors duration-300">
                  {study.title}
                </h3>
              </div>

              {/* Body */}
              <div className="px-7 py-5 space-y-4">
                <div>
                  <div className="text-[10px] font-mono font-semibold tracking-[0.2em] uppercase text-text-muted mb-1.5">
                    Threat
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {study.problem}
                  </p>
                </div>
                <div>
                  <div className="text-[10px] font-mono font-semibold tracking-[0.2em] uppercase text-text-muted mb-1.5">
                    Protocol
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {study.solution}
                  </p>
                </div>
                <div>
                  <div className="text-[10px] font-mono font-semibold tracking-[0.2em] uppercase text-accent mb-1.5">
                    Outcome
                  </div>
                  <p className="text-accent/80 text-sm leading-relaxed font-medium">
                    {study.outcome}
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="px-7 pb-6 pt-2 flex flex-wrap gap-1.5">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono text-text-muted bg-white/[0.03] border border-white/[0.06] px-2.5 py-1 rounded-md"
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
