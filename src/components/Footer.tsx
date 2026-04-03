"use client";

import { footerLinks } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <a
              href="/"
              className="inline-flex items-center gap-2.5 mb-4 touch-manipulation"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent to-accent-violet flex items-center justify-center">
                <span className="text-black font-bold text-sm tracking-tight font-mono">OW</span>
              </div>
              <div className="flex flex-col leading-none text-left">
                <span className="text-white font-semibold text-[15px] tracking-tight">
                  OldWestSolutions
                </span>
                <span className="text-text-muted text-[10px] tracking-[0.2em] uppercase mt-0.5 font-mono">
                  web3 infrastructure
                </span>
              </div>
            </a>
            <p className="text-text-muted text-sm leading-relaxed max-w-sm mt-4 font-mono">
              Protocol-native engineering for decentralized systems.
              East-European precision. Dutch operational rigor.
              Global deployment.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title} className="md:col-span-2">
              <h4 className="text-accent text-[11px] font-mono font-semibold tracking-[0.2em] uppercase mb-4">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-text-muted text-sm font-mono hover:text-accent transition-colors duration-300"
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
          <p className="text-text-muted text-xs font-mono">
            &copy; {new Date().getFullYear()} OldWestSolutions. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-text-muted text-xs font-mono hover:text-accent transition-colors duration-300">
              Privacy
            </a>
            <a href="#" className="text-text-muted text-xs font-mono hover:text-accent transition-colors duration-300">
              Terms
            </a>
            <a href="#" className="text-text-muted text-xs font-mono hover:text-accent transition-colors duration-300">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
