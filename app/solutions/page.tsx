import type { Metadata } from 'next'
import Header from '@/components/Header'
import Link from 'next/link'
import { 
  Cloud, 
  Shield, 
  Cpu, 
  Settings, 
  BarChart3, 
  Zap, 
  Network, 
  Link as LinkIcon,
  ArrowRight
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Old West Solutions',
  description: 'Enterprise IT solutions and services. Cloud solutions, network security, AI, managed services, data analytics, automation, hybrid cloud, and blockchain solutions.',
  keywords: 'IT solutions, cloud solutions, network security, AI services, managed services, data analytics, automation, hybrid cloud, blockchain',
  alternates: {
    canonical: '/solutions',
  },
  openGraph: {
    title: 'Solutions - Old West Solutions',
    description: 'Enterprise IT solutions and services. Cloud solutions, network security, AI, managed services, data analytics, automation, hybrid cloud, and blockchain solutions.',
    url: 'https://oldwestsolutions.com/solutions',
    type: 'website',
  },
}

const solutions = [
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services.',
    icon: Cloud,
    href: '/services/cloud-solutions',
    features: ['Cloud Migration', 'Infrastructure Setup', 'Cost Optimization', 'Multi-Cloud Strategy'],
  },
  {
    title: 'Network Security',
    description: 'Comprehensive security solutions to protect your business.',
    icon: Shield,
    href: '/solutions/cybersecurity',
    features: ['Threat Detection', 'Firewall Management', 'Security Audits', 'Compliance'],
  },
  {
    title: 'AI',
    description: 'Artificial intelligence solutions to transform your business.',
    icon: Cpu,
    href: '/services/ai',
    features: ['Machine Learning', 'AI Integration', 'Data Analytics', 'Automation'],
  },
  {
    title: 'Managed Services',
    description: '24/7 monitoring and support for your systems.',
    icon: Settings,
    href: '/services/managed-services',
    features: ['24/7 Monitoring', 'Proactive Support', 'System Maintenance', 'Performance Optimization'],
  },
  {
    title: 'Data & Analytics',
    description: 'Transform data into actionable business insights.',
    icon: BarChart3,
    href: '/services/data-and-analytics',
    features: ['Data Warehousing', 'Business Intelligence', 'Real-time Analytics', 'Reporting'],
  },
  {
    title: 'Automation',
    description: 'Streamline processes with intelligent automation.',
    icon: Zap,
    href: '/services/automation',
    features: ['Workflow Automation', 'Process Optimization', 'Integration', 'Efficiency Gains'],
  },
  {
    title: 'Hybrid Cloud',
    description: 'Seamless integration across cloud and on-premises.',
    icon: Network,
    href: '/services/hybrid-cloud',
    features: ['Cloud Integration', 'On-Premises Support', 'Seamless Migration', 'Flexible Deployment'],
  },
  {
    title: 'Blockchain',
    description: 'Blockchain solutions for secure and transparent operations.',
    icon: LinkIcon,
    href: '/services/blockchain',
    features: ['Smart Contracts', 'Decentralized Apps', 'Security', 'Transparency'],
  },
]

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-windows-dark-bg">
      <Header />
      <div className="pt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-windows-dark-accent/20 via-windows-dark-accent/10 to-transparent border-b border-windows-dark-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Enterprise IT Solutions
              </h1>
              <p className="text-lg md:text-xl text-windows-dark-text-secondary mb-8 leading-relaxed">
                From next-generation cloud solutions to cutting-edge security, our deep expertise across 
                industries can help you reinvent how your business works in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#solutions-grid" className="windows-button windows-button-primary text-lg px-8 py-4">
                  Explore Solutions
                </a>
                <a href="/about" className="windows-button text-lg px-8 py-4">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Solutions Grid */}
        <div id="solutions-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Solutions</h2>
            <p className="text-windows-dark-text-secondary text-lg max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon
              return (
                <Link
                  key={index}
                  href={solution.href}
                  className="windows-card p-6 md:p-8 hover:border-windows-dark-accent transition-all duration-300 group cursor-pointer h-full flex flex-col"
                >
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                    <div className="p-4 bg-windows-dark-accent/10 rounded-lg group-hover:bg-windows-dark-accent/20 transition-colors">
                      <IconComponent className="w-12 h-12 md:w-16 md:h-16 text-windows-dark-accent" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-windows-dark-accent transition-colors">
                    {solution.title}
                  </h3>
                  
                  <p className="text-windows-dark-text-secondary text-sm md:text-base mb-6 flex-grow">
                    {solution.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {solution.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-2 text-xs md:text-sm text-windows-dark-text-secondary">
                        <div className="w-1.5 h-1.5 rounded-full bg-windows-dark-accent"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-windows-dark-accent font-medium text-sm md:text-base group-hover:gap-4 transition-all">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-windows-dark-surface border-t border-windows-dark-border py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg md:text-xl text-windows-dark-text-secondary mb-8 leading-relaxed">
              Let's discuss how our solutions can help you achieve your business goals. 
              Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#shop" className="windows-button windows-button-primary text-lg px-10 py-4">
                Get Started
              </a>
              <a href="/about" className="windows-button text-lg px-10 py-4">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

