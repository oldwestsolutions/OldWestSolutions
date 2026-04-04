import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About Old West Solutions — who we are, what we believe, and how we help businesses build and run the technology behind the domains they operate.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Old West Solutions — About Us",
    description:
      "Learn about our team, our mission, and how we help businesses with technology.",
    url: "/about",
  },
  twitter: {
    title: "Old West Solutions — About Us",
  },
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children;
}
