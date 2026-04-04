import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Teleport",
  description:
    "Teleport — privileged access and session brokering on OldWest.net: SSH, RDP, databases, and Kubernetes APIs with identity, recording, and least-privilege defaults.",
  alternates: { canonical: "/teleport" },
  openGraph: {
    title: "Old West Solutions — Teleport",
    description:
      "Secure access to infrastructure and data planes without shipping static credentials across your estate.",
    url: "/teleport",
  },
  twitter: {
    title: "Old West Solutions — Teleport",
  },
};

export default function TeleportLayout({ children }: { children: ReactNode }) {
  return children;
}
