import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import JsonLd from "@/components/JsonLd";
import { siteUrl, siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const titleDefault = `${siteConfig.name} | Enterprise Software & Digital Infrastructure`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: titleDefault,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "custom software development",
    "enterprise software",
    "digital infrastructure",
    "fintech development",
    "AI automation",
    "cloud infrastructure",
    "Web3 development",
    "software consulting",
    "SaaS development",
    "API development",
    "trading systems",
    "OldWestSolutions",
  ],
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: { email: true, address: true, telephone: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteUrl,
    siteName: siteConfig.name,
    title: titleDefault,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.tagline,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
  applicationName: siteConfig.name,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1F1F1F" },
    { media: "(prefers-color-scheme: dark)", color: "#1F1F1F" },
  ],
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans antialiased bg-primary text-text-primary min-h-screen`}
      >
        <JsonLd />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
