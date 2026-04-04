import Link from "next/link";
import ImmersiveSiteShell from "@/components/ImmersiveSiteShell";

const categories = ["All", "Networking", "Mesh Wi‑Fi", "Security", "Business"];

const products = [
  {
    name: "Pro Mesh Wi‑Fi 6E System",
    price: 329,
    tag: "Best seller",
    cat: "Mesh Wi‑Fi",
    desc: "Whole-home coverage with app setup and OWS provisioning profile.",
  },
  {
    name: "Enterprise Gateway Router",
    price: 449,
    tag: "Pro install",
    cat: "Networking",
    desc: "Dual-WAN, VLANs, and remote handoff to our NOC templates.",
  },
  {
    name: "DOCSIS 3.1 Cable Modem",
    price: 189,
    tag: "",
    cat: "Networking",
    desc: "Certified for major cable ISPs; plug-and-play with our activation.",
  },
  {
    name: "Outdoor LTE Failover",
    price: 599,
    tag: "New",
    cat: "Networking",
    desc: "Automatic failover when primary circuit drops — static IP options.",
  },
  {
    name: "Secure DNS & Filter Appliance",
    price: 279,
    tag: "Security",
    cat: "Security",
    desc: "Family or office policy packs with audit logs for compliance teams.",
  },
  {
    name: "4K Streaming Adapter Kit",
    price: 79,
    tag: "",
    cat: "Business",
    desc: "Lobby and waiting-room kits with managed content playlists.",
  },
  {
    name: "PoE+ Switch 24-port",
    price: 419,
    tag: "Business",
    cat: "Business",
    desc: "Silent fanless option for offices; we label ports to your floor plan.",
  },
  {
    name: "Battery backup UPS 1500VA",
    price: 259,
    tag: "",
    cat: "Networking",
    desc: "Clean shutdown scripts for gateways and ONTs during outages.",
  },
];

export default function ShopPage() {
  return (
    <ImmersiveSiteShell>
      {/* Hero banner — Shopify-style */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/25 via-[#1a1520] to-[#12121a]" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12 lg:py-20">
          <div className="max-w-xl">
            <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              Free shipping over $75 · Pro install add-on
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Hardware that matches your plan
            </h1>
            <p className="mt-4 text-lg text-white/75">
              Curated like a flagship store — routers, mesh, security, and office
              gear with Old West configuration profiles.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-bold text-[#111113] transition hover:bg-white/90"
              >
                Request a quote
              </Link>
              <a
                href="tel:+19453824660"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/30 px-8 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Call (945) 382-4660
              </a>
            </div>
          </div>
          <div className="hidden w-full max-w-sm rounded-2xl border border-white/20 bg-black/20 p-6 backdrop-blur sm:block">
            <div className="text-xs font-semibold uppercase tracking-wider text-white/60">
              Cart preview
            </div>
            <p className="mt-4 text-sm text-white/50">
              Your cart is empty. Add gear below — checkout connects when your
              store backend is live.
            </p>
            <div className="mt-6 flex justify-between border-t border-white/10 pt-4 text-sm text-white">
              <span>Subtotal</span>
              <span className="font-mono">$0.00</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip — BigCommerce-style */}
      <div className="border-b border-white/[0.06] bg-[#0e0e10] px-4 py-4 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 text-xs text-text-muted">
          <span>🔒 Encrypted checkout ready</span>
          <span>✓ Business invoicing</span>
          <span>↻ 30-day hardware support</span>
          <span>★ Rated support team</span>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-10 lg:flex-row lg:px-8 lg:py-14">
        {/* Filters sidebar */}
        <aside className="shrink-0 lg:w-56">
          <div className="rounded-2xl border border-white/[0.06] bg-[#141416] p-5">
            <div className="text-xs font-bold uppercase tracking-wider text-white">Categories</div>
            <ul className="mt-4 space-y-2 text-sm text-text-muted">
              {categories.map((c) => (
                <li key={c}>
                  <button
                    type="button"
                    className="w-full rounded-lg px-3 py-2 text-left transition hover:bg-white/[0.04] hover:text-white"
                  >
                    {c}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-white/[0.06] pt-6">
              <div className="text-xs font-bold uppercase tracking-wider text-white">Price</div>
              <div className="mt-3 h-2 rounded-full bg-white/[0.08]" />
              <div className="mt-2 flex justify-between text-[10px] text-text-muted">
                <span>$0</span>
                <span>$800+</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Product grid */}
        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-text-muted">
              Showing <span className="text-white">{products.length}</span> products
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-text-muted">Sort by</span>
              <span className="rounded-lg border border-white/[0.1] bg-[#1a1a1e] px-3 py-1.5 text-text-secondary">
                Featured
              </span>
            </div>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((p) => (
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
                  <h2 className="mt-1 text-lg font-semibold text-white group-hover:text-accent">
                    {p.name}
                  </h2>
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
        </div>
      </div>

      <section className="border-t border-white/[0.06] bg-[#0c0c0e] px-4 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white">Wholesale & multi-site</h2>
          <p className="mt-3 text-text-muted">
            Volume pricing, asset tagging, and staged rollouts for franchises and
            property managers — same design system as our main site.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/[0.15] px-8 py-3 text-sm font-semibold text-white hover:bg-white/[0.06]"
          >
            Talk to sales
          </Link>
        </div>
      </section>
    </ImmersiveSiteShell>
  );
}
