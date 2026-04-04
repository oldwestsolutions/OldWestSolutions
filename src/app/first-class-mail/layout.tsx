import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "First Class Mail",
  description:
    "First Class Mail — premium transactional email on OldWest.net: authentication, deliverability, reputation programs, and metrics for audits and QBRs.",
  alternates: { canonical: "/first-class-mail" },
  openGraph: {
    title: "Old West Solutions — First Class Mail",
    description:
      "Transactional mail with throughput, auth, and reputation tuned for regulated and high-volume programs.",
    url: "/first-class-mail",
  },
  twitter: {
    title: "Old West Solutions — First Class Mail",
  },
};

export default function FirstClassMailLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
