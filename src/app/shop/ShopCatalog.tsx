"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export type ShopProduct = {
  name: string;
  price: number;
  tag: string;
  cat: string;
  desc: string;
};

type Props = {
  products: ShopProduct[];
};

export default function ShopCatalog({ products }: Props) {
  const [search, setSearch] = useState("");
  const q = search.trim().toLowerCase();

  const filtered = useMemo(() => {
    if (!q) return products;
    return products.filter((p) =>
      [p.name, p.desc, p.cat, p.tag, String(p.price)].join(" ").toLowerCase().includes(q),
    );
  }, [products, q]);

  return (
    <>
      <section className="border-b border-white/[0.06] px-4 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="shrink-0 text-3xl font-bold tracking-tight text-white sm:text-4xl">Shop</h1>
          <div className="relative min-w-0 flex-1 sm:max-w-md sm:flex-none lg:max-w-lg">
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
              placeholder="Search products by name, category, or keyword"
              className="w-full rounded-lg border border-white/[0.1] bg-[#121214] py-3 pl-10 pr-4 text-sm text-white placeholder:text-text-muted outline-none transition focus:border-accent/40 focus:ring-1 focus:ring-accent/20"
              aria-label="Search shop products"
            />
          </div>
        </div>
      </section>

      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-10 lg:flex-row lg:px-8 lg:py-14">
        <aside className="shrink-0 lg:w-56">
          <div className="rounded-2xl border border-white/[0.06] bg-[#141416] p-5">
            <div className="text-xs font-semibold uppercase tracking-wider text-text-muted">Cart preview</div>
            <p className="mt-4 text-sm text-text-muted">
              Your cart is empty. Add gear below — checkout connects when your store backend is live.
            </p>
            <div className="mt-6 flex justify-between border-t border-white/[0.06] pt-4 text-sm text-text-secondary">
              <span>Subtotal</span>
              <span className="font-mono text-white">$0.00</span>
            </div>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-text-muted">
              Showing <span className="text-white">{filtered.length}</span> product
              {filtered.length === 1 ? "" : "s"}
              {q ? (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="ml-2 text-accent hover:text-accent-muted"
                >
                  Clear search
                </button>
              ) : null}
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-text-muted">Sort by</span>
              <span className="rounded-lg border border-white/[0.1] bg-[#1a1a1e] px-3 py-1.5 text-text-secondary">
                Featured
              </span>
            </div>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((p) => (
              <article
                key={p.name}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-[#151518] shadow-card transition hover:border-accent/30"
              >
                <div className="relative aspect-[4/3] bg-gradient-to-br from-white/[0.04] via-[#1e1e24] to-accent/10">
                  {p.tag ? (
                    <span className="absolute left-3 top-3 rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                      {p.tag}
                    </span>
                  ) : null}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="text-[10px] uppercase tracking-wider text-text-muted">{p.cat}</div>
                  <h2 className="mt-1 text-lg font-semibold text-white group-hover:text-accent">{p.name}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">{p.desc}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-bold text-white">${p.price}</span>
                    <button
                      type="button"
                      className="rounded-full bg-accent px-5 py-2 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-accent-deep"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {filtered.length === 0 ? (
            <p className="mt-10 text-center text-sm text-text-muted">No products match your search.</p>
          ) : null}
        </div>
      </div>

      <section className="border-t border-white/[0.06] bg-[#0c0c0e] px-4 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-xl">
          <div className="rounded-2xl border border-white/[0.08] bg-[#141416] px-6 py-10 text-center sm:px-10 sm:py-12">
            <h2 className="text-2xl font-bold text-white">Help Center</h2>
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              Volume pricing, asset tagging, and staged rollouts for franchises and property managers. Order guides, RMA policies, and
              setup checklists are in the help center — or reach us directly.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-[48px] w-full max-w-xs items-center justify-center rounded-full border border-white/[0.15] px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.06] sm:w-auto"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
