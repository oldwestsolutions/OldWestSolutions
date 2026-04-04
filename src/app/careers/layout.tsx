import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Browse open roles at Old West Solutions in Plano and the DFW metro — field fiber technicians, NOC, network engineering, sales, customer experience, and more. Apply online.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Old West Solutions — Careers",
    description:
      "Explore open roles at Old West Solutions and help us build the infrastructure businesses rely on.",
    url: "/careers",
  },
  twitter: {
    title: "Old West Solutions — Careers",
  },
};

export default function CareersLayout({ children }: { children: ReactNode }) {
  return children;
}
