import MarketingPageShell from "@/components/MarketingPageShell";

export default function TransfersPage() {
  return (
    <MarketingPageShell eyebrow="Domains" title="Transfers">
      <p>
        Transfers fail when auth codes, locks, or contact handles are out of
        sync. We run a checklist-driven process for inbound and outbound moves:
        verify eligibility, reduce TTLs where appropriate, stage DNS and mail so
        cutover windows are predictable, and confirm resolution before you
        declare victory.
      </p>
      <p>
        For portfolios, we batch work and report status so your team is not
        chasing registrars one ticket at a time.
      </p>
    </MarketingPageShell>
  );
}
