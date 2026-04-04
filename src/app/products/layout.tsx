import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Product capabilities on OldWest.net: markets and execution, distributed compute, programmable communications, discovery, and transactional mail — one operator network.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Old West Solutions — Products on OldWest.net",
    description:
      "Execution, compute, voice and SMS, discovery, and mail — integrated product lines under one network contract.",
    url: "/products",
  },
  twitter: {
    title: "Old West Solutions — Network Products",
  },
};

export default function ProductsLayout({ children }: { children: ReactNode }) {
  return children;
}
