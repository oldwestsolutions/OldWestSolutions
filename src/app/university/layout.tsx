import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "University",
  description:
    "Old West Solutions University — structured learning paths for operators on OldWest.net: architecture, APIs, runbooks, and safe hands-on practice.",
  alternates: { canonical: "/university" },
  openGraph: {
    title: "Old West Solutions — University",
    description:
      "Enablement and training for teams running distributed infrastructure on domains you operate.",
    url: "/university",
  },
  twitter: {
    title: "Old West Solutions — University",
  },
};

export default function UniversityLayout({ children }: { children: ReactNode }) {
  return children;
}
