import { getOrganizationJsonLd, getWebSiteJsonLd } from "@/lib/site";

export default function JsonLd() {
  const graph = [getOrganizationJsonLd(), getWebSiteJsonLd()];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@graph": graph }) }}
    />
  );
}
