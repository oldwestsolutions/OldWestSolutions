"use client";

import { motion } from "framer-motion";
import { slideLeft, slideRight } from "@/lib/animations";

function ProtocolVisual() {
  return (
    <div className="relative w-full aspect-square max-w-md mx-auto">
      {/* Grid backdrop */}
      <div className="absolute inset-0 grid-pattern rounded-2xl opacity-60" />

      {/* Outer ring */}
      <div className="absolute inset-4 rounded-full border border-accent/10" />
      <div className="absolute inset-8 rounded-full border border-accent-violet/10" />
      <div className="absolute inset-12 rounded-full border border-accent/5" />

      {/* Center node */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-accent/20 to-accent-violet/20 border border-accent/20 flex items-center justify-center animate-pulse-glow">
            <div className="w-16 h-16 rounded-xl bg-surface border border-white/[0.08] flex items-center justify-center">
              <span className="text-accent font-mono font-bold text-lg">OW</span>
            </div>
          </div>
        </div>
      </div>

      {/* Orbiting nodes */}
      {[
        { label: "SOL", x: "15%", y: "20%", color: "accent" },
        { label: "ETH", x: "75%", y: "15%", color: "accent-violet" },
        { label: "ZK", x: "85%", y: "65%", color: "accent" },
        { label: "AI", x: "10%", y: "70%", color: "accent-violet" },
      ].map((node) => (
        <div
          key={node.label}
          className="absolute"
          style={{ left: node.x, top: node.y }}
        >
          <div className={`w-12 h-12 rounded-xl glass glass-border flex items-center justify-center`}>
            <span className={`text-${node.color} font-mono text-[11px] font-semibold`}>
              {node.label}
            </span>
          </div>
        </div>
      ))}

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
        <line x1="80" y1="100" x2="180" y2="180" stroke="url(#line-grad)" strokeWidth="0.5" opacity="0.3" />
        <line x1="320" y1="80" x2="220" y2="180" stroke="url(#line-grad)" strokeWidth="0.5" opacity="0.3" />
        <line x1="350" y1="280" x2="220" y2="210" stroke="url(#line-grad)" strokeWidth="0.5" opacity="0.3" />
        <line x1="60" y1="300" x2="180" y2="210" stroke="url(#line-grad)" strokeWidth="0.5" opacity="0.3" />
        <defs>
          <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden pt-[calc(72px+env(safe-area-inset-top,0px))]">
      {/* Deep dark background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#080808] to-[#0a0a0a]" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Accent glow blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-violet/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="min-w-0">
            <motion.div
              variants={slideLeft}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass glass-border text-accent text-xs font-mono font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                protocol::active
              </span>
            </motion.div>

            <motion.h1
              variants={slideLeft}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="text-3xl min-[400px]:text-4xl sm:text-5xl lg:text-[56px] font-bold text-white leading-[1.05] tracking-[-0.03em]"
            >
              Decentralized
              <br />
              Infrastructure for the{" "}
              <span className="bg-gradient-to-r from-accent to-accent-violet bg-clip-text text-transparent">
                Next Era
              </span>
            </motion.h1>

            <motion.p
              variants={slideLeft}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="mt-6 text-base sm:text-lg text-text-muted leading-relaxed max-w-xl"
            >
              We architect and ship production-grade protocols across DeFi,
              on-chain AI, and Web3 infrastructure. East-European precision.
              Dutch operational rigor. Global deployment.
            </motion.p>

            <motion.div
              variants={slideLeft}
              initial="hidden"
              animate="visible"
              custom={0.3}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#contact"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-accent to-accent-violet text-black text-sm font-semibold font-mono hover:opacity-90 active:scale-[0.98] transition-all duration-300 shadow-glow w-full sm:w-auto touch-manipulation"
              >
                Deploy with us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#services"
                className="inline-flex min-h-[48px] items-center justify-center px-7 py-3.5 rounded-xl border border-white/[0.08] text-text-secondary text-sm font-mono font-medium hover:border-accent/20 hover:text-accent active:scale-[0.98] transition-all duration-300 w-full sm:w-auto touch-manipulation"
              >
                View Protocol
              </a>
            </motion.div>

            {/* Monospace stats */}
            <motion.div
              variants={slideLeft}
              initial="hidden"
              animate="visible"
              custom={0.4}
              className="mt-10 flex gap-8 text-left"
            >
              {[
                { value: "100+", label: "Protocols shipped" },
                { value: "99.9%", label: "Uptime SLA" },
                { value: "12", label: "Chains supported" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold font-mono text-white">{s.value}</div>
                  <div className="text-[11px] text-text-muted font-mono tracking-wide mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="w-full max-w-xl mx-auto lg:max-w-none"
          >
            <ProtocolVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
