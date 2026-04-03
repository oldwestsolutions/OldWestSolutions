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
  { label: "Services", href: "/managed-services" },
  { label: "Systems", href: "#systems" },
  { label: "Products", href: "#industries" },
  { label: "About", href: "#about" },
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
    title: "Old West runs discovery, mail, and apps as one distributed system",
    industry: "Distributed systems",
    problem:
      "Treating DNS, search, encrypted mail, and application tiers as unrelated stacks creates split-brain config, uneven failure domains, and audits that never line up with how traffic actually flows.",
    solution:
      "Old West is engineered as a distributed system: replicated services, explicit boundaries between discovery and messaging, and horizontal scale so capacity and failover are designed in — not bolted on after the fact.",
    outcome:
      "Teams operate premium domains as a single coherent estate: predictable replication, regional presence where it matters, and one operational story from name resolution through application and inbox.",
    tags: ["Old West", "Distributed systems", "Control plane", "Resilience"],
  },
  {
    title: "FirstClassMail and Teleport ship as composable microservices",
    industry: "Microservice",
    problem:
      "Resellers and integrators were forced into monolithic adapters whenever mail delivery, reputation, and voice telemetry shipped on different release cycles — slowing QBR prep and making tenant-wide incidents hard to trace.",
    solution:
      "FirstClassMail and Teleport are exposed as focused microservices: delivery, reputation, and session data behind versioned APIs and contracts, so partners compose one tenant timeline without a single fat binary or shared schema coupling everything.",
    outcome:
      "Smaller deployable units, independent scaling, and shared observability across mail and voice cut time-to-innocence on deliverability and call-quality tickets while staying white-label friendly for enterprise programs.",
    tags: ["FirstClassMail", "Teleport", "Microservices", "APIs"],
  },
  {
    title: "Lubbock.Cloud treats inference as governed AI systems, not ad-hoc GPUs",
    industry: "AI systems",
    problem:
      "Notebook-style GPU jobs and opaque spend made it impossible to run models as production AI systems — with budgets, residency, burst during campaigns, and clear handoff between training-ish experiments and always-on serving.",
    solution:
      "Lubbock.Cloud layers tokenized capacity, policy-aware routing, and multi-region placement so inference and adjacent workloads behave as managed AI systems: measurable units, governed expansion, and room to spike without idle long-term locks.",
    outcome:
      "Pilot teams align model serving with revenue and compliance events, balance burst against steady-state cost, and keep data residency and failover explicit instead of an afterthought on a single cluster.",
    tags: ["Lubbock.Cloud", "AI systems", "Inference", "Governance"],
  },
];

export const whyUs = [
  {
    title: "General.exchange",
    description:
      "Our trading platform for digital assets and market-style workflows—built for serious participants who need reliable execution, clear risk boundaries, and an environment that scales with volume.",
  },
  {
    title: "Lubbock.Cloud",
    description:
      "Decentralized compute and storage for workloads that outgrow a single region—GPU-aware capacity, durable data tiers, and architecture that treats the cloud as a distributed system, not a single vendor closet.",
  },
  {
    title: "Teleport Services",
    description:
      "Programmable voice, SMS, and VoIP infrastructure you can embed in your own products—white-label friendly, API-first, and operated with the same uptime discipline we apply across the stack.",
  },
  {
    title: "Old West",
    description:
      "The Old West line (OldWest.net) anchors search, discovery, and identity-forward experiences for audiences who expect a modern web surface behind premium domains and operator-grade infrastructure.",
  },
  {
    title: "FirstClassMail",
    description:
      "Transactional and marketing email with delivery metrics that matter—authentication, throughput, and reputation handled as infrastructure so your messages land in the inbox, not the promotions graveyard.",
  },
];

export const footerLinks = [
  {
    title: "Solutions",
    links: [
      { label: "Databases", href: "/managed-services" },
      { label: "Storage & lifecycle", href: "/managed-services" },
      { label: "AI & inference", href: "/managed-services" },
      { label: "Compute & orchestration", href: "/managed-services" },
      { label: "Edge & security", href: "/managed-services" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "General.exchange", href: "#" },
      { label: "Lubbock.Cloud", href: "#" },
      { label: "Teleport Services", href: "#" },
      { label: "Old West", href: "#" },
      { label: "FirstClassMail", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Systems", href: "#systems" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "GitHub", href: "https://github.com/oldwestsolutions" },
      { label: "LinkedIn", href: "#" },
      { label: "Twitter", href: "#" },
    ],
  },
];
