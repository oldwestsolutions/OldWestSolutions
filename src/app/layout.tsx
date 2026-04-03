import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import OrganizationJsonLd from "@/components/OrganizationJsonLd";
import "./globals.css";

const siteName = "OldWestSolutions";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://oldwestsolutions.com";
const base = new URL(siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`);

const defaultDescription =
  "OldWestSolutions delivers distributed systems and managed infrastructure for domain operators — multi-region data planes, databases, durable storage, AI-ready compute, and OldWest.net, our flagship operator network.";

export const metadata: Metadata = {
  metadataBase: base,
  title: {
    default: `${siteName} | Distributed Systems & Managed Infrastructure`,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  applicationName: siteName,
  keywords: [
    "managed infrastructure",
    "distributed systems",
    "domain operators",
    "cloud databases",
    "multi-region",
    "OldWest.net",
    "managed services",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName,
    title: `${siteName} | Distributed Systems & Managed Infrastructure`,
    description: defaultDescription,
    url: base,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Distributed Systems`,
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
