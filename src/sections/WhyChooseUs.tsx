"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { whyUs } from "@/lib/constants";

const checkIcon = (
  <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

function TvIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 20h12M9 4v2m6-2v2M5 8h14v10a2 2 0 01-2 2H7a2 2 0 01-2-2V8z" />
    </svg>
  );
}

function WifiIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

const flagshipBody =
  "OldWest.net is the flagship network we operate for teams who treat the domain as the product — markets, compute, communications, search, and mail on one disciplined surface. Where your policies allow, stablecoin and crypto-native flows plug into the same contracts, telemetry, and controls as conventional settlement, so you are not running parallel stacks every time the financial layer evolves.";

function NetworkIllustration() {
  return (
    <div className="mx-auto w-full max-w-[16.5rem] sm:max-w-[17.5rem]">
      <div
        className="relative overflow-hidden rounded-xl border-[3px] border-[#2a2a2e] bg-[#0c0c0e] shadow-[0_0_0_1px_rgba(255,255,255,0.04),inset_0_1px_0_rgba(255,255,255,0.06)] sm:rounded-2xl"
        role="img"
        aria-label="TV, internet, and voice service preview"
      >
        {/* Monitor / TV bezel bar */}
        <div className="flex items-center justify-between gap-2 border-b border-white/[0.06] bg-[#121214] px-2.5 py-1.5">
          <div className="flex items-center gap-2 min-w-0">
            <div className="flex shrink-0 items-center gap-1 text-accent/85">
              <TvIcon className="h-3 w-3" />
              <WifiIcon className="h-3 w-3" />
              <PhoneIcon className="h-3 w-3" />
            </div>
            <span className="truncate text-[7px] font-semibold uppercase tracking-[0.14em] text-text-muted">
              TV · Internet · Voice
            </span>
          </div>
          <div className="flex shrink-0 gap-1">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500/70" title="Live" />
            <div className="h-1.5 w-1.5 rounded-full bg-white/12" />
            <div className="h-1.5 w-1.5 rounded-full bg-white/12" />
          </div>
        </div>

        {/* “Screen” content */}
        <div className="space-y-2 bg-gradient-to-b from-[#151518] to-[#111113] p-2.5">
          <div className="grid grid-cols-3 gap-1.5">
            {[
              { label: "Domains", value: "142", change: "Active" },
              { label: "Uptime", value: "99.98%", change: "Last 90 days" },
              { label: "Avg response", value: "38ms", change: "Global" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-white/[0.05] bg-white/[0.02] px-1.5 py-1.5"
              >
                <div className="text-[7px] uppercase tracking-wider text-text-muted leading-tight">
                  {stat.label}
                </div>
                <div className="mt-0.5 text-[11px] font-semibold leading-none text-white">
                  {stat.value}
                </div>
                <div className="mt-0.5 text-[7px] text-emerald-400/90 leading-tight">{stat.change}</div>
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-white/[0.05] bg-white/[0.02] p-2">
            <div className="mb-1.5 flex items-center justify-between gap-2">
              <span className="text-[7px] uppercase tracking-wider text-text-muted">
                Network throughput (7 days)
              </span>
              <span className="flex items-center gap-0.5 text-[7px] text-accent/80">
                <WifiIcon className="h-2.5 w-2.5" />
                Fiber
              </span>
            </div>
            <div className="flex h-11 items-end gap-0.5">
              {[45, 62, 38, 72, 55, 80, 68, 85, 74, 90, 82, 95].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-[1px] bg-gradient-to-t from-accent/15 to-accent/40"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-white/[0.05]">
            {[
              { name: "DNS resolution", state: "Healthy", Icon: WifiIcon },
              { name: "Edge network", state: "Active", Icon: TvIcon },
              { name: "Mail delivery", state: "Delivering", Icon: PhoneIcon },
            ].map((row, i) => {
              const RowIcon = row.Icon;
              return (
              <div
                key={row.name}
                className={`flex items-center justify-between gap-2 px-2 py-1.5 ${i > 0 ? "border-t border-white/[0.04]" : ""}`}
              >
                <div className="flex min-w-0 items-center gap-1.5">
                  <RowIcon className="h-2.5 w-2.5 shrink-0 text-accent/50" />
                  <div className="h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                  <span className="truncate text-[9px] text-text-secondary">{row.name}</span>
                </div>
                <span className="shrink-0 text-[8px] text-text-muted">{row.state}</span>
              </div>
              );
            })}
          </div>
        </div>

        {/* Flagship copy directly under the panel */}
        <div className="border-t border-white/[0.06] bg-[#121214]/95 px-2.5 py-2.5">
          <p className="text-[10px] leading-relaxed text-text-muted sm:text-[11px]">{flagshipBody}</p>
        </div>

        {/* Simple stand hint */}
        <div className="flex justify-center pb-1.5 pt-0.5">
          <div className="h-1 w-10 rounded-b-sm bg-[#2a2a2e]" aria-hidden />
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
              className="mt-5"
            >
              <NetworkIllustration />
            </motion.div>

            <a
              href="/#contact"
              className="mt-5 inline-flex min-h-[44px] w-full items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-text-secondary transition-all duration-200 hover:border-accent/30 hover:text-white touch-manipulation sm:w-auto"
            >
              Join Our Network
            </a>
          </motion.div>

          <div>
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
