import Link from "next/link";
import ImmersiveSiteShell from "@/components/ImmersiveSiteShell";
import { openRoles } from "@/lib/careers";
import JobsListing from "./JobsListing";

export default function CareersPage() {
  return (
    <ImmersiveSiteShell>
      <div className="min-h-[calc(100vh-12rem)] border-b border-white/[0.06] bg-[#08090e]">
        <div className="border-b border-white/[0.08] bg-[#05060a]">
          <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-3 sm:px-8">
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-text-muted">Careers</span>
            <Link href="/" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-text-muted transition hover:text-white">
              Old West Solutions
            </Link>
          </div>
        </div>

        <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-8 sm:py-14">
          <h1 className="font-serif text-[1.75rem] font-normal leading-tight tracking-tight text-white sm:text-4xl md:text-[2.25rem]">
            Find a position
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-muted">
            Search open roles by keyword or requisition ID. Narrow results by business unit, position type, work arrangement, and location.
          </p>
          <JobsListing jobs={openRoles} />
        </div>
      </div>

      <div className="border-t border-white/[0.06] bg-[#111113] px-4 py-8 text-center sm:px-8">
        <p className="mx-auto max-w-3xl text-[11px] leading-relaxed text-text-muted">
          Old West Solutions is an equal opportunity employer. We provide equal employment opportunities to all employees and applicants and
          prohibit discrimination and harassment of any type. If you require a reasonable accommodation to apply or interview, please note it
          in your application.
        </p>
      </div>
    </ImmersiveSiteShell>
  );
}
