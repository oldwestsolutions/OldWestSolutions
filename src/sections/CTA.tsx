"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#181818]">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
          >
            <span className="inline-block text-accent text-xs font-medium tracking-widest uppercase mb-4">
              Get Started
            </span>
          </motion.div>

          <motion.h2
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0.1}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-text-primary tracking-tight text-balance"
          >
            Ready to Build?
          </motion.h2>

          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0.2}
            className="mt-4 text-text-muted text-lg leading-relaxed"
          >
            Deploy your system with enterprise-grade infrastructure designed for scale.
          </motion.p>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0.3}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-all duration-300 shadow-glow hover:shadow-glow-lg"
            >
              Build With Us
              <svg
                className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-white/10 text-text-secondary text-sm font-medium hover:border-white/20 hover:bg-white/[0.03] transition-all duration-300"
            >
              Deploy Your System
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
