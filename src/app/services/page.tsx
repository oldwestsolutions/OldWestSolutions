import LongFormPage from "@/components/LongFormPage";

export default function ServicesPage() {
  return (
    <LongFormPage
      eyebrow="Services"
      title="From architecture review to pager ownership"
      lead="Services span how we design, build, and run your estate — assessments and roadmaps, implementation and migration, and ongoing operations with SLAs your leadership can cite. Everything is scoped so security, finance, and engineering read the same statement of work."
      sections={[
        {
          heading: "Assessments and planning",
          paragraphs: [
            "We evaluate current state across cloud accounts, data stores, identity, networking, and domain posture. Deliverables include a prioritized backlog, risk register, and cost outlook — not a generic cloud readiness PDF.",
          ],
          bullets: [
            "Capacity and licensing reality vs. roadmap claims",
            "Data residency and compliance mapping to actual controls",
            "Domain and mail authentication health tied to product launches",
          ],
        },
        {
          heading: "Build, migrate, and harden",
          paragraphs: [
            "Implementation covers greenfield environments, lift-and-shift with modernization stops, and security hardening on existing stacks. We use infrastructure-as-code where appropriate, peer review every material change, and document rollback.",
          ],
        },
        {
          heading: "Operate and improve",
          paragraphs: [
            "Ongoing services include monitoring, incident response, backup verification, patching, and quarterly optimization. You get a single relationship for escalation — the same engineers who built the environment stay accountable for its behavior in production.",
          ],
        },
        {
          heading: "Specialized lanes",
          paragraphs: [
            "Dedicated lanes for AI inference and data platforms, multi-region active/active patterns, and edge programs (CDN, WAF, zero-trust access) that attach cleanly to the names and applications you already own.",
          ],
        },
      ]}
      relatedLinks={[
        { label: "Managed Services (capabilities detail)", href: "/managed-services" },
        { label: "Integration", href: "/integration" },
        { label: "Solutions overview", href: "/solutions" },
        { label: "Domains", href: "/domains" },
      ]}
      ctaHref="/schedule-consultation"
      ctaLabel="Schedule a consultation"
    />
  );
}
