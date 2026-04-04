import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Schedule a Consultation",
  description:
    "Schedule a consultation with Old West Solutions — architecture review, domain and infrastructure planning, and scoping for managed services, integration, and OldWest.net programs.",
  alternates: { canonical: "/schedule-consultation" },
  openGraph: {
    title: "Old West Solutions — Schedule a Consultation",
    description:
      "Book time with our team to review workloads, compliance, domains, and cloud posture — no obligation scoping conversation.",
    url: "/schedule-consultation",
  },
  twitter: {
    title: "Old West Solutions — Schedule a Consultation",
  },
};

export default function ScheduleConsultationLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
