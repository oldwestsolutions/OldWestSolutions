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
  { label: "Process", href: "#process" },
  { label: "Platforms", href: "#projects" },
  { label: "Infrastructure", href: "#industries" },
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
    title: "OldWest Search & Staking",
    industry: "Ecosystem",
    problem: "No viable decentralized alternative combined AI search, private communication, and staking in a single platform.",
    solution: "Deployed the OldWest platform with integrated AI-powered search indexing, encrypted email exchange, and blockchain staking infrastructure.",
    outcome: "Unified search, communication, and staking under one decentralized system with enterprise-grade uptime.",
    tags: ["AI Search", "Blockchain", "Staking", "Private Email"],
  },
  {
    title: "FirstClassMail + Teleport",
    industry: "Communications",
    problem: "Fragmented messaging infrastructure across email, voice, and SMS with inconsistent delivery rates and no unified management layer.",
    solution: "Integrated FirstClassMail for scalable email delivery with Teleport for programmable voice and VoIP — managed through a single infrastructure control plane.",
    outcome: "99.8% delivery rate, white-labeled communications stack, unified billing and monitoring across all channels.",
    tags: ["Email Delivery", "VoIP", "Messaging", "White-Label"],
  },
  {
    title: "Lubbock.Cloud Deployment",
    industry: "Compute & Storage",
    problem: "Enterprise clients required decentralized compute and storage without sacrificing the reliability of systems like Pure Storage or NetApp.",
    solution: "Deployed Lubbock.Cloud with GPU tokenization, distributed storage nodes, and enterprise-grade data replication across multiple regions.",
    outcome: "40% reduction in compute costs, tokenized GPU access, multi-region redundancy with 99.99% availability.",
    tags: ["GPU Tokenization", "Distributed Storage", "Enterprise Data", "Multi-Region"],
  },
];

export const industries = [
  {
    title: "Collaboration & communications",
    description:
      "Quotes for how teams actually work together: DocuSign, Zoom, Microsoft Exchange Online, SharePoint, OneDrive, Google Workspace basics, and adjacent collaboration SKUs. We handle new seats, renewals, and transfers with the same intake — license counts, mixed SKUs in the notes, and attachments when you have an incumbent bill to match.",
  },
  {
    title: "Productivity & line-of-business SaaS",
    description:
      "Microsoft 365, Adobe, QuickBooks, Zoho, CRM and ERP categories, ServiceNow, and other business applications your customers already run. Tell us seat mix, edition, and term; we return commercial options aligned to how you sell — without you becoming the SKU encyclopedia for every vendor.",
  },
  {
    title: "Cloud platforms & infrastructure",
    description:
      "Microsoft Azure, AWS, and Google Cloud — consumption, commitments, and the surrounding services customers expect on an invoice. Whether the ask is IaaS, PaaS, or bundled cloud backup and recovery, we quote in the same structured flow: solution, scale, optional hardware, and narrative in additional notes.",
  },
  {
    title: "AI & modern work add-ons",
    description:
      "Microsoft Copilot, Google Gemini, Devs.ai, and other AI or developer-adjacent subscriptions that attach to core productivity or cloud estates. We treat them like any other seat-based SKU in the quote tool so bundle economics and renewals stay legible for finance and IT.",
  },
];

export const whyUs = [
  {
    title: "Four platforms, one connected stack",
    description:
      "OldWest, FirstClassMail, Teleport, and Lubbock.Cloud are engineered to interoperate—so you sell and operate them as one infrastructure story, not four disconnected vendors.",
  },
  {
    title: "Built to scale, not to sunset",
    description:
      "We ship systems meant for years of traffic and change—not one-off apps that collapse the first time load spikes or compliance asks hard questions.",
  },
  {
    title: "From premium domain to production footprint",
    description:
      "Acquisition, DNS, hosting, and managed services chain together: the name your customer buys is backed by an environment that is ready when they are.",
  },
  {
    title: "Security posture buyers can defend",
    description:
      "Encryption in transit and at rest, role-based access, and audit-friendly logging across the layer—so procurement and IT reviews stay straightforward.",
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
      { label: "OldWest", href: "#" },
      { label: "FirstClassMail", href: "#" },
      { label: "Teleport", href: "#" },
      { label: "Lubbock.Cloud", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Process", href: "#process" },
      { label: "Platforms", href: "#projects" },
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
