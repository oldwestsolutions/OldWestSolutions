import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Network",
  description:
    "OldWest.net — the flagship operator network from Old West Solutions: markets, compute, communications, search, and mail on one disciplined surface with shared observability and controls.",
  alternates: { canonical: "/network" },
  openGraph: {
    title: "Old West Solutions — OldWest.net Operator Network & Flagship Platform",
    description:
      "Run markets, compute, communications, search, and mail through one accountable network — stablecoin and crypto-native flows where policy allows, with conventional settlement in the same contract.",
    url: "/network",
  },
  twitter: {
    title: "Old West Solutions — Network & OldWest.net",
  },
};

export default function NetworkLayout({ children }: { children: ReactNode }) {
  return children;
}
