import Link from "next/link";
import ImmersiveSiteShell from "@/components/ImmersiveSiteShell";
import { openRoles } from "@/lib/careers";
import JobsListing from "./JobsListing";

export default function CareersPage() {
  return (
    <ImmersiveSiteShell>
      <section className="relative overflow-hidden border-b border-white/[0.06] px-4 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.1] via-transparent to-violet-500/[0.05]" />
        <div className="pointer-events-none absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-accent/10 blur-[100px]" />
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="label-caps text-accent">Careers</span>
          <h1 className="luxury-title luxury-title-center mx-auto mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Build the network people{" "}
            <span className="text-accent">rely on every day</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-text-muted">
            Old West Solutions hires field crews, engineers, and customer-facing teams who care about uptime, clarity, and doing right by
            neighbors and businesses across North Texas. Browse open roles, filter by team, and apply in minutes.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#open-roles"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-accent-deep"
            >
              View open roles
            </a>
            <Link
              href="/about"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/[0.15] bg-white/[0.03] px-8 py-3 text-sm font-medium text-text-secondary transition hover:border-accent/30 hover:text-white"
            >
              How we work
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.06] bg-[#0e0e10] px-4 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { v: "10+", l: "Open tracks this quarter" },
            { v: "Plano", l: "HQ & field hub" },
            { v: "24/7", l: "NOC & on-call culture" },
            { v: "Paid", l: "Certs & tool allowances*" },
          ].map((m) => (
            <div key={m.l} className="text-center">
              <div className="text-2xl font-bold text-white sm:text-3xl">{m.v}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-text-muted">{m.l}</div>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-[11px] text-text-muted">
          *Eligible roles; details discussed during offer. We are an equal opportunity employer.
        </p>
      </section>

      <section className="min-h-[65vh] border-b border-white/[0.06] px-4 py-20 sm:flex sm:items-center sm:px-8 lg:min-h-[70vh] lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">A career, not just a shift</h2>
            <p className="mt-6 text-base leading-relaxed text-text-muted">
              Whether you are climbing poles, watching BGP, or guiding a customer through an install window — we want you to see a path:
              mentorship, certifications, and leadership opportunities as we grow coverage and managed services together.
            </p>
            <ul className="mt-8 space-y-4 text-sm text-text-secondary">
              {[
                "Straight talk in reviews — no mystery goals",
                "Gear and vehicles maintained to a standard you are proud to drive",
                "Cross-training between field, NOC, and project teams",
                "Local decisions with escalation when scope or safety demands it",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-5">
            {[
              {
                title: "Benefits that respect your time",
                body: "Medical, dental, and vision options for eligible full-time roles, PTO accrual, paid holidays, and retirement planning support.",
              },
              {
                title: "Safety and licensing",
                body: "DOT, OSHA, and tower/climb policies where applicable — plus reimbursement conversations for industry certs that make the team stronger.",
              },
              {
                title: "Interview process",
                body: "Recruiter screen → hiring manager conversation → practical or scenario exercise → references. Most paths complete within two weeks.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-white/[0.06] bg-gradient-to-br from-[#1a1a1e] to-[#141416] p-6 shadow-card"
              >
                <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.06] px-4 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <JobsListing jobs={openRoles} />
        </div>
      </section>

      <section className="border-b border-white/[0.06] bg-[#0e0e10] px-4 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Do not see your exact title?</h2>
          <p className="mt-4 text-pretty text-text-muted">
            We still want to hear from you. Send a short note with your background and the kind of work you want — we often open roles for
            people who show up before the req is posted.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:careers@oldwestsolutions.com?subject=General%20application%20%E2%80%94%20Old%20West%20Solutions"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-accent-deep"
            >
              Send a general application
            </a>
            <Link
              href="/contact"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/[0.15] bg-white/[0.03] px-8 py-3 text-sm font-medium text-text-secondary transition hover:border-accent/30 hover:text-white"
            >
              Talk to our team
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl rounded-2xl border border-white/[0.06] bg-[#151518] p-8 text-center sm:p-10">
          <p className="text-xs uppercase tracking-wider text-text-muted">Equal opportunity</p>
          <p className="mt-4 text-sm leading-relaxed text-text-secondary">
            Old West Solutions provides equal employment opportunities to all employees and applicants and prohibits discrimination of any
            kind. If you need a reasonable accommodation for the application or interview process, please mention it in your note — we will
            work with you.
          </p>
        </div>
      </section>
    </ImmersiveSiteShell>
  );
}
