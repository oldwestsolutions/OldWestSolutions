import LongFormPage from "@/components/LongFormPage";

export default function SolutionsPage() {
  return (
    <LongFormPage
      eyebrow="Solutions"
      title="Programs built for operators, not slide decks"
      lead="Solutions at Old West Solutions are how we package managed infrastructure, integration work, and the OldWest.net network into engagements your team can budget, audit, and run — with clear ownership, metrics, and change control from day one."
      sections={[
        {
          heading: "Managed infrastructure",
          paragraphs: [
            "We operate databases, object and block storage, compute, Kubernetes, inference endpoints, and edge security on the hyperscalers and platforms your enterprise already approves. Patching, backups, scaling, and incident response are ours; your product teams stay focused on customers.",
            "Every environment ships with monitoring, alerting, and runbooks your NOC can follow — plus direct access to the engineers who built the stack, not an anonymous queue.",
          ],
          bullets: [
            "24/7 monitoring and escalation paths with named contacts",
            "Tested recovery objectives aligned to your RPO/RTO story",
            "Cost and capacity reviews so growth does not surprise finance",
          ],
        },
        {
          heading: "Integration and connectivity",
          paragraphs: [
            "When SaaS, identity, data stores, and custom APIs need to behave as one system, we define contracts, implement pipelines, and operate integrations with the same observability standards as production services.",
            "We favor explicit interfaces, versioned changes, and rollback plans so releases do not become all-or-nothing events.",
          ],
        },
        {
          heading: "Operator network (OldWest.net)",
          paragraphs: [
            "OldWest.net is our flagship surface for markets-style execution, distributed compute, programmable communications, discovery, and transactional mail — with room for digital-asset rails where your policies allow, alongside conventional settlement telemetry in one contract.",
            "Solutions that touch the network are scoped with shared identity, logging, and controls so you are not reconciling three consoles after every release.",
          ],
        },
        {
          heading: "How engagements start",
          paragraphs: [
            "We begin with a structured assessment: workloads, compliance boundaries, existing vendors, and success metrics. From there we propose a phased plan — quick wins, hardening, and scale milestones — so procurement and engineering see the same roadmap.",
          ],
        },
      ]}
      relatedLinks={[
        { label: "Managed Services (detail)", href: "/managed-services" },
        { label: "Integration", href: "/integration" },
        { label: "Network", href: "/network" },
        { label: "Services overview", href: "/services" },
      ]}
      ctaHref="/schedule-consultation"
      ctaLabel="Schedule a consultation"
    />
  );
}
