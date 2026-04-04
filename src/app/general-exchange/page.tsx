import LongFormPage from "@/components/LongFormPage";

export default function GeneralExchangePage() {
  return (
    <LongFormPage
      eyebrow="Products"
      title="General Exchange"
      lead="General Exchange is our markets and execution line — workflow, limits, and telemetry designed for teams that need institutional posture without standing up a separate trading stack. You define policy; we operate the path from intent to settlement across the rails your program is cleared to use."
      sections={[
        {
          heading: "Execution with guardrails",
          paragraphs: [
            "Orders and transfers move through monitored pipelines with explicit limits, approvals where you require them, and audit-friendly logs. The goal is predictable behavior under load — not heroics on a single operator console.",
          ],
        },
        {
          heading: "Rails you can explain",
          paragraphs: [
            "Programs can span cards, ACH, wires, and digital-asset or stablecoin settlement where your legal and risk posture allows. The same operational story applies: one contract, one observability model, and line items finance can map to reality.",
          ],
        },
        {
          heading: "Who it fits",
          paragraphs: [
            "Issuers, broker-dealer adjacent programs, fintechs with treasury and payout complexity, and enterprises running internal liquidity or rewards at scale. We scope capacity, regions, and integration points as part of onboarding — not as a surprise change order later.",
          ],
        },
      ]}
      relatedLinks={[
        { label: "All products", href: "/products" },
        { label: "First Class Mail", href: "/first-class-mail" },
        { label: "Teleport", href: "/teleport" },
      ]}
      ctaHref="/book-appointment"
      ctaLabel="Book an appointment"
    />
  );
}
