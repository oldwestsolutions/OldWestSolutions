const defaultSite =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://oldwestsolutions.com";

export default function OrganizationJsonLd() {
  const url = defaultSite.replace(/\/$/, "");
  const payload = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Old West Solutions",
    alternateName: ["Old West Solutions"],
    url,
    description:
      "IT services, managed cloud infrastructure, and technology solutions — databases, storage, AI-ready compute, networking, and security for domain-led operators. Plano, Texas.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Plano",
      addressRegion: "TX",
      addressCountry: "US",
    },
    sameAs: ["https://github.com/oldwestsolutions"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
