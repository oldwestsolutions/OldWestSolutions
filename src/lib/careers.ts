export type JobDepartment =
  | "Field & install"
  | "Engineering & operations"
  | "Sales & customer experience"
  | "Corporate";

export type Job = {
  id: string;
  title: string;
  department: JobDepartment;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  workMode: "On-site" | "Hybrid" | "Remote-friendly";
  /** ISO date (YYYY-MM-DD) for sort / display */
  postedAt: string;
  summary: string;
  highlights: string[];
};

export const jobDepartments: JobDepartment[] = [
  "Field & install",
  "Engineering & operations",
  "Sales & customer experience",
  "Corporate",
];

export const openRoles: Job[] = [
  {
    id: "fiber-field-tech",
    title: "Fiber Field Technician",
    department: "Field & install",
    location: "Plano, TX · DFW metro",
    type: "Full-time",
    workMode: "On-site",
    postedAt: "2026-03-28",
    summary:
      "Install and turn up fiber drops, customer premises equipment, and inside wiring while keeping every job photo-documented and ready for audit.",
    highlights: [
      "OTDR / light-level basics and clean splice discipline",
      "Customer-facing professionalism on every truck roll",
      "Safety-first ladder, roof, and confined-space protocols",
    ],
  },
  {
    id: "low-voltage-installer",
    title: "Low-Voltage & Structured Cabling Installer",
    department: "Field & install",
    location: "Plano, TX",
    type: "Full-time",
    workMode: "On-site",
    postedAt: "2026-03-22",
    summary:
      "Pull, terminate, test, and label copper and fiber in offices, retail, and MDU builds — aligned to our ISP and managed-services standards.",
    highlights: [
      "Fluke / certification testing and as-built documentation",
      "Rack dress, cable management, and pathway planning",
      "Coordination with GCs and building engineers",
    ],
  },
  {
    id: "noc-analyst",
    title: "NOC Analyst",
    department: "Engineering & operations",
    location: "Plano, TX",
    type: "Full-time",
    workMode: "Hybrid",
    postedAt: "2026-04-01",
    summary:
      "Watch the network, own incidents, and communicate clearly with customers until green — triage, escalate, and improve runbooks as you go.",
    highlights: [
      "BGP / OSPF awareness and carrier escalation experience",
      "Ticketing hygiene and customer-facing incident comms",
      "On-call rotation with balanced load and handoffs",
    ],
  },
  {
    id: "network-engineer",
    title: "Network Engineer",
    department: "Engineering & operations",
    location: "Plano, TX",
    type: "Full-time",
    workMode: "Hybrid",
    postedAt: "2026-03-18",
    summary:
      "Design and operate core and access layers for business and residential services — from POP upgrades to customer edge policies.",
    highlights: [
      "Routing, switching, Wi-Fi, and firewall policy at scale",
      "Change windows, maintenance notifications, and rollback plans",
      "Automation-friendly mindset (templates, APIs, Git)",
    ],
  },
  {
    id: "devops-cloud",
    title: "Cloud & Platform Engineer",
    department: "Engineering & operations",
    location: "Plano, TX",
    type: "Full-time",
    workMode: "Hybrid",
    postedAt: "2026-03-30",
    summary:
      "Build the internal platforms our managed services run on — CI/CD, observability, and safe deploy patterns for customer-facing stacks.",
    highlights: [
      "Containers, IaC, and secrets handling you can defend in review",
      "SLO thinking: dashboards that drive real paging policy",
      "Pairing with app teams without becoming a bottleneck",
    ],
  },
  {
    id: "it-support-engineer",
    title: "IT Support Engineer (Business)",
    department: "Engineering & operations",
    location: "Plano, TX",
    type: "Full-time",
    workMode: "On-site",
    postedAt: "2026-03-12",
    summary:
      "Own deskside and remote support for business customers — identity, endpoints, M365/Google workspace, and network basics.",
    highlights: [
      "Clear documentation and respectful customer tone",
      "RMM / MDM familiarity and patch discipline",
      "Escalation paths that protect customer uptime",
    ],
  },
  {
    id: "bdr",
    title: "Business Development Representative",
    department: "Sales & customer experience",
    location: "Plano, TX",
    type: "Full-time",
    workMode: "Hybrid",
    summary:
      "Generate qualified conversations for fiber, voice, TV bundles, and managed IT — disciplined outreach with honest positioning.",
    highlights: [
      "CRM hygiene and measurable pipeline contribution",
      "Comfort explaining technical offerings without overselling",
      "Collaboration with field and operations on feasibility",
    ],
  },
  {
    id: "cx-specialist",
    title: "Customer Experience Specialist",
    department: "Sales & customer experience",
    location: "Plano, TX",
    type: "Full-time",
    workMode: "Hybrid",
    postedAt: "2026-03-20",
    summary:
      "Be the steady voice on installs, billing questions, and service changes — proactive updates beat reactive fire drills.",
    highlights: [
      "Multi-channel support with consistent follow-through",
      "Dispatch coordination and expectation setting",
      "Feedback loops into product and network teams",
    ],
  },
  {
    id: "marketing-coordinator",
    title: "Marketing Coordinator",
    department: "Corporate",
    location: "Plano, TX",
    type: "Full-time",
    workMode: "Hybrid",
    postedAt: "2026-02-14",
    summary:
      "Ship campaigns, local events, and partner co-marketing that make our coverage areas easy to understand and easy to buy.",
    highlights: [
      "Web, email, and light design collaboration",
      "Analytics literacy — read results and iterate",
      "Brand guardrails without slowing the team down",
    ],
  },
  {
    id: "intern-tech-ops",
    title: "Intern, Technical Operations",
    department: "Corporate",
    location: "Plano, TX",
    type: "Internship",
    workMode: "On-site",
    postedAt: "2026-03-05",
    summary:
      "Rotate through NOC shadowing, documentation sprints, and lab builds — ideal for students pursuing networking or IT systems paths.",
    highlights: [
      "Mentored projects with clear learning outcomes",
      "Exposure to carrier and enterprise tooling",
      "Portfolio-friendly deliverables (diagrams, runbooks, lab configs)",
    ],
  },
];
