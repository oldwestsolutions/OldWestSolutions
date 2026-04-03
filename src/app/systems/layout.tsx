import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Systems",
  description:
    "How Old West Solutions engineers distributed systems, microservices, and governed AI — architecture notes on security, communications workloads, and inference for finance and infrastructure teams.",
  alternates: { canonical: "/systems" },
  openGraph: {
    title: "Old West Solutions — Distributed Systems, Microservices & AI Architecture",
    description:
      "Security posture across tiers, composable communications services, and governed AI capacity — concise architecture briefs for operators who need one honest story from DNS to inference.",
    url: "/systems",
  },
  twitter: {
    title: "Old West Solutions — Systems & Platform Architecture",
  },
};

export default function SystemsLayout({ children }: { children: ReactNode }) {
  return children;
}
