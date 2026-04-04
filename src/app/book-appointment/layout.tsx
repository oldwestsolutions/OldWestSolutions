import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Book An Appointment",
  description:
    "Book an appointment with Old West Solutions — domain acquisition, managed infrastructure kickoff, integration projects, and OldWest.net onboarding.",
  alternates: { canonical: "/book-appointment" },
  openGraph: {
    title: "Old West Solutions — Book An Appointment",
    description:
      "Reserve time for working sessions, onboarding, or executive briefings with our operator team.",
    url: "/book-appointment",
  },
  twitter: {
    title: "Old West Solutions — Book An Appointment",
  },
};

export default function BookAppointmentLayout({ children }: { children: ReactNode }) {
  return children;
}
