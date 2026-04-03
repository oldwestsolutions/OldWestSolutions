const defaultSite =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://oldwestsolutions.com";

export default function OrganizationJsonLd() {
  const url = defaultSite.replace(/\/$/, "");
  const payload = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OldWestSolutions",
    url,
    description:
      "Distributed systems and managed infrastructure for domain operators, including databases, storage, AI-ready compute, and full-stack delivery on leading public clouds.",
    sameAs: ["https://github.com/oldwestsolutions"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
