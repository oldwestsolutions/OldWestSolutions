import MarketingPageShell from "@/components/MarketingPageShell";

export default function NewsPage() {
  return (
    <MarketingPageShell eyebrow="Company" title="News">
      <p>
        Short briefs from our team — what we are seeing in the field, what we
        shipped, and what it means for customers. On the{" "}
        <a href="/#news" className="text-accent underline-offset-2 hover:underline">
          home page
        </a>
        , the same stories appear as cards with Lead, Report, and Impact.
      </p>
      <p>
        Topics include shared records partners and auditors can trust, platform
        work that splits large apps into focused services, and governed AI so
        inference, budgets, and releases stay on one timeline.
      </p>
      <p>
        For project scoping, see{" "}
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
        . To reach us directly, visit{" "}
        <a href="/contact" className="text-accent underline-offset-2 hover:underline">
          Contact
        </a>
        .
      </p>
    </MarketingPageShell>
  );
}
