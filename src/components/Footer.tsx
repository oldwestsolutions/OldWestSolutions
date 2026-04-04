"use client";

import { footerLinks } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="rounded-b-[1.75rem] border-t border-white/[0.06] bg-[#0c0c0e] sm:rounded-b-[2rem]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-10 xl:gap-14">
          {/* Brand */}
          <div className="shrink-0 lg:max-w-[min(100%,280px)] xl:max-w-xs">
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
            <a
              href="tel:+19453824660"
              className="mt-5 flex items-center gap-2 text-text-muted transition-colors hover:text-white"
            >
              <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span className="text-xs">(945) 382-4660</span>
            </a>
            <div className="mt-3 flex items-start gap-2 text-text-muted">
              <svg className="mt-0.5 h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span className="text-xs leading-relaxed">
                7950 Legacy Dr<br />
                Plano, Texas
              </span>
            </div>
            <a
              href="https://github.com/oldwestsolutions"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] text-text-muted transition-colors hover:border-accent/30 hover:text-white touch-manipulation"
              aria-label="Old West Solutions on GitHub"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
            </a>
          </div>

          <nav
            aria-label="Footer"
            className="grid min-w-0 flex-1 grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-5"
          >
            {footerLinks.map((group) => (
              <div key={group.title} className="min-w-0">
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">
                  {group.title}
                </h4>
                <ul className="space-y-1 sm:space-y-2">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="inline-flex min-h-[40px] max-w-full items-center py-1.5 text-sm text-text-muted transition-colors duration-200 touch-manipulation hover:text-white sm:min-h-0 sm:py-0"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
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
