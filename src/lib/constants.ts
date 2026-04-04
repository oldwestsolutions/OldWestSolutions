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
    title: "Blockchain records that everyone can trust",
    industry: "Blockchain",
    problem:
      "When important records live in different places and different formats, it is hard to know which version is right. Teams waste time checking and rechecking, and mistakes slip through because no one has one clear source of truth.",
    solution:
      "We use blockchain to create a shared record book that nobody can secretly change. Every entry is stamped with a time and linked to the one before it, so everyone — your team, your partners, your auditors — sees the same facts.",
    outcome:
      "Less time spent arguing about what happened, faster audits, and a level of trust between partners that spreadsheets and emails could never provide.",
    tags: ["Blockchain", "Trust", "Records", "Audit"],
  },
  {
    title: "Small services that do one job really well",
    industry: "Microservices",
    problem:
      "When a system tries to do everything in one place, it gets slow and tangled. Updating one part can break another, finding problems is like looking for a needle in a haystack, and the whole thing is hard for teams to understand.",
    solution:
      "We split the big system into small, focused services. Each one handles a single task — like sending a message, checking a status, or tracking activity. They connect through simple, clean interfaces so teams only use the pieces they need.",
    outcome:
      "Updates are faster because you only change one small piece. Problems are easier to find because each service has its own dashboard. The whole system grows without slowing down.",
    tags: ["Microservices", "APIs", "Monitoring", "Scalability"],
  },
  {
    title: "Smart tools for trading and finance teams",
    industry: "Finance",
    problem:
      "Trading desks and finance teams often juggle many different tools that do not talk to each other. Reports are slow, risk checks happen after the fact, and when markets move fast, the technology cannot keep up.",
    solution:
      "We build systems where trades, risk checks, and reporting all happen in the same place, in real time. Limits and alerts are built in from the start, so teams always know where they stand — no waiting for end-of-day reports.",
    outcome:
      "Faster decisions, clearer risk visibility, and a single view of every position — so finance teams spend less time gathering data and more time acting on it.",
    tags: ["Finance", "Trading", "Real-time", "Risk"],
  },
];

/** Capability areas delivered through oldwest.net */
export const whyUs = [
  {
    title: "Fiber & Broadband Internet",
    description:
      "Fast, reliable internet for homes and businesses — fiber-optic and broadband connections built for streaming, remote work, and everything in between.",
  },
  {
    title: "Phone Systems",
    description:
      "Modern phone service for your home or office — crystal-clear calls, voicemail, caller ID, and multi-line setups that just work.",
  },
  {
    title: "Television",
    description:
      "Hundreds of channels, on-demand content, and DVR built in — entertainment for the whole household with picture quality you can count on.",
  },
  {
    title: "Installation & Support",
    description:
      "Professional setup from start to finish — our team comes to you, installs everything, and makes sure it all works before we leave. Help is a phone call away after that.",
  },
  {
    title: "Network Equipment",
    description:
      "Routers, modems, switches, and access points — the hardware your connection needs to stay fast and reliable in every room and on every device.",
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
