import Link from "next/link";
import ImmersiveSiteShell from "@/components/ImmersiveSiteShell";

export default function IntegrationPage() {
  return (
    <ImmersiveSiteShell>
      <section className="relative overflow-hidden border-b border-white/[0.06] px-4 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-bl from-cyan-500/[0.06] via-transparent to-accent/[0.08]" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[90px]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="label-caps text-accent">Solutions</span>
          <h1 className="luxury-title luxury-title-center mx-auto mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Integration that connects{" "}
            <span className="text-accent">your stack</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-text-muted">
            APIs, events, identity, and legacy systems — wired with contracts,
            monitoring, and change control so data stays honest across every boundary.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/documentation"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-accent-deep"
            >
              API documentation
            </Link>
            <Link
              href="/orchestration"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/[0.15] bg-white/[0.03] px-8 py-3 text-sm font-medium text-text-secondary transition hover:border-accent/30 hover:text-white"
            >
              See orchestration
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.06] bg-[#0e0e10] px-4 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-3">
          {[
            {
              t: "Event-driven",
              d: "Queues, webhooks, and streaming pipelines with dead-letter handling and replay you can trust.",
            },
            {
              t: "API-first",
              d: "Versioned REST and GraphQL surfaces with auth, rate limits, and OpenAPI specs your partners can adopt.",
            },
            {
              t: "Identity-aware",
              d: "SSO, SCIM, and least-privilege tokens mapped to how your org actually onboards users.",
            },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-2xl border border-white/[0.06] bg-[#141416] p-8 shadow-card transition hover:border-accent/20"
            >
              <h3 className="text-lg font-semibold text-white">{c.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="min-h-[72vh] border-b border-white/[0.06] px-4 py-20 sm:flex sm:items-center sm:px-8 lg:min-h-[78vh] lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Map every handoff before you cut over
            </h2>
            <p className="mt-6 text-base leading-relaxed text-text-muted">
              Discovery workshops produce interface diagrams, error budgets, and
              test data contracts. We run parallel read paths, shadow traffic, and
              reconciliation reports until leadership signs the flip.
            </p>
            <div className="mt-10 space-y-4 rounded-2xl border border-white/[0.06] bg-[#151518] p-6 font-mono text-[11px] leading-relaxed text-emerald-400/90 sm:text-xs">
              <div className="text-text-muted">{"// Example contract snippet"}</div>
              <div>POST /v1/events/ingest</div>
              <div className="text-text-muted">Authorization: Bearer &lt;token&gt;</div>
              <div className="text-white/70">{"{ \"type\": \"order.paid\", \"id\": \"evt_…\" }"}</div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-4">
            {["CRM ↔ ERP sync", "Billing webhooks", "IdP → app provisioning", "Data lake ETL"].map(
              (flow, i) => (
                <div
                  key={flow}
                  className="flex items-center gap-4 rounded-xl border border-white/[0.06] bg-gradient-to-r from-white/[0.03] to-transparent px-5 py-4"
                >
                  <span className="text-xs font-bold text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-medium text-white">{flow}</span>
                  <span className="ml-auto text-[10px] uppercase tracking-wider text-emerald-400/80">
                    Monitored
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="min-h-[60vh] border-b border-white/[0.06] bg-[#0c0c0e] px-4 py-20 sm:px-8 lg:flex lg:items-center lg:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Operate integrations like products</h2>
          <p className="mx-auto mt-6 max-w-2xl text-text-muted">
            Dashboards show throughput, error rates, and consumer lag per integration.
            Alerts route to owners with runbooks — not generic “integration down” pages.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/[0.06] bg-[#141416] p-8 text-left">
              <div className="text-3xl font-bold text-white">SLA-backed</div>
              <p className="mt-2 text-sm text-text-muted">
                Response and resolution targets written into the same contract as
                infrastructure.
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.06] bg-[#141416] p-8 text-left">
              <div className="text-3xl font-bold text-white">Auditable</div>
              <p className="mt-2 text-sm text-text-muted">
                Change logs and access reviews export for compliance without a
                separate tool chain.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/[0.08] bg-gradient-to-br from-[#1a1a1e] to-[#121214] p-10 text-center sm:p-14">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Connect Old West to your estate</h2>
          <p className="mt-4 text-text-muted">
            We scope integration alongside managed services and OldWest.net programs.
          </p>
          <Link
            href="/#contact"
            className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-accent-deep"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </ImmersiveSiteShell>
  );
}
