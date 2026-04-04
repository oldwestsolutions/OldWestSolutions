import Link from "next/link";
import ImmersiveSiteShell from "@/components/ImmersiveSiteShell";

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
    tag: "Fanless",
    cat: "Networking",
    desc: "Silent fanless option for offices; we label ports to your floor plan.",
  },
  {
    name: "Battery backup UPS 1500VA",
    price: 259,
    tag: "",
    cat: "Networking",
    desc: "Clean shutdown scripts for gateways and ONTs during outages.",
  },
  {
    name: "Managed Wi‑Fi 6 Access Point",
    price: 149,
    tag: "Popular",
    cat: "Networking",
    desc: "Ceiling or wall mount; adopts your OWS RF profile and reports into our dashboard.",
  },
];

export default function ShopPage() {
  return (
    <ImmersiveSiteShell>
      <section className="border-b border-white/[0.06] px-4 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Shop</h1>
          <p className="mt-2 text-sm text-text-muted">Equipment and add-ons for homes and businesses.</p>
        </div>
      </section>

      <div className="border-b border-white/[0.06] bg-[#0e0e10] px-4 py-4 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 text-xs text-text-muted">
          <span>🔒 Encrypted checkout ready</span>
          <span>✓ Business invoicing</span>
          <span>↻ 30-day hardware support</span>
          <span>★ Rated support team</span>
        </div>
      </div>

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
        </div>
      </div>

      <section className="border-t border-white/[0.06] bg-[#0c0c0e] px-4 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white">Wholesale & multi-site</h2>
          <p className="mt-3 text-text-muted">
            Volume pricing, asset tagging, and staged rollouts for franchises and property managers — same design system as our main site.
            Order guides, RMA policies, and setup checklists live in our help center.
          </p>
          <Link
            href="/documentation"
            className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/[0.15] px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.06]"
          >
            Open help center
          </Link>
        </div>
      </section>
    </ImmersiveSiteShell>
  );
}
