import MarketingPageShell from "@/components/MarketingPageShell";

export default function NetworkPage() {
  return (
    <MarketingPageShell eyebrow="Network" title="Our flagship">
      <p>
        <strong className="font-semibold text-text-secondary">OldWest.net</strong>{" "}
        is the network we operate when your domain is the product — markets,
        compute, communications, search, and mail on one disciplined surface
        instead of a patchwork of vendors.
      </p>
      <p>
        Where your policies allow, digital-asset and stablecoin flows use the
        same contracts, telemetry, and controls as conventional settlement, so
        you are not maintaining parallel stacks every time the financial layer
        changes. Capability areas include execution, distributed compute,
        programmable communications, discovery, and transactional mail — all
        scoped under one operator relationship.
      </p>
      <p>
        On the homepage you can explore the full capability list and customer
        context; this page is the canonical landing spot when you need to share
        or bookmark how the network fits your roadmap.
      </p>
    </MarketingPageShell>
  );
}
