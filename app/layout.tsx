import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Old West Solutions',
  description: 'Enterprise IT services, managed servers, virtual machines, email solutions, and hardware. Professional IT products and solutions for your business. Certified partners with Salesforce, Microsoft Azure, Google Cloud, Snowflake, and IBM.',
  keywords: 'IT services, managed servers, virtual machines, email hosting, enterprise hardware, cloud solutions, network security, IT consulting, Salesforce, Microsoft Azure, Google Cloud, Snowflake, IBM, DevOps, CI/CD, Kubernetes, cybersecurity, full stack development, blockchain, AI, machine learning, quantum computing',
  authors: [{ name: 'Old West Solutions' }],
  creator: 'Old West Solutions',
  publisher: 'Old West Solutions',
  metadataBase: new URL('https://oldwestsolutions.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Old West Solutions - Enterprise IT Services & Solutions',
    description: 'Enterprise IT services, managed servers, virtual machines, email solutions, and hardware. Certified partners with Salesforce, Microsoft Azure, Google Cloud, Snowflake, and IBM.',
    url: 'https://oldwestsolutions.com',
    siteName: 'Old West Solutions',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Old West Solutions - Enterprise IT Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Old West Solutions - Enterprise IT Services & Solutions',
    description: 'Enterprise IT services, managed servers, virtual machines, email solutions, and hardware. Certified partners with leading technology platforms.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'technology',
  classification: 'Business',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Old West Solutions',
    url: 'https://oldwestsolutions.com',
    logo: 'https://oldwestsolutions.com/logo.png',
    description: 'Enterprise IT services, managed servers, virtual machines, email solutions, and hardware. Certified partners with Salesforce, Microsoft Azure, Google Cloud, Snowflake, and IBM.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dallas',
      addressRegion: 'Texas',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-945-382-4660',
      contactType: 'Customer Service',
      email: 'info@oldwestsolutions.com',
    },
    sameAs: [
      'https://github.com/oldwestsolutions',
    ],
    foundingDate: '2026',
    areaServed: 'Worldwide',
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

