import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Managed IT & Cloud Infrastructure Services",
  description:
    "Managed IT services and cloud infrastructure: 24/7 monitoring, databases, backups, compute, networking, and security hardening on AWS, Azure, GCP, and leading platforms — direct engineer access from Old West Solutions.",
  alternates: { canonical: "/managed-services" },
  openGraph: {
    title:
      "Old West Solutions | Managed IT Services & Cloud Infrastructure",
    description:
      "Outsource day-to-day IT operations: managed databases, storage, Kubernetes, AI inference, edge security, and compliance-minded runbooks.",
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
