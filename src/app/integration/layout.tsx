import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Systems Integration & API Connectivity",
  description:
    "Integration services from Old West Solutions — connect SaaS, data stores, identity, and custom APIs with managed delivery, observability, and runbooks.",
  alternates: { canonical: "/integration" },
  openGraph: {
    title: "Old West Solutions | Integration Services",
    description:
      "Enterprise integration: APIs, event pipelines, identity, and third-party systems with accountable engineering.",
    url: "/integration",
  },
};

export default function IntegrationLayout({ children }: { children: ReactNode }) {
  return children;
}
