"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { whyUs } from "@/lib/constants";

const checkIcon = (
  <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default function WhyChooseUs() {
  return (
    <section id="about" className="relative border-t border-white/[0.06] bg-[#111113] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
          >
            <span className="label-caps text-accent">Why OldWestSolutions</span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-tight">
              Built Different,{" "}
              <span className="text-accent">By Design</span>
            </h2>
            <p className="mt-4 text-text-muted text-lg leading-relaxed">
              We&apos;re not a dev shop. We&apos;re a systems engineering company
              that builds infrastructure designed for control, efficiency, and
              long-term leverage across industries.
            </p>

            <div className="mt-8 rounded-[1.5rem] border border-white/[0.06] bg-[#17171a] p-6 shadow-card">
              <p className="text-text-secondary text-sm leading-relaxed italic">
                &ldquo;OldWestSolutions delivered a system that cut our
                operational costs by 40% and scaled seamlessly from 1K to
                100K users. Their architecture decisions saved us months of
                rework.&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-bold text-xs">JK</span>
                </div>
                <div>
                  <div className="text-white text-sm font-medium">James K.</div>
                  <div className="text-text-muted text-xs">CTO, Fintech Startup</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Why us grid */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-4"
          >
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                custom={i * 0.08}
                className="group flex gap-4 rounded-[1.25rem] border border-white/[0.06] bg-[#17171a] p-5 shadow-card transition-all duration-300 hover:border-accent/20"
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
    </section>
  );
}
