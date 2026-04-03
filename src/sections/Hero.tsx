"use client";

import { motion } from "framer-motion";
import { slideLeft, slideRight } from "@/lib/animations";

function DashboardMockup() {
  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.06] bg-[#181818]">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#1a1a1a]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="w-32 h-4 rounded bg-white/[0.04]" />
        </div>
      </div>

      {/* Dashboard content */}
      <div className="p-4 space-y-3">
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Revenue", value: "$2.4M", change: "+12.3%" },
            { label: "Active Users", value: "84.2K", change: "+8.7%" },
            { label: "Uptime", value: "99.99%", change: "Stable" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-lg bg-white/[0.03] border border-white/[0.04] p-3">
              <div className="text-[9px] text-text-muted uppercase tracking-wider">{stat.label}</div>
              <div className="text-sm font-semibold text-white mt-1">{stat.value}</div>
              <div className="text-[9px] text-emerald-400 mt-0.5">{stat.change}</div>
            </div>
          ))}
        </div>

        {/* Chart placeholder */}
        <div className="rounded-lg bg-white/[0.03] border border-white/[0.04] p-3 h-28">
          <div className="text-[9px] text-text-muted uppercase tracking-wider mb-2">Performance</div>
          <div className="flex items-end gap-1 h-16">
            {[40, 55, 35, 65, 50, 75, 60, 80, 70, 90, 85, 95].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-accent/30"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>

        {/* Table rows */}
        <div className="rounded-lg bg-white/[0.03] border border-white/[0.04] overflow-hidden">
          {["API Gateway", "Auth Service", "Data Pipeline"].map((name, i) => (
            <div key={name} className={`flex items-center justify-between px-3 py-2 ${i > 0 ? "border-t border-white/[0.04]" : ""}`}>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-[10px] text-text-secondary">{name}</span>
              </div>
              <span className="text-[9px] text-text-muted">Operational</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-[72px]">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1F1F1F] via-[#1a1a1a] to-[#161616]" />
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)", backgroundSize: "40px 40px" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.div
              variants={slideLeft}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/[0.08] border border-accent/[0.15] text-accent text-xs font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Enterprise Software Partner
              </span>
            </motion.div>

            <motion.h1
              variants={slideLeft}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white leading-[1.08] tracking-tight"
            >
              Custom Digital Infrastructure for{" "}
              <span className="text-accent">Modern Systems</span>
            </motion.h1>

            <motion.p
              variants={slideLeft}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="mt-6 text-lg text-text-muted leading-relaxed max-w-xl"
            >
              We design, build, and scale software across finance, automation,
              and decentralized networks. Enterprise-grade systems built for
              companies that need real infrastructure.
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
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-accent text-white text-sm font-semibold hover:bg-[#2560e8] transition-all duration-200 shadow-lg shadow-accent/20"
              >
                Book a Consultation
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl border border-white/[0.1] text-text-secondary text-sm font-medium hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-200"
              >
                View Services
              </a>
            </motion.div>
          </div>

          {/* Right - Dashboard mockup */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="hidden lg:block"
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
