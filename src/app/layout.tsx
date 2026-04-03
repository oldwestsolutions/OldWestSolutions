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
  "Old West Solutions provides IT services, managed cloud infrastructure, and technology solutions for operators who need reliable systems: multi-region data planes, databases, storage, AI-ready compute, security and edge delivery, plus OldWest.net — our flagship operator network.";

export const metadata: Metadata = {
  metadataBase: base,
  title: {
    default: `${brandTitle} | IT Services, Cloud & Managed Infrastructure`,
    template: `${brandTitle} | %s`,
  },
  description: defaultDescription,
  applicationName: brandTitle,
  keywords: [
    "Old West Solutions",
    "IT services",
    "managed IT services",
    "technology solutions",
    "tech solutions",
    "managed cloud services",
    "cloud infrastructure",
    "enterprise IT",
    "managed infrastructure",
    "distributed systems",
    "cloud databases",
    "managed security",
    "DevOps",
    "multi-region",
    "OldWest.net",
    "Plano IT services",
    "Texas technology company",
  ],
  authors: [{ name: brandTitle, url: base }],
  creator: brandTitle,
  publisher: brandTitle,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: brandTitle,
    title: `${brandTitle} | IT Services & Managed Cloud Infrastructure`,
    description: defaultDescription,
    url: base,
  },
  twitter: {
    card: "summary_large_image",
    title: `${brandTitle} | IT Services & Technology Solutions`,
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
