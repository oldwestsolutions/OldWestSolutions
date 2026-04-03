"use client";

import { footerLinks } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#141414] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center">
                <span className="text-accent font-bold text-sm">OW</span>
              </div>
              <span className="text-text-primary font-semibold text-lg tracking-tight">
                OldWest<span className="text-text-muted">Solutions</span>
              </span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed max-w-sm">
              Scalable systems across finance, automation, and decentralized
              networks. Built for control, efficiency, and long-term leverage.
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-text-secondary text-sm font-medium mb-4">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-text-muted text-sm hover:text-text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            &copy; {new Date().getFullYear()} OldWestSolutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-text-muted text-xs hover:text-text-primary transition-colors duration-200"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-text-muted text-xs hover:text-text-primary transition-colors duration-200"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
