import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import CaseStudies from "@/sections/CaseStudies";
import WhyChooseUs from "@/sections/WhyChooseUs";
import CTA from "@/sections/CTA";

export const metadata: Metadata = {
  title: { absolute: "Old West Solutions - IT Services" },
  description:
    "Find managed IT services, cloud infrastructure, and technology solutions: databases, storage, AI-ready compute, networking, and security — plus OldWest.net for integrated operator workflows. Based in Plano, Texas.",
  alternates: { canonical: "/" },
  openGraph: {
    title:
      "Old West Solutions — Managed IT, Cloud & Technology Solutions for Domain Operators",
    description:
      "Managed IT, cloud infrastructure, and tech solutions — multi-region systems, databases, AI-ready compute, and OldWest.net for operators who need one accountable partner.",
    url: "/",
  },
  twitter: {
    title:
      "Old West Solutions — IT Services, Cloud & Domain Infrastructure (Plano, TX)",
    description:
      "Managed IT, cloud infrastructure, and tech solutions — multi-region systems, databases, AI-ready compute, and OldWest.net for operators who need one accountable partner.",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080809] px-2.5 pb-2.5 pt-2.5 sm:px-4 sm:pb-4 sm:pt-4 md:px-5 md:pb-5 md:pt-5">
      <div className="relative mx-auto max-w-[1400px] overflow-x-clip rounded-[1.75rem] border border-white/[0.07] bg-[#111113] shadow-shell sm:rounded-[2rem]">
        <Navbar />
        <main id="main-content" className="bg-[#111113]">
          <Hero />
          <WhyChooseUs />
          <CaseStudies />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}
