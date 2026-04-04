import LongFormPage from "@/components/LongFormPage";

export default function DomainsPage() {
  return (
    <LongFormPage
      eyebrow="Domains"
      title="Names that ship as infrastructure, not shelf assets"
      lead="Domains are the contract between your brand, your customers, and every system that resolves traffic, mail, and trust. We help you acquire, protect, and operate them with the same discipline you expect from production infrastructure — not registrar defaults and ad-hoc spreadsheets."
      sections={[
        {
          heading: "Why domain work belongs in the operator stack",
          paragraphs: [
            "A premium name is only valuable when it is attached to authoritative DNS, correct TLS, authenticated mail, and change control your security team can audit. When those layers drift, you get deliverability incidents, certificate surprises, and acquisitions that look good on paper but fail in production.",
            "We treat the domain as part of the same lifecycle as databases and edge policy: inventory, owners, renewal windows, delegation boundaries, and runbooks for incident and transfer events.",
          ],
          bullets: [
            "Single view of portfolio, registrar, and delegation health",
            "Alignment between marketing intent and technical reality (SPF, DKIM, DMARC, MTA-STS where appropriate)",
            "Transfer and escrow paths that do not strand DNS or mail mid-migration",
          ],
        },
        {
          heading: "Acquisition and strategy",
          paragraphs: [
            "Whether you are defending a category, launching a regulated product, or consolidating after M&A, we help you shortlist names against linguistic, jurisdictional, and technical constraints — then execute outreach, negotiation, and closing with documentation your legal and finance teams can file.",
            "We bias toward names you can operate tomorrow: clean WHOIS posture where possible, registrar relationships that support automation, and DNS architecture that scales with multi-region or multi-cloud estates.",
          ],
        },
        {
          heading: "Brokerage and high-touch transfers",
          paragraphs: [
            "For high-value or sensitive acquisitions, we act as a counterparty-aware broker: discreet outreach, disciplined pricing narratives, and timelines that respect both buyer diligence and seller operational reality.",
            "Transfers are run with explicit pre-checks on locks, auth codes, contact handles, and post-transfer validation so you are not debugging resolution in the middle of a launch window.",
          ],
        },
        {
          heading: "Operational handoff",
          paragraphs: [
            "Once a name is yours, we align it with managed DNS patterns, monitoring, and mail programs that match how you already run oldwest.net-adjacent services. You get named engineers and clear escalation paths instead of generic registrar chat.",
          ],
        },
      ]}
      relatedLinks={[
        { label: "Find A Domain", href: "/find-a-domain" },
        { label: "Broker Services", href: "/broker-services" },
        { label: "Transfers", href: "/transfers" },
        { label: "Network (OldWest.net)", href: "/network" },
      ]}
      ctaHref="/book-appointment"
      ctaLabel="Book an appointment"
    />
  );
}
