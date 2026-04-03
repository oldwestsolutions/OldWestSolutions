import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Managed Infrastructure Services",
  description:
    "Fully managed databases, storage, compute, networking, and security on platforms your team already trusts — 24/7 monitoring, backups, hardening, and direct engineer access.",
  alternates: { canonical: "/managed-services" },
  openGraph: {
    title: "Managed Infrastructure Services | OldWestSolutions",
    description:
      "Fully managed cloud infrastructure: databases, storage, AI-ready compute, orchestration, and edge security with continuous operations.",
    url: "/managed-services",
  },
};

export default function ManagedServicesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
