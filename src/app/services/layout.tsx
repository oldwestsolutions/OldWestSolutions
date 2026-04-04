import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional services from Old West Solutions: assessments, architecture, migration, security hardening, cost governance, and ongoing operations across cloud, data, AI, and edge.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Old West Solutions — Professional & Managed IT Services",
    description:
      "Full-stack services from assessment through run: databases, storage, compute, networking, AI inference, and edge security.",
    url: "/services",
  },
  twitter: {
    title: "Old West Solutions — IT & Cloud Services",
  },
};

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return children;
}
