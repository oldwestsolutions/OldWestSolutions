import LongFormPage from "@/components/LongFormPage";

export default function ProductsPage() {
  return (
    <LongFormPage
      eyebrow="Products"
      title="Everything your home or business needs to stay connected"
      lead="From fast internet to crystal-clear phone service and reliable TV — we provide the technology, the equipment, and the support to keep everything running smoothly."
      sections={[
        {
          heading: "Fiber & Broadband Internet",
          paragraphs: [
            "Fast, dependable internet built for the way people actually use it — streaming, video calls, remote work, gaming, and running a business. Our fiber-optic and broadband options deliver the speed and stability you need without the slowdowns.",
          ],
        },
        {
          heading: "Phone Systems",
          paragraphs: [
            "Clear, reliable phone service for homes and offices. Whether you need a simple single line or a full business phone setup with multiple extensions, voicemail, and call forwarding — we set it up and keep it working.",
          ],
        },
        {
          heading: "Television",
          paragraphs: [
            "Hundreds of channels, on-demand shows and movies, and DVR so you never miss anything. Picture quality you can count on, delivered to every screen in your home or waiting room.",
          ],
        },
        {
          heading: "Installation & Support",
          paragraphs: [
            "Our team comes to you, installs everything the right way, and makes sure it all works before we leave. After that, help is just a phone call away — real people, not a phone tree.",
          ],
        },
        {
          heading: "Network Equipment",
          paragraphs: [
            "Routers, modems, switches, access points, and cabling — the hardware that keeps your connection fast and reliable in every room and on every device. We help you pick the right gear and set it up properly.",
          ],
        },
      ]}
      relatedLinks={[
        { label: "Contact us", href: "/contact" },
        { label: "Managed IT services", href: "/managed-services" },
        { label: "About Old West Solutions", href: "/about" },
      ]}
      ctaHref="/schedule-consultation"
      ctaLabel="Schedule A Consultation"
    />
  );
}
