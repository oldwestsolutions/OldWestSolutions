import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Old West Solutions',
  description: 'Enterprise IT services, managed servers, virtual machines, email solutions, and hardware. Professional IT products and solutions for your business.',
  keywords: 'IT services, managed servers, virtual machines, email hosting, enterprise hardware, cloud solutions, network security, IT consulting',
  authors: [{ name: 'Old West Solutions' }],
  openGraph: {
    title: 'Old West Solutions',
    description: 'Enterprise IT services, managed servers, virtual machines, email solutions, and hardware.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Old West Solutions',
    description: 'Enterprise IT services, managed servers, virtual machines, email solutions, and hardware.',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

