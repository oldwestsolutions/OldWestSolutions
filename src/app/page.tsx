import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import CaseStudies from "@/sections/CaseStudies";
import WhyChooseUs from "@/sections/WhyChooseUs";
import CTA from "@/sections/CTA";

export const metadata: Metadata = {
  title: "Distributed Systems & Managed Infrastructure",
  description:
    "Multi-region data planes, managed services, and OldWest.net — the flagship network for domain-led operators. Databases, storage, AI-ready compute, and hardened edge delivery.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "OldWestSolutions | Distributed Systems & Managed Infrastructure",
    description:
      "Multi-region data planes, managed services, and OldWest.net — the flagship network for domain-led operators.",
    url: "/",
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
