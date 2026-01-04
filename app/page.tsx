import type { Metadata } from 'next'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Old West Solutions',
  description: 'Enterprise IT services, managed servers, virtual machines, email solutions, and hardware. Professional IT products and solutions for your business. Certified partners with Salesforce, Microsoft Azure, Google Cloud, Snowflake, and IBM.',
  keywords: 'IT services, managed servers, virtual machines, email hosting, enterprise hardware, cloud solutions, network security, IT consulting, Salesforce, Microsoft Azure, Google Cloud, Snowflake, IBM',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Old West Solutions - Enterprise IT Services & Solutions',
    description: 'Enterprise IT services, managed servers, virtual machines, email solutions, and hardware. Certified partners with leading technology platforms.',
    url: 'https://oldwestsolutions.com',
    type: 'website',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <Hero />
        <Services />
        <About />
        <Footer />
      </div>
    </main>
  )
}

