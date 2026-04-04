import LongFormPage from "@/components/LongFormPage";

export default function BookAppointmentPage() {
  return (
    <LongFormPage
      eyebrow="Appointment"
      title="Book an appointment"
      lead="Appointments are for committed time on the calendar — onboarding checkpoints, executive readouts, domain transfer windows, or working sessions with engineers. If you are still exploring fit, start with Schedule a Consultation; if you are ready to move, book here."
      sections={[
        {
          heading: "When to book",
          paragraphs: [
            "Book when you have a defined objective: kickoff for a managed environment, a transfer cutover rehearsal, a security review before launch, or a quarterly business review with metrics your team has already agreed to track.",
          ],
          bullets: [
            "Onboarding and environment handoff after contract execution",
            "Domain brokerage or transfer milestones that require synchronized attendance",
            "Post-incident or post-audit remediation planning with owners in the room",
          ],
        },
        {
          heading: "What to prepare",
          paragraphs: [
            "Share attendee roles, time zone constraints, and any read-only materials (architecture overview, account IDs redacted as needed) at least one business day ahead so we assign the right engineers and avoid calendar thrash.",
          ],
        },
        {
          heading: "Confirmation",
          paragraphs: [
            "Use the homepage contact section to propose times and duration. We confirm by email with a calendar invite, agenda, and dial or video details. For portal-eligible clients, future self-serve scheduling may live alongside the client dashboard.",
          ],
        },
      ]}
      relatedLinks={[
        { label: "Schedule a Consultation", href: "/schedule-consultation" },
        { label: "Portal", href: "/portal" },
        { label: "Domains", href: "/domains" },
        { label: "Services", href: "/services" },
        { label: "Contact (homepage)", href: "/#contact" },
      ]}
      ctaHref="/#contact"
      ctaLabel="Request an appointment"
    />
  );
}
