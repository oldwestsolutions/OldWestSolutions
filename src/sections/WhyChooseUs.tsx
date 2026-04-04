"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { whyUs } from "@/lib/constants";

const checkIcon = (
  <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

function NetworkIllustration() {
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
            { label: "Domains", value: "142", change: "Active" },
            { label: "Uptime", value: "99.98%", change: "Last 90 days" },
            { label: "Avg response", value: "38ms", change: "Global" },
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
            Network throughput (7 days)
          </div>
          <div className="flex h-16 items-end gap-1">
            {[45, 62, 38, 72, 55, 80, 68, 85, 74, 90, 82, 95].map((h, i) => (
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
            { name: "DNS resolution", state: "Healthy" },
            { name: "Edge network", state: "Active" },
            { name: "Mail delivery", state: "Delivering" },
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

export default function WhyChooseUs() {
  return (
    <section
      id="about"
      aria-labelledby="network-flagship-heading"
      className="relative border-t border-white/[0.06] bg-[#111113] pt-14 pb-8 md:pt-20 md:pb-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
          >
            <span className="label-caps text-accent">Network</span>
            <h2
              id="network-flagship-heading"
              className="luxury-title mt-3 text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-tight tracking-[-0.02em]"
            >
              Our <span className="text-accent">Flagship</span>
            </h2>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={0.1}
              className="mt-6"
            >
              <NetworkIllustration />
            </motion.div>

            <a
              href="/#contact"
              className="mt-6 inline-flex min-h-[44px] w-full items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-text-secondary transition-all duration-200 hover:border-accent/30 hover:text-white touch-manipulation sm:w-auto"
            >
              Join Our Network
            </a>
          </motion.div>

          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={0}
              className="mb-6 rounded-[1.5rem] border border-white/[0.06] bg-[#17171a] p-6 shadow-card"
            >
              <p className="text-text-muted text-sm leading-relaxed">
                OldWest.net is the flagship network we operate for teams who treat
                the domain as the product — markets, compute, communications,
                search, and mail on one disciplined surface. Where your policies
                allow, stablecoin and crypto-native flows plug into the same
                contracts, telemetry, and controls as conventional settlement, so
                you are not running parallel stacks every time the financial layer
                evolves.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid h-full min-h-0 gap-4 sm:grid-cols-2 lg:grid-cols-1 auto-rows-fr"
            >
              {whyUs.map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  custom={i * 0.08}
                  className="group flex h-full min-h-0 gap-4 rounded-[1.25rem] border border-white/[0.06] bg-[#17171a] p-5 shadow-card transition-all duration-300 hover:border-accent/20"
                >
                  {checkIcon}
                  <div>
                    <h3 className="text-white font-semibold text-[15px] mb-1 group-hover:text-accent transition-colors duration-200">
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
      </div>
    </section>
  );
}
