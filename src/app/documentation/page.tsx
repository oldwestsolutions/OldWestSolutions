import Link from "next/link";
import ImmersiveSiteShell from "@/components/ImmersiveSiteShell";

const nav = [
  { id: "overview", label: "Overview" },
  { id: "auth", label: "Authentication" },
  { id: "rest", label: "REST API" },
  { id: "webhooks", label: "Webhooks" },
  { id: "sdks", label: "SDKs & tools" },
  { id: "sla", label: "Limits & SLA" },
];

export default function DocumentationPage() {
  return (
    <ImmersiveSiteShell>
      <div className="border-b border-white/[0.06] bg-[#0e0e10] px-4 py-3 lg:hidden">
        <div className="flex gap-2 overflow-x-auto text-xs">
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="shrink-0 rounded-full border border-white/[0.1] px-3 py-1.5 text-text-secondary"
            >
              {n.label}
            </a>
          ))}
        </div>
      </div>
      <div className="lg:flex">
        {/* Sticky sidebar */}
        <aside className="hidden shrink-0 border-b border-white/[0.06] bg-[#0e0e10] lg:sticky lg:top-0 lg:block lg:w-56 lg:self-start lg:border-b-0 lg:border-r lg:px-6 lg:py-10 xl:w-64">
          <div className="label-caps text-accent">Docs</div>
          <nav className="mt-6 space-y-1 text-sm" aria-label="Documentation sections">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="block rounded-lg px-3 py-2 text-text-muted transition hover:bg-white/[0.04] hover:text-white"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </aside>

        <div className="min-w-0 flex-1">
          <section
            id="overview"
            className="scroll-mt-4 border-b border-white/[0.06] px-4 py-16 sm:px-8 lg:px-12 lg:py-20"
          >
            <div className="mx-auto max-w-3xl">
              <span className="label-caps text-accent">Resources</span>
              <h1 className="luxury-title mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Documentation
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-text-muted">
                Technical reference for integrating with Old West Solutions — APIs
                for provisioning, status, billing hooks, and event streams. All
                examples use TLS 1.2+ and JSON unless noted.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/[0.1] bg-white/[0.04] px-4 py-1.5 text-xs text-text-secondary">
                  Base URL: <code className="text-accent">api.oldwestsolutions.com</code>
                </span>
                <span className="rounded-full border border-white/[0.1] bg-white/[0.04] px-4 py-1.5 text-xs text-text-secondary">
                  API version: <code className="text-white/80">v1</code>
                </span>
              </div>
            </div>
          </section>

          <section
            id="auth"
            className="scroll-mt-4 border-b border-white/[0.06] bg-[#0c0c0e] px-4 py-16 sm:px-8 lg:px-12 lg:py-20"
          >
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold text-white">Authentication</h2>
              <p className="mt-4 text-text-muted">
                Use OAuth 2.0 client credentials for server-to-server calls, or
                long-lived API keys scoped to environments (sandbox / production).
                Rotate keys from the operator portal when it is enabled for your
                org.
              </p>
              <pre className="mt-6 overflow-x-auto rounded-xl border border-white/[0.08] bg-[#080809] p-5 text-left text-xs leading-relaxed text-emerald-400/90 sm:text-sm">
                {`curl -s https://api.oldwestsolutions.com/v1/status \\
  -H "Authorization: Bearer $OWS_TOKEN" \\
  -H "Accept: application/json"`}
              </pre>
            </div>
          </section>

          <section
            id="rest"
            className="scroll-mt-4 border-b border-white/[0.06] px-4 py-16 sm:px-8 lg:px-12 lg:py-20"
          >
            <div className="mx-auto max-w-4xl">
              <h2 className="text-2xl font-bold text-white">REST API highlights</h2>
              <p className="mt-4 max-w-2xl text-text-muted">
                Idempotent writes where applicable; <code className="text-white/70">Idempotency-Key</code>{" "}
                header supported on POST.
              </p>
              <div className="mt-8 overflow-x-auto rounded-xl border border-white/[0.06]">
                <table className="w-full min-w-[600px] text-left text-sm">
                  <thead className="border-b border-white/[0.06] bg-white/[0.03] text-xs uppercase tracking-wider text-text-muted">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Method</th>
                      <th className="px-4 py-3 font-semibold">Endpoint</th>
                      <th className="px-4 py-3 font-semibold">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.04] text-text-secondary">
                    <tr>
                      <td className="px-4 py-3 font-mono text-accent">GET</td>
                      <td className="px-4 py-3 font-mono text-xs">/v1/status</td>
                      <td className="px-4 py-3">Account and region health snapshot.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-accent">GET</td>
                      <td className="px-4 py-3 font-mono text-xs">/v1/services</td>
                      <td className="px-4 py-3">Managed services and SKUs on contract.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-accent">POST</td>
                      <td className="px-4 py-3 font-mono text-xs">/v1/events/ingest</td>
                      <td className="px-4 py-3">Inbound application events (signed payload).</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-accent">GET</td>
                      <td className="px-4 py-3 font-mono text-xs">/v1/domains</td>
                      <td className="px-4 py-3">Domains under management (read-only).</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-accent">POST</td>
                      <td className="px-4 py-3 font-mono text-xs">/v1/tickets</td>
                      <td className="px-4 py-3">Open support or change request.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section
            id="webhooks"
            className="scroll-mt-4 border-b border-white/[0.06] bg-[#0c0c0e] px-4 py-16 sm:px-8 lg:px-12 lg:py-20"
          >
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold text-white">Webhooks</h2>
              <p className="mt-4 text-text-muted">
                Subscribe to <code className="text-white/80">deployment.completed</code>,{" "}
                <code className="text-white/80">invoice.finalized</code>, and{" "}
                <code className="text-white/80">incident.updated</code>. Each delivery
                includes an <code className="text-white/80">OWS-Signature</code> header
                (HMAC-SHA256) for verification.
              </p>
              <pre className="mt-6 overflow-x-auto rounded-xl border border-white/[0.08] bg-[#080809] p-5 text-xs text-emerald-400/90 sm:text-sm">
                {`{
  "id": "evt_8f2a…",
  "type": "deployment.completed",
  "created": 1710000000,
  "data": { "environment": "production", "revision": "abc123" }
}`}
              </pre>
            </div>
          </section>

          <section
            id="sdks"
            className="scroll-mt-4 border-b border-white/[0.06] px-4 py-16 sm:px-8 lg:px-12 lg:py-20"
          >
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold text-white">SDKs & tools</h2>
              <ul className="mt-6 space-y-4 text-text-muted">
                <li className="flex gap-3">
                  <span className="text-accent">▸</span>
                  <span>
                    <strong className="text-white">OpenAPI 3.1</strong> — Download the
                    machine-readable spec from your onboarding pack; public export
                    coming to this portal.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">▸</span>
                  <span>
                    <strong className="text-white">Terraform provider</strong> —{" "}
                    Infrastructure modules for common managed patterns (beta by
                    request).
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">▸</span>
                  <span>
                    <strong className="text-white">CLI</strong> — Authenticate, tail
                    logs, and trigger approved runbooks from your terminal.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <section
            id="sla"
            className="scroll-mt-4 px-4 py-16 sm:px-8 lg:px-12 lg:py-20"
          >
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold text-white">Limits & SLA</h2>
              <p className="mt-4 text-text-muted">
                Default rate limit: <strong className="text-white">1200 requests / minute</strong>{" "}
                per API key (burst allowed). Higher tiers available in enterprise
                agreements. API availability targets match your managed services
                schedule of services.
              </p>
              <div className="mt-10 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#1a1a1e] to-[#121214] p-8 text-center">
                <p className="text-sm text-text-muted">
                  Need a signed PDF, IP allowlist, or dedicated endpoint cluster?
                </p>
                <Link
                  href="/#contact"
                  className="mt-4 inline-flex min-h-[48px] items-center justify-center rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white shadow-glow hover:bg-accent-deep"
                >
                  Contact solutions engineering
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </ImmersiveSiteShell>
  );
}
