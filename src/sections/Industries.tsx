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
          <span className="label-caps text-accent">Products</span>
          <h2 className="luxury-title mt-3 text-3xl font-bold leading-[1.12] tracking-[-0.02em] text-white md:text-4xl lg:text-[2.5rem]">
            One company, five product lines
          </h2>
          <p className="mt-5 text-base leading-relaxed text-text-muted md:text-lg">
            OldWestSolutions builds and operates a connected portfolio: a trading
            venue on General.exchange, decentralized compute on Lubbock.Cloud,
            programmable voice and messaging through Teleport Services, discovery
            and presence on Old West, and high-deliverability email on
            FirstClassMail. Together they cover markets, cloud, communications,
            and the domains that tie brands to infrastructure.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
