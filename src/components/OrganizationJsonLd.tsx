const defaultSite =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://oldwestsolutions.com";

export default function OrganizationJsonLd() {
  const url = defaultSite.replace(/\/$/, "");

  const org = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${url}/#organization`,
    name: "Old West Solutions",
    alternateName: ["OldWestSolutions", "Old West Solutions LLC"],
    url,
    description:
      "IT services, fiber internet, broadband, phone systems, television, network equipment, managed cloud infrastructure, web hosting, and cybersecurity for homes and businesses in Plano, Texas and beyond.",
    telephone: "+1-945-382-4660",
    address: {
      "@type": "PostalAddress",
      streetAddress: "7950 Legacy Dr",
      addressLocality: "Plano",
      addressRegion: "TX",
      postalCode: "75024",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.0742,
      longitude: -96.8247,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Plano",
        containedInPlace: { "@type": "State", name: "Texas" },
      },
      {
        "@type": "State",
        name: "Texas",
      },
      {
        "@type": "Country",
        name: "United States",
      },
    ],
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    sameAs: ["https://github.com/oldwestsolutions"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Fiber & Broadband Internet",
            description:
              "Fast, reliable fiber-optic and broadband internet for homes and businesses.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Phone Systems",
            description:
              "Modern phone service for home or office with crystal-clear calls and multi-line setups.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Television",
            description:
              "Hundreds of channels, on-demand content, and DVR with reliable picture quality.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Installation & Support",
            description:
              "Professional on-site installation and ongoing technical support.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Managed IT Services",
            description:
              "Managed cloud infrastructure, web hosting, cybersecurity, and enterprise IT support.",
          },
        },
      ],
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}/#website`,
    url,
    name: "Old West Solutions",
    description:
      "IT services, internet, phone, television, and managed technology solutions.",
    publisher: { "@id": `${url}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: `${url}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
