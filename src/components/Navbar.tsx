"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/constants";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <motion.header
      initial={{ y: -8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="relative z-50 rounded-t-[1.75rem] border-b border-white/[0.06] bg-[#111113] pt-[env(safe-area-inset-top,0px)] sm:rounded-t-[2rem]"
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
              Distributed Systems
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

        <div className="flex items-center justify-end gap-2 justify-self-end">
          <div className="hidden items-center gap-2 lg:flex">
            <a
              href="/#contact"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.03] px-4 py-2 text-[12px] font-medium text-text-secondary transition-all duration-200 hover:border-accent/30 hover:text-white sm:px-5 sm:text-[13px]"
            >
              Book an appointment
            </a>
            <a
              href="/portal"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-accent px-4 py-2 text-[12px] font-semibold text-white shadow-glow transition-all duration-200 hover:bg-accent-deep active:scale-[0.98] sm:px-5 sm:text-[13px]"
            >
              Portal
            </a>
          </div>
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

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="border-b border-white/[0.06] bg-[#111113] lg:hidden"
          >
            <div className="flex flex-col gap-0.5 px-4 py-6 sm:px-6 sm:py-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-[48px] items-center border-b border-white/[0.04] py-2 text-base text-text-muted transition-colors duration-200 touch-manipulation hover:text-white active:bg-white/[0.03]"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-4 flex flex-col gap-3 sm:mt-5">
                <a
                  href="/#contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-[48px] items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.03] px-4 text-center text-sm font-medium text-text-secondary transition-colors touch-manipulation hover:border-accent/25 hover:text-white active:scale-[0.99]"
                >
                  Book an appointment
                </a>
                <a
                  href="/portal"
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-[48px] items-center justify-center rounded-full bg-accent px-4 text-center text-sm font-semibold text-white shadow-glow touch-manipulation active:scale-[0.99]"
                >
                  Portal
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
