"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { Job, JobDepartment } from "@/lib/careers";
import { jobDepartments } from "@/lib/careers";

const PAGE_SIZE = 8;

type Props = {
  jobs: Job[];
};

function formatPosted(iso: string) {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

const selectClass =
  "mt-1.5 w-full appearance-none rounded-sm border border-white/[0.12] bg-[#0a0b0f] px-3 py-2.5 pr-9 text-sm text-text-secondary outline-none transition focus:border-accent/50 focus:ring-1 focus:ring-accent/30";

type SortKey = "recent" | "title-asc" | "title-desc";

export default function JobsListing({ jobs }: Props) {
  const [query, setQuery] = useState("");
  const [dept, setDept] = useState<JobDepartment | "">("");
  const [type, setType] = useState<string>("");
  const [workMode, setWorkMode] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [sort, setSort] = useState<SortKey>("recent");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const typeOptions = useMemo(() => Array.from(new Set(jobs.map((j) => j.type))).sort(), [jobs]);
  const workModeOptions = useMemo(() => Array.from(new Set(jobs.map((j) => j.workMode))).sort(), [jobs]);
  const locationOptions = useMemo(() => Array.from(new Set(jobs.map((j) => j.location))).sort(), [jobs]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = jobs.filter((j) => {
      if (dept && j.department !== dept) return false;
      if (type && j.type !== type) return false;
      if (workMode && j.workMode !== workMode) return false;
      if (location && j.location !== location) return false;
      if (!q) return true;
      const blob = [
        j.title,
        j.department,
        j.location,
        j.type,
        j.workMode,
        j.id,
        j.summary,
        ...j.highlights,
      ]
        .join(" ")
        .toLowerCase();
      return blob.includes(q);
    });

    list = [...list];
    if (sort === "recent") {
      list.sort((a, b) => (a.postedAt < b.postedAt ? 1 : a.postedAt > b.postedAt ? -1 : a.title.localeCompare(b.title)));
    } else if (sort === "title-asc") {
      list.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      list.sort((a, b) => b.title.localeCompare(a.title));
    }
    return list;
  }, [jobs, query, dept, type, workMode, location, sort]);

  const filterKey = useMemo(
    () => `${query}|${dept}|${type}|${workMode}|${location}|${sort}`,
    [query, dept, type, workMode, location, sort],
  );

  useEffect(() => {
    setPage(1);
  }, [filterKey]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  useEffect(() => {
    setExpandedId(null);
  }, [currentPage]);

  const paginated = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const hasFilters = Boolean(query.trim() || dept || type || workMode || location);

  function clearFilters() {
    setQuery("");
    setDept("");
    setType("");
    setWorkMode("");
    setLocation("");
    setSort("recent");
  }

  return (
    <div className="mt-10">
      <div className="relative">
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
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by job title, keyword, or requisition ID"
          className="w-full rounded-sm border border-white/[0.12] bg-[#0a0b0f] py-3 pl-10 pr-4 text-sm text-white placeholder:text-text-muted outline-none transition focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
          aria-label="Search positions"
        />
      </div>

      <div className="mt-10 lg:grid lg:grid-cols-[minmax(0,240px)_1fr] lg:gap-12 xl:grid-cols-[minmax(0,280px)_1fr] xl:gap-16">
        <aside className="mb-10 space-y-8 lg:mb-0" aria-label="Refine search">
          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-text-muted">Refine by</h2>
            <div className="mt-6 space-y-5 border-t border-white/[0.08] pt-6">
              <div>
                <label htmlFor="filter-dept" className="text-xs font-medium text-white">
                  Business unit
                </label>
                <select
                  id="filter-dept"
                  value={dept}
                  onChange={(e) => setDept((e.target.value || "") as JobDepartment | "")}
                  className={selectClass}
                >
                  <option value="">All business units</option>
                  {jobDepartments.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="filter-type" className="text-xs font-medium text-white">
                  Position type
                </label>
                <select id="filter-type" value={type} onChange={(e) => setType(e.target.value)} className={selectClass}>
                  <option value="">All types</option>
                  {typeOptions.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="filter-mode" className="text-xs font-medium text-white">
                  Work arrangement
                </label>
                <select id="filter-mode" value={workMode} onChange={(e) => setWorkMode(e.target.value)} className={selectClass}>
                  <option value="">All arrangements</option>
                  {workModeOptions.map((w) => (
                    <option key={w} value={w}>
                      {w}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="filter-loc" className="text-xs font-medium text-white">
                  Location
                </label>
                <select id="filter-loc" value={location} onChange={(e) => setLocation(e.target.value)} className={selectClass}>
                  <option value="">All locations</option>
                  {locationOptions.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {hasFilters ? (
              <button
                type="button"
                onClick={clearFilters}
                className="mt-6 text-xs font-medium text-accent hover:text-accent-muted"
              >
                Clear all filters
              </button>
            ) : null}
          </div>
        </aside>

        <div className="min-w-0">
          <div className="flex flex-col gap-4 border-b border-white/[0.1] pb-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-text-muted">
              <span className="font-semibold tabular-nums text-white">{filtered.length}</span>
              {" position"}
              {filtered.length === 1 ? "" : "s"} match your criteria
              {filtered.length > PAGE_SIZE ? (
                <span className="text-text-muted">
                  {" "}
                  · Showing {(currentPage - 1) * PAGE_SIZE + 1}–
                  {Math.min(currentPage * PAGE_SIZE, filtered.length)} of {filtered.length}
                </span>
              ) : null}
            </p>
            <div className="flex items-center gap-2">
              <label htmlFor="sort-positions" className="text-[11px] uppercase tracking-wider text-text-muted">
                Sort
              </label>
              <select
                id="sort-positions"
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className={`${selectClass} mt-0 max-w-[220px] py-2 text-xs`}
              >
                <option value="recent">Most recent</option>
                <option value="title-asc">Job title (A–Z)</option>
                <option value="title-desc">Job title (Z–A)</option>
              </select>
            </div>
          </div>

          {/* Desktop table header */}
          <div
            className="mt-4 hidden grid-cols-[minmax(0,1fr)_minmax(0,140px)_minmax(0,160px)_minmax(0,88px)_minmax(0,100px)_72px] gap-4 border-b border-white/[0.08] px-1 pb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-text-muted md:grid"
            role="row"
          >
            <span role="columnheader">Job title</span>
            <span role="columnheader">Business unit</span>
            <span role="columnheader">Location</span>
            <span role="columnheader">Type</span>
            <span role="columnheader">Posted</span>
            <span role="columnheader" className="text-right">
              Action
            </span>
          </div>

          <ul className="divide-y divide-white/[0.06]" role="list">
            {paginated.map((job) => {
              const open = expandedId === job.id;
              return (
                <li key={job.id} className="py-1">
                  <div className="rounded-sm md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,140px)_minmax(0,160px)_minmax(0,88px)_minmax(0,100px)_72px] md:items-center md:gap-4 md:px-1 md:py-3">
                    <div className="min-w-0 py-3 md:py-0">
                      <button
                        type="button"
                        onClick={() => setExpandedId(open ? null : job.id)}
                        className="text-left text-[15px] font-medium text-white underline-offset-2 hover:underline md:no-underline md:hover:underline"
                        aria-expanded={open}
                      >
                        {job.title}
                      </button>
                      <p className="mt-1 font-mono text-[10px] text-text-muted md:hidden">ID {job.id}</p>
                    </div>
                    <p className="hidden text-sm text-text-secondary md:block">{job.department}</p>
                    <p className="hidden text-sm text-text-secondary md:block">{job.location}</p>
                    <p className="hidden text-sm text-text-secondary md:block">{job.type}</p>
                    <p className="hidden text-sm tabular-nums text-text-secondary md:block">{formatPosted(job.postedAt)}</p>
                    <div className="hidden justify-end md:flex">
                      <Link
                        href={`/careers/apply/${job.id}`}
                        className="text-xs font-semibold text-accent hover:text-accent-muted"
                      >
                        Apply
                      </Link>
                    </div>
                    {/* Mobile meta row */}
                    <div className="flex flex-wrap gap-x-4 gap-y-1 border-b border-white/[0.05] pb-3 text-xs text-text-muted md:hidden">
                      <span>{job.department}</span>
                      <span>{job.location}</span>
                      <span>{job.type}</span>
                      <span className="tabular-nums">{formatPosted(job.postedAt)}</span>
                    </div>
                    <div className="flex gap-3 pb-3 md:hidden">
                      <Link
                        href={`/careers/apply/${job.id}`}
                        className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-sm border border-accent/40 bg-accent/10 text-xs font-semibold text-accent"
                      >
                        Apply
                      </Link>
                      <button
                        type="button"
                        onClick={() => setExpandedId(open ? null : job.id)}
                        className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-sm border border-white/[0.12] text-xs font-medium text-text-secondary"
                      >
                        {open ? "Hide details" : "View details"}
                      </button>
                    </div>
                  </div>
                  {open ? (
                    <div className="mb-4 border border-white/[0.08] bg-[#08090d] px-4 py-5 md:mb-2 md:ml-1 md:mr-1">
                      <p className="text-sm leading-relaxed text-text-secondary">{job.summary}</p>
                      <ul className="mt-4 space-y-2 border-t border-white/[0.06] pt-4 text-sm text-text-muted">
                        {job.highlights.map((h) => (
                          <li key={h} className="flex gap-2 pl-1">
                            <span className="text-accent" aria-hidden>
                              ·
                            </span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5 flex flex-wrap gap-3 border-t border-white/[0.06] pt-4">
                        <Link
                          href={`/careers/apply/${job.id}`}
                          className="inline-flex min-h-[44px] items-center justify-center rounded-sm bg-accent px-5 text-xs font-semibold text-white hover:bg-accent-deep"
                        >
                          Apply for this position
                        </Link>
                        <Link
                          href="/contact"
                          className="inline-flex min-h-[44px] items-center justify-center rounded-sm border border-white/[0.15] px-5 text-xs font-medium text-text-secondary hover:border-white/25 hover:text-white"
                        >
                          Contact recruiting
                        </Link>
                        <span className="self-center font-mono text-[10px] text-text-muted">Requisition {job.id}</span>
                      </div>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>

          {totalPages > 1 ? (
            <nav
              className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] pt-8 sm:flex-row"
              aria-label="Job results pages"
            >
              <p className="text-xs text-text-muted">
                Page <span className="tabular-nums text-white">{currentPage}</span> of{" "}
                <span className="tabular-nums text-white">{totalPages}</span>
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={currentPage <= 1}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  className="min-h-[44px] min-w-[44px] rounded-sm border border-white/[0.12] px-4 text-xs font-semibold text-text-secondary transition hover:border-accent/30 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                >
                  Previous
                </button>
                <div className="flex flex-wrap justify-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setPage(n)}
                      className={
                        n === currentPage
                          ? "min-h-[44px] min-w-[44px] rounded-sm bg-accent text-xs font-bold text-white"
                          : "min-h-[44px] min-w-[44px] rounded-sm border border-transparent text-xs font-medium text-text-muted hover:border-white/[0.1] hover:text-white"
                      }
                      aria-label={`Page ${n}`}
                      aria-current={n === currentPage ? "page" : undefined}
                    >
                      {n}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  disabled={currentPage >= totalPages}
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  className="min-h-[44px] min-w-[44px] rounded-sm border border-white/[0.12] px-4 text-xs font-semibold text-text-secondary transition hover:border-accent/30 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                >
                  Next
                </button>
              </div>
            </nav>
          ) : null}

          {filtered.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-sm text-text-muted">No positions match your search and filters.</p>
              <button type="button" onClick={clearFilters} className="mt-4 text-xs font-semibold text-accent hover:text-accent-muted">
                Reset search and filters
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
