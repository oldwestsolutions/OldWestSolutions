'use client'

import { useRouter } from 'next/navigation'
import { 
  Cloud, 
  Shield, 
  Cpu, 
  Settings, 
  BarChart3, 
  Zap, 
  Network, 
  Link as LinkIcon,
  Server,
  type LucideIcon
} from 'lucide-react'

interface Service {
  title: string
  description: string
  icon: LucideIcon
}

interface FeaturedProduct {
  title: string
  description: string
  category: string
  icon: LucideIcon | string
  useIcon: boolean
}

const featuredProducts: FeaturedProduct[] = [
  {
    title: 'ProHost Managed Servers',
    description: 'Fully managed dedicated and virtual servers with 24/7 monitoring, automated backups, and enterprise-grade security.',
    category: 'Managed Servers',
    icon: '☁️',
    useIcon: false,
  },
  {
    title: 'MacCloud Virtual Machines',
    description: 'High-performance macOS virtual machines for development, testing, and creative workflows. Pre-configured and ready to deploy.',
    category: 'Virtual Machines',
    icon: '💻',
    useIcon: false,
  },
  {
    title: 'BusinessMail Pro Setup',
    description: 'Professional email hosting and configuration with custom domains, advanced security, and seamless integration.',
    category: 'Email Solutions',
    icon: '📧',
    useIcon: false,
  },
  {
    title: 'TechSource Hardware',
    description: 'Certified pre-owned and new enterprise hardware from trusted suppliers. Servers, workstations, and networking equipment.',
    category: 'Hardware',
    icon: '🔧',
    useIcon: false,
  },
]

const services: Service[] = [
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services.',
    icon: Cloud,
  },
  {
    title: 'Network Security',
    description: 'Comprehensive security solutions to protect your business.',
    icon: Shield,
  },
  {
    title: 'AI',
    description: 'Artificial intelligence solutions to transform your business.',
    icon: Cpu,
  },
  {
    title: 'Managed Services',
    description: '24/7 monitoring and support for your systems.',
    icon: Settings,
  },
  {
    title: 'Data & Analytics',
    description: 'Transform data into actionable business insights.',
    icon: BarChart3,
  },
  {
    title: 'Automation',
    description: 'Streamline processes with intelligent automation.',
    icon: Zap,
  },
  {
    title: 'Hybrid Cloud',
    description: 'Seamless integration across cloud and on-premises.',
    icon: Network,
  },
  {
    title: 'Blockchain',
    description: 'Blockchain solutions for secure and transparent operations.',
    icon: LinkIcon,
  },
]

export default function Services() {
  const router = useRouter()

  const handleServiceClick = (service: Service) => {
    const slug = service.title.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')
    router.push(`/services/${slug}`)
  }

  return (
    <section id="shop" className="py-12 md:py-20 bg-windows-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Products Cards */}
        <div className="mb-12 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Shop</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-6 md:mt-8">
            {featuredProducts.map((product, index) => (
              <div
                key={index}
                className="windows-card p-4 md:p-6 hover:scale-105 transition-transform duration-300 cursor-pointer group flex flex-col"
              >
                <div className="w-full h-24 md:h-32 mb-3 md:mb-4 rounded bg-windows-dark-surface flex items-center justify-center">
                  {product.useIcon && typeof product.icon !== 'string' ? (
                    (() => {
                      const IconComponent = product.icon as LucideIcon
                      return <IconComponent className="w-12 h-12 md:w-16 md:h-16 text-windows-dark-accent" strokeWidth={1.5} />
                    })()
                  ) : (
                    <span className="text-5xl md:text-6xl lg:text-7xl">{typeof product.icon === 'string' ? product.icon : ''}</span>
                  )}
                </div>
                <div className="text-xs text-windows-dark-accent mb-2 font-medium">{product.category}</div>
                <h3 className="text-base md:text-lg font-semibold text-white mb-2">{product.title}</h3>
                <p className="text-windows-dark-text-secondary text-xs md:text-sm mb-3 md:mb-4 flex-grow">{product.description}</p>
                <a href={`/shop/${product.category.toLowerCase().replace(/\s+/g, '-')}`} className="text-windows-dark-accent hover:text-windows-dark-accent-hover text-xs md:text-sm font-medium flex items-center gap-1 mt-auto">
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions Section - 2x4 Layout on Mobile, 4x2 on Desktop */}
        <div className="mb-16" id="solutions">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Solutions</h2>
          <p className="text-windows-dark-text-secondary text-base md:text-lg max-w-3xl mb-8 md:mb-12">
            From next-generation cloud solutions to cutting-edge security, our deep expertise across industries can help you reinvent how your business works in the digital age.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={index}
                  onClick={() => handleServiceClick(service)}
                  className="windows-card p-3 md:p-6 hover:border-windows-dark-accent transition-all duration-300 text-center group cursor-pointer"
                >
                  <div className="flex justify-center mb-2 md:mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 md:w-16 md:h-16 text-windows-dark-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm md:text-lg font-semibold text-white mb-1 md:mb-3 leading-tight">{service.title}</h3>
                  <p className="text-windows-dark-text-secondary text-xs md:text-sm mb-2 md:mb-4 line-clamp-2 md:line-clamp-none">{service.description}</p>
                  <div className="text-windows-dark-accent text-xs md:text-sm flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                    <span className="hidden md:inline">Learn more</span>
                    <span className="md:hidden">More</span>
                    <span className="hidden sm:inline">→</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

