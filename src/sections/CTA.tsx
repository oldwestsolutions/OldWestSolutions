"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { infrastructureVendors } from "@/lib/constants";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative border-t border-white/[0.06] bg-[#141416] pb-14 pt-10 md:pb-16 md:pt-12"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[min(90vw,640px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.07] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Vendor trust band */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          className="mx-auto max-w-4xl border-b border-white/[0.06] py-10 md:py-12"
        >
          <p className="text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-text-muted">
            Trusted technology partners
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-7 gap-y-3.5 sm:gap-x-9">
            {infrastructureVendors.map((name) => (
              <span
                key={name}
                className="text-[11px] font-semibold tracking-wide text-white/40 transition-colors hover:text-white/70 sm:text-xs"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Two-column CTA */}
        <div className="mx-auto grid max-w-6xl gap-8 pt-7 md:grid-cols-2 md:items-start md:gap-10 md:pt-9">
          {/* Left — messaging */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0.06}
          >
            <span className="label-caps text-accent">Next step</span>
            <h2 className="luxury-title mt-4 text-3xl font-bold leading-tight tracking-[-0.02em] text-white md:text-4xl">
              Deploy your infrastructure
            </h2>
            <p className="mt-5 text-base leading-relaxed text-text-muted sm:text-lg">
              Tell us what you need — a premium domain, managed databases, AI-ready
              compute, or full-stack security — and we&apos;ll scope a distributed
              environment that fits your team, your budget, and your compliance
              requirements.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-text-secondary">
              {[
                "Architecture review and capacity planning at no cost",
                "Multi-cloud or single-provider — your call, our execution",
                "Environments delivered with monitoring, backups, and runbooks from day one",
                "Month-to-month engagement — scale up, scale down, or walk away",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right — actions */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0.12}
            className="rounded-[1.5rem] border border-white/[0.06] bg-[#1a1a1e] p-6 sm:p-8"
          >
            <h3 className="text-lg font-semibold text-white">Start a conversation</h3>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              No sales deck, no commitment. We&apos;ll listen to what you&apos;re
              building, recommend the right stack, and give you a clear scope
              before any work begins.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href="#"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-all duration-200 hover:bg-accent-deep active:scale-[0.98]"
              >
                Schedule a consultation
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/managed-services"
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-text-secondary transition-all duration-200 hover:border-accent/25 hover:text-white active:scale-[0.98]"
              >
                Explore managed services
              </a>
            </div>

            <div className="mt-6 space-y-2.5 border-t border-white/[0.06] pt-5">
              {[
                "No commitment required",
                "Response within 24 hours",
                "NDA available on request",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-text-muted">
                  <svg className="h-3.5 w-3.5 shrink-0 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
