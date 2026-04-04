import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Domains",
  description:
    "Domain strategy, acquisition, brokerage, and transfers with Old West Solutions — premium names, DNS readiness, TLS, mail authentication, and portfolio governance.",
  alternates: { canonical: "/domains" },
  openGraph: {
    title: "Old West Solutions — Domain Strategy, Acquisition & Transfers",
    description:
      "End-to-end domain programs for operators: discovery, brokerage, registrar moves, and production-ready DNS and mail.",
    url: "/domains",
  },
  twitter: {
    title: "Old West Solutions — Domains & Portfolio Services",
  },
};

export default function DomainsLayout({ children }: { children: ReactNode }) {
  return children;
}
