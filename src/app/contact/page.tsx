import LongFormPage from "@/components/LongFormPage";

export default function ContactPage() {
  return (
    <LongFormPage
      eyebrow="Company"
      title="Contact Us"
      lead="We would love to hear from you. Whether you have a question, want to learn more about what we do, or are ready to get started — reach out and we will get back to you within 24 hours."
      sections={[
        {
          heading: "Phone",
          paragraphs: [
            "Give us a call at (945) 382-4660. We are available during business hours, Monday through Friday.",
          ],
        },
        {
          heading: "Office",
          paragraphs: [
            "7950 Legacy Dr, Plano, Texas. If you would like to meet in person, let us know and we will set up a time.",
          ],
        },
        {
          heading: "Schedule a meeting",
          paragraphs: [
            "If you prefer a structured conversation, you can schedule a consultation with our team. We will review your needs, answer your questions, and give you a clear picture of how we can help — no pressure, no commitment.",
          ],
        },
      ]}
      relatedLinks={[
        { label: "About us", href: "/about" },
        { label: "Schedule A Consultation", href: "/schedule-consultation" },
        { label: "Book An Appointment", href: "/book-appointment" },
      ]}
      ctaHref="/schedule-consultation"
      ctaLabel="Schedule A Consultation"
    />
  );
}
