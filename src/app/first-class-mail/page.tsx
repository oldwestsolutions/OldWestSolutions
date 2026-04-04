import LongFormPage from "@/components/LongFormPage";

export default function FirstClassMailPage() {
  return (
    <LongFormPage
      eyebrow="Products"
      title="First Class Mail"
      lead="First Class Mail is our top transactional mail tier — the program you use when receipts, statements, alerts, and lifecycle messages have to land, read cleanly, and stand up in reviews. Authentication, throughput, and reputation are operated as a service, not a one-off DNS tweak."
      sections={[
        {
          heading: "Deliverability you can defend",
          paragraphs: [
            "SPF, DKIM, DMARC, and aligned sending domains are baseline. We tune warm-up, complaint handling, and list hygiene with your compliance constraints in mind — so marketing and risk see the same numbers when someone asks why a cohort bounced.",
          ],
        },
        {
          heading: "Built for regulated and high-stakes flows",
          paragraphs: [
            "Use it for banking and fintech notices, healthcare-adjacent communications where your policies allow, and programs that mix traditional settlement with digital-asset events. Templates, localization, and suppression lists integrate with how your product already thinks about users and accounts.",
          ],
        },
        {
          heading: "Observability and operations",
          paragraphs: [
            "Dashboards cover delivery, latency, and provider health. When something drifts, runbooks and our team share the same signals — so you are not decoding vendor portals under incident pressure.",
          ],
        },
      ]}
      relatedLinks={[
        { label: "All products", href: "/products" },
        { label: "General Exchange", href: "/general-exchange" },
        { label: "Teleport", href: "/teleport" },
      ]}
      ctaHref="/book-appointment"
      ctaLabel="Book an appointment"
    />
  );
}
