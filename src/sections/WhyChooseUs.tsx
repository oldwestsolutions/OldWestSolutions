"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { whyUs } from "@/lib/constants";

const checkIcon = (
  <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

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

function CellSignalIcon({ className }: { className?: string }) {
  return (
    <svg className={`text-emerald-500/90 ${className ?? ""}`} viewBox="0 0 18 14" fill="currentColor" aria-hidden>
      <rect x="0" y="9" width="2.5" height="5" rx="0.5" />
      <rect x="4.5" y="6" width="2.5" height="8" rx="0.5" />
      <rect x="9" y="3.5" width="2.5" height="10.5" rx="0.5" />
      <rect x="13.5" y="0" width="2.5" height="14" rx="0.5" />
    </svg>
  );
}

function BatteryIcon({ className }: { className?: string }) {
  return (
    <svg className={`text-white/45 ${className ?? ""}`} viewBox="0 0 22 12" fill="none" aria-hidden>
      <rect x="0.5" y="2.5" width="17" height="7" rx="1.5" stroke="currentColor" strokeWidth="1" />
      <rect x="2" y="4" width="12" height="4" rx="0.5" fill="rgb(16 185 129 / 0.75)" />
      <path d="M19 5v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function MessagesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7.5 18.5 3 21l1.2-4.8A9.2 9.2 0 1 1 7.5 18.5Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailEnvelopeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

const flagshipBody =
  "OldWest.net is our flagship network for teams who treat the domain as the product — markets, compute, communications, search, and mail on one disciplined surface, with shared contracts, telemetry, and controls so finance and infrastructure stay on the same facts.";

function NetworkPhoneMockup() {
  return (
    <div className="mx-auto w-full max-w-[11.5rem] sm:max-w-[12.25rem]">
      <div
        className="relative rounded-[1.9rem] border-[5px] border-[#2e2e34] bg-gradient-to-b from-[#232328] via-[#18181c] to-[#121214] p-[5px] shadow-[0_24px_60px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.06)]"
        role="img"
        aria-label="Smartphone showing everyday status: cellular, Wi-Fi, battery, screen time, and apps"
      >
        {/* Side buttons (phone hardware) */}
        <div className="pointer-events-none absolute -left-[3px] top-[22%] h-9 w-[3px] rounded-l-sm bg-[#3a3a42]" aria-hidden />
        <div className="pointer-events-none absolute -left-[3px] top-[32%] h-14 w-[3px] rounded-l-sm bg-[#3a3a42]" aria-hidden />
        <div className="pointer-events-none absolute -right-[3px] top-[28%] h-16 w-[3px] rounded-r-sm bg-[#3a3a42]" aria-hidden />

        <div className="relative overflow-hidden rounded-[1.42rem] bg-[#0e0e10] ring-1 ring-white/[0.07]">
          {/* Status bar + dynamic island */}
          <div className="relative z-10 flex h-8 items-center justify-between px-3 pt-1">
            <span className="text-[9px] font-semibold tabular-nums text-white/80">9:41</span>
            <div
              className="absolute left-1/2 top-1.5 z-20 h-[11px] w-[4.25rem] -translate-x-1/2 rounded-full bg-black ring-1 ring-white/[0.12]"
              aria-hidden
            />
            <div className="flex items-center gap-1 pr-0.5 text-white/55">
              <CellSignalIcon className="h-2.5 w-[18px]" />
              <WifiIcon className="h-2.5 w-2.5" />
              <BatteryIcon className="h-2 w-[22px]" />
            </div>
          </div>

          {/* App-style header (Settings-style title) */}
          <div className="border-b border-white/[0.05] px-3 pb-2 pt-0.5">
            <div className="text-center text-[8px] font-semibold uppercase tracking-[0.16em] text-text-muted">
              Settings
            </div>
          </div>

          {/* Screen body */}
          <div className="space-y-2 bg-gradient-to-b from-[#151518] to-[#101012] px-2.5 py-2.5">
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { label: "Cellular", value: "5G", change: "On" },
                { label: "Wi-Fi", value: "Home", change: "Connected" },
                { label: "Battery", value: "84%", change: "Normal" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-white/[0.05] bg-white/[0.025] px-1.5 py-1.5"
                >
                  <div className="text-[6.5px] uppercase tracking-wider text-text-muted leading-tight">
                    {stat.label}
                  </div>
                  <div className="mt-0.5 text-[10px] font-semibold leading-none text-white">{stat.value}</div>
                  <div className="mt-0.5 text-[6.5px] text-emerald-400/90 leading-tight">{stat.change}</div>
                </div>
              ))}
            </div>

            <div className="rounded-lg border border-white/[0.05] bg-white/[0.025] p-2">
              <div className="mb-1.5 flex items-center justify-between gap-2">
                <span className="text-[6.5px] uppercase tracking-wider text-text-muted">
                  Screen Time (7 days)
                </span>
                <span className="flex items-center gap-0.5 text-[6.5px] font-medium text-accent/85">
                  Daily avg
                </span>
              </div>
              <div className="flex h-10 items-end gap-0.5">
                {[45, 62, 38, 72, 55, 80, 68, 85, 74, 90, 82, 95].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-[1px] bg-gradient-to-t from-accent/12 to-accent/38"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border border-white/[0.05] bg-white/[0.02]">
              {[
                { name: "Messages", state: "2 unread", Icon: MessagesIcon },
                { name: "Phone", state: "Recents", Icon: PhoneIcon },
                { name: "Mail", state: "Updated", Icon: MailEnvelopeIcon },
              ].map((row, i) => {
                const RowIcon = row.Icon;
                return (
                  <div
                    key={row.name}
                    className={`flex items-center justify-between gap-2 px-2 py-1.5 ${i > 0 ? "border-t border-white/[0.04]" : ""}`}
                  >
                    <div className="flex min-w-0 items-center gap-1.5">
                      <RowIcon className="h-2.5 w-2.5 shrink-0 text-accent/55" />
                      <div className="h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                      <span className="truncate text-[8.5px] text-text-secondary">{row.name}</span>
                    </div>
                    <span className="shrink-0 text-[7.5px] font-medium text-text-muted">{row.state}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Home indicator */}
          <div className="flex justify-center pb-2 pt-0.5">
            <div className="h-[3px] w-8 rounded-full bg-white/22" aria-hidden />
          </div>
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
              <NetworkPhoneMockup />
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={0.14}
              className="mt-5 rounded-[1.5rem] border border-white/[0.06] bg-[#17171a] p-6 shadow-card"
            >
              <p className="text-text-muted text-sm leading-relaxed">{flagshipBody}</p>
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
