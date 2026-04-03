import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Find a Domain",
  description:
    "Acquire premium and strategic domain names with Old West Solutions — discovery, negotiation support, DNS readiness, and integration with your operator stack.",
  alternates: { canonical: "/find-a-domain" },
  openGraph: {
    title: "Old West Solutions — Domain Acquisition, DNS & Premium Names",
    description:
      "Domain acquisition and activation for operators who need names that match product, brand, and compliance requirements.",
    url: "/find-a-domain",
  },
  twitter: {
    title: "Old West Solutions — Find a Domain & Portfolio Strategy",
  },
};

export default function FindDomainLayout({ children }: { children: ReactNode }) {
  return children;
}
