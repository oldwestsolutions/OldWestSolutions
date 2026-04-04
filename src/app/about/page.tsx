import LongFormPage from "@/components/LongFormPage";

export default function AboutPage() {
  return (
    <LongFormPage
      eyebrow="Company"
      title="About Old West Solutions"
      lead="We are a technology company based in Plano, Texas. We help businesses set up and run the servers, storage, security, and tools they need — so they can focus on building great products for their customers."
      sections={[
        {
          heading: "What we do",
          paragraphs: [
            "We build and manage the technology that sits behind your website and your apps. That includes databases, file storage, computing power, email systems, and security — all working together as one system.",
            "Whether you need a single server or a setup that spans the globe, we design it, build it, and keep it running. You tell us what you need, and we handle the rest.",
          ],
        },
        {
          heading: "How we work",
          paragraphs: [
            "We start with a conversation. We listen to what you are building, look at what you already have, and recommend the right setup. No jargon, no pressure — just clear answers.",
            "Once we agree on a plan, our team sets everything up and monitors it around the clock. When something needs attention, real people are on the other end of the phone — not a chatbot.",
          ],
        },
        {
          heading: "Why businesses choose us",
          paragraphs: [
            "We keep things simple. One team, one contract, one place to see how everything is running. No juggling a dozen vendors. No surprise bills. Just reliable technology that works the way you expect it to.",
          ],
        },
      ]}
      relatedLinks={[
        { label: "Contact us", href: "/contact" },
        { label: "Careers", href: "/careers" },
        { label: "Managed Services", href: "/managed-services" },
      ]}
      ctaHref="/schedule-consultation"
      ctaLabel="Schedule A Consultation"
    />
  );
}
