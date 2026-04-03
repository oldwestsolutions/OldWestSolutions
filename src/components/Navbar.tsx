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
      initial={{ y: -8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className={`sticky top-0 z-50 rounded-t-[1.75rem] sm:rounded-t-[2rem] pt-[env(safe-area-inset-top,0px)] transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/[0.06] bg-[#111113]/88 backdrop-blur-xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto grid h-[72px] min-h-[72px] max-w-7xl grid-cols-2 items-center gap-4 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        <a
          href="/"
          className="flex min-h-[44px] min-w-[44px] shrink-0 touch-manipulation items-center pl-1 -ml-1 justify-self-start"
          aria-label="OldWestSolutions home"
        >
          <div className="flex flex-col leading-none">
            <span className="text-[15px] font-semibold tracking-tight text-white">
              OldWestSolutions
            </span>
            <span className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-text-muted">
              Digital Infrastructure
            </span>
          </div>
        </a>

        <div className="hidden items-center justify-center gap-8 justify-self-center lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-text-muted transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center justify-end gap-3 justify-self-end">
          <a
            href="#contact"
            className="hidden rounded-full border border-white/[0.1] bg-white/[0.04] px-5 py-2.5 text-[13px] font-medium text-text-secondary shadow-sm transition-all duration-200 hover:border-accent/25 hover:text-white lg:inline-flex"
          >
            Book a Consultation
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex min-h-[44px] min-w-[44px] touch-manipulation items-center justify-center lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <div className="flex flex-col gap-[5px]">
              <span className={`block h-[1.5px] w-5 bg-white transition-all duration-300 ${mobileOpen ? "translate-y-[3.25px] rotate-45" : ""}`} />
              <span className={`block h-[1.5px] w-5 bg-white transition-all duration-300 ${mobileOpen ? "-translate-y-[3.25px] -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Trust strip — BloomFi / TARS cue */}
      <div className="border-b border-white/[0.04] px-4 pb-3 sm:px-6 lg:px-8">
        <p className="text-center text-[10px] font-medium uppercase tracking-[0.28em] text-text-muted">
          Enterprise delivery · Security-first · Full-cycle ownership
        </p>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="border-b border-white/[0.06] bg-[#111113]/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-white/[0.04] py-3 text-base text-text-muted transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 rounded-full bg-gradient-accent py-3 text-center text-sm font-semibold text-white shadow-glow-sm"
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
