import MarketingPageShell from "@/components/MarketingPageShell";

export default function OrchestrationPage() {
  return (
    <MarketingPageShell eyebrow="Solutions" title="Orchestration">
      <p>
        Orchestration is how we keep your apps, data, and infrastructure moving
        together — repeatable deploys, autoscaling, health checks, and rollbacks
        that behave the same in every environment, not as one-off scripts.
      </p>
      <p>
        We align containers, schedulers, pipelines, and observability so releases
        flow through clear gates: build, test, promote, and monitor with the
        same contracts your engineers and operators already use.
      </p>
      <p>
        Pair orchestration with{" "}
        <a
          href="/managed-services"
          className="text-accent underline-offset-2 hover:underline"
        >
          Managed Services
        </a>{" "}
        for day-two operations, or{" "}
        <a
          href="/integration"
          className="text-accent underline-offset-2 hover:underline"
        >
          Integration
        </a>{" "}
        when you need systems talking across APIs and events.
      </p>
    </MarketingPageShell>
  );
}
