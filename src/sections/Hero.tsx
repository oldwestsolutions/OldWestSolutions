"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute inset-0 grid-pattern" />

      {/* Subtle blue glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs text-text-muted mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Enterprise Infrastructure Platform
            </span>
          </motion.div>

          <motion.h1
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-text-primary leading-[1.1] text-balance"
          >
            Building High-Leverage{" "}
            <span className="relative">
              <span className="relative z-10">Digital Infrastructure</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-accent/10 -z-0 rounded" />
            </span>
          </motion.h1>

          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="mt-6 text-lg md:text-xl text-text-muted leading-relaxed max-w-2xl mx-auto"
          >
            Scalable systems across finance, automation, and decentralized
            networks.
          </motion.p>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#services"
              className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-all duration-300 shadow-glow hover:shadow-glow-lg"
            >
              Explore Platform
              <svg
                className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#solutions"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 text-text-secondary text-sm font-medium hover:border-white/20 hover:bg-white/[0.03] transition-all duration-300"
            >
              View Services
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1 rounded-full bg-text-muted"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
