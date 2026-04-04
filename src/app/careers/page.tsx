import LongFormPage from "@/components/LongFormPage";

export default function CareersPage() {
  return (
    <LongFormPage
      eyebrow="Company"
      title="Careers"
      lead="We are always looking for talented people who care about building reliable technology. If you like solving hard problems and helping businesses grow, we would love to talk."
      sections={[
        {
          heading: "Who we look for",
          paragraphs: [
            "We hire engineers, designers, and operations people who are curious, careful, and good at communicating. You do not need to know everything — but you do need to want to learn.",
          ],
        },
        {
          heading: "How we work",
          paragraphs: [
            "Our team is based in Plano, Texas. We value clear thinking, honest feedback, and shipping work that actually helps our customers. We keep meetings short and give people real ownership over their projects.",
          ],
        },
        {
          heading: "Get in touch",
          paragraphs: [
            "We do not always have open listings, but we are always open to meeting great people. Reach out through our contact page or schedule a conversation — tell us what you are good at and what you want to work on.",
          ],
        },
      ]}
      relatedLinks={[
        { label: "About us", href: "/about" },
        { label: "Contact us", href: "/contact" },
      ]}
      ctaHref="/contact"
      ctaLabel="Get In Touch"
    />
  );
}
