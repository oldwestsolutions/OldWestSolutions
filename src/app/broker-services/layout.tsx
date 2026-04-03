import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Broker Services",
  description:
    "Brokered domain acquisitions and sales through Old West Solutions — discreet outreach, pricing discipline, and closing support for high-value names.",
  alternates: { canonical: "/broker-services" },
  openGraph: {
    title: "Old West Solutions — Professional Domain Brokerage Services",
    description:
      "Professional domain brokerage for buyers and sellers who need a single accountable counterparty.",
    url: "/broker-services",
  },
  twitter: {
    title: "Old West Solutions — Domain Broker Services",
  },
};

export default function BrokerServicesLayout({ children }: { children: ReactNode }) {
  return children;
}
