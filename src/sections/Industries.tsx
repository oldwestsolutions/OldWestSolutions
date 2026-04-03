"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { industries } from "@/lib/constants";

const industryIcons = [
  <svg key="comm" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" /></svg>,
  <svg key="defi" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  <svg key="cloud" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" /></svg>,
  <svg key="ai" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" /></svg>,
  <svg key="ent" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016A3.001 3.001 0 0021 9.349m-18 0a2.999 2.999 0 00.621-1.827L4.5 4.5h15l.879 3.022A3.001 3.001 0 0021 9.35" /></svg>,
];

const flowSteps = [
  { step: "01", title: "Edge & ingress", detail: "DNS, TLS, WAF, and authenticated APIs terminate risk before it reaches your apps." },
  { step: "02", title: "Regional data plane", detail: "Stateful tiers replicate across zones; stateless tiers scale on demand behind clear contracts." },
  { step: "03", title: "Control & observability", detail: "One plane for deploys, policies, logs, metrics, and traces — no shadow consoles." },
];

export default function Industries() {
  return (
    <section id="industries" className="relative overflow-hidden border-t border-white/[0.06] bg-[#0e0e10] py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.08),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14 lg:items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            className="lg:col-span-5"
          >
            <span className="label-caps text-accent">How it works</span>
            <h2 className="luxury-title mt-3 text-3xl font-bold leading-[1.12] tracking-[-0.02em] text-white md:text-4xl lg:text-[2.5rem]">
              Systems across verticals
            </h2>
            <p className="mt-5 text-base leading-relaxed text-text-muted md:text-lg">
              Our distributed systems repeat the same pattern everywhere: traffic
              lands on a hardened edge, work runs in regional cells with explicit
              failure domains, and a control plane keeps deploys and telemetry
              consistent. What changes per vertical is how strict the boundaries
              are and which data stores sit in the path — not whether the system
              is &ldquo;distributed&rdquo; in name only.
            </p>

            <div className="mt-10 space-y-4">
              {flowSteps.map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 rounded-2xl border border-white/[0.06] bg-[#141416] p-4 sm:p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/[0.08] text-xs font-bold text-accent">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-text-muted">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-7"
          >
            <p className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-text-muted lg:text-left">
              Same architecture — different constraints
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {industries.slice(0, 4).map((industry, i) => (
                <motion.article
                  key={industry.title}
                  variants={fadeUp}
                  custom={i * 0.06}
                  className="group flex flex-col rounded-[1.35rem] border border-white/[0.07] bg-[#161618] p-6 shadow-card transition-all duration-300 hover:border-accent/25 hover:bg-[#1a1a1d]"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-accent/15 bg-accent/[0.07] text-accent transition-colors group-hover:bg-accent/[0.11]">
                    {industryIcons[i]}
                  </div>
                  <h3 className="text-base font-semibold text-white group-hover:text-accent">
                    {industry.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-text-muted">
                    {industry.description}
                  </p>
                </motion.article>
              ))}
            </div>
            <motion.article
              variants={fadeUp}
              custom={0.28}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="group mt-4 rounded-[1.35rem] border border-white/[0.07] bg-gradient-to-br from-[#161618] to-[#121214] p-6 sm:p-7 shadow-card transition-all duration-300 hover:border-accent/25"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/15 bg-accent/[0.07] text-accent">
                  {industryIcons[4]}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white group-hover:text-accent sm:text-lg">
                    {industries[4].title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-text-muted sm:text-[15px]">
                    {industries[4].description}
                  </p>
                </div>
              </div>
            </motion.article>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
