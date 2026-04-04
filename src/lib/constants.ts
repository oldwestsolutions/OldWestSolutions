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
  { label: "Solutions", href: "/solutions" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Company", href: "/about" },
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
      "Evaluate your infrastructure requirements, domain portfolio, and platform needs to define the optimal deployment strategy across the Old West Solutions ecosystem.",
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
    title: "Partners adopt one shared ledger auditors can follow",
    industry: "Trust & records",
    problem:
      "USA — Teams still e-mail competing spreadsheets, so nobody trusts which file is official. Small mistakes show up in partner statements and renewals. Month-end close drags because finance reconciles the same rows twice.",
    solution:
      "Old West Solutions launched a shared record book where each line is time-stamped and chained to the previous entry. Partners, finance, and auditors open that single timeline instead of reconciling attachments and side files by hand.",
    outcome:
      "Early programs cite shorter close cycles, fewer fights over who changed what, and one leadership story that still works when auditors and partners push back.",
  },
  {
    title: "Operator retires monolith in favor of focused services",
    industry: "Platform",
    problem:
      "USA — One large application owned messaging, billing hooks, and status pages on the same release train. A bug in notifications could freeze a pricing fix. Incidents were noisy, and every deploy felt like moving a whole building.",
    solution:
      "Engineers split the stack into focused services behind versioned APIs for delivery, health checks, and telemetry. Teams scale or roll back one surface at a time without opening unrelated routes or shared binaries.",
    outcome:
      "Shipping cadence is up, on-call lands on a named service, and traffic spikes for one tenant no longer stall the entire product line.",
  },
  {
    title: "Governed AI layer keeps answers fast when traffic doubles",
    industry: "AI desk",
    problem:
      "USA — Models lived in notebooks and short GPU contracts with no scorecard everyone trusted. Finance could not tie spend to the answers customers saw live. At peak hours, nobody could swear which build was actually taking requests.",
    solution:
      "The team wired training, routing, and live inference to one control plane where budgets and data rules travel with each model. Latency and quality metrics stream in real time, and releases clear the same promotion gates as the rest of production.",
    outcome:
      "Executives see cost, model version, and performance in one view, and experiments graduate to full traffic without a second go-live playbook.",
  },
];

export type CaseStudy = (typeof caseStudies)[number];

/** Capability areas delivered through oldwest.net */
export const whyUs = [
  {
    title: "Fiber & Broadband Internet",
    description:
      "Fiber and broadband for streaming, remote work, and daily life — steady speeds when the whole house or office is online.",
  },
  {
    title: "Phone Systems",
    description:
      "Clear calls, voicemail, caller ID, and multi-line setups. Add hunt groups and forwarding when your business needs them.",
  },
  {
    title: "Television",
    description:
      "Live channels, on-demand, and DVR in one lineup — sports, news, and family shows without juggling extra apps.",
  },
  {
    title: "Installation & Support",
    description:
      "We install on-site, test your speeds, show you the basics, and pick up the phone when something needs a quick fix.",
  },
  {
    title: "Network Equipment",
    description:
      "Routers, modems, switches, and Wi‑Fi matched to your space and devices — coverage that holds up in every room.",
  },
];

export const footerLinks = [
  {
    title: "Services",
    links: [
      { label: "Domains", href: "/find-a-domain" },
      { label: "Network", href: "https://www.oldwest.net" },
      { label: "Cloud", href: "https://www.lubbock.cloud" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Managed Services", href: "/managed-services" },
      { label: "Orchestration", href: "/orchestration" },
      { label: "Integration", href: "/integration" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "General Exchange", href: "https://www.general.exchange" },
      { label: "First Class Mail", href: "https://www.firstclassmail.xyz" },
      { label: "Teleport", href: "https://www.teleport.services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "News", href: "/news" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/documentation" },
      { label: "University", href: "/university" },
      { label: "Shop", href: "/shop" },
    ],
  },
];
