import LongFormPage from "@/components/LongFormPage";

export default function ProductsPage() {
  return (
    <LongFormPage
      eyebrow="Products"
      title="Capability lines you can buy, meter, and defend"
      lead="Products on OldWest.net are discrete capability areas — markets and execution, compute and storage, communications, discovery, and mail — delivered through the same observability, contracts, and controls. You choose the mix; we operate the spine."
      sections={[
        {
          heading: "Markets & execution",
          paragraphs: [
            "Institutional-style execution workflows with limits, monitoring, and throughput designed for risk review — including support for digital-asset and stablecoin rails where your policies allow, without forking your operational story from conventional settlement.",
          ],
        },
        {
          heading: "Distributed compute & storage",
          paragraphs: [
            "GPU-aware capacity and durable tiers for workloads that mix traditional applications with chain-adjacent indexing, signing, or inference. Geography and residency are first-class inputs, not afterthoughts on a single cluster.",
          ],
        },
        {
          heading: "Programmable communications",
          paragraphs: [
            "Voice, SMS, and VoIP exposed API-first so lifecycle events, receipts, and alerts align with how value and state move through your systems — embeddable in your products with white-label friendly posture where required.",
          ],
        },
        {
          heading: "Discovery & transactional mail",
          paragraphs: [
            "Discovery and presence behind premium names, with mail programs tuned for authentication, throughput, and reputation — including programs that span cards, ACH, and digital-asset settlement with metrics you can show in audits and QBRs.",
          ],
        },
        {
          heading: "Packaging and commercials",
          paragraphs: [
            "Products are quoted and operated as metered or committed capacity with clear expansion paths. Finance sees line items that map to infrastructure reality; engineering sees APIs and SLOs that match what was sold.",
          ],
        },
      ]}
      relatedLinks={[
        { label: "Network overview", href: "/network" },
        { label: "Solutions", href: "/solutions" },
        { label: "Home — Network section", href: "/#about" },
      ]}
      ctaHref="/book-appointment"
      ctaLabel="Book an appointment"
    />
  );
}
