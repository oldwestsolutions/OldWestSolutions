import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Fiber internet, broadband, phone systems, television, and network equipment from Old West Solutions — reliable connectivity and technology for homes and businesses in Plano, TX.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Old West Solutions — Internet, Phone, TV & Network Equipment",
    description:
      "Fiber internet, broadband, phone systems, television service, and professional-grade network equipment for homes and businesses.",
    url: "/products",
  },
  twitter: {
    title: "Old West Solutions — Internet, Phone, TV & Equipment",
  },
};

export default function ProductsLayout({ children }: { children: ReactNode }) {
  return children;
}
