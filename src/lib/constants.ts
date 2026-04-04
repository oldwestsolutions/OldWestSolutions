/** Public-company stacks referenced on-site (CTA trust band, etc.) */
export const infrastructureVendors = [
  "Amazon Web Services",
  "Microsoft Azure",
  "Google Cloud",
  "Oracle Cloud",
  "IBM Cloud",
  "Cloudflare",
  "Akamai",
  "Snowflake",
  "MongoDB",
  "Datadog",
  "Palo Alto Networks",
  "CrowdStrike",
];

export const navLinks = [
  { label: "Domains", href: "/domains" },
  { label: "Solutions", href: "/solutions" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
];

export const services = [
  {
    title: "Full-stack delivery with every domain",
    description:
      "Beyond transfer and DNS: we can architect and run the environment behind the name — authoritative DNS, TLS, application hosting, email authentication, and operational runbooks — so the asset is production-ready rather than an empty hostname.",
    icon: "blocks",
  },
  {
    title: "Managed databases",
    description:
      "Relational and document engines on tier-one hyperscaler platforms — provisioning, automated backups, point-in-time recovery, read replicas, parameter tuning, and connection pooling matched to transactional or analytical workloads.",
    icon: "database",
  },
  {
    title: "Durable storage & data lifecycle",
    description:
      "Object, block, and file services with versioning, lifecycle rules, cross-region replication, and cold tiers — structured for media libraries, application state, logs, and long-retention compliance without manual tape logic.",
    icon: "cloud",
  },
  {
    title: "AI, inference & data platforms",
    description:
      "GPU-backed inference, managed model endpoints, vector search, streaming ingestion, and batch pipelines — enough depth to ship RAG, embeddings, and internal copilots without standing up an entire ML platform org.",
    icon: "spark",
  },
  {
    title: "Compute, containers & orchestration",
    description:
      "Bare metal, VMs, autoscaling groups, containers, and Kubernetes — hardened images, secrets management, service boundaries, and CI/CD integration for teams that outgrow a single box but still want operator discipline.",
    icon: "cpu",
  },
  {
    title: "Network edge, security & observability",
    description:
      "Global load balancing, CDN and WAF placement, private connectivity, structured logging, metrics, tracing, and alerting — composed as one operational surface so incidents are visible before customers are.",
    icon: "trending",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Assessment",
    description:
      "Evaluate your infrastructure requirements, domain portfolio, and platform needs to define the optimal deployment strategy across the OldWestSolutions ecosystem.",
  },
  {
    step: "02",
    title: "Domain & Infrastructure Planning",
    description:
      "Secure premium domains, architect server environments, and select the right combination of ecosystem platforms — OldWest, FirstClassMail, Teleport, or Lubbock.Cloud.",
  },
  {
    step: "03",
    title: "Platform Deployment",
    description:
      "Provision and configure infrastructure across compute, communication, and search layers with automated pipelines, DNS integration, and production-grade security.",
  },
  {
    step: "04",
    title: "Integration & Activation",
    description:
      "Connect ecosystem services — email delivery through FirstClassMail, voice via Teleport, compute through Lubbock.Cloud — into a unified, operational system.",
  },
  {
    step: "05",
    title: "Monitoring & Scaling",
    description:
      "Continuous observability, performance optimization, and horizontal scaling to ensure every platform in your deployment grows with your operational demands.",
  },
];

export const caseStudies = [
  {
    title: "One security story from DNS and mail through application tiers",
    industry: "Security",
    problem:
      "When discovery, encrypted mail, and applications are protected by different consoles and policies, gaps show up in TLS, identity, logging, and incident response — and audits rarely match how traffic actually flows.",
    solution:
      "Security is run as a single program: consistent identity and access patterns, certificate and key lifecycle, mail authentication at scale, and edge controls tied to the same inventory as your names and workloads.",
    outcome:
      "Teams defend one coherent posture from resolution through messaging and apps — fewer blind spots, faster triage, and evidence that lines up when stakeholders ask hard questions.",
    tags: ["Security", "Zero trust", "TLS", "Identity"],
  },
  {
    title: "Composable microservices for communications workloads",
    industry: "Microservices",
    problem:
      "Integrators were forced into monolithic adapters whenever delivery, reputation, and session telemetry shipped on different release cycles — slowing reviews and making tenant-wide incidents hard to trace.",
    solution:
      "Communications capabilities are exposed as focused microservices: delivery, reputation, and session data behind versioned APIs and contracts, so partners compose one tenant timeline without a single fat binary or shared schema coupling everything.",
    outcome:
      "Smaller deployable units, independent scaling, and shared observability cut time-to-innocence on deliverability and quality tickets while staying suitable for white-label enterprise programs.",
    tags: ["Microservices", "APIs", "Observability", "Tenancy"],
  },
  {
    title: "Governed AI instead of ad-hoc GPU jobs",
    industry: "AI",
    problem:
      "Notebook-style GPU jobs and opaque spend made it impossible to run models as production AI — with budgets, residency, burst during campaigns, and clear handoff between experiments and always-on serving.",
    solution:
      "Inference layers combine tokenized capacity, policy-aware routing, and multi-region placement so workloads behave as governed AI: measurable units, controlled expansion, and room to spike without idle long-term locks.",
    outcome:
      "Teams align model serving with revenue and compliance events, balance burst against steady-state cost, and keep data residency and failover explicit instead of an afterthought on a single cluster.",
    tags: ["AI", "Inference", "Governance", "Multi-region"],
  },
];

/** Capability areas delivered through oldwest.net */
export const whyUs = [
  {
    title: "Markets & execution",
    description:
      "Execution on oldwest.net treats digital assets, stablecoins, and conventional rails with the same operational rigor — limits, monitoring, and throughput your risk function can sign off on.",
  },
  {
    title: "Distributed compute & storage",
    description:
      "GPU-aware capacity and durable tiers that stay coherent when workloads mix everyday applications with chain-adjacent indexing, signing, or inference — one distributed fabric, not a patchwork of silos.",
  },
  {
    title: "Programmable communications",
    description:
      "Voice, SMS, and VoIP exposed API-first so receipts, alerts, and lifecycle messages can align with how value actually moves — programmable hooks without a separate console for every rail.",
  },
  {
    title: "Search & discovery",
    description:
      "Discovery and presence behind premium names — routing and signals that can respect both traditional web identity and on-chain context where your policies allow, without fragmenting the operator story.",
  },
  {
    title: "Transactional mail",
    description:
      "Authentication, throughput, and reputation tuned for programs that span cards, bank rails, and digital-asset settlement — inbox delivery with metrics you can defend in audits and reviews.",
  },
];

export const footerLinks = [
  {
    title: "Domains",
    links: [
      { label: "Find A Domain", href: "/find-a-domain" },
      { label: "Broker Services", href: "/broker-services" },
      { label: "Transfers", href: "/transfers" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Managed Services", href: "/managed-services" },
      { label: "Integration", href: "/integration" },
      { label: "Network", href: "/network" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Markets & execution", href: "/#about" },
      { label: "Communications", href: "/#about" },
      { label: "Transactional mail", href: "/#about" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/#about" },
      { label: "Contact", href: "/#contact" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [{ label: "Documentation", href: "#" }],
  },
];
