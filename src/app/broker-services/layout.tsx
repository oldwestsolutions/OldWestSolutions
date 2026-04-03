import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Domain Broker Services",
  description:
    "Brokered domain acquisitions and sales through Old West Solutions — discreet outreach, pricing discipline, and closing support for high-value names.",
  alternates: { canonical: "/broker-services" },
  openGraph: {
    title: "Old West Solutions | Broker Services",
    description:
      "Professional domain brokerage for buyers and sellers who need a single accountable counterparty.",
    url: "/broker-services",
  },
};

export default function BrokerServicesLayout({ children }: { children: ReactNode }) {
  return children;
}
