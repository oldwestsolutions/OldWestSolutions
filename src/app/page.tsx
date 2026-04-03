import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import TrustBar from "@/sections/TrustBar";
import Services from "@/sections/Services";
import Process from "@/sections/Process";
import CaseStudies from "@/sections/CaseStudies";
import Industries from "@/sections/Industries";
import WhyChooseUs from "@/sections/WhyChooseUs";
import CTA from "@/sections/CTA";
import { CinematicScrollSection } from "@/components/scroll";
import CinematicAccent from "@/components/illustrations/CinematicAccent";

const cinematicPhases = [
  {
    eyebrow: "Foundation",
    title: "Infrastructure built for leverage — not one-off launches.",
    subtitle:
      "We work with teams who treat software as a long-term asset: clear ownership, controlled risk, and systems that survive scale.",
  },
  {
    eyebrow: "Rigor",
    title: "Architecture first. Velocity second.",
    subtitle:
      "Constraints, compliance, and failure modes are aligned before engineering accelerates — so delivery stays predictable.",
  },
  {
    eyebrow: "Partnership",
    title: "Speed with control — from first deploy to steady state.",
    subtitle:
      "We stay in the loop through rollout, observability, and iteration until the platform earns trust in production.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />

        <CinematicScrollSection
          phases={cinematicPhases}
          sliceCount={8}
          heightVh={300}
          mobileHeightVh={240}
          imageSrc="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=80"
          imageAlt="Modern building exterior with structured glass lines"
          decoration={<CinematicAccent className="w-full h-8 sm:h-10" />}
        />

        <Services />
        <Process />
        <CaseStudies />
        <Industries />
        <WhyChooseUs />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
