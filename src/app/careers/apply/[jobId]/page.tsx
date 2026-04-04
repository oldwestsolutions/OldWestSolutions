import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ImmersiveSiteShell from "@/components/ImmersiveSiteShell";
import { getJobById, jobApplicationIds } from "@/lib/careers";
import CareersApplyWizard from "./CareersApplyWizard";

type Props = {
  params: { jobId: string };
};

export function generateStaticParams() {
  return jobApplicationIds.map((jobId) => ({ jobId }));
}

export function generateMetadata({ params }: Props): Metadata {
  const job = getJobById(params.jobId);
  if (!job) return { title: "Apply" };
  return {
    title: `Apply — ${job.title}`,
    description: `Submit your application for ${job.title} at Old West Solutions (requisition ${job.id}).`,
    alternates: { canonical: `/careers/apply/${params.jobId}` },
  };
}

export default function CareersApplyPage({ params }: Props) {
  const job = getJobById(params.jobId);
  if (!job) notFound();

  return (
    <ImmersiveSiteShell>
      <CareersApplyWizard job={job} />
    </ImmersiveSiteShell>
  );
}
