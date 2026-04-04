"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Job, JobDepartment } from "@/lib/careers";
import { jobDepartments } from "@/lib/careers";

type Props = {
  jobs: Job[];
};

function applyHref(job: Job) {
  const subject = encodeURIComponent(`Application: ${job.title}`);
  const body = encodeURIComponent(
    `Role: ${job.title}\nJob ID: ${job.id}\n\nPlease attach a resume and share your availability for a brief intro call.`,
  );
  return `mailto:careers@oldwestsolutions.com?subject=${subject}&body=${body}`;
}

export default function JobsListing({ jobs }: Props) {
  const [dept, setDept] = useState<JobDepartment | "All">("All");

  const filtered = useMemo(() => {
    if (dept === "All") return jobs;
    return jobs.filter((j) => j.department === dept);
  }, [jobs, dept]);

  return (
    <div id="open-roles" className="scroll-mt-28">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Open roles</h2>
          <p className="mt-3 max-w-xl text-pretty text-text-muted">
            Every listing below is active. Filter by team, read the snapshot, and apply with one click — we read every message.
          </p>
        </div>
        <p className="text-sm text-text-muted">
          <span className="font-semibold text-white">{filtered.length}</span> role
          {filtered.length === 1 ? "" : "s"} shown
        </p>
      </div>

      <div
        className="mt-8 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filter by department"
      >
        {(["All", ...jobDepartments] as const).map((d) => {
          const active = dept === d;
          return (
            <button
              key={d}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setDept(d)}
              className={
                active
                  ? "rounded-full bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-glow"
                  : "rounded-full border border-white/[0.1] bg-white/[0.03] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-text-muted transition hover:border-accent/30 hover:text-white"
              }
            >
              {d}
            </button>
          );
        })}
      </div>

      <ul className="mt-10 space-y-5">
        {filtered.map((job) => (
          <li
            key={job.id}
            className="rounded-2xl border border-white/[0.06] bg-[#151518] p-6 shadow-card transition hover:border-accent/20 sm:p-8"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-white/[0.06] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent">
                    {job.department}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-text-muted">{job.type}</span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-text-muted">{job.workMode}</span>
                </div>
                <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">{job.title}</h3>
                <p className="mt-1 text-sm text-text-muted">{job.location}</p>
                <p className="mt-4 text-sm leading-relaxed text-text-secondary">{job.summary}</p>
                <ul className="mt-4 space-y-2 text-sm text-text-muted">
                  {job.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 font-mono text-[11px] text-text-muted">Ref: {job.id}</p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 lg:items-end">
                <a
                  href={applyHref(job)}
                  className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-accent-deep lg:w-auto"
                >
                  Apply for this role
                </a>
                <Link
                  href="/contact"
                  className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-white/[0.12] bg-transparent px-6 py-3 text-sm font-medium text-text-secondary transition hover:border-accent/30 hover:text-white lg:w-auto"
                >
                  Questions? Contact us
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {filtered.length === 0 ? (
        <p className="mt-8 text-center text-text-muted">No roles in this filter right now — try another team or check back soon.</p>
      ) : null}
    </div>
  );
}
