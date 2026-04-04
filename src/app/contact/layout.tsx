import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Old West Solutions — reach our team by phone, email, or schedule a consultation to discuss your technology needs.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Old West Solutions — Contact Us",
    description:
      "Reach out to our team in Plano, Texas for a conversation about your infrastructure and technology needs.",
    url: "/contact",
  },
  twitter: {
    title: "Old West Solutions — Contact Us",
  },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
