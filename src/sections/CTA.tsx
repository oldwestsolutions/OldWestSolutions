"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative border-t border-white/[0.06] bg-[#141416] py-24 md:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[min(90vw,640px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.07] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
          >
            <span className="label-caps text-accent">Get started</span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0.1}
            className="luxury-title luxury-title-center mt-4 text-3xl font-bold leading-tight tracking-[-0.02em] text-white md:text-4xl lg:text-[52px]"
          >
            Deploy your infrastructure
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0.2}
            className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-text-muted"
          >
            Tell us what you need — domain brokerage, managed servers,
            communication platforms, or decentralized compute. We deploy
            the right infrastructure from our ecosystem.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0.3}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="#"
              className="inline-flex min-h-[48px] w-full touch-manipulation items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-white shadow-glow transition-all duration-200 hover:bg-accent-deep active:scale-[0.98] sm:w-auto"
            >
              Schedule a consultation
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex min-h-[48px] w-full touch-manipulation items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.03] px-8 py-4 text-sm font-medium text-text-secondary transition-all duration-200 hover:border-accent/25 hover:text-white active:scale-[0.98] sm:w-auto"
            >
              Explore the ecosystem
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0.4}
            className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-center text-xs text-text-muted"
          >
            <div className="flex items-center justify-center gap-2">
              <svg className="h-4 w-4 shrink-0 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              No commitment required
            </div>
            <div className="flex items-center justify-center gap-2">
              <svg className="h-4 w-4 shrink-0 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Response within 24 hours
            </div>
            <div className="flex basis-full items-center justify-center gap-2 sm:basis-auto">
              <svg className="h-4 w-4 shrink-0 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              NDA available
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
