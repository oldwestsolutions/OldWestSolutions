"use client";

import { motion } from "framer-motion";
import { slideLeft, slideRight } from "@/lib/animations";

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
          <div className="h-4 w-40 rounded bg-white/[0.04]" />
        </div>
      </div>

      <div className="space-y-3 p-4">
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Write TPS", value: "48.2k", change: "+6.1% QoQ" },
            { label: "Regions active", value: "6", change: "Multi-master" },
            { label: "SLO budget", value: "0.12%", change: "Within target" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/[0.04] bg-white/[0.02] p-3"
            >
              <div className="text-[9px] uppercase tracking-wider text-text-muted">
                {stat.label}
              </div>
              <div className="mt-1 text-sm font-semibold text-white">{stat.value}</div>
              <div className="mt-0.5 text-[9px] text-emerald-400/90">{stat.change}</div>
            </div>
          ))}
        </div>

        <div className="h-28 rounded-xl border border-white/[0.04] bg-white/[0.02] p-3">
          <div className="mb-2 text-[9px] uppercase tracking-wider text-text-muted">
            Cross-region replication lag (p99)
          </div>
          <div className="flex h-16 items-end gap-1">
            {[32, 48, 28, 58, 44, 68, 52, 76, 64, 82, 74, 88].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-gradient-to-t from-accent/20 to-accent/45"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-white/[0.04]">
          {[
            { name: "Primary data plane", state: "Healthy" },
            { name: "Inference pool", state: "Autoscaling" },
            { name: "Edge / WAF", state: "Mitigating 0" },
          ].map((row, i) => (
            <div
              key={row.name}
              className={`flex items-center justify-between px-3 py-2 ${i > 0 ? "border-t border-white/[0.04]" : ""}`}
            >
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="text-[10px] text-text-secondary">{row.name}</span>
              </div>
              <span className="text-[9px] text-text-muted">{row.state}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-viewport headline block */}
      <div className="relative flex min-h-[calc(100dvh-5.5rem)] flex-col justify-center px-4 pb-10 pt-10 sm:px-6 sm:pb-14 sm:pt-12 md:min-h-[calc(100dvh-6rem)] lg:px-8">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
            backgroundSize: "48px 48px",
            maskImage: "linear-gradient(to bottom, black 0%, transparent 85%)",
          }}
        />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[min(80vw,640px)] w-[min(90vw,720px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.06] blur-[120px]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <motion.h1
              variants={slideLeft}
              initial="hidden"
              animate="visible"
              custom={0}
              className="luxury-title luxury-title-center text-balance text-3xl font-bold leading-[1.06] tracking-[-0.035em] text-white min-[400px]:text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.5rem]"
            >
              Distributed systems and managed infrastructure
              <br className="hidden sm:inline" />
              {" "}for <span className="text-accent">domain-led operators</span>
            </motion.h1>

            <motion.p
              variants={slideLeft}
              initial="hidden"
              animate="visible"
              custom={0.08}
              className="mx-auto mt-8 max-w-3xl text-pretty text-base leading-relaxed text-text-muted sm:mt-10 sm:text-lg md:text-xl md:leading-relaxed"
            >
              We design multi-region data planes, durable storage tiers, AI-ready
              compute, and hardened network edges — the same primitives large
              enterprises expect — and we can deliver them as part of how you
              acquire and activate premium domains.
            </motion.p>

            <motion.div
              variants={slideLeft}
              initial="hidden"
              animate="visible"
              custom={0.12}
              className="mx-auto mt-10 flex max-w-5xl flex-row flex-wrap items-center justify-center gap-x-6 gap-y-4 border-y border-white/[0.08] py-6 sm:mt-12 md:flex-nowrap md:justify-center md:gap-x-8"
            >
              <div className="flex flex-col items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-text-muted sm:text-xs">
                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
                  <span className="text-text-secondary">Multi-region</span>
                  <span className="hidden h-3 w-px bg-white/15 sm:block" aria-hidden />
                  <span className="text-text-secondary">Encrypted data plane</span>
                </div>
                <span className="text-text-secondary">Observable by default</span>
              </div>
              <div className="hidden h-10 w-px shrink-0 bg-white/10 md:block" aria-hidden />
              <a
                href="/find-a-domain"
                className="inline-flex min-h-[40px] shrink-0 items-center justify-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.03] px-4 py-2 text-[12px] font-medium text-text-secondary transition-all duration-200 hover:border-accent/30 hover:text-white active:scale-[0.98] sm:px-5 sm:text-[13px]"
              >
                Find a domain
                <svg className="h-3.5 w-3.5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 pb-14 pt-6 sm:px-6 sm:pb-16 sm:pt-8 md:pb-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
          <motion.div variants={slideLeft} initial="hidden" animate="visible" custom={0.18}>
            <span className="label-caps text-accent">Managed services</span>
            <h2 className="luxury-title mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              We run the stack so you can run the business on the domain
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-text-muted sm:text-base">
              Managed services means we own the day-to-day: patching, scaling,
              incident response, backup verification, and vendor coordination across
              the environments tied to your names. You get predictable operations
              and clear escalation paths instead of hiring a full platform org for
              every portfolio asset.
            </p>
            <ul className="mt-6 space-y-2.5 text-left text-sm text-text-secondary">
              {[
                "SLA-minded runbooks for databases, object storage, compute, and edge networking",
                "Tested failover paths and recovery drills — not shelf-ware documentation",
                "Unified metrics, logs, and alerts with named engineers on the pager",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/80" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="/managed-services"
              className="mt-8 inline-flex rounded-full border border-white/[0.12] bg-white/[0.03] px-6 py-3 text-sm font-medium text-text-secondary transition-all duration-200 hover:border-accent/25 hover:text-white"
            >
              Managed Services
            </a>
          </motion.div>
          <motion.div variants={slideRight} initial="hidden" animate="visible" custom={0.1}>
            <DashboardMockup />
          </motion.div>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2 md:gap-10">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate="visible"
            custom={0.22}
            className="text-center md:text-left"
          >
            <h3 className="text-lg font-semibold text-white sm:text-xl">
              Data &amp; compute
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              OLTP, analytics, object stores, streaming, GPUs, and orchestration
              — composed so each domain can support real products, not static
              placeholders.
            </p>
          </motion.div>

          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate="visible"
            custom={0.28}
            className="text-center md:text-right"
          >
            <h3 className="text-lg font-semibold text-white sm:text-xl">
              Edge &amp; identity
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              DNS, TLS, zero-trust access patterns, CDN and WAF policies —
              tuned so traffic and trust attach cleanly to the name you own.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
