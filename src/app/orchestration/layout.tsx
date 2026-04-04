import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Orchestration",
  description:
    "Orchestration services from Old West Solutions — containers, automation, pipelines, and runbooks so workloads deploy and scale on a single operational model.",
  alternates: { canonical: "/orchestration" },
  openGraph: {
    title: "Old West Solutions — Orchestration",
    description:
      "Coordinate applications, infrastructure, and releases with governed orchestration — from CI/CD targets to production guardrails.",
    url: "/orchestration",
  },
  twitter: {
    title: "Old West Solutions — Orchestration",
  },
};

export default function OrchestrationLayout({ children }: { children: ReactNode }) {
  return children;
}
