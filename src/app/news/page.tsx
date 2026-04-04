import Link from "next/link";
import ImmersiveSiteShell from "@/components/ImmersiveSiteShell";
import { caseStudies } from "@/lib/constants";

const trending = [
  "Managed IT",
  "Fiber rollout",
  "AI governance",
  "Domain strategy",
  "Security review",
];

export default function NewsPage() {
  const [hero, ...rest] = caseStudies;
  return (
    <ImmersiveSiteShell>
      {/* MSN-style top bar */}
      <div className="border-b border-white/[0.06] bg-[#0a0a0c] px-4 py-3 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 text-[11px] text-text-muted sm:text-xs">
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-semibold text-white">Old West Solutions</span>
            <span className="hidden h-3 w-px bg-white/15 sm:block" aria-hidden />
            <span>News feed</span>
            <span className="rounded-full bg-white/[0.06] px-2 py-0.5 text-[10px] uppercase tracking-wider text-accent">
              Live
            </span>
          </div>
          <div className="flex items-center gap-3 text-text-secondary">
            <span className="tabular-nums">Plano, TX</span>
            <span className="text-white/40">·</span>
            <Link href="/#contact" className="hover:text-accent">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Hero grid — large story + sidebar */}
      <section className="border-b border-white/[0.06] px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3 lg:gap-8">
          <Link
            href="/#news"
            className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#151518] shadow-card lg:col-span-2 lg:min-h-[320px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/25 via-[#1a1a22] to-[#0e0e12]" />
            <div className="relative flex h-full min-h-[280px] flex-col justify-end p-6 sm:p-8 lg:min-h-[320px]">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                {hero.industry}
              </span>
              <h1 className="mt-3 text-2xl font-bold leading-tight text-white group-hover:text-accent sm:text-3xl lg:text-4xl">
                {hero.title}
              </h1>
              <p className="mt-3 line-clamp-2 max-w-2xl text-sm leading-relaxed text-white/75">
                {hero.problem}
              </p>
              <span className="mt-4 inline-flex text-xs font-semibold text-accent">
                Continue reading →
              </span>
            </div>
          </Link>

          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-white/[0.06] bg-[#141416] p-4">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                Trending now
              </div>
              <ul className="mt-3 space-y-2.5">
                {trending.map((t) => (
                  <li key={t}>
                    <span className="text-sm text-text-secondary hover:text-white">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            {rest.map((s) => (
              <Link
                key={s.title}
                href="/#news"
                className="rounded-xl border border-white/[0.06] bg-[#141416] p-4 transition hover:border-accent/25"
              >
                <div className="text-[10px] font-bold uppercase tracking-wider text-accent">
                  {s.industry}
                </div>
                <div className="mt-1 text-sm font-semibold leading-snug text-white">{s.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal “more coverage” strip */}
      <section className="border-b border-white/[0.06] bg-[#0c0c0e] py-8">
        <div className="mb-4 px-4 sm:px-6 lg:px-8">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-text-muted">
            More coverage
          </h2>
        </div>
        <div className="flex gap-4 overflow-x-auto px-4 pb-2 sm:px-6 lg:px-8">
          {caseStudies.map((s) => (
            <Link
              key={s.title}
              href="/#news"
              className="w-[min(85vw,280px)] shrink-0 rounded-xl border border-white/[0.06] bg-[#151518] p-4 transition hover:border-accent/30"
            >
              <div className="mb-3 aspect-[16/10] rounded-lg bg-gradient-to-br from-white/[0.06] to-accent/10" />
              <div className="text-[10px] uppercase tracking-wider text-accent">{s.industry}</div>
              <div className="mt-1 line-clamp-2 text-sm font-medium text-white">{s.title}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Magazine-style columns */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-lg font-bold text-white">From the wire</h2>
            <div className="mt-6 space-y-6 border-t border-white/[0.06] pt-6">
              {caseStudies.map((s) => (
                <article key={s.title} className="border-b border-white/[0.04] pb-6 last:border-0">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                    Lead
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{s.problem}</p>
                  <div className="mt-3 text-[10px] font-semibold uppercase tracking-wider text-emerald-400/90">
                    Impact
                  </div>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-emerald-400/85">
                    {s.outcome}
                  </p>
                </article>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#1a1a1e] to-[#121214] p-8">
            <h2 className="text-lg font-bold text-white">Stay in the loop</h2>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              The same briefs appear on the home page under News. For projects and
              press, reach our team directly.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="/#news"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white hover:bg-accent-deep"
              >
                View on homepage
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/[0.12] px-6 py-2.5 text-sm font-medium text-text-secondary hover:border-accent/30 hover:text-white"
              >
                Contact editorial
              </Link>
            </div>
          </div>
        </div>
      </section>
    </ImmersiveSiteShell>
  );
}
