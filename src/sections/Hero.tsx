"use client";

import { motion } from "framer-motion";
import { slideLeft, slideRight } from "@/lib/animations";

const partners = ["AWS", "Google Cloud", "Ethereum", "Solidity", "Kubernetes", "Temporal"];

function HeroVisual() {
  return (
    <div className="relative w-full overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[#0e0e12] shadow-card sm:rounded-[2rem]">
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 14px, rgba(255,255,255,0.04) 14px, rgba(255,255,255,0.04) 15px)",
        }}
      />
      <div className="pointer-events-none absolute -left-1/4 top-1/2 h-[120%] w-[80%] -translate-y-1/2 rounded-full bg-accent/10 blur-[100px]" />

      <div className="relative flex min-h-[240px] items-center justify-center py-12 sm:min-h-[300px] md:min-h-[340px]">
        <div className="absolute h-40 w-40 rounded-full bg-accent/15 opacity-80 blur-xl sm:h-48 sm:w-48" />
        <div className="relative h-28 w-28 rounded-[2rem] border border-white/20 bg-accent/15 shadow-glow sm:h-36 sm:w-36 sm:rounded-3xl" />
        <div className="absolute h-20 w-20 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm sm:h-24 sm:w-24" />
      </div>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/[0.06] bg-[#151518] sm:rounded-3xl">
      <div className="flex items-center gap-2 border-b border-white/[0.06] bg-[#121214] px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
        </div>
        <div className="flex flex-1 justify-center">
          <div className="h-4 w-32 rounded bg-white/[0.04]" />
        </div>
      </div>

      <div className="space-y-3 p-4">
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Revenue", value: "$2.4M", change: "+12.3%" },
            { label: "Active Users", value: "84.2K", change: "+8.7%" },
            { label: "Uptime", value: "99.99%", change: "Stable" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/[0.04] bg-white/[0.02] p-3"
            >
              <div className="text-[9px] uppercase tracking-wider text-text-muted">
                {stat.label}
              </div>
              <div className="mt-1 text-sm font-semibold text-white">{stat.value}</div>
              <div className="mt-0.5 text-[9px] text-emerald-400">{stat.change}</div>
            </div>
          ))}
        </div>

        <div className="h-28 rounded-xl border border-white/[0.04] bg-white/[0.02] p-3">
          <div className="mb-2 text-[9px] uppercase tracking-wider text-text-muted">
            Performance
          </div>
          <div className="flex h-16 items-end gap-1">
            {[40, 55, 35, 65, 50, 75, 60, 80, 70, 90, 85, 95].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-accent/35"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-white/[0.04]">
          {["API Gateway", "Auth Service", "Data Pipeline"].map((name, i) => (
            <div
              key={name}
              className={`flex items-center justify-between px-3 py-2 ${i > 0 ? "border-t border-white/[0.04]" : ""}`}
            >
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
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
    <section className="relative overflow-hidden pt-8 sm:pt-10 md:pt-12">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[min(90vw,720px)] -translate-x-1/2 rounded-full bg-accent/[0.06] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 md:pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div variants={slideLeft} initial="hidden" animate="visible" custom={0}>
            <span className="label-caps inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.07] px-3 py-1.5 text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-glow-sm" />
              Enterprise software partner
            </span>
          </motion.div>

          <motion.h1
            variants={slideLeft}
            initial="hidden"
            animate="visible"
            custom={0.08}
            className="luxury-title luxury-title-center mt-6 text-balance text-3xl font-bold leading-[1.08] tracking-[-0.03em] text-white min-[400px]:text-4xl sm:text-5xl lg:text-[3.35rem]"
          >
            Custom digital infrastructure
            <br className="hidden sm:inline" />
            {" "}for <span className="text-accent">modern systems</span>
          </motion.h1>

          <motion.p
            variants={slideLeft}
            initial="hidden"
            animate="visible"
            custom={0.15}
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg"
          >
            We design, build, and scale software across finance, automation, and
            decentralized networks — with the polish of a premium product team and
            the rigor of core infrastructure.
          </motion.p>
        </div>

        <motion.div
          variants={slideRight}
          initial="hidden"
          animate="visible"
          custom={0.12}
          className="mx-auto mt-12 max-w-4xl"
        >
          <HeroVisual />
        </motion.div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-8 md:grid-cols-3 md:items-center md:gap-10">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="text-center md:text-left"
          >
            <h2 className="text-lg font-semibold text-white sm:text-xl">
              Protocol-grade delivery
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              Architecture, implementation, and observability aligned before scope
              accelerates — so shipping stays predictable.
            </p>
          </motion.div>

          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate="visible"
            custom={0.25}
            className="flex justify-center"
          >
            <a
              href="#contact"
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-glow transition-all duration-200 hover:bg-accent-deep active:scale-[0.98]"
            >
              Start now
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="text-center md:text-right"
          >
            <h2 className="text-lg font-semibold text-white sm:text-xl">
              AI & automation ready
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              Pipelines, integrations, and intelligent workflows engineered for
              long-running operations and measurable ROI.
            </p>
          </motion.div>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <motion.div variants={slideLeft} initial="hidden" animate="visible" custom={0.35}>
            <span className="label-caps text-accent">Live systems</span>
            <h3 className="luxury-title mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Operations that stay legible at scale
            </h3>
            <p className="mt-3 text-text-muted leading-relaxed">
              Dashboards, alerts, and service boundaries designed so teams can move
              fast without losing control — the same cues you expect from high-end
              product software.
            </p>
            <a
              href="#services"
              className="mt-6 inline-flex rounded-full border border-white/[0.12] bg-white/[0.03] px-6 py-3 text-sm font-medium text-text-secondary transition-all duration-200 hover:border-accent/25 hover:text-white"
            >
              Explore capabilities
            </a>
          </motion.div>
          <motion.div variants={slideRight} initial="hidden" animate="visible" custom={0.28}>
            <DashboardMockup />
          </motion.div>
        </div>

        <div className="mx-auto mt-16 max-w-4xl border-t border-white/[0.06] pt-10">
          <p className="text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-text-muted">
            Trusted stack & ecosystems
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-50 grayscale sm:gap-x-14">
            {partners.map((name) => (
              <span
                key={name}
                className="text-sm font-semibold tracking-wide text-white transition-opacity hover:opacity-80"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
