"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import ImmersiveSiteShell from "@/components/ImmersiveSiteShell";
import type { CaseStudy } from "@/lib/constants";
import { trendingArticles } from "@/lib/trendingNews";

type Props = {
  caseStudies: CaseStudy[];
};

function matchesQuery(text: string, q: string) {
  return text.toLowerCase().includes(q);
}

export default function NewsPageContent({ caseStudies }: Props) {
  const [search, setSearch] = useState("");

  const q = search.trim().toLowerCase();

  const filteredStudies = useMemo(() => {
    if (!q) return caseStudies;
    return caseStudies.filter((s) =>
      matchesQuery([s.title, s.problem, s.outcome, s.industry, s.solution].join(" "), q),
    );
  }, [caseStudies, q]);

  const filteredTrending = useMemo(() => {
    if (!q) return trendingArticles;
    return trendingArticles.filter((a) =>
      matchesQuery([a.headline, a.shortLabel, a.dek, a.category, ...a.paragraphs].join(" "), q),
    );
  }, [q]);

  const [hero, ...rest] = filteredStudies;
  const sidebarRest = rest.slice(0, 3);

  return (
    <ImmersiveSiteShell>
      <div className="border-b border-white/[0.06] bg-[#0a0a0c] px-4 py-3 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-semibold text-white">Old West Solutions</span>
            <span className="hidden h-3 w-px bg-white/15 sm:block" aria-hidden />
            <span className="text-[11px] text-text-muted sm:text-xs">News feed</span>
            <span className="rounded-full bg-white/[0.06] px-2 py-0.5 text-[10px] uppercase tracking-wider text-accent">
              Live
            </span>
          </div>
          <div className="relative w-full min-w-0 sm:max-w-md">
            <svg
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search headlines, topics, and briefs"
              className="w-full rounded-lg border border-white/[0.1] bg-[#121214] py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-text-muted outline-none transition focus:border-accent/40 focus:ring-1 focus:ring-accent/20"
              aria-label="Search news"
            />
          </div>
        </div>
      </div>

      <section className="border-b border-white/[0.06] px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3 lg:gap-8">
          {hero ? (
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
          ) : (
            <div className="flex min-h-[280px] items-center justify-center rounded-2xl border border-dashed border-white/[0.12] bg-[#151518]/50 p-8 text-center text-sm text-text-muted lg:col-span-2">
              No briefs match “{search.trim()}”. Try another keyword or clear the search box.
            </div>
          )}

          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-white/[0.06] bg-[#141416] p-4">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-text-muted">Trending now</div>
              <ul className="mt-3 space-y-3">
                {filteredTrending.length ? (
                  filteredTrending.map((a) => (
                    <li key={a.slug}>
                      <Link href={`/news/${a.slug}`} className="group block">
                        <span className="text-sm font-medium text-text-secondary group-hover:text-white">{a.shortLabel}</span>
                        <span className="mt-0.5 block text-xs leading-snug text-text-muted group-hover:text-text-secondary">
                          {a.headline}
                        </span>
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className="text-sm text-text-muted">No trending stories match your search.</li>
                )}
              </ul>
            </div>
            {sidebarRest.map((s) => (
              <Link
                key={s.title}
                href="/#news"
                className="rounded-xl border border-white/[0.06] bg-[#141416] p-4 transition hover:border-accent/25"
              >
                <div className="text-[10px] font-bold uppercase tracking-wider text-accent">{s.industry}</div>
                <div className="mt-1 text-sm font-semibold leading-snug text-white">{s.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.06] bg-[#0c0c0e] py-8">
        <div className="mb-4 px-4 sm:px-6 lg:px-8">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-text-muted">More coverage</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto px-4 pb-2 sm:px-6 lg:px-8">
          {filteredStudies.length ? (
            filteredStudies.map((s) => (
              <Link
                key={s.title}
                href="/#news"
                className="w-[min(85vw,280px)] shrink-0 rounded-xl border border-white/[0.06] bg-[#151518] p-4 transition hover:border-accent/30"
              >
                <div className="mb-3 aspect-[16/10] rounded-lg bg-gradient-to-br from-white/[0.06] to-accent/10" />
                <div className="text-[10px] uppercase tracking-wider text-accent">{s.industry}</div>
                <div className="mt-1 line-clamp-2 text-sm font-medium text-white">{s.title}</div>
              </Link>
            ))
          ) : (
            <p className="px-2 text-sm text-text-muted">No cards to show.</p>
          )}
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-lg font-bold text-white">From the wire</h2>
            <div className="mt-6 space-y-6 border-t border-white/[0.06] pt-6">
              {filteredStudies.length ? (
                filteredStudies.map((s) => (
                  <article key={s.title} className="border-b border-white/[0.04] pb-6 last:border-0">
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-text-muted">Lead</div>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">{s.problem}</p>
                    <div className="mt-3 text-[10px] font-semibold uppercase tracking-wider text-emerald-400/90">
                      Impact
                    </div>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-emerald-400/85">{s.outcome}</p>
                  </article>
                ))
              ) : (
                <p className="text-sm text-text-muted">No wire items for this search.</p>
              )}
            </div>
          </div>
          <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#1a1a1e] to-[#121214] p-8">
            <h2 className="text-lg font-bold text-white">Stay in the loop</h2>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              Briefs on this page mirror the home page <span className="text-text-secondary">News</span> section. Use the links below for
              longer-form resources, product docs, scheduled conversations with our team, and editorial or press inquiries.
            </p>
            <ul className="mt-6 space-y-2.5 border-t border-white/[0.06] pt-6 text-sm text-text-secondary">
              <li className="flex gap-2">
                <span className="text-accent" aria-hidden>
                  ·
                </span>
                <span>
                  <Link href="/documentation" className="text-white underline-offset-2 hover:underline">
                    Developer &amp; API documentation
                  </Link>{" "}
                  for integrators and partners.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent" aria-hidden>
                  ·
                </span>
                <span>
                  <Link href="/university" className="text-white underline-offset-2 hover:underline">
                    University &amp; training tracks
                  </Link>{" "}
                  for structured learning paths.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent" aria-hidden>
                  ·
                </span>
                <span>
                  <Link href="/shop" className="text-white underline-offset-2 hover:underline">
                    Equipment &amp; add-ons (shop)
                  </Link>{" "}
                  referenced in field briefs.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent" aria-hidden>
                  ·
                </span>
                <span>
                  <Link href="/schedule-consultation" className="text-white underline-offset-2 hover:underline">
                    Schedule a consultation
                  </Link>{" "}
                  for roadmap and architecture conversations.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent" aria-hidden>
                  ·
                </span>
                <span>
                  Press, podcast, or event requests:{" "}
                  <a
                    href="mailto:press@oldwestsolutions.com?subject=Editorial%20inquiry"
                    className="text-white underline-offset-2 hover:underline"
                  >
                    press@oldwestsolutions.com
                  </a>
                  {" · "}
                  General line{" "}
                  <a href="tel:+19453824660" className="text-white underline-offset-2 hover:underline">
                    (945) 382-4660
                  </a>
                  .
                </span>
              </li>
            </ul>
            <p className="mt-6 text-[11px] leading-relaxed text-text-muted">
              RSS and email digests are on the roadmap; bookmark this feed or the homepage news module for now. For sensitive disclosures,
              use encrypted channels your account team provides.
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
