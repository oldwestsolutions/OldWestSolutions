"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <motion.header
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1F1F1F]/95 backdrop-blur-lg border-b border-white/[0.06] shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
            <span className="text-white font-bold text-sm tracking-tight">OW</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white font-semibold text-[15px] tracking-tight">
              OldWestSolutions
            </span>
            <span className="text-text-muted text-[10px] tracking-wider uppercase mt-0.5">
              Digital Infrastructure
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-text-muted hover:text-white transition-colors duration-200 font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            className="text-[13px] px-5 py-2.5 rounded-lg bg-accent text-white font-medium hover:bg-accent/90 transition-all duration-200"
          >
            Book a Consultation
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden w-9 h-9 flex items-center justify-center"
          aria-label="Menu"
        >
          <div className="flex flex-col gap-[5px]">
            <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[3.25px]" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[3.25px]" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#1F1F1F]/98 backdrop-blur-xl border-t border-white/[0.06]"
          >
            <div className="px-6 py-8 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-text-muted hover:text-white text-base py-3 border-b border-white/[0.04] transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 text-center text-sm px-5 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent/90 transition-colors duration-200"
              >
                Book a Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
