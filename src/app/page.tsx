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
import {
  CinematicScrollSection,
  ScrollRevealImageSection,
  PinnedSection,
} from "@/components/scroll";
import {
  ArchitectureFrame,
  OrbitalNodes,
  LayeredStack,
} from "@/components/illustrations/ScrollIllustrations";

const cinematicPhases = [
  {
    eyebrow: "Narrative",
    title: "Systems engineered for leverage — not launches.",
    subtitle:
      "We partner with teams who treat software as core infrastructure: measured, sovereign, and built to endure market cycles.",
  },
  {
    eyebrow: "Discipline",
    title: "Clarity before code. Architecture before acceleration.",
    subtitle:
      "Every engagement begins with hard constraints: risk, compliance, throughput, and the real cost of getting it wrong.",
  },
  {
    eyebrow: "Partnership",
    title: "The velocity you need — with the control you cannot compromise.",
    subtitle:
      "From discovery to scale, we stay in the critical path until your platform earns trust across stakeholders and production traffic.",
  },
];

const pinnedPrinciples = [
  {
    kicker: "01 — Intent",
    title: "Map the system, not the slide deck.",
    description:
      "We align on outcomes, failure modes, and non‑negotiables before a line of production code ships.",
  },
  {
    kicker: "02 — Structure",
    title: "Modular cores. Predictable boundaries.",
    description:
      "Interfaces, data contracts, and deployment paths are designed so teams can evolve without gridlock.",
  },
  {
    kicker: "03 — Execution",
    title: "Measured delivery. Always visible.",
    description:
      "Demos, traces, and operational dashboards keep leadership and engineering in the same reality.",
  },
  {
    kicker: "04 — Longevity",
    title: "Scale is a phase — sustainability is the product.",
    description:
      "Performance budgets, runbooks, and cost guardrails are part of the build, not an afterthought.",
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
          sliceCount={9}
          heightVh={300}
          mobileHeightVh={240}
          imageSrc="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=80"
          imageAlt="Modern architecture and glass facade at dusk"
          decoration={<OrbitalNodes className="w-full h-auto max-h-[160px] text-white" />}
        />

        <Services />

        <ScrollRevealImageSection
          eyebrow="Spatial continuity"
          title="Engineering depth, expressed in calm surfaces."
          caption="Layered infrastructure — APIs, data paths, and control planes — revealed gradually as you move through the narrative. Nothing shouts; everything holds weight."
          slices={8}
          heightVh={280}
          mobileHeightVh={220}
          imageSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
          imageAlt="Minimal corporate interior with natural light"
          illustration={<ArchitectureFrame className="w-full max-w-md mx-auto h-auto" />}
        />

        <Process />

        <PinnedSection
          eyebrow="Pinned sequence"
          headline="How we hold the line while you move fast."
          subline="A scroll‑locked moment: the same viewport, evolving intent — until the story resolves and the page breathes again."
          steps={pinnedPrinciples}
          heightVh={280}
          mobileHeightVh={210}
          illustration={<LayeredStack className="w-full max-w-lg mx-auto h-auto" />}
        />

        <CaseStudies />
        <Industries />
        <WhyChooseUs />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
