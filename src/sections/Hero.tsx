"use client";

import { motion } from "framer-motion";
import { slideLeft, slideRight } from "@/lib/animations";

/** Public-company platforms and vendors we design and operate on top of */
const infrastructureVendors = [
  "Amazon Web Services",
  "Microsoft Azure",
  "Google Cloud",
  "Oracle Cloud",
  "IBM Cloud",
  "Cloudflare",
  "Akamai",
  "Snowflake",
  "MongoDB",
  "Datadog",
  "Palo Alto Networks",
  "CrowdStrike",
];

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
      <div className="relative flex min-h-[calc(100dvh-5.5rem)] flex-col justify-center px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-12 md:min-h-[calc(100dvh-6rem)] lg:px-8">
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
              className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-text-muted sm:mt-10 sm:text-lg md:text-xl md:leading-relaxed"
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
              className="mx-auto mt-10 flex max-w-xl flex-wrap items-center justify-center gap-x-8 gap-y-3 border-y border-white/[0.08] py-6 text-[11px] font-medium uppercase tracking-[0.22em] text-text-muted sm:mt-12 sm:text-xs"
            >
              <span className="text-text-secondary">Multi-region</span>
              <span className="hidden h-3 w-px bg-white/15 sm:block" aria-hidden />
              <span className="text-text-secondary">Encrypted data plane</span>
              <span className="hidden h-3 w-px bg-white/15 sm:block" aria-hidden />
              <span className="text-text-secondary">Observable by default</span>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 pb-16 sm:px-6 sm:pb-20 md:pb-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <motion.div variants={slideLeft} initial="hidden" animate="visible" custom={0.18}>
            <span className="label-caps text-accent">Control plane</span>
            <h2 className="luxury-title mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Depth you would expect from an internal platform team
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-text-muted sm:text-base">
              Capacity planning, change management, incident response, and
              cost guardrails — articulated as architecture decisions, not
              ad-hoc tickets. Whether you need a single high-trust workload or a
              portfolio-wide standard, we align regions, accounts, and
              environments so operations stay legible as you scale.
            </p>
            <ul className="mt-6 space-y-2.5 text-left text-sm text-text-secondary">
              {[
                "Reference designs for regulated and high-availability patterns",
                "Infrastructure-as-code with reviewable, repeatable environments",
                "Backup, failover, and chaos-ready recovery objectives",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/80" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#services"
              className="mt-8 inline-flex rounded-full border border-white/[0.12] bg-white/[0.03] px-6 py-3 text-sm font-medium text-text-secondary transition-all duration-200 hover:border-accent/25 hover:text-white"
            >
              Review service depth
            </a>
          </motion.div>
          <motion.div variants={slideRight} initial="hidden" animate="visible" custom={0.1}>
            <DashboardMockup />
          </motion.div>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-8 md:grid-cols-3 md:items-center md:gap-10">
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
            custom={0.26}
            className="flex justify-center"
          >
            <a
              href="#contact"
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-glow transition-all duration-200 hover:bg-accent-deep active:scale-[0.98]"
            >
              Engage on a domain
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
            <h3 className="text-lg font-semibold text-white sm:text-xl">
              Edge &amp; identity
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              DNS, TLS, zero-trust access patterns, CDN and WAF policies —
              tuned so traffic and trust attach cleanly to the name you own.
            </p>
          </motion.div>
        </div>

        {/* Post-acquisition + vendor stack — tight grouping */}
        <div className="mx-auto mt-16 max-w-5xl border-t border-white/[0.06] pt-10">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            custom={0}
            className="text-center"
          >
            <span className="label-caps text-accent">Post-acquisition</span>
            <h2 className="luxury-title luxury-title-center mt-3 text-balance text-2xl font-bold leading-tight tracking-[-0.02em] text-white sm:text-3xl md:text-4xl">
              Infrastructure you can attach
              <br />
              to every domain sale
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
              When we broker a domain, we can carry the full stack: data stores,
              durable object tiers, AI-ready compute, container orchestration, and
              edge security — designed like an enterprise program, not a single
              shared host.
            </p>
          </motion.div>

          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            custom={0.06}
            className="mt-8 border-t border-white/[0.05] pt-8"
          >
            <p className="text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-text-muted">
              Built on the same public-company stacks the Fortune 500 standardizes on
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-center text-xs leading-relaxed text-text-muted/90">
              We architect and operate on hyperscaler and category-leading vendor
              platforms — not proprietary black boxes — so your workloads remain
              portable, auditable, and finance-friendly.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:gap-x-10">
              {infrastructureVendors.map((name) => (
                <span
                  key={name}
                  className="text-[11px] font-semibold tracking-wide text-white/45 transition-colors hover:text-white/75 sm:text-xs"
                >
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
