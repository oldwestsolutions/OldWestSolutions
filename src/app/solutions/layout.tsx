import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Solutions from Old West Solutions: managed infrastructure, systems integration, operator network (OldWest.net), and programs that span cloud, communications, and domain-led delivery.",
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "Old West Solutions — IT, Cloud & Integration Solutions",
    description:
      "Managed services, integration, and flagship network capabilities for teams that need one accountable operator.",
    url: "/solutions",
  },
  twitter: {
    title: "Old West Solutions — Technology Solutions Overview",
  },
};

export default function SolutionsLayout({ children }: { children: ReactNode }) {
  return children;
}
