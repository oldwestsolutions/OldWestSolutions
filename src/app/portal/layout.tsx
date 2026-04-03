import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Portal",
  description:
    "Secure client and operator portal for Old West Solutions — sign in to manage environments, services, and infrastructure.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/portal" },
  openGraph: {
    title: "Old West Solutions — Client & Operator Portal",
  },
};

export default function PortalLayout({ children }: { children: ReactNode }) {
  return children;
}
