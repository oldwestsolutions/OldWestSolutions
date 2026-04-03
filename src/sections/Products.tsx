"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { products } from "@/lib/constants";
import SectionHeading from "@/components/SectionHeading";

export default function Products() {
  return (
    <section id="products" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Products"
          title="The OldWest Ecosystem"
          description="Purpose-built platforms powering distinct verticals across our infrastructure network."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              variants={fadeIn}
              custom={i * 0.1}
              className="group relative rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-card" />
              <div className="absolute inset-0 border border-white/[0.04] rounded-xl group-hover:border-accent/20 transition-all duration-300" />

              {/* Gradient edge accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/30 transition-all duration-500" />

              <div className="relative p-8 flex flex-col justify-between min-h-[200px]">
                <div>
                  <h3 className="text-text-primary font-semibold text-xl mb-3 group-hover:text-white transition-colors duration-200">
                    {product.name}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="mt-6">
                  <a
                    href={product.href}
                    className="inline-flex items-center gap-2 text-sm text-accent/80 hover:text-accent transition-colors duration-200 group/link"
                  >
                    View Project
                    <svg
                      className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform duration-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
