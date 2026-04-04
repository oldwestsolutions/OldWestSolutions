import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "News",
  description:
    "News and field briefs from Old West Solutions — lead, report, and impact updates on records, platform work, and governed AI.",
  alternates: { canonical: "/news" },
  openGraph: {
    title: "Old West Solutions — News",
    description:
      "Company news and briefs: trusted records, composable services, and production AI — written for customers and partners.",
    url: "/news",
  },
  twitter: {
    title: "Old West Solutions — News",
  },
};

export default function NewsLayout({ children }: { children: ReactNode }) {
  return children;
}
