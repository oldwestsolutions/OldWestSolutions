import Header from '@/components/Header'
import Link from 'next/link'

const applications = [
  {
    name: 'Consequence',
    description: 'An AI-powered music creation that leverages machine learning to help producers generate original compositions, optimize their workflow, and explore new sonic possibilities. Connects seamlessly with various music production tools.',
    language: 'JavaScript',
    updated: '3 days ago',
    features: [
      'AI-powered composition generation',
      'Machine learning integration',
      'Workflow optimization',
      'Sonic exploration tools',
      'Seamless tool integration',
    ],
  },
  {
    name: 'PayPhone',
    description: 'A neural network dedicated to generating song lyrics. Leveraging advanced sequence models and LLMs. Producing context-aware, coherent, and adaptable lyrics across musical genres. Users can prompt the system for custom lyrics.',
    language: 'JavaScript',
    updated: '5 days ago',
    features: [
      'Neural network lyrics generation',
      'Advanced sequence models',
      'LLM-powered content creation',
      'Context-aware output',
      'Multi-genre support',
    ],
  },
  {
    name: 'Wintergarden',
    description: 'A performance platform designed to enhance music outcomes using Watson AI, large language models (LLMs), and virtual machines (VMs). It provides AI analysis, guides, and optimizes musical performance through intelligent feedback.',
    language: 'JavaScript',
    updated: '5 days ago',
    features: [
      'Watson AI integration',
      'LLM-powered analysis',
      'Virtual machine support',
      'Performance optimization',
      'Intelligent feedback system',
    ],
  },
  {
    name: 'EtherBonds',
    description: 'An educational application that uses programmable bond and escrow concepts to teach and simulate decentralized systems within LLM-driven environments and virtual machines.',
    language: 'JavaScript',
    updated: '5 days ago',
    features: [
      'Programmable bond concepts',
      'Escrow simulation',
      'Decentralized systems education',
      'LLM-driven environments',
      'Virtual machine integration',
    ],
  },
  {
    name: 'Lubbock.Cloud',
    description: 'A cloud platform that transforms energy constraints into competitive advantages through three integrated engines: energy arbitrage, adaptive compute, and natural resource optimization. Leveraging advanced algorithms for efficiency.',
    language: 'TypeScript',
    updated: 'last week',
    features: [
      'Energy arbitrage engine',
      'Adaptive compute optimization',
      'Natural resource optimization',
      'Advanced algorithm integration',
      'Competitive advantage transformation',
    ],
  },
  {
    name: 'Deadwood.Software',
    description: 'A quantum-inspired supply-chain optimization platform that unifies enterprise data into an AI-ready foundation. It applies probabilistic and hybrid quantum-classical methods to demand forecasting, inventory management, and logistics optimization.',
    language: 'TypeScript',
    updated: 'last week',
    features: [
      'Quantum-inspired algorithms',
      'Supply-chain optimization',
      'Enterprise data unification',
      'Demand forecasting',
      'Hybrid quantum-classical methods',
    ],
  },
  {
    name: 'OldWest',
    description: 'A decentralized platform built on the Cosmos network that connects freelancers and collaborators while tracking merit earned from successful projects. Users work in dedicated virtual machines (VMs) with secure collaboration tools.',
    language: 'TypeScript',
    updated: 'last week',
    features: [
      'Cosmos network integration',
      'Freelancer collaboration',
      'Merit tracking system',
      'Virtual machine workspaces',
      'Secure collaboration tools',
    ],
  },
  {
    name: 'AutoEquityGroup',
    description: 'A platform for evaluating and managing vehicle equity. It leverages a private blockchain for secure, tamper-proof transaction tracking and AWS cloud functions for scalable data processing and real-time analytics.',
    language: 'TypeScript',
    updated: '3 weeks ago',
    features: [
      'Vehicle equity evaluation',
      'Private blockchain integration',
      'Tamper-proof transactions',
      'AWS cloud functions',
      'Real-time analytics',
    ],
  },
  {
    name: 'HatedByMany',
    description: 'Neural network-powered platform for user-generated content (UGC) image editing and marketing ideation. It enables creators and brands to generate, refine, and optimize visual content. The platform uses advanced AI for creative workflows.',
    language: 'TypeScript',
    updated: 'Oct 13, 2025',
    features: [
      'Neural network image editing',
      'UGC content creation',
      'Marketing ideation tools',
      'Visual content optimization',
      'Advanced AI workflows',
    ],
  },
  {
    name: 'XYZ',
    description: 'Platform designed for Delta-8 THC distribution, providing inventory management, order tracking, and regulatory compliance tools. The system streamlines product listings, sales workflows, and shipping processes.',
    language: 'CSS',
    updated: 'Oct 7, 2025',
    features: [
      'Inventory management',
      'Order tracking system',
      'Regulatory compliance',
      'Product listing management',
      'Streamlined sales workflows',
    ],
  },
  {
    name: 'Consultation.Directory',
    description: 'A Polygon-powered decentralized consultation platform that connects professionals with clients for Public Relations, Career Development, and mentorship gigs where social feedback and reputation matter.',
    language: 'TypeScript',
    updated: 'Sep 29, 2025',
    features: [
      'Polygon blockchain integration',
      'Professional-client matching',
      'Public Relations services',
      'Career development tools',
      'Reputation system',
    ],
  },
  {
    name: 'FirstClassMail',
    description: 'A modern, premium shipping and fulfillment platform for sending documents, parcels, and products with ease, reliability, and full tracking. Designed to combine bulk shipping arbitrage, automation, and comprehensive logistics management.',
    language: 'TypeScript',
    updated: 'Sep 29, 2025',
    features: [
      'Premium shipping services',
      'Full tracking capabilities',
      'Bulk shipping arbitrage',
      'Automation tools',
      'Comprehensive logistics',
    ],
  },
  {
    name: 'Moneybagg',
    description: 'A lightweight, customizable link hub — similar to Linktree — that enables creators, influencers, and businesses to showcase all their important links in one place. It's designed to be fast, easy to use, and highly customizable.',
    language: 'TypeScript',
    updated: 'May 20, 2025',
    features: [
      'Customizable link hub',
      'Creator and influencer tools',
      'Business link management',
      'Fast and lightweight',
      'Easy customization',
    ],
  },
  {
    name: 'RockstarCareers',
    description: 'A job search platform connecting job seekers with top employers and career opportunities. Featuring advanced search, location- and role-based filters, personalized recommendations, and optimized SEO for better discoverability.',
    language: 'TypeScript',
    updated: 'May 5, 2025',
    features: [
      'Advanced job search',
      'Location-based filters',
      'Role-based filtering',
      'Personalized recommendations',
      'SEO optimization',
    ],
  },
  {
    name: 'CreditCoffee',
    description: 'A NEAR Protocol–powered micro-credit platform that lets users build a verifiable credit history starting from as little as $1. Designed for financial inclusion and global accessibility, credit.coffee enables accessible financial services.',
    language: 'TypeScript',
    updated: 'May 5, 2025',
    features: [
      'NEAR Protocol integration',
      'Micro-credit services',
      'Verifiable credit history',
      'Financial inclusion focus',
      'Global accessibility',
    ],
  },
  {
    name: 'Pressbox',
    description: 'SaaS platform that lets websites instantly integrate news content. It provides a modular, customizable news solution that delivers curated headlines, summaries, and topic filters through embed widgets and APIs.',
    language: 'TypeScript',
    updated: 'Apr 28, 2025',
    features: [
      'News content integration',
      'Modular news solution',
      'Curated headlines',
      'Embed widgets',
      'API access',
    ],
  },
  {
    name: 'RockefellerPress',
    description: 'A comprehensive platform for crypto news, DeFi updates, and cryptocurrency reviews. Stay informed on market trends, emerging blockchain projects, and decentralized finance innovations. Explore in-depth analysis and real-time updates.',
    language: 'TypeScript',
    updated: 'Apr 26, 2025',
    features: [
      'Crypto news aggregation',
      'DeFi updates',
      'Cryptocurrency reviews',
      'Market trend analysis',
      'Real-time updates',
    ],
  },
  {
    name: 'Mixtapes',
    description: 'A platform for creating and sharing music mixtapes with advanced curation and discovery features.',
    language: 'JavaScript',
    updated: 'Apr 26, 2025',
    features: [
      'Mixtape creation',
      'Music sharing',
      'Advanced curation',
      'Discovery features',
      'Social integration',
    ],
  },
  {
    name: 'JunkYardCarParts',
    description: 'A platform that helps users search, list, and manage automotive parts inventory using the eBay API. It streamlines sourcing and selling car parts, providing a searchable catalog, real-time pricing, and inventory management tools.',
    language: 'TypeScript',
    updated: 'Apr 17, 2025',
    features: [
      'eBay API integration',
      'Automotive parts search',
      'Inventory management',
      'Real-time pricing',
      'Searchable catalog',
    ],
  },
  {
    name: 'SubsidyCheck',
    description: 'An Avalanche-powered decentralized subsidy platform that allows users to apply for substantial subsidies funded by private stakers. The platform uses on-chain governance and conditional logic to ensure fair distribution and transparency.',
    language: 'JavaScript',
    updated: 'Mar 20, 2025',
    features: [
      'Avalanche blockchain integration',
      'Decentralized subsidies',
      'Private staker funding',
      'On-chain governance',
      'Conditional logic system',
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

