"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Job } from "@/lib/careers";

type Props = {
  job: Job;
};

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  linkedin: string;
  coverLetter: string;
};

function buildMailto(job: Job, d: FormState) {
  const subject = encodeURIComponent(`Application: ${job.title} (${job.id})`);
  const body = encodeURIComponent(
    `Requisition ID: ${job.id}\nPosition: ${job.title}\nBusiness unit: ${job.department}\nLocation: ${job.location}\n\n` +
      `Full name: ${d.fullName}\nEmail: ${d.email}\nPhone: ${d.phone}\nLinkedIn (optional): ${d.linkedin || "—"}\n\n` +
      `Experience / cover letter:\n${d.coverLetter}\n\n` +
      `---\nAttach your résumé or CV to this email before sending.`,
  );
  return `mailto:careers@oldwestsolutions.com?subject=${subject}&body=${body}`;
}

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
const phoneOk = (v: string) => v.replace(/\D/g, "").length >= 10;

export default function CareersApplyWizard({ job }: Props) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>({
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    coverLetter: "",
  });
  const [done, setDone] = useState(false);

  const steps = useMemo(
    () => [
      { id: "overview", label: "Role" },
      { id: "contact", label: "Contact" },
      { id: "experience", label: "Experience" },
      { id: "review", label: "Review" },
    ],
    [],
  );

  const canAdvanceFromContact = form.fullName.trim().length >= 2 && emailOk(form.email) && phoneOk(form.phone);
  const canAdvanceFromExperience = form.coverLetter.trim().length >= 40;

  function goNext() {
    setStep((s) => Math.min(s + 1, steps.length - 1));
  }

  function goBack() {
    setStep((s) => Math.max(s - 1, 0));
  }

  function submitApplication() {
    window.location.href = buildMailto(job, form);
    setDone(true);
  }

  return (
    <div className="min-h-[calc(100vh-8rem)]">
      <div className="border-b border-white/[0.08] bg-[#05060a] px-4 py-4 sm:px-8">
        <div className="mx-auto flex max-w-3xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-text-muted">Application</p>
            <p className="mt-1 text-sm text-white">{job.title}</p>
            <p className="font-mono text-[10px] text-text-muted">Req {job.id}</p>
          </div>
          <Link
            href="/careers"
            className="text-xs font-medium text-accent hover:text-accent-muted"
          >
            ← Back to job search
          </Link>
        </div>
      </div>

      <div className="border-b border-white/[0.06] bg-[#08090e] px-4 py-6 sm:px-8">
        <div className="mx-auto flex max-w-3xl items-center gap-2">
          {steps.map((s, i) => (
            <div key={s.id} className="flex flex-1 items-center gap-2">
              <div
                className={
                  i <= step
                    ? "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white"
                    : "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.12] text-xs font-semibold text-text-muted"
                }
              >
                {i + 1}
              </div>
              {i < steps.length - 1 ? (
                <div className={`h-px flex-1 ${i < step ? "bg-accent/50" : "bg-white/[0.08]"}`} aria-hidden />
              ) : null}
            </div>
          ))}
        </div>
        <div className="mx-auto mt-3 flex max-w-3xl justify-between text-[10px] uppercase tracking-wider text-text-muted">
          {steps.map((s, i) => (
            <span key={s.id} className={i === step ? "text-accent" : ""}>
              {s.label}
            </span>
          ))}
        </div>
      </div>

      <div className="px-4 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-3xl">
          {done ? (
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.06] p-8 text-center">
              <h2 className="text-xl font-semibold text-white">Check your email client</h2>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                We opened a pre-filled message to <span className="text-white">careers@oldwestsolutions.com</span>. Attach your résumé, review
                the details, and send. If nothing opened, use the button below or copy your answers into a new email.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    window.location.href = buildMailto(job, form);
                  }}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-sm bg-accent px-6 text-sm font-semibold text-white hover:bg-accent-deep"
                >
                  Open application email again
                </button>
                <Link
                  href="/careers"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-sm border border-white/[0.15] px-6 text-sm font-medium text-text-secondary hover:text-white"
                >
                  Return to careers
                </Link>
              </div>
            </div>
          ) : (
            <>
              {step === 0 ? (
                <section className="space-y-6">
                  <h1 className="font-serif text-3xl font-normal tracking-tight text-white sm:text-4xl">Apply for this position</h1>
                  <p className="text-sm leading-relaxed text-text-muted">
                    You are applying for <span className="text-white">{job.title}</span> in {job.department}. This short flow collects your
                    contact details and a brief statement — then opens your email with everything filled in so you can attach a résumé and send.
                  </p>
                  <div className="rounded-xl border border-white/[0.08] bg-[#0c0d12] p-6">
                    <dl className="grid gap-3 text-sm sm:grid-cols-2">
                      <div>
                        <dt className="text-[10px] uppercase tracking-wider text-text-muted">Location</dt>
                        <dd className="mt-1 text-text-secondary">{job.location}</dd>
                      </div>
                      <div>
                        <dt className="text-[10px] uppercase tracking-wider text-text-muted">Type</dt>
                        <dd className="mt-1 text-text-secondary">{job.type}</dd>
                      </div>
                      <div>
                        <dt className="text-[10px] uppercase tracking-wider text-text-muted">Arrangement</dt>
                        <dd className="mt-1 text-text-secondary">{job.workMode}</dd>
                      </div>
                      <div>
                        <dt className="text-[10px] uppercase tracking-wider text-text-muted">Requisition</dt>
                        <dd className="mt-1 font-mono text-text-secondary">{job.id}</dd>
                      </div>
                    </dl>
                    <p className="mt-6 border-t border-white/[0.06] pt-6 text-sm leading-relaxed text-text-secondary">{job.summary}</p>
                  </div>
                  <button
                    type="button"
                    onClick={goNext}
                    className="inline-flex min-h-[48px] w-full items-center justify-center rounded-sm bg-accent px-8 text-sm font-semibold text-white hover:bg-accent-deep sm:w-auto"
                  >
                    Continue
                  </button>
                </section>
              ) : null}

              {step === 1 ? (
                <section className="space-y-6">
                  <h2 className="font-serif text-2xl font-normal text-white">Your contact information</h2>
                  <p className="text-sm text-text-muted">We use this to reach you about this requisition. It is included in your application email.</p>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="ca-name" className="text-xs font-medium text-white">
                        Full legal name
                      </label>
                      <input
                        id="ca-name"
                        autoComplete="name"
                        value={form.fullName}
                        onChange={(e) => setForm((f) => ({ ...f, fullName: e.target.value }))}
                        className="mt-1.5 w-full rounded-sm border border-white/[0.12] bg-[#0a0b0f] px-3 py-3 text-sm text-white outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
                      />
                    </div>
                    <div>
                      <label htmlFor="ca-email" className="text-xs font-medium text-white">
                        Email
                      </label>
                      <input
                        id="ca-email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        className="mt-1.5 w-full rounded-sm border border-white/[0.12] bg-[#0a0b0f] px-3 py-3 text-sm text-white outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
                      />
                    </div>
                    <div>
                      <label htmlFor="ca-phone" className="text-xs font-medium text-white">
                        Phone
                      </label>
                      <input
                        id="ca-phone"
                        type="tel"
                        autoComplete="tel"
                        value={form.phone}
                        onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                        className="mt-1.5 w-full rounded-sm border border-white/[0.12] bg-[#0a0b0f] px-3 py-3 text-sm text-white outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={goBack}
                      className="inline-flex min-h-[48px] items-center justify-center rounded-sm border border-white/[0.15] px-6 text-sm font-medium text-text-secondary hover:text-white"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      disabled={!canAdvanceFromContact}
                      onClick={goNext}
                      className="inline-flex min-h-[48px] items-center justify-center rounded-sm bg-accent px-8 text-sm font-semibold text-white hover:bg-accent-deep disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Continue
                    </button>
                  </div>
                </section>
              ) : null}

              {step === 2 ? (
                <section className="space-y-6">
                  <h2 className="font-serif text-2xl font-normal text-white">Experience & statement</h2>
                  <p className="text-sm text-text-muted">
                    Summarize relevant experience and why this role fits. This text is copied into your outgoing email — you can still edit
                    before sending.
                  </p>
                  <div>
                    <label htmlFor="ca-li" className="text-xs font-medium text-white">
                      LinkedIn profile (optional)
                    </label>
                    <input
                      id="ca-li"
                      type="url"
                      placeholder="https://"
                      value={form.linkedin}
                      onChange={(e) => setForm((f) => ({ ...f, linkedin: e.target.value }))}
                      className="mt-1.5 w-full rounded-sm border border-white/[0.12] bg-[#0a0b0f] px-3 py-3 text-sm text-white outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
                    />
                  </div>
                  <div>
                    <label htmlFor="ca-cl" className="text-xs font-medium text-white">
                      Cover letter / experience summary
                    </label>
                    <textarea
                      id="ca-cl"
                      rows={8}
                      value={form.coverLetter}
                      onChange={(e) => setForm((f) => ({ ...f, coverLetter: e.target.value }))}
                      className="mt-1.5 w-full resize-y rounded-sm border border-white/[0.12] bg-[#0a0b0f] px-3 py-3 text-sm text-white outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
                      placeholder="Minimum 40 characters."
                    />
                    <p className="mt-1 text-[11px] text-text-muted">{form.coverLetter.trim().length} / 40 minimum</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={goBack}
                      className="inline-flex min-h-[48px] items-center justify-center rounded-sm border border-white/[0.15] px-6 text-sm font-medium text-text-secondary hover:text-white"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      disabled={!canAdvanceFromExperience}
                      onClick={goNext}
                      className="inline-flex min-h-[48px] items-center justify-center rounded-sm bg-accent px-8 text-sm font-semibold text-white hover:bg-accent-deep disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Continue
                    </button>
                  </div>
                </section>
              ) : null}

              {step === 3 ? (
                <section className="space-y-6">
                  <h2 className="font-serif text-2xl font-normal text-white">Review & send</h2>
                  <p className="text-sm text-text-muted">
                    Confirm your details. The button below opens your default mail app with a completed message — attach your résumé before
                    sending.
                  </p>
                  <div className="rounded-xl border border-white/[0.08] bg-[#0c0d12] p-6 text-sm">
                    <div className="space-y-3 text-text-secondary">
                      <p>
                        <span className="text-[10px] uppercase tracking-wider text-text-muted">Name</span>
                        <br />
                        <span className="text-white">{form.fullName}</span>
                      </p>
                      <p>
                        <span className="text-[10px] uppercase tracking-wider text-text-muted">Email / Phone</span>
                        <br />
                        {form.email} · {form.phone}
                      </p>
                      {form.linkedin ? (
                        <p>
                          <span className="text-[10px] uppercase tracking-wider text-text-muted">LinkedIn</span>
                          <br />
                          {form.linkedin}
                        </p>
                      ) : null}
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-text-muted">Statement</span>
                        <p className="mt-2 whitespace-pre-wrap text-text-secondary">{form.coverLetter}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={goBack}
                      className="inline-flex min-h-[48px] items-center justify-center rounded-sm border border-white/[0.15] px-6 text-sm font-medium text-text-secondary hover:text-white"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={submitApplication}
                      className="inline-flex min-h-[48px] items-center justify-center rounded-sm bg-accent px-8 text-sm font-semibold text-white hover:bg-accent-deep"
                    >
                      Open email &amp; send application
                    </button>
                  </div>
                </section>
              ) : null}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
