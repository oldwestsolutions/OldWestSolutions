import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Careers at Old West Solutions — join our team in Plano, Texas and help businesses build and run reliable technology.",
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
