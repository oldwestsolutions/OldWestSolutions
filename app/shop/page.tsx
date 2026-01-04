import type { Metadata } from 'next'
import Header from '@/components/Header'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Old West Solutions',
  description: 'Shop Old West Solutions products and applications. Managed servers, virtual machines, email solutions, hardware, and custom software applications including Consequence, PayPhone, Wintergarden, and more.',
  keywords: 'IT products, managed servers, virtual machines, email solutions, hardware, software applications, Consequence, PayPhone, Wintergarden, enterprise software',
  alternates: {
    canonical: '/shop',
  },
  openGraph: {
    title: 'Shop - Old West Solutions Products & Applications',
    description: 'Shop Old West Solutions products and applications. Managed servers, virtual machines, email solutions, hardware, and custom software applications.',
    url: 'https://oldwestsolutions.com/shop',
    type: 'website',
  },
}

const applications = [
  {
    name: 'Consequence',
    description: 'AI-powered music creation platform leveraging machine learning to help producers generate original compositions, optimize creative workflows, and explore new sonic possibilities through intelligent analysis and generation.',
    language: 'JavaScript',
    updated: '3 days ago',
    features: [
      'AI-powered composition generation',
      'Machine learning integration',
      'Creative workflow optimization',
      'Intelligent sonic analysis',
      'Original composition tools',
    ],
  },
  {
    name: 'PayPhone',
    description: 'Neural network–driven lyric generation system using advanced sequence models and large language models (LLMs) to produce context-aware, coherent, and adaptable song lyrics across multiple musical genres.',
    language: 'JavaScript',
    updated: '5 days ago',
    features: [
      'Neural network lyrics generation',
      'Advanced sequence models',
      'LLM-powered content creation',
      'Context-aware output',
      'Multi-genre adaptability',
    ],
  },
  {
    name: 'Wintergarden',
    description: 'Performance optimization platform for musicians that integrates Watson AI, LLMs, and virtual machines (VMs) to analyze, guide, and enhance musical performance outcomes in real time.',
    language: 'JavaScript',
    updated: '5 days ago',
    features: [
      'Watson AI integration',
      'LLM-powered analysis',
      'Virtual machine support',
      'Real-time performance optimization',
      'Musical outcome enhancement',
    ],
  },
  {
    name: 'EtherBonds',
    description: 'Educational application that simulates programmable bonds and escrow mechanisms to teach decentralized systems using LLM-driven environments and virtual machines.',
    language: 'JavaScript',
    updated: '5 days ago',
    features: [
      'Programmable bond simulation',
      'Escrow mechanism teaching',
      'Decentralized systems education',
      'LLM-driven environments',
      'Virtual machine integration',
    ],
  },
  {
    name: 'Lubbock.Cloud',
    description: 'Cloud infrastructure platform that converts energy constraints into competitive advantages using three integrated engines: energy arbitrage, adaptive compute orchestration, and natural resource optimization.',
    language: 'TypeScript',
    updated: 'last week',
    features: [
      'Energy arbitrage engine',
      'Adaptive compute orchestration',
      'Natural resource optimization',
      'Three-engine integration',
      'Competitive advantage conversion',
    ],
  },
  {
    name: 'Deadwood.Software',
    description: 'Quantum-inspired supply chain optimization platform that unifies enterprise data into an AI-ready foundation, applying probabilistic and hybrid quantum-classical techniques to forecasting and logistics optimization.',
    language: 'TypeScript',
    updated: 'last week',
    features: [
      'Quantum-inspired algorithms',
      'Supply chain optimization',
      'Enterprise data unification',
      'Probabilistic forecasting',
      'Hybrid quantum-classical techniques',
    ],
  },
  {
    name: 'OldWest',
    description: 'Decentralized collaboration platform built on the Cosmos network, connecting freelancers and collaborators while tracking merit earned from successful projects within dedicated virtual machine workspaces.',
    language: 'TypeScript',
    updated: 'last week',
    features: [
      'Cosmos network integration',
      'Freelancer collaboration',
      'Merit tracking system',
      'Virtual machine workspaces',
      'Project-based merit system',
    ],
  },
  {
    name: 'AutoEquityGroup',
    description: 'Platform for evaluating and managing vehicle equity using a private blockchain for secure, tamper-proof transaction records and scalable cloud-based data processing.',
    language: 'TypeScript',
    updated: '3 weeks ago',
    features: [
      'Vehicle equity evaluation',
      'Private blockchain integration',
      'Tamper-proof transaction records',
      'Scalable cloud processing',
      'Secure data management',
    ],
  },
  {
    name: 'HatedByMany',
    description: 'Neural network–powered platform for user-generated content (UGC) image editing and marketing ideation, enabling creators and brands to generate, refine, and optimize visual assets at scale.',
    language: 'TypeScript',
    updated: 'Oct 13, 2025',
    features: [
      'Neural network image editing',
      'UGC content creation',
      'Marketing ideation tools',
      'Visual asset optimization',
      'Scale-ready platform',
    ],
  },
  {
    name: 'XYZ',
    description: 'Distribution and compliance platform for Delta-8 THC products, providing inventory management, order tracking, and regulatory workflow automation.',
    language: 'CSS',
    updated: 'Oct 7, 2025',
    features: [
      'Inventory management',
      'Order tracking system',
      'Regulatory compliance',
      'Workflow automation',
      'Delta-8 THC distribution',
    ],
  },
  {
    name: 'Consultation.Directory',
    description: 'Decentralized consultation marketplace powered by Polygon, connecting professionals with clients for public relations, career development, and mentorship services through reputation and feedback systems.',
    language: 'TypeScript',
    updated: 'Sep 29, 2025',
    features: [
      'Polygon blockchain integration',
      'Professional-client matching',
      'Public relations services',
      'Career development tools',
      'Reputation and feedback systems',
    ],
  },
  {
    name: 'FirstClassMail',
    description: 'Modern shipping and fulfillment platform enabling automated document and parcel delivery with full tracking, logistics optimization, and bulk shipping workflows.',
    language: 'TypeScript',
    updated: 'Sep 29, 2025',
    features: [
      'Automated delivery system',
      'Full tracking capabilities',
      'Logistics optimization',
      'Bulk shipping workflows',
      'Document and parcel handling',
    ],
  },
  {
    name: 'Moneybagg',
    description: 'Lightweight, customizable link-in-bio platform designed for creators, influencers, and businesses to consolidate and share important links in a single fast-loading page.',
    language: 'TypeScript',
    updated: 'May 20, 2025',
    features: [
      'Customizable link hub',
      'Creator and influencer tools',
      'Business link management',
      'Fast-loading design',
      'Single-page consolidation',
    ],
  },
  {
    name: 'RockstarCareers',
    description: 'Job search and recruitment platform connecting candidates with employers through advanced filtering, personalized recommendations, and SEO-optimized job listings.',
    language: 'TypeScript',
    updated: 'May 5, 2025',
    features: [
      'Advanced job filtering',
      'Personalized recommendations',
      'SEO-optimized listings',
      'Candidate-employer matching',
      'Recruitment tools',
    ],
  },
  {
    name: 'CreditCoffee',
    description: 'Micro-credit platform enabling users to build verifiable credit histories through small transactions, designed to promote financial inclusion and global accessibility.',
    language: 'TypeScript',
    updated: 'May 5, 2025',
    features: [
      'Micro-credit services',
      'Verifiable credit history',
      'Small transaction support',
      'Financial inclusion focus',
      'Global accessibility',
    ],
  },
  {
    name: 'Pressbox',
    description: 'SaaS platform that allows websites to embed modular, customizable news feeds featuring curated headlines, summaries, and topic-based filtering.',
    language: 'TypeScript',
    updated: 'Apr 28, 2025',
    features: [
      'Modular news feeds',
      'Customizable integration',
      'Curated headlines',
      'Topic-based filtering',
      'Embed-ready platform',
    ],
  },
  {
    name: 'RockefellerPress',
    description: 'Digital media platform delivering crypto news, DeFi updates, blockchain project analysis, and market insights.',
    language: 'TypeScript',
    updated: 'Apr 26, 2025',
    features: [
      'Crypto news delivery',
      'DeFi updates',
      'Blockchain project analysis',
      'Market insights',
      'Digital media platform',
    ],
  },
  {
    name: 'Mixtapes',
    description: 'AI-driven music curation platform that classifies tracks using machine learning and assembles cohesive mixtapes based on musical compatibility, flow, and energy progression.',
    language: 'JavaScript',
    updated: 'Apr 26, 2025',
    features: [
      'AI-driven curation',
      'Machine learning classification',
      'Musical compatibility analysis',
      'Flow and energy progression',
      'Cohesive mixtape assembly',
    ],
  },
  {
    name: 'JunkYardCarParts',
    description: 'Automotive parts sourcing and inventory management platform integrating third-party marketplaces to provide searchable catalogs, real-time pricing, and streamlined selling workflows.',
    language: 'TypeScript',
    updated: 'Apr 17, 2025',
    features: [
      'Third-party marketplace integration',
      'Searchable parts catalog',
      'Real-time pricing',
      'Streamlined selling workflows',
      'Inventory management',
    ],
  },
  {
    name: 'SubsidyCheck',
    description: 'Decentralized subsidy application platform enabling users to apply for large-scale subsidies through on-chain governance and conditional funding logic.',
    language: 'JavaScript',
    updated: 'Mar 20, 2025',
    features: [
      'Decentralized subsidy platform',
      'On-chain governance',
      'Conditional funding logic',
      'Large-scale subsidy applications',
      'Transparent funding system',
    ],
  },
]

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-windows-dark-bg">
      <Header />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/#shop" className="text-windows-dark-accent hover:text-windows-dark-accent-hover mb-8 inline-block">
            ← Back to Shop
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="mb-12 md:mb-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Applications</h1>
            <p className="text-lg md:text-xl text-windows-dark-text-secondary max-w-3xl mx-auto">
              Explore our portfolio of innovative applications built with cutting-edge technology.
            </p>
          </div>

          <div className="space-y-24 md:space-y-32">
            {applications.map((app, index) => (
              <section key={index} className="min-h-[50vh]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                  <div className="windows-card p-8 md:p-12">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-5xl md:text-6xl">{app.name === 'Consequence' ? '🎹' : app.name === 'PayPhone' ? '📞' : app.name === 'Wintergarden' ? '🎵' : app.name === 'EtherBonds' ? '⛓️' : app.name === 'Lubbock.Cloud' ? '☁️' : app.name === 'Deadwood.Software' ? '🌲' : app.name === 'OldWest' ? '🤠' : app.name === 'AutoEquityGroup' ? '🚗' : app.name === 'HatedByMany' ? '🎨' : app.name === 'XYZ' ? '🌿' : app.name === 'Consultation.Directory' ? '📋' : app.name === 'FirstClassMail' ? '📮' : app.name === 'Moneybagg' ? '💰' : app.name === 'RockstarCareers' ? '⭐' : app.name === 'CreditCoffee' ? '☕' : app.name === 'Pressbox' ? '📦' : app.name === 'RockefellerPress' ? '📰' : app.name === 'Mixtapes' ? '🎧' : app.name === 'JunkYardCarParts' ? '🔧' : app.name === 'SubsidyCheck' ? '💸' : '💻'}</div>
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{app.name}</h2>
                        <div className="flex items-center gap-3 text-sm text-windows-dark-text-secondary">
                          <span className="px-2 py-1 bg-windows-dark-accent/20 text-windows-dark-accent rounded">
                            {app.language}
                          </span>
                          <span>Updated {app.updated}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-lg md:text-xl text-windows-dark-text-secondary leading-relaxed mb-6">
                      {app.description}
                    </p>
                  </div>

                  <div className="windows-card p-8 md:p-12 bg-gradient-to-br from-windows-dark-surface to-windows-dark-bg">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Key Features</h3>
                    <ul className="space-y-4">
                      {app.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start">
                          <span className="text-windows-dark-accent mr-3 text-xl">→</span>
                          <span className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

