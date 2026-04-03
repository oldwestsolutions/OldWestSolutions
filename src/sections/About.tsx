"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            className="text-center mb-12"
          >
            <span className="inline-block text-accent text-xs font-medium tracking-widest uppercase mb-4">
              About
            </span>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0.1}
            className="relative rounded-2xl bg-gradient-card border border-white/[0.04] p-8 md:p-12 lg:p-16"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

            <p className="text-xl md:text-2xl lg:text-3xl text-text-primary font-light leading-relaxed tracking-tight text-balance text-center">
              OldWestSolutions builds scalable systems designed for{" "}
              <span className="text-accent font-normal">control</span>,{" "}
              <span className="text-accent font-normal">efficiency</span>, and{" "}
              <span className="text-accent font-normal">long-term leverage</span>{" "}
              across industries.
            </p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/[0.04]">
              {[
                { value: "50+", label: "Systems Deployed" },
                { value: "12", label: "Global Regions" },
                { value: "99.99%", label: "Platform Uptime" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={0.2 + i * 0.1}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-semibold text-text-primary tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-text-muted text-sm mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
