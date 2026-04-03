"use client";

import { footerLinks } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="rounded-b-[1.75rem] border-t border-white/[0.06] bg-[#0c0c0e] sm:rounded-b-[2rem]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <a href="/" className="inline-flex items-center gap-2.5 mb-4 touch-manipulation rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
              <div className="flex flex-col leading-none text-left">
                <span className="text-white font-semibold text-[15px] tracking-tight">
                  OldWestSolutions
                </span>
                <span className="text-text-muted text-[10px] tracking-wider uppercase mt-0.5">
                  Digital Infrastructure
                </span>
              </div>
            </a>
            <p className="text-text-muted text-sm leading-relaxed max-w-sm mt-4">
              We design, build, and scale custom software for companies that
              need enterprise-grade systems. From architecture to deployment —
              infrastructure done right.
            </p>
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
