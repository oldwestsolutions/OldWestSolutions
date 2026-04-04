import MarketingPageShell from "@/components/MarketingPageShell";

export default function PortalPage() {
  return (
    <MarketingPageShell eyebrow="Client access" title="Portal">
      <p>
        Secure sign-in for clients and operators will live here — dashboards,
        tickets, and environment status in one place. Replace this page with your
        sign-in flow or embedded app when you are ready.
      </p>
      <p>
        Need time on the calendar first? Use{" "}
        <a
          href="/book-appointment"
          className="text-accent underline-offset-2 hover:underline"
        >
          Book An Appointment
        </a>
        . For anything else, use Get in touch below or the contact block on the
        home page.
      </p>
    </MarketingPageShell>
  );
}
