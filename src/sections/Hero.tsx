"use client";

import { motion } from "framer-motion";
import { slideLeft, slideRight } from "@/lib/animations";
import HeroStarfield from "@/components/HeroStarfield";

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
            { label: "Visitors", value: "24.7k", change: "+12.3% this month" },
            { label: "Page views", value: "89.1k", change: "+8.5% this month" },
            { label: "Bounce rate", value: "32%", change: "Below average" },
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
            Traffic over time (last 30 days)
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
            { name: "Website", state: "Online" },
            { name: "API", state: "Healthy" },
            { name: "CDN / Security", state: "Protected" },
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
      <HeroStarfield />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#05070dcc] via-[#0a0d14e6] to-[#111113]" />
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
              className="luxury-title luxury-title-center text-balance font-extrabold tracking-[-0.04em] text-white"
            >
              <span className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.32em] text-text-muted sm:mb-5 sm:text-[11px]">
                Distributed infrastructure
              </span>
              <span className="block text-3xl leading-[1.08] min-[400px]:text-4xl sm:text-5xl sm:leading-[1.06] lg:text-[3.25rem] xl:text-[3.5rem]">
                <span className="text-white">Big Business</span>
                <br className="hidden sm:inline" />
                <span className="text-white/92">
                  {" "}
                  <span className="text-accent">Data Power</span>
                </span>
              </span>
            </motion.h1>

            <motion.p
              variants={slideLeft}
              initial="hidden"
              animate="visible"
              custom={0.08}
              className="mx-auto mt-8 max-w-3xl text-pretty text-base font-medium leading-relaxed text-text-secondary sm:mt-10 sm:text-lg md:text-xl md:leading-relaxed"
            >
              We set up and take care of all the tech your business needs —
              servers in many places, safe storage, smart computing, and
              security — so it all works together behind your website. One
              team, one plan, everything handled.
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
              Build your app — we handle everything else
            </h2>
            <p className="mt-4 text-sm font-medium leading-relaxed text-text-muted sm:text-base">
              Send your domain our way and we give you all the tools to build
              a real product — the servers, the data, the email, and the
              security. You work on your app and your customers. We take care
              of the rest so your website actually does something.
            </p>
            <ul className="mt-6 space-y-2.5 text-left text-sm font-medium text-text-secondary">
              {[
                "Building blocks you can mix and match — databases, file storage, apps, and smart tools — all set up the right way from the start",
                "Ready-made setups that work the same every time, not one-off guesswork",
                "One place to see how everything is running — with real people to call when something goes wrong",
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
              Data &amp; computing
            </h3>
            <p className="mt-2 text-sm font-medium leading-relaxed text-text-muted">
              Databases, file storage, smart computing, and all the behind-the-scenes
              power your app needs — so when people visit your site, it actually works.
            </p>
          </motion.div>

          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate="visible"
            custom={0.28}
            className="text-center md:text-left"
          >
            <h3 className="text-lg font-semibold text-white sm:text-xl">
              Safety &amp; speed
            </h3>
            <p className="mt-2 text-sm font-medium leading-relaxed text-text-muted">
              We keep your site safe, fast, and private — blocking bad traffic,
              checking who gets in, and making sure pages load quickly for
              everyone, everywhere.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
