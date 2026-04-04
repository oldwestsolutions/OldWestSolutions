import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Shop hardware, add-ons, and service packages from Old West Solutions — routers, equipment, and bundles aligned with your install.",
  alternates: { canonical: "/shop" },
  openGraph: {
    title: "Old West Solutions — Shop",
    description:
      "Browse equipment and service add-ons. Our team helps you pick the right gear for your space and connection.",
    url: "/shop",
  },
  twitter: {
    title: "Old West Solutions — Shop",
  },
};

export default function ShopLayout({ children }: { children: ReactNode }) {
  return children;
}
