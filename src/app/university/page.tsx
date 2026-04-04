import LongFormPage from "@/components/LongFormPage";

export default function UniversityPage() {
  return (
    <LongFormPage
      eyebrow="Resources"
      title="University"
      lead="University is where your engineers, security, and operations teams learn how we run things — not generic cloud trivia, but the contracts, APIs, and runbooks that match what you actually bought. Paths are modular so onboarding does not block shipping."
      sections={[
        {
          heading: "Learning paths",
          paragraphs: [
            "Structured tracks cover network and edge posture, data and compute tiers, identity and access, mail and communications programs, and integration touchpoints with your estate. Each path pairs narrative context with exercises you can repeat in non-production sandboxes we provision for your org.",
          ],
        },
        {
          heading: "For operators and stakeholders",
          paragraphs: [
            "Technical staff get depth on failure modes, limits, and escalation. Product and program leads get enough architecture to scope honestly with customers and auditors. Finance and procurement see how metered capacity maps to line items — so renewals are a review, not a forensic project.",
          ],
        },
        {
          heading: "Access and cadence",
          paragraphs: [
            "University seats are included or add-on depending on your agreement. We run live cohorts on a published schedule and maintain self-serve modules that track completion. When platforms change, we version the curriculum and call out deltas instead of silently rewriting history.",
          ],
        },
      ]}
      relatedLinks={[
        { label: "Products overview", href: "/products" },
        { label: "Managed services", href: "/managed-services" },
        { label: "Integration", href: "/integration" },
      ]}
      ctaHref="/schedule-consultation"
      ctaLabel="Schedule a consultation"
    />
  );
}
