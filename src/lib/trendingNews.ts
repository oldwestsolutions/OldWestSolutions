export type TrendingArticle = {
  slug: string;
  headline: string;
  shortLabel: string;
  category: string;
  publishedAt: string;
  byline: string;
  dek: string;
  paragraphs: string[];
};

export const trendingArticles: TrendingArticle[] = [
  {
    slug: "managed-it",
    shortLabel: "Managed IT",
    headline: "Managed IT contracts tighten SLAs as hybrid work stabilizes",
    category: "Operations",
    publishedAt: "2026-03-26",
    byline: "Old West Solutions — Network desk",
    dek:
      "Enterprises are rewriting runbooks around predictable response windows instead of best-effort support tickets.",
    paragraphs: [
      "North Texas businesses that standardized on hybrid schedules are no longer treating IT as a break-fix line item. Procurement teams are asking for named escalation paths, patch windows that do not collide with month-end close, and documentation auditors can trace.",
      "Old West Solutions has aligned managed-service tiers to those expectations: RMM coverage, backup verification, and security baselines ship as one package instead of three vendors pointing at each other.",
      "Early adopters report fewer weekend outages tied to unreviewed changes, and finance gets a single invoice line that maps to ticket volume and device counts.",
    ],
  },
  {
    slug: "fiber-rollout",
    shortLabel: "Fiber rollout",
    headline: "Fiber build pace holds as permit timelines compress in key corridors",
    category: "Infrastructure",
    publishedAt: "2026-03-21",
    byline: "Old West Solutions — Field programs",
    dek: "Coordinated permitting and as-built data are shaving weeks off neighborhood turn-ups.",
    paragraphs: [
      "Municipal GIS layers and joint-trench agreements are finally showing up in the same systems field crews use on tablets. That means fewer re-digs when a water mark conflicts with a planned bore path.",
      "Old West Solutions is standardizing photo closeouts and light-level readings at every pedestal so NOC can prove continuity before billing flips a circuit live.",
      "Retail and office parks are asking for redundant paths earlier in design; the article tracks how we stage backbone splices so customer drops do not wait on unrelated trunk work.",
    ],
  },
  {
    slug: "ai-governance",
    shortLabel: "AI governance",
    headline: "Governed AI rollouts get legal sign-off without freezing pilots",
    category: "Risk & compliance",
    publishedAt: "2026-03-18",
    byline: "Old West Solutions — Platform office",
    dek: "Model cards, data residency flags, and promotion gates are becoming part of normal CI/CD.",
    paragraphs: [
      "General counsel teams want receipts: which corpus trained which assistant, and which policy blocked a prompt. Ad-hoc ChatGPT tabs do not survive that scrutiny.",
      "We are wiring inference routes through the same change windows as production APIs — canaries, owners, and rollback owners on every model bump.",
      "The piece outlines how retention windows and redaction rules travel with embeddings so customer support copilots never leak cross-tenant context.",
    ],
  },
  {
    slug: "domain-strategy",
    shortLabel: "Domain strategy",
    headline: "Portfolio domains move from spreadsheet custody to registrar automation",
    category: "Digital assets",
    publishedAt: "2026-03-12",
    byline: "Old West Solutions — Domains practice",
    dek: "Renewal risk drops when DNS, TLS, and billing alerts share one owner view.",
    paragraphs: [
      "Holding companies still lose high-value names to expired cards and forgotten mailboxes. Registries are less forgiving than they were five years ago.",
      "Consolidated dashboards that show WHOIS, DNSSEC, and transfer locks in one pane are replacing quarterly audits in shared drives.",
      "We document how brand and legal can approve transfers without handing everyone raw registrar passwords.",
    ],
  },
  {
    slug: "security-review",
    shortLabel: "Security review",
    headline: "Quarterly security reviews shift from slide decks to live evidence",
    category: "Cybersecurity",
    publishedAt: "2026-03-09",
    byline: "Old West Solutions — Security office",
    dek: "Boards want to see patch latency and MFA coverage, not promises.",
    paragraphs: [
      "Static PDFs dated the day before the meeting are giving way to read-only dashboards fed by SSO, EDR, and cloud posture APIs.",
      "Old West Solutions bundles those signals for SMB and mid-market boards that do not run a 24/7 SOC but still carry cyber insurance questionnaires.",
      "The story walks through a sample review agenda: identity, edge, backups, and vendor fourth parties — each with a named accountable executive.",
    ],
  },
];

export function getTrendingArticle(slug: string): TrendingArticle | undefined {
  return trendingArticles.find((a) => a.slug === slug);
}
