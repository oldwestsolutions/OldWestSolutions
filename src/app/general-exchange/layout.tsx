import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "General Exchange",
  description:
    "General Exchange on OldWest.net — institutional-style execution, limits, monitoring, and throughput for programs that span conventional and digital-asset settlement rails.",
  alternates: { canonical: "/general-exchange" },
  openGraph: {
    title: "Old West Solutions — General Exchange",
    description:
      "Execution workflows with controls and observability built for risk review and operational defense.",
    url: "/general-exchange",
  },
  twitter: {
    title: "Old West Solutions — General Exchange",
  },
};

export default function GeneralExchangeLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
