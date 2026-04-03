import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const siteName = "OldWestSolutions";

export const metadata: Metadata = {
  title: {
    default: `${siteName} | Web3 Infrastructure & Decentralized Systems`,
    template: `%s | ${siteName}`,
  },
  description:
    "We architect, build, and scale decentralized infrastructure across Web3, DeFi, AI, and enterprise systems. Precision-engineered software for the next era.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${mono.variable} font-sans antialiased bg-primary text-text-primary min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
