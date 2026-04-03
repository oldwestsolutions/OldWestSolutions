"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { industries } from "@/lib/constants";

const industryIcons = [
  <svg key="defi" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  <svg key="nft" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" /></svg>,
  <svg key="dao" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>,
  <svg key="ai" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 004.5 8.25v9a2.25 2.25 0 002.25 2.25z" /></svg>,
  <svg key="bridge" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>,
];

export default function Industries() {
  return (
    <section id="industries" className="relative py-24 md:py-32 bg-[#080808]">
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-accent text-[11px] font-mono font-semibold tracking-[0.25em] uppercase">
            {"// Verticals"}
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-tight tracking-[-0.02em]">
            Domain{" "}
            <span className="bg-gradient-to-r from-accent to-accent-violet bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="mt-4 text-text-muted text-lg leading-relaxed">
            Deep protocol knowledge across the verticals that define
            the decentralized economy.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {industries.map((industry, i) => (
            <motion.div
              key={industry.title}
              variants={fadeUp}
              custom={i * 0.08}
              className={`group rounded-2xl glass glass-border p-7 hover:border-accent/20 transition-all duration-500 ${
                i >= 3 ? "lg:col-span-1 lg:last:col-start-2" : ""
              }`}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/[0.06] border border-accent/[0.1] flex items-center justify-center text-accent mb-5 group-hover:border-accent/30 group-hover:shadow-glow-sm transition-all duration-500">
                {industryIcons[i]}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2.5 group-hover:text-accent transition-colors duration-300">
                {industry.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
