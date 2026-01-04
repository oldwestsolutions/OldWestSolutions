import Header from '@/components/Header'
import Link from 'next/link'

const applications = [
  {
    name: 'Consequence',
    description: 'AI-powered music creation platform leveraging machine learning to help producers generate original compositions, optimize creative workflows, and explore new sonic possibilities through intelligent analysis and generation.',
  },
  {
    name: 'PayPhone',
    description: 'Neural network–driven lyric generation system using advanced sequence models and large language models (LLMs) to produce context-aware, coherent, and adaptable song lyrics across multiple musical genres.',
  },
  {
    name: 'Wintergarden',
    description: 'Performance optimization platform for musicians that integrates Watson AI, LLMs, and virtual machines (VMs) to analyze, guide, and enhance musical performance outcomes in real time.',
  },
  {
    name: 'EtherBonds',
    description: 'Educational application that simulates programmable bonds and escrow mechanisms to teach decentralized systems using LLM-driven environments and virtual machines.',
  },
  {
    name: 'Lubbock.Cloud',
    description: 'Cloud infrastructure platform that converts energy constraints into competitive advantages using three integrated engines: energy arbitrage, adaptive compute orchestration, and natural resource optimization.',
  },
  {
    name: 'Deadwood.Software',
    description: 'Quantum-inspired supply chain optimization platform that unifies enterprise data into an AI-ready foundation, applying probabilistic and hybrid quantum-classical techniques to forecasting and logistics optimization.',
  },
  {
    name: 'OldWest',
    description: 'Decentralized collaboration platform built on the Cosmos network, connecting freelancers and collaborators while tracking merit earned from successful projects within dedicated virtual machine workspaces.',
  },
  {
    name: 'AutoEquityGroup',
    description: 'Platform for evaluating and managing vehicle equity using a private blockchain for secure, tamper-proof transaction records and scalable cloud-based data processing.',
  },
  {
    name: 'HatedByMany',
    description: 'Neural network–powered platform for user-generated content (UGC) image editing and marketing ideation, enabling creators and brands to generate, refine, and optimize visual assets at scale.',
  },
  {
    name: 'XYZ',
    description: 'Distribution and compliance platform for Delta-8 THC products, providing inventory management, order tracking, and regulatory workflow automation.',
  },
  {
    name: 'Consultation.Directory',
    description: 'Decentralized consultation marketplace powered by Polygon, connecting professionals with clients for public relations, career development, and mentorship services through reputation and feedback systems.',
  },
  {
    name: 'FirstClassMail',
    description: 'Modern shipping and fulfillment platform enabling automated document and parcel delivery with full tracking, logistics optimization, and bulk shipping workflows.',
  },
  {
    name: 'Moneybagg',
    description: 'Lightweight, customizable link-in-bio platform designed for creators, influencers, and businesses to consolidate and share important links in a single fast-loading page.',
  },
  {
    name: 'RockstarCareers',
    description: 'Job search and recruitment platform connecting candidates with employers through advanced filtering, personalized recommendations, and SEO-optimized job listings.',
  },
  {
    name: 'CreditCoffee',
    description: 'Micro-credit platform enabling users to build verifiable credit histories through small transactions, designed to promote financial inclusion and global accessibility.',
  },
  {
    name: 'Pressbox',
    description: 'SaaS platform that allows websites to embed modular, customizable news feeds featuring curated headlines, summaries, and topic-based filtering.',
  },
  {
    name: 'RockefellerPress',
    description: 'Digital media platform delivering crypto news, DeFi updates, blockchain project analysis, and market insights.',
  },
  {
    name: 'Mixtapes',
    description: 'AI-driven music curation platform that classifies tracks using machine learning and assembles cohesive mixtapes based on musical compatibility, flow, and energy progression.',
  },
  {
    name: 'JunkYardCarParts',
    description: 'Automotive parts sourcing and inventory management platform integrating third-party marketplaces to provide searchable catalogs, real-time pricing, and streamlined selling workflows.',
  },
  {
    name: 'SubsidyCheck',
    description: 'Decentralized subsidy application platform enabling users to apply for large-scale subsidies through on-chain governance and conditional funding logic.',
  },
]

export default function ApplicationsPage() {
  return (
    <main className="min-h-screen bg-windows-dark-bg">
      <Header />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/" className="text-windows-dark-accent hover:text-windows-dark-accent-hover mb-8 inline-block">
            ← Back to Home
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="mb-12 md:mb-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Applications</h1>
            <p className="text-lg md:text-xl text-windows-dark-text-secondary max-w-3xl mx-auto">
              Explore our portfolio of innovative applications built with cutting-edge technology.
            </p>
          </div>

          <div className="space-y-8 md:space-y-12">
            {applications.map((app, index) => (
              <div key={index} className="windows-card p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{app.name}</h2>
                <p className="text-lg md:text-xl text-windows-dark-text-secondary leading-relaxed">
                  {app.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

