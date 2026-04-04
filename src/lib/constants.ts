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
      "PLANO — Operations teams still trade spreadsheets over email, so nobody agrees which version is official. Small errors creep into partner statements, and month-end reviews drag because every line has to be checked twice.",
    solution:
      "Old West Solutions introduced a shared record book where each entry is time-stamped and chained to the previous one. Partners, finance, and auditors now open the same timeline instead of reconciling attachments side by side.",
    outcome:
      "Early programs report shorter close cycles, fewer arguments over who changed what, and a single story leadership can stand behind when questions come from the outside.",
  },
  {
    title: "Operator retires monolith in favor of focused services",
    industry: "Platform",
    problem:
      "FIELD REPORT — One large application handled messaging, billing hooks, and status pages together. A bug in notifications could freeze a pricing fix, incidents were noisy, and every deploy felt like moving a whole building.",
    solution:
      "Engineers carved the stack into smaller services behind versioned APIs: delivery here, health checks there, telemetry elsewhere. Teams scale and roll back one surface without touching unrelated code paths.",
    outcome:
      "Shipping picked up pace, on-call tickets point to a named service, and traffic spikes for one tenant no longer stall the entire product line.",
  },
  {
    title: "Governed AI layer keeps answers fast when traffic doubles",
    industry: "AI desk",
    problem:
      "BRIEFING — Models lived in notebooks and short-term GPU contracts with no shared scorecard. Finance could not tie spend to customer-facing answers, and at peak hours nobody could swear which build was actually serving requests.",
    solution:
      "The team wired training, routing, and live inference to one control plane: budgets and data rules travel with each model, latency and quality metrics stream continuously, and releases use the same promotion gates as the rest of production.",
    outcome:
      "Executives now scan cost, version, and performance in one place, and experiments graduate to full traffic without inventing a second launch playbook.",
  },
];

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
      { label: "General Exchange", href: "https://www.general.exchange" },
      { label: "First Class Mail", href: "https://www.firstclassmail.xyz" },
      { label: "Teleport", href: "https://www.teleport.services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "University", href: "/university" },
    ],
  },
];
