import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Client Portal",
  description:
    "Secure client and operator portal for Old West Solutions — sign in to manage environments, services, and infrastructure.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/portal" },
};

export default function PortalLayout({ children }: { children: ReactNode }) {
  return children;
}
