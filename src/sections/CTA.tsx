"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#1a1a1a]">
      {/* Subtle accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/[0.025] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
          >
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">
              Get Started
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0.1}
            className="mt-4 text-3xl md:text-4xl lg:text-[52px] font-bold text-white leading-tight"
          >
            Let&apos;s Build Your System
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0.2}
            className="mt-5 text-text-muted text-lg leading-relaxed max-w-xl mx-auto"
          >
            Tell us what you&apos;re building. We&apos;ll help you execute with
            the architecture, team, and process to ship it right.
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-accent text-white text-sm font-semibold hover:bg-[#2560e8] transition-all duration-200 shadow-lg shadow-accent/20 w-full sm:w-auto"
            >
              Book a Call
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-white/[0.1] text-text-secondary text-sm font-medium hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-200 w-full sm:w-auto"
            >
              Start a Project
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0.4}
            className="mt-12 flex items-center justify-center gap-6 text-text-muted text-xs"
          >
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              No commitment required
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Response within 24 hours
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              NDA available
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
