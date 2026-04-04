import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "News",
  description:
    "News and briefs from Old West Solutions — how we help customers with trusted records, service-oriented platforms, and governed production AI.",
  alternates: { canonical: "/systems" },
  openGraph: {
    title: "Old West Solutions — News & field briefs",
    description:
      "Company updates and architecture notes: shared ledgers, composable services, and governed AI — written for operators and leadership.",
    url: "/systems",
  },
  twitter: {
    title: "Old West Solutions — News",
  },
};

export default function SystemsLayout({ children }: { children: ReactNode }) {
  return children;
}
