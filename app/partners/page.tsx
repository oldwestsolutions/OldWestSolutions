'use client'

import Header from '@/components/Header'
import Link from 'next/link'
import { useState } from 'react'

const partners = [
  {
    name: 'Salesforce',
    logo: '☁️',
    description: 'Leading CRM and cloud platform for customer relationship management.',
    color: 'from-blue-300/30 to-cyan-300/20',
    services: [
      'Sales Cloud implementation',
      'Service Cloud optimization',
      'Marketing Cloud campaigns',
      'Commerce Cloud solutions',
      'Platform customization',
      'Integration services'
    ],
    certifications: ['Salesforce Certified Administrator', 'Salesforce Certified Developer', 'Salesforce Certified Architect'],
    benefits: [
      '360-degree customer view',
      'Improved sales productivity',
      'Enhanced customer service',
      'Marketing automation',
      'Real-time analytics'
    ]
  },
  {
    name: 'Microsoft Azure',
    logo: '🔷',
    description: 'Comprehensive cloud computing platform for building, deploying, and managing applications.',
    color: 'from-blue-500/30 to-azure-500/20',
    services: [
      'Azure infrastructure setup',
      'Cloud migration services',
      'Azure DevOps implementation',
      'Azure AI and Machine Learning',
      'Azure security and compliance',
      'Cost optimization'
    ],
    certifications: ['Azure Solutions Architect', 'Azure Developer', 'Azure Administrator', 'Azure Security Engineer'],
    benefits: [
      'Scalable cloud infrastructure',
      'Enterprise-grade security',
      'Hybrid cloud capabilities',
      'AI and analytics services',
      'Global data center presence'
    ]
  },
  {
    name: 'Google Cloud',
    logo: '🌐',
    description: 'Advanced cloud platform with AI, machine learning, and data analytics capabilities.',
    color: 'from-blue-400/30 to-green-400/20',
    services: [
      'GCP infrastructure design',
      'BigQuery data analytics',
      'Kubernetes orchestration',
      'AI/ML model deployment',
      'Cloud security implementation',
      'Multi-cloud strategies'
    ],
    certifications: ['Google Cloud Architect', 'Google Cloud Developer', 'Google Cloud Data Engineer', 'Google Cloud Security Engineer'],
    benefits: [
      'Advanced AI and ML tools',
      'Global network infrastructure',
      'Real-time data analytics',
      'Serverless computing',
      'Cost-effective pricing'
    ]
  },
  {
    name: 'Snowflake',
    logo: '❄️',
    description: 'Cloud data platform that enables data warehousing, data lakes, and data sharing.',
    color: 'from-blue-500/30 to-cyan-500/20',
    services: [
      'Data warehouse design',
      'Data lake implementation',
      'Data sharing and collaboration',
      'Performance optimization',
      'Security and governance',
      'Migration from legacy systems'
    ],
    certifications: ['Snowflake SnowPro Core', 'Snowflake SnowPro Advanced', 'Snowflake Architect'],
    benefits: [
      'Unlimited scalability',
      'Separation of compute and storage',
      'Data sharing capabilities',
      'Zero-copy cloning',
      'Multi-cloud support'
    ]
  },
  {
    name: 'IBM',
    logo: '🔵',
    description: 'Enterprise technology solutions including cloud, AI, and hybrid infrastructure.',
    color: 'from-blue-600/30 to-indigo-600/20',
    services: [
      'IBM Cloud solutions',
      'Watson AI implementation',
      'Hybrid cloud architecture',
      'Mainframe modernization',
      'Security and compliance',
      'Quantum computing consulting'
    ],
    certifications: ['IBM Cloud Architect', 'IBM Watson AI', 'IBM Security Specialist', 'IBM Data Engineer'],
    benefits: [
      'Enterprise-grade reliability',
      'AI-powered solutions',
      'Hybrid cloud expertise',
      'Industry-specific solutions',
      'Global support network'
    ]
  }
]

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

export default function PartnersPage() {
  const [selectedPartner, setSelectedPartner] = useState(0)

  return (
    <main className="min-h-screen bg-windows-dark-bg">
      <Header />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/#solutions" className="text-windows-dark-accent hover:text-windows-dark-accent-hover mb-8 inline-block">
            ← Back to Solutions
          </Link>
        </div>

        {/* Hero Section with Clickable Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="windows-card p-12 md:p-16 bg-gradient-to-br from-windows-dark-accent/30 via-windows-dark-accent/20 to-windows-dark-accent/10 text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Technology Partners</h1>
            <p className="text-xl md:text-2xl text-windows-dark-text-secondary max-w-3xl mx-auto mb-8">
              As certified Enterprise Partners, we deliver world-class solutions powered by industry-leading platforms. 
              Our partnerships enable us to provide you with the best technology solutions and support.
            </p>
            
            {/* Partner Selection Cards */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
              {partners.map((partner, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedPartner(index)}
                  className={`windows-card p-6 hover:border-windows-dark-accent transition-all cursor-pointer ${
                    selectedPartner === index ? 'border-windows-dark-accent border-2' : ''
                  }`}
                >
                  <div className="text-5xl md:text-6xl mb-3">{partner.logo}</div>
                  <div className="text-white font-semibold text-sm md:text-base">{partner.name}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Full-Page Carousel Content */}
        <div className="min-h-[calc(100vh-300px)]">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`transition-opacity duration-500 ${
                selectedPartner === index ? 'opacity-100 block' : 'opacity-0 hidden'
              }`}
            >
              <section className={`py-16 md:py-24 bg-windows-dark-bg`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Logo and Description */}
                    <div className={`windows-card p-10 md:p-16 bg-gradient-to-br ${partner.color} relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                      <div className="relative z-10">
                        <div className="text-9xl md:text-[12rem] mb-8 text-center">{partner.logo}</div>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center">{partner.name}</h2>
                        <p className="text-lg md:text-xl text-windows-dark-text-secondary text-center leading-relaxed">
                          {partner.description}
                        </p>
                      </div>
                    </div>

                    {/* Right Side - Services and Details */}
                    <div className="space-y-8">
                      <div className="windows-card p-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Services</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {partner.services.map((service, sIndex) => (
                            <div key={sIndex} className="flex items-start">
                              <span className="text-windows-dark-accent mr-3 text-xl">→</span>
                              <span className="text-windows-dark-text-secondary text-base md:text-lg">{service}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="windows-card p-8 bg-gradient-to-br from-windows-dark-surface to-windows-dark-bg">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Certifications</h3>
                        <div className="flex flex-wrap gap-3">
                          {partner.certifications.map((cert, cIndex) => (
                            <span key={cIndex} className="px-4 py-2 bg-windows-dark-accent/20 text-windows-dark-accent rounded text-sm md:text-base">
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="windows-card p-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Key Benefits</h3>
                        <ul className="space-y-3">
                          {partner.benefits.map((benefit, bIndex) => (
                            <li key={bIndex} className="flex items-start">
                              <span className="text-windows-dark-accent mr-3 text-xl">✓</span>
                              <span className="text-windows-dark-text-secondary text-base md:text-lg">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="windows-card p-12 md:p-16 bg-gradient-to-br from-windows-dark-accent/20 to-windows-dark-accent/5 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Partner With Us</h2>
            <p className="text-windows-dark-text-secondary mb-10 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Leverage our certified partner status to access the best technology solutions. Our partnerships 
              ensure you get expert implementation, ongoing support, and access to the latest platform features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="windows-button windows-button-primary text-lg md:text-xl px-10 py-4">
                Contact Us
              </button>
              <button className="windows-button text-lg md:text-xl px-10 py-4">
                View Solutions
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
