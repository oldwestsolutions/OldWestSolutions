/**
 * Canonical site URL for SEO, sitemap, and Open Graph.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://oldwestsolutions.com).
 * On Vercel, VERCEL_URL is used as fallback during preview/production builds.
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/$/, "");

  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) return `https://${vercel.replace(/^https?:\/\//, "")}`;

  return "https://oldwestsolutions.com";
}

export const siteUrl = getSiteUrl();

export const siteConfig = {
  name: "OldWestSolutions",
  tagline: "Custom Digital Infrastructure for Modern Systems",
  description:
    "We design, build, and scale enterprise software across finance, AI automation, Web3, fintech, and cloud. Custom systems, fast delivery, and long-term leverage for serious teams.",
  locale: "en_US",
} as const;

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteUrl,
    areaServed: "Worldwide",
    serviceType: [
      "Custom Software Development",
      "Enterprise Software Consulting",
      "Cloud Infrastructure",
      "Fintech Development",
      "AI & Automation",
    ],
    sameAs: ["https://github.com/oldwestsolutions"],
  };
}

export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteUrl,
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteUrl },
  };
}
