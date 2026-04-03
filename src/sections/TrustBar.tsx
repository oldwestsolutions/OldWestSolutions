"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { stats } from "@/lib/constants";

export default function TrustBar() {
  return (
    <section className="relative py-12 sm:py-16 border-y border-white/[0.04] bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          custom={0}
          className="text-center mb-10"
        >
          <p className="text-text-muted text-sm tracking-wide">
            Trusted by startups and enterprise teams building serious infrastructure
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              custom={i * 0.08}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-text-muted text-sm mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
