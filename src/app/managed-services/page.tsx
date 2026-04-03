"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, slideLeft } from "@/lib/animations";
import { services } from "@/lib/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const iconMap: Record<string, JSX.Element> = {
  code: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  ),
  cpu: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 004.5 8.25v9a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
  blocks: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    </svg>
  ),
  trending: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  ),
  spark: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  ),
  cloud: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
    </svg>
  ),
  database: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
  ),
};

const whatsIncluded = [
  { label: "24 / 7 monitoring & alerting", detail: "We watch your infrastructure around the clock so you don't have to staff a NOC." },
  { label: "Automated backups & recovery", detail: "Point-in-time recovery, cross-region snapshots, and tested restore runbooks." },
  { label: "Security hardening", detail: "Patching, WAF rules, access controls, and audit logging kept current continuously." },
  { label: "Cost governance", detail: "Right-sizing, reserved-capacity planning, and monthly spend reviews to eliminate waste." },
  { label: "Change management", detail: "Infrastructure-as-code reviews, staged rollouts, and rollback plans for every change." },
  { label: "Dedicated support channel", detail: "Direct access to the engineers operating your environment — not a ticket queue." },
];

export default function ManagedServicesPage() {
  return (
    <div className="min-h-screen bg-[#080809] px-2.5 pb-2.5 pt-2.5 sm:px-4 sm:pb-4 sm:pt-4 md:px-5 md:pb-5 md:pt-5">
      <div className="relative mx-auto max-w-[1400px] overflow-x-clip rounded-[1.75rem] border border-white/[0.07] bg-[#111113] shadow-shell sm:rounded-[2rem]">
        <Navbar />
        <main id="main-content" className="bg-[#111113]">
          {/* Header */}
          <section className="relative overflow-hidden border-b border-white/[0.06] py-20 sm:py-28 md:py-32">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[min(90vw,640px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.06] blur-[120px]" />
            <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
              <motion.div variants={slideLeft} initial="hidden" animate="visible" custom={0}>
                <span className="label-caps text-accent">Managed Services</span>
              </motion.div>
              <motion.h1
                variants={slideLeft}
                initial="hidden"
                animate="visible"
                custom={0.06}
                className="luxury-title luxury-title-center mt-4 text-balance text-3xl font-bold leading-tight tracking-[-0.02em] text-white md:text-4xl lg:text-[52px]"
              >
                Infrastructure Services
              </motion.h1>
              <motion.p
                variants={slideLeft}
                initial="hidden"
                animate="visible"
                custom={0.12}
                className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg md:text-xl"
              >
                You focus on your product and your customers. We handle the
                databases, storage, compute, networking, and security that keep
                everything running — fully managed, always monitored, and built
                on platforms your team already trusts.
              </motion.p>
            </div>
          </section>

          {/* Service cards */}
          <section className="relative border-b border-white/[0.06] bg-[#111113] py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3"
              >
                {services.map((service, i) => (
                  <motion.div
                    key={service.title}
                    variants={fadeUp}
                    custom={i * 0.05}
                    className="group relative flex min-h-[240px] flex-col overflow-hidden rounded-[1.5rem] border border-white/[0.06] bg-[#1a1a1e] p-6 shadow-card transition-all duration-300 hover:border-accent/25 hover:shadow-glow-sm sm:min-h-[260px] sm:p-7"
                  >
                    <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/[0.07] blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative flex flex-1 flex-col">
                      <div className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-accent/15 bg-accent/[0.08] text-accent transition-colors duration-300 group-hover:bg-accent/[0.12]">
                        {iconMap[service.icon]}
                      </div>
                      <h3 className="mb-2.5 text-lg font-semibold text-white transition-colors duration-300 group-hover:text-accent">
                        {service.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-text-muted">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* What's included */}
          <section className="relative bg-[#0e0e10] py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                custom={0}
                className="mx-auto mb-12 max-w-2xl text-center md:mb-16"
              >
                <span className="label-caps text-accent">Included with every engagement</span>
                <h2 className="luxury-title luxury-title-center mt-3 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                  What you get beyond the stack
                </h2>
                <p className="mt-4 text-base leading-relaxed text-text-muted sm:text-lg">
                  Infrastructure is only half the picture. Operational discipline
                  is what keeps it running without surprises.
                </p>
              </motion.div>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
              >
                {whatsIncluded.map((item, i) => (
                  <motion.div
                    key={item.label}
                    variants={fadeUp}
                    custom={i * 0.04}
                    className="rounded-2xl border border-white/[0.06] bg-[#161618] p-5 sm:p-6"
                  >
                    <div className="mb-3 flex items-center gap-2.5">
                      <svg className="h-4 w-4 shrink-0 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <h3 className="text-sm font-semibold text-white">{item.label}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-text-muted">{item.detail}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* CTA */}
          <section className="relative border-t border-white/[0.06] bg-[#111113] py-16 md:py-20">
            <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={0}
                className="luxury-title luxury-title-center text-2xl font-bold text-white sm:text-3xl md:text-4xl"
              >
                Ready to hand off your infrastructure?
              </motion.h2>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={0.08}
                className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg"
              >
                Tell us what you&apos;re running — or what you want to run — and
                we&apos;ll scope a managed environment that fits.
              </motion.p>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={0.14}
                className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
              >
                <a
                  href="/#contact"
                  className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-white shadow-glow transition-all duration-200 hover:bg-accent-deep active:scale-[0.98] sm:w-auto"
                >
                  Schedule a consultation
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="/"
                  className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.03] px-8 py-4 text-sm font-medium text-text-secondary transition-all duration-200 hover:border-accent/25 hover:text-white active:scale-[0.98] sm:w-auto"
                >
                  Back to home
                </a>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
