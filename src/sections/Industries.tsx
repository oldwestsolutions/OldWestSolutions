"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function Industries() {
  return (
    <section id="industries" className="relative overflow-hidden border-t border-white/[0.06] bg-[#0e0e10] py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.08),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          className="mx-auto max-w-3xl text-center"
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
        </motion.div>
      </div>
    </section>
  );
}
