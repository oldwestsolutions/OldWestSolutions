import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "API reference, authentication, webhooks, and integration guides for Old West Solutions — OldWest.net, managed services, and operator tooling.",
  alternates: { canonical: "/documentation" },
  openGraph: {
    title: "Old West Solutions — Documentation",
    description:
      "REST APIs, webhooks, auth patterns, and operational guides for customers and integrators.",
    url: "/documentation",
  },
  twitter: {
    title: "Old West Solutions — Documentation",
  },
};

export default function DocumentationLayout({ children }: { children: ReactNode }) {
  return children;
}
