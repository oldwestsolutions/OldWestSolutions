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
      transition={{ duration: 0.5 }}
      className={`fixed top-0 inset-x-0 z-50 pt-[env(safe-area-inset-top,0px)] transition-all duration-500 ${
        scrolled
          ? "glass glass-border shadow-lg shadow-black/40"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[72px] h-[72px] flex items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-3 shrink-0 min-h-[44px] min-w-[44px] -ml-1 pl-1 touch-manipulation"
          aria-label="OldWestSolutions home"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent to-accent-violet flex items-center justify-center">
            <span className="text-black font-bold text-sm tracking-tight font-mono">OW</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white font-semibold text-[15px] tracking-tight">
              OldWestSolutions
            </span>
            <span className="text-text-muted text-[10px] tracking-[0.2em] uppercase mt-0.5 font-mono">
              web3 infrastructure
            </span>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-text-muted hover:text-accent transition-colors duration-300 font-mono tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            className="text-[13px] px-5 py-2.5 rounded-lg bg-accent/10 border border-accent/20 text-accent font-mono font-medium hover:bg-accent/20 hover:border-accent/40 transition-all duration-300"
          >
            Start Protocol
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <div className="flex flex-col gap-[5px]">
            <span className={`block w-5 h-[1.5px] bg-accent transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[3.25px]" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-accent transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[3.25px]" : ""}`} />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden glass border-t border-white/[0.06]"
          >
            <div className="px-6 py-8 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-text-muted hover:text-accent text-base py-3 border-b border-white/[0.04] transition-colors duration-300 font-mono"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 text-center text-sm px-5 py-3 rounded-lg bg-accent/10 border border-accent/20 text-accent font-mono font-medium"
              >
                Start Protocol
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
