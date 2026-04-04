import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import OrganizationJsonLd from "@/components/OrganizationJsonLd";
import "./globals.css";

/** Spaced brand — shown in `<title>`, Open Graph, and social cards. */
const brandTitle = "Old West Solutions";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://oldwestsolutions.com";
const base = new URL(siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`);

const defaultDescription =
  "Old West Solutions provides IT services and tech solutions in Plano, Texas — fiber internet, broadband, phone systems, television, network equipment, managed cloud infrastructure, web hosting, cybersecurity, and technology consulting for homes and businesses.";

/** Document `<title>` stays short for the tab; Open Graph below carries full SEO headlines. */
const tabTitleHome = `${brandTitle} - IT Services`;

export const metadata: Metadata = {
  metadataBase: base,
  title: {
    default: tabTitleHome,
    template: `%s - ${brandTitle}`,
  },
  description: defaultDescription,
  applicationName: brandTitle,
  keywords: [
    "Old West Solutions",
    "IT Services",
    "Tech Solutions",
    "IT services and tech solutions",
    "tech solutions",
    "tech solutions Plano TX",
    "tech solutions Texas",
    "technology solutions",
    "IT services",
    "IT services Plano TX",
    "managed IT services Texas",
    "fiber internet Plano",
    "broadband internet Texas",
    "business phone systems",
    "television service provider",
    "network equipment",
    "managed cloud services",
    "cloud infrastructure",
    "web hosting Plano",
    "cybersecurity services",
    "technology consulting",
    "internet service provider Texas",
    "ISP Plano TX",
    "business IT support",
    "managed infrastructure",
    "OldWest.net",
    "oldwestsolutions",
    "old west solutions",
    "Plano Texas technology company",
    "fiber optic internet",
    "enterprise IT solutions",
    "network installation",
    "IT support near me",
    "tech company Plano",
    "tech company Texas",
  ],
  authors: [{ name: brandTitle, url: base }],
  creator: brandTitle,
  publisher: brandTitle,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: brandTitle,
    title: `${brandTitle} — Tech Solutions, IT Services & Fiber Internet in Plano, TX`,
    description: defaultDescription,
    url: base,
  },
  twitter: {
    card: "summary_large_image",
    title: `${brandTitle} — Tech Solutions, IT Services & Internet | Plano, TX`,
    description: defaultDescription,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#080809",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased text-text-primary min-h-screen bg-[#080809]">
        <OrganizationJsonLd />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white focus:outline-none focus:ring-2 focus:ring-white/30"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
