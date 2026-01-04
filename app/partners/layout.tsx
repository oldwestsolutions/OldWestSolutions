import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Old West Solutions',
  description: 'Technology partners of Old West Solutions. Certified enterprise partners with Salesforce, Microsoft Azure, Google Cloud, Snowflake, and IBM. Learn about our partnerships and certifications.',
  keywords: 'Salesforce partner, Microsoft Azure partner, Google Cloud partner, Snowflake partner, IBM partner, enterprise technology partners, IT certifications',
  alternates: {
    canonical: '/partners',
  },
  openGraph: {
    title: 'Technology Partners - Old West Solutions',
    description: 'Technology partners of Old West Solutions. Certified enterprise partners with Salesforce, Microsoft Azure, Google Cloud, Snowflake, and IBM.',
    url: 'https://oldwestsolutions.com/partners',
    type: 'website',
  },
}

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

