import LongFormPage from "@/components/LongFormPage";

export default function ScheduleConsultationPage() {
  return (
    <LongFormPage
      eyebrow="Consultation"
      title="Schedule a consultation"
      lead="Use this page to align on what you need before we touch production. Consultations are structured working sessions — not a generic sales call — so you leave with a clear sense of scope, risks, and next steps, whether or not we sign the same week."
      sections={[
        {
          heading: "What we cover",
          paragraphs: [
            "Typical topics include current cloud and data posture, domain and mail health, integration pain points, AI or inference plans, security and compliance boundaries, and how OldWest.net capabilities might fit your roadmap.",
            "Bring stakeholders who own infrastructure, security, or product delivery; we will mirror your vocabulary and document assumptions so nothing is lost between meetings.",
          ],
          bullets: [
            "Inventory of environments, vendors, and critical workloads",
            "Near-term milestones (launches, audits, migrations) that constrain design",
            "Success metrics: availability, cost, time-to-recover, or regulatory checkpoints",
          ],
        },
        {
          heading: "How scheduling works",
          paragraphs: [
            "Submit your request through the contact block on the homepage or email your team’s preferred channel if you already have one. We respond with proposed times and a short pre-read questionnaire so the session stays productive.",
            "For regulated or sensitive programs, we can start under NDA before sharing architecture diagrams or account identifiers.",
          ],
        },
        {
          heading: "After the call",
          paragraphs: [
            "You receive a written summary: recommended phases, rough order-of-magnitude effort, and any immediate risks we spotted. If there is a fit, we translate that into a statement of work; if not, you still have a useful snapshot for internal planning.",
          ],
        },
      ]}
      relatedLinks={[
        { label: "Book an appointment", href: "/book-appointment" },
        { label: "Managed Services detail", href: "/managed-services" },
        { label: "Solutions overview", href: "/solutions" },
        { label: "Contact (homepage)", href: "/#contact" },
      ]}
      ctaHref="/#contact"
      ctaLabel="Request a consultation"
    />
  );
}
