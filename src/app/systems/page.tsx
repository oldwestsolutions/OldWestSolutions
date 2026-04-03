import MarketingPageShell from "@/components/MarketingPageShell";

export default function SystemsPage() {
  return (
    <MarketingPageShell eyebrow="Systems" title="The difference">
      <p>
        We publish short architecture briefs on how we run capacity, service
        boundaries, and inference when your products span traditional settlement
        and digital-asset programs — so infrastructure and finance teams read
        from the same facts.
      </p>
      <p>
        Themes include unified security from DNS and mail through applications,
        microservices for communications workloads with clear API contracts, and
        governed AI capacity instead of ad-hoc GPU spend. The homepage Systems
        section illustrates representative challenge / solution / outcome cards;
        this page anchors the topic for search, proposals, and internal
        alignment.
      </p>
      <p>
        For a deeper engagement, start from{" "}
        <a
          href="/managed-services"
          className="text-accent underline-offset-2 hover:underline"
        >
          Managed Services
        </a>{" "}
        or{" "}
        <a
          href="/integration"
          className="text-accent underline-offset-2 hover:underline"
        >
          Integration
        </a>
        — we scope systems work as part of the same operator contract.
      </p>
    </MarketingPageShell>
  );
}
