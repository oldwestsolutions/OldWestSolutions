import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Systems",
  description:
    "How Old West Solutions builds reliable systems — blockchain for trusted records, microservices for scalable architecture, and governed production AI with clear limits and live answers.",
  alternates: { canonical: "/systems" },
  openGraph: {
    title: "Old West Solutions — Blockchain, Microservices & Production AI",
    description:
      "Blockchain record-keeping, composable microservices, and governed AI for inference and production — architecture briefs from Old West Solutions.",
    url: "/systems",
  },
  twitter: {
    title: "Old West Solutions — Systems & Platform Architecture",
  },
};

export default function SystemsLayout({ children }: { children: ReactNode }) {
  return children;
}
