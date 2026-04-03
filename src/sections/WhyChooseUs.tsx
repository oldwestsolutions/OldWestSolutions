"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { whyUs } from "@/lib/constants";

export default function WhyChooseUs() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#0a0a0a]">
      <div className="absolute inset-0 grid-pattern opacity-15" />

      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-accent/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
          >
            <span className="text-accent text-[11px] font-mono font-semibold tracking-[0.25em] uppercase">
              {"// Why OldWestSolutions"}
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-tight tracking-[-0.02em]">
              Protocol-Native{" "}
              <span className="bg-gradient-to-r from-accent to-accent-violet bg-clip-text text-transparent">
                Engineering
              </span>
            </h2>
            <p className="mt-4 text-text-muted text-lg leading-relaxed">
              We don&apos;t adapt Web2 patterns. We build from first
              principles for decentralized, adversarial, permissionless
              environments — where correctness is non-negotiable.
            </p>

            <div className="mt-8 p-6 rounded-2xl glass glass-border neon-glow">
              <p className="text-text-secondary text-sm leading-relaxed italic font-mono">
                &ldquo;OldWestSolutions shipped our DeFi protocol from
                spec to mainnet in 14 weeks. Gas-optimized contracts,
                clean architecture, zero post-launch incidents. Best
                engineering team we&apos;ve worked with.&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent/20 to-accent-violet/20 border border-accent/20 flex items-center justify-center">
                  <span className="text-accent font-mono font-bold text-xs">AK</span>
                </div>
                <div>
                  <div className="text-white text-sm font-medium">Alexei K.</div>
                  <div className="text-text-muted text-xs font-mono">CTO, DeFi Protocol</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-3"
          >
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                custom={i * 0.08}
                className="flex gap-4 p-5 rounded-xl glass glass-border hover:border-accent/15 transition-all duration-500 group"
              >
                <div className="w-8 h-8 rounded-lg bg-accent/[0.08] border border-accent/[0.12] flex items-center justify-center shrink-0 mt-0.5 group-hover:border-accent/30 transition-all duration-500">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-[15px] mb-1 group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
