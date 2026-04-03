import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Props = {
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export default function MarketingPageShell({ eyebrow, title, children }: Props) {
  return (
    <div className="min-h-screen bg-[#080809] px-2.5 pb-2.5 pt-2.5 sm:px-4 sm:pb-4 sm:pt-4 md:px-5 md:pb-5 md:pt-5">
      <div className="relative mx-auto max-w-[1400px] overflow-x-clip rounded-[1.75rem] border border-white/[0.07] bg-[#111113] shadow-shell sm:rounded-[2rem]">
        <Navbar />
        <main
          id="main-content"
          className="border-t border-white/[0.06] bg-[#111113] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
        >
          <article className="mx-auto max-w-3xl">
            <span className="label-caps text-accent">{eyebrow}</span>
            <h1 className="luxury-title mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {title}
            </h1>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-text-muted">
              {children}
            </div>
            <a
              href="/#contact"
              className="mt-10 inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.03] px-6 py-3 text-sm font-medium text-text-secondary transition-all duration-200 hover:border-accent/25 hover:text-white touch-manipulation"
            >
              Get in touch
            </a>
          </article>
        </main>
        <Footer />
      </div>
    </div>
  );
}
