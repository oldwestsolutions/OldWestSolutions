import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Portal",
  description:
    "Client and operator portal for OldWestSolutions — sign in to manage your environments and services.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/portal" },
};

export default function PortalLayout({ children }: { children: ReactNode }) {
  return children;
}
