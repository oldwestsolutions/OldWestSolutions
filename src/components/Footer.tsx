"use client";

import { footerLinks } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="rounded-b-[1.75rem] border-t border-white/[0.06] bg-[#0c0c0e] sm:rounded-b-[2rem]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-12 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4">
            <a href="/" className="inline-flex items-center gap-2.5 mb-4 touch-manipulation rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
              <div className="flex flex-col leading-none text-left">
                <span className="text-white font-semibold text-[15px] tracking-tight">
                  OldWestSolutions
                </span>
                <span className="text-text-muted text-[10px] tracking-wider uppercase mt-0.5">
                  Distributed Systems
                </span>
              </div>
            </a>
            <p className="text-text-muted text-sm leading-relaxed max-w-sm mt-4">
              Distributed systems and managed infrastructure for domain
              operators — databases, storage, AI-ready compute, and full-stack
              delivery on major public-cloud platforms.
            </p>
            <div className="mt-5 flex items-center gap-2 text-text-muted">
              <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span className="text-xs">Plano, Texas</span>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title} className="md:col-span-2">
              <h4 className="text-white text-xs font-semibold tracking-wider uppercase mb-4">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-text-muted text-sm hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            &copy; {new Date().getFullYear()} OldWestSolutions. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-text-muted text-xs hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-text-muted text-xs hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
