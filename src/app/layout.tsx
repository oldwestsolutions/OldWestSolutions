import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OldWestSolutions | High-Leverage Digital Infrastructure",
  description:
    "Scalable systems across finance, automation, and decentralized networks. Enterprise-grade infrastructure built for control, efficiency, and long-term leverage.",
  keywords: [
    "digital infrastructure",
    "enterprise systems",
    "Web3",
    "automation",
    "financial technology",
    "cloud systems",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-primary text-text-primary`}>
        {children}
      </body>
    </html>
  );
}
