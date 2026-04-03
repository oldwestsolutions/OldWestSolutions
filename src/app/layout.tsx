import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const siteName = "OldWestSolutions";

export const metadata: Metadata = {
  title: {
    default: `${siteName} | Infrastructure Ecosystem`,
    template: `%s | ${siteName}`,
  },
  description:
    "Scalable infrastructure systems across communication, compute, search, and financial networks. OldWest, FirstClassMail, Teleport, and Lubbock.Cloud — unified under one ecosystem.",
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
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased text-text-primary min-h-screen bg-[#080809]`}
      >
        {children}
      </body>
    </html>
  );
}
