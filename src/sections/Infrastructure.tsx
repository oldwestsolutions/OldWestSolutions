"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { infrastructure } from "@/lib/constants";
import SectionHeading from "@/components/SectionHeading";

export default function Infrastructure() {
  return (
    <section id="infrastructure" className="relative py-24 md:py-32 bg-[#181818]">
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Infrastructure"
          title="System Architecture"
          description="Modular, resilient infrastructure designed for enterprise-grade workloads."
        />

        {/* Architecture diagram visualization */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative"
        >
          {/* Central hub */}
          <div className="flex flex-col items-center mb-12">
            <motion.div
              variants={fadeIn}
              custom={0}
              className="relative w-48 h-48 rounded-2xl bg-gradient-card border border-white/[0.06] flex items-center justify-center"
            >
              <div className="absolute inset-0 rounded-2xl bg-accent/[0.03]" />
              <div className="text-center relative z-10">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
                  </svg>
                </div>
                <span className="text-text-primary font-medium text-sm">Core Platform</span>
                <span className="block text-text-muted text-xs mt-1">OldWest Engine</span>
              </div>

              <div className="absolute -inset-px rounded-2xl animate-pulse-glow" />
            </motion.div>
          </div>

          {/* Connection lines (visible on md+) */}
          <div className="hidden md:block absolute top-48 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-accent/20 to-transparent" />

          {/* Infrastructure nodes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {infrastructure.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeIn}
                custom={i * 0.1 + 0.2}
                className="group relative rounded-xl bg-gradient-card border border-white/[0.04] p-6 hover:border-accent/20 transition-all duration-300 hover:shadow-glow-sm"
              >
                {/* Connection dot */}
                <div className="hidden md:block absolute -top-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent/40" />

                <div className="flex items-start gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-accent/40 mt-2 shrink-0 group-hover:bg-accent transition-colors duration-300" />
                  <h3 className="text-text-primary font-medium">
                    {item.title}
                  </h3>
                </div>

                <p className="text-text-muted text-sm leading-relaxed pl-5">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom status bar */}
          <motion.div
            variants={fadeIn}
            custom={0.6}
            className="mt-8 rounded-xl bg-gradient-card border border-white/[0.04] p-4 flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-text-muted text-sm">All systems operational</span>
            </div>
            <div className="flex items-center gap-6">
              {[
                { label: "Uptime", value: "99.99%" },
                { label: "Regions", value: "12" },
                { label: "Response", value: "<50ms" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-text-primary text-sm font-medium">{stat.value}</div>
                  <div className="text-text-muted text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
