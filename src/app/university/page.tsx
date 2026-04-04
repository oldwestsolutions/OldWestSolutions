import Link from "next/link";
import ImmersiveSiteShell from "@/components/ImmersiveSiteShell";

const programs = [
  {
    title: "Network & edge fundamentals",
    hours: "12h",
    level: "Beginner",
    module: "6 modules",
    desc: "DNS, TLS, CDN, and WAF patterns aligned to how we operate OldWest.net.",
  },
  {
    title: "Data planes & storage tiers",
    hours: "18h",
    level: "Intermediate",
    module: "8 modules",
    desc: "OLTP, analytics, object storage, and lifecycle rules with hands-on labs.",
  },
  {
    title: "APIs, events & integration",
    hours: "14h",
    level: "Intermediate",
    module: "7 modules",
    desc: "Contracts, webhooks, idempotency, and observability for live systems.",
  },
  {
    title: "Governed AI & inference",
    hours: "10h",
    level: "Advanced",
    module: "5 modules",
    desc: "Routing, budgets, residency, and promotion gates for production models.",
  },
  {
    title: "Runbooks & incident response",
    hours: "8h",
    level: "All levels",
    module: "4 modules",
    desc: "On-call drills, comms templates, and postmortems that leadership reads.",
  },
  {
    title: "Finance & metering for operators",
    hours: "6h",
    level: "Beginner",
    module: "3 modules",
    desc: "How usage maps to invoices — for PMs, finance, and account teams.",
  },
];

export default function UniversityPage() {
  return (
    <ImmersiveSiteShell>
      {/* Hero — Coursera-style */}
      <section className="relative overflow-hidden border-b border-white/[0.06] px-4 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent/[0.12] via-transparent to-transparent" />
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="label-caps text-accent">Resources</span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            Old West Solutions University
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-muted">
            Professional programs for engineers, operators, and stakeholders — the
            same contracts, APIs, and runbooks you run in production, taught with
            structure and assessment.
          </p>
          <div className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row">
            <div className="flex flex-1 items-center rounded-full border border-white/[0.12] bg-[#1a1a1e] px-5 py-3 text-left text-sm text-text-muted">
              <span className="mr-2 text-text-muted">Search programs</span>
              <span className="text-white/30">e.g. APIs, DNS, AI…</span>
            </div>
            <Link
              href="/schedule-consultation"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white shadow-glow hover:bg-accent-deep"
            >
              Request cohort access
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-center text-sm">
            <div>
              <div className="text-2xl font-bold text-white">4.8</div>
              <div className="text-text-muted">Learner rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">40+</div>
              <div className="text-text-muted">Hours of content</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-text-muted">Aligned to our stack</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner strip */}
      <section className="border-b border-white/[0.06] bg-[#0e0e10] px-4 py-8 sm:px-8">
        <p className="mx-auto max-w-5xl text-center text-xs uppercase tracking-[0.2em] text-text-muted">
          Curriculum updated when platforms ship · Certificates for completed paths ·
          Sandbox tenants for qualified teams
        </p>
      </section>

      {/* Course grid */}
      <section className="px-4 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">Featured programs</h2>
              <p className="mt-2 text-sm text-text-muted">
                Self-paced modules plus optional live cohorts with instructors.
              </p>
            </div>
            <Link
              href="/documentation"
              className="text-sm font-medium text-accent hover:underline"
            >
              View technical docs →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((p) => (
              <article
                key={p.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-[#151518] shadow-card transition hover:border-accent/25"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-accent/20 via-[#1f1f24] to-[#121214]" />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                    <span className="rounded-md bg-white/[0.06] px-2 py-0.5 text-accent">
                      {p.level}
                    </span>
                    <span>{p.hours}</span>
                    <span>·</span>
                    <span>{p.module}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-white group-hover:text-accent">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">{p.desc}</p>
                  <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                    <div className="h-full w-0 rounded-full bg-accent/60 transition group-hover:w-1/3" />
                  </div>
                  <button
                    type="button"
                    className="mt-4 text-left text-sm font-semibold text-accent"
                  >
                    View syllabus
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section className="border-t border-white/[0.06] bg-[#0c0c0e] px-4 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-white">Who it is for</h2>
          <div className="mt-10 grid gap-6 text-left sm:grid-cols-3">
            {[
              {
                role: "Engineers",
                copy: "Deep dives on failure modes, limits, and safe change windows.",
              },
              {
                role: "Product & program",
                copy: "Enough architecture to scope honestly with customers and auditors.",
              },
              {
                role: "Finance & procurement",
                copy: "How metered capacity maps to line items for renewals.",
              },
            ].map((x) => (
              <div key={x.role} className="rounded-xl border border-white/[0.06] bg-[#141416] p-6">
                <div className="text-sm font-bold text-white">{x.role}</div>
                <p className="mt-2 text-sm text-text-muted">{x.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/[0.08] bg-gradient-to-br from-[#1a1a1e] to-[#121214] p-10 text-center">
          <h2 className="text-xl font-bold text-white sm:text-2xl">Enroll your team</h2>
          <p className="mt-3 text-sm text-text-muted">
            Seats are included or add-on by agreement. We publish cohort schedules
            and version the curriculum when platforms change.
          </p>
          <Link
            href="/schedule-consultation"
            className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white shadow-glow hover:bg-accent-deep"
          >
            Schedule a consultation
          </Link>
        </div>
      </section>
    </ImmersiveSiteShell>
  );
}
