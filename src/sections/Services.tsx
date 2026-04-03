"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { services } from "@/lib/constants";

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

function ServiceCard({
  service,
  featured = false,
  fullWidth = false,
  delay,
}: {
  service: (typeof services)[number];
  featured?: boolean;
  fullWidth?: boolean;
  delay: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      custom={delay}
      className={`group relative cursor-pointer overflow-hidden rounded-[1.5rem] border border-white/[0.06] bg-[#1a1a1e] p-7 shadow-card transition-all duration-300 hover:border-accent/25 hover:shadow-glow-sm ${
        featured ? "min-h-[280px] md:row-span-2" : ""
      } ${fullWidth ? "md:col-span-3" : ""}`}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/[0.07] blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/15 bg-accent/[0.08] text-accent transition-colors duration-300 group-hover:bg-accent/[0.12]">
          {iconMap[service.icon]}
        </div>
        <h3 className="mb-2.5 text-lg font-semibold text-white transition-colors duration-300 group-hover:text-accent">
          {service.title}
        </h3>
        <p className={`text-sm leading-relaxed text-text-muted ${featured ? "max-w-md" : ""}`}>
          {service.description}
        </p>
        <div className="mt-5 inline-flex translate-y-1 items-center gap-1.5 text-xs font-medium text-accent opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          Learn more
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const [featured, ...rest] = services;
  const quad = rest.slice(0, 4);
  const wide = rest[4];

  return (
    <section id="services" className="relative border-t border-white/[0.06] bg-[#111113] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          className="mx-auto mb-14 max-w-2xl text-center md:mb-16"
        >
          <span className="label-caps text-accent">Ecosystem</span>
          <h2 className="luxury-title luxury-title-center mt-4 text-balance text-3xl font-bold leading-tight tracking-[-0.02em] text-white md:text-4xl lg:text-[44px]">
            Platforms and services
            <br />
            across the infrastructure stack
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            From domain brokerage and server management to decentralized compute
            and programmable communications — every service connected under one
            ecosystem.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          <ServiceCard service={featured} featured delay={0} />
          {quad.map((service, i) => (
            <ServiceCard key={service.title} service={service} delay={(i + 1) * 0.06} />
          ))}
          {wide ? (
            <ServiceCard service={wide} fullWidth delay={0.35} />
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
