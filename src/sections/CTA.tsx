"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#080808]">
      <div className="absolute inset-0 grid-pattern opacity-10" />

      {/* Neon glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/[0.03] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-accent-violet/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
          >
            <span className="text-accent text-[11px] font-mono font-semibold tracking-[0.25em] uppercase">
              {"// Initialize"}
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0.1}
            className="mt-4 text-3xl md:text-4xl lg:text-[52px] font-bold text-white leading-tight tracking-[-0.03em]"
          >
            Ready to{" "}
            <span className="bg-gradient-to-r from-accent to-accent-violet bg-clip-text text-transparent">
              Deploy
            </span>
            ?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0.2}
            className="mt-5 text-text-muted text-lg leading-relaxed max-w-xl mx-auto"
          >
            Tell us what you&apos;re building. We&apos;ll spec the
            architecture, assemble the team, and ship it to mainnet.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0.3}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a
              href="#"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-accent to-accent-violet text-black text-sm font-semibold font-mono hover:opacity-90 active:scale-[0.98] transition-all duration-300 shadow-glow w-full sm:w-auto touch-manipulation"
            >
              Deploy with us
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex min-h-[48px] items-center justify-center px-8 py-4 rounded-xl border border-white/[0.08] text-text-secondary text-sm font-mono font-medium hover:border-accent/20 hover:text-accent active:scale-[0.98] transition-all duration-300 w-full sm:w-auto touch-manipulation"
            >
              View GitHub
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0.4}
            className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-text-muted text-xs font-mono text-center"
          >
            <div className="flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              NDA ready
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Response &lt; 24h
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-violet" />
              Audit-ready code
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
