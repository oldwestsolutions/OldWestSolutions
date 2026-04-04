import MarketingPageShell from "@/components/MarketingPageShell";

export default function SystemsPage() {
  return (
    <MarketingPageShell eyebrow="News" title="Latest updates">
      <p>
        This page mirrors the News section on our homepage — short articles in
        the same lead / report / impact format you see there, written for
        customers, partners, and anyone following how we operate.
      </p>
      <p>
        Topics include trusted shared records for audits and partners,
        platform work that breaks big apps into focused services with clear
        APIs, and governed AI so inference, budgets, and releases stay in one
        story. The cards on the home page are updated from the same themes.
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
        — we scope projects under the same operator contract you read about in
        the news briefs.
      </p>
    </MarketingPageShell>
  );
}
