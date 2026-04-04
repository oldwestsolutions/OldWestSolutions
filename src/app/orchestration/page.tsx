import Link from "next/link";
import ImmersiveSiteShell from "@/components/ImmersiveSiteShell";

export default function OrchestrationPage() {
  return (
    <ImmersiveSiteShell>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/[0.06] px-4 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.08] via-transparent to-emerald-500/[0.04]" />
        <div className="pointer-events-none absolute -right-20 top-1/4 h-96 w-96 rounded-full bg-accent/10 blur-[100px]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="label-caps text-accent">Solutions</span>
          <h1 className="luxury-title luxury-title-center mx-auto mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Orchestration that keeps production{" "}
            <span className="text-accent">predictable</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-text-muted">
            One control plane for deploys, scale, health, and rollback — so every
            environment behaves like production, not a snowflake.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-accent-deep"
            >
              Plan a rollout
            </Link>
            <Link
              href="/integration"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/[0.15] bg-white/[0.03] px-8 py-3 text-sm font-medium text-text-secondary transition hover:border-accent/30 hover:text-white"
            >
              Explore integration
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics strip */}
      <section className="border-b border-white/[0.06] bg-[#0e0e10] px-4 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { v: "99.9%+", l: "Target availability" },
            { v: "<15m", l: "Mean rollback window" },
            { v: "1 plane", l: "Metrics & deploys" },
            { v: "24/7", l: "Operator coverage" },
          ].map((m) => (
            <div key={m.l} className="text-center">
              <div className="text-2xl font-bold text-white sm:text-3xl">{m.v}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-text-muted">{m.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Full bleed: pipeline story */}
      <section className="min-h-[70vh] border-b border-white/[0.06] px-4 py-20 sm:flex sm:items-center sm:px-8 lg:min-h-[75vh] lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              From commit to customer — one pipeline
            </h2>
            <p className="mt-6 text-base leading-relaxed text-text-muted">
              We wire CI/CD, infrastructure as code, and progressive delivery so
              the same artifact that passed tests is what lands in prod. Canary,
              blue-green, or feature flags — your policy, our automation.
            </p>
            <ul className="mt-8 space-y-4 text-sm text-text-secondary">
              {[
                "Immutable builds with signed artifacts and promotion gates",
                "Autoscaling tied to SLOs, not guesswork",
                "Runbooks generated from live topology, not stale wikis",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative flex items-center justify-center rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#1a1a1e] to-[#121214] p-8 shadow-card">
            <div className="w-full space-y-3">
              {["Build", "Test", "Stage", "Promote", "Observe"].map((step, i) => (
                <div
                  key={step}
                  className="flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-xs font-bold text-accent">
                    {i + 1}
                  </span>
                  <span className="font-medium text-white">{step}</span>
                  <span className="ml-auto text-[10px] uppercase tracking-wider text-emerald-400/90">
                    {i < 4 ? "Gated" : "Live"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Observability section */}
      <section className="min-h-[65vh] border-b border-white/[0.06] bg-[#0c0c0e] px-4 py-20 sm:px-8 lg:flex lg:items-center lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 flex items-center lg:order-1">
            <div className="h-64 w-full rounded-2xl border border-white/[0.06] bg-[#151518] p-4 sm:h-80">
              <div className="mb-3 flex justify-between text-[10px] uppercase tracking-wider text-text-muted">
                <span>Latency & errors</span>
                <span className="text-accent/80">Last 24h</span>
              </div>
              <div className="flex h-[calc(100%-2rem)] items-end gap-1">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, j) => (
                  <div
                    key={j}
                    className="flex-1 rounded-t-sm bg-gradient-to-t from-accent/20 to-accent/50"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="order-1 flex flex-col justify-center lg:order-2">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Telemetry that operators actually open
            </h2>
            <p className="mt-6 text-base leading-relaxed text-text-muted">
              Metrics, logs, and traces land in one place with ownership tags. When
              something drifts, you see which service, which deploy, and which
              change — not a wall of vendor consoles.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/[0.08] bg-gradient-to-br from-[#1a1a1e] to-[#141416] p-10 text-center shadow-card sm:p-14">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to standardize how you ship?
          </h2>
          <p className="mt-4 text-text-muted">
            We scope orchestration with managed services so day-two matches what
            we sold on day one.
          </p>
          <Link
            href="/managed-services"
            className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-accent-deep"
          >
            View managed services
          </Link>
        </div>
      </section>
    </ImmersiveSiteShell>
  );
}
