import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteName = "OldWestSolutions";

export const metadata: Metadata = {
  title: {
    default: `${siteName} | Enterprise Software & Digital Infrastructure`,
    template: `%s | ${siteName}`,
  },
  description:
    "We design, build, and scale enterprise software across finance, AI automation, Web3, fintech, and cloud. Custom systems for serious teams.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1F1F1F",
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
        className={`${inter.variable} font-sans antialiased bg-primary text-text-primary min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
