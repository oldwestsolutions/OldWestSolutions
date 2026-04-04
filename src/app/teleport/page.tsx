import LongFormPage from "@/components/LongFormPage";

export default function TeleportPage() {
  return (
    <LongFormPage
      eyebrow="Products"
      title="Teleport"
      lead="Teleport is our access plane for operators who outgrew shared jump boxes and long-lived keys. Engineers and break-glass roles reach production through short-lived credentials, enforced policy, and session artifacts your security team can actually review."
      sections={[
        {
          heading: "One front door to infrastructure",
          paragraphs: [
            "SSH, RDP, database proxies, and Kubernetes API access flow through the same identity provider and role model you already use. Users request access; approvals and time bounds apply before a session starts — not after something went wrong.",
          ],
        },
        {
          heading: "Recording and accountability",
          paragraphs: [
            "Sessions can be recorded and attributed to users and roles for investigations and compliance programs that require it. The goal is clarity under audit: who touched which system, when, and under what approval — without maintaining a parallel spreadsheet of keys.",
          ],
        },
        {
          heading: "Hybrid and multi-region reality",
          paragraphs: [
            "The service deploys alongside the rest of your OldWest.net footprint — cloud, colo, and edge-adjacent nodes — with consistent routing and monitoring. Expansion is a capacity conversation, not a new access silo per region.",
          ],
        },
      ]}
      relatedLinks={[
        { label: "All products", href: "/products" },
        { label: "General Exchange", href: "/general-exchange" },
        { label: "First Class Mail", href: "/first-class-mail" },
      ]}
      ctaHref="/book-appointment"
      ctaLabel="Book an appointment"
    />
  );
}
