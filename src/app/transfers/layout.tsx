import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Domain Transfers",
  description:
    "Inbound and outbound domain transfers with Old West Solutions — registrar coordination, auth codes, lock status, and post-transfer DNS and mail validation.",
  alternates: { canonical: "/transfers" },
  openGraph: {
    title: "Old West Solutions | Domain Transfers",
    description:
      "Move domains between registrars and operators with minimal downtime and auditable steps.",
    url: "/transfers",
  },
};

export default function TransfersLayout({ children }: { children: ReactNode }) {
  return children;
}
