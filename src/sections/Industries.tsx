"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { industries } from "@/lib/constants";

const industryIcons = [
  <svg key="comm" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" /></svg>,
  <svg key="defi" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  <svg key="cloud" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" /></svg>,
  <svg key="ai" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" /></svg>,
];

const securityCardCopy = {
  title: "Security, backup & compliance",
  description:
    "Proofpoint, Mimecast, Carbonite, Bitdefender, Acronis, Trend Micro, Check Point, managed detection and response, cloud firewall and VPN clients, penetration testing, and virus or phishing protection — quoted under the same security and backup categories you already use. Hardware when needed, provider specifics in free text, attachments optional to speed reconciliation.",
};

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
              OldWestSolutions sits at the intersection of domains, cloud, SaaS,
              and security procurement. The same disciplined quoting workflow
              applies whether your customer needs Microsoft 365 and Copilot,
              Google Workspace and Gemini, hyperscaler capacity, collaboration
              tools, backup and DR, or a full security stack — you submit once;
              we translate vendor catalogs and programs into pricing your team
              can stand behind.
            </p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={0.08}
              className="mt-10 flex gap-4 rounded-2xl border border-white/[0.06] bg-[#141416] p-4 sm:p-5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/[0.08] text-accent">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">{securityCardCopy.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{securityCardCopy.description}</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-7"
          >
            <p className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-text-muted lg:text-left">
              Same quote process — different vendors & SKUs
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {industries.map((industry, i) => (
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
