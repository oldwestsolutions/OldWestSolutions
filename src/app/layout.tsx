import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteName = "OldWestSolutions";

export const metadata: Metadata = {
  title: {
    default: `${siteName} | Distributed Systems`,
    template: `%s | ${siteName}`,
  },
  description:
    "Enterprise distributed systems and managed infrastructure for domain operators: databases, durable storage, AI-ready compute, and full-stack delivery on leading public-cloud platforms.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
        {children}
      </body>
    </html>
  );
}
