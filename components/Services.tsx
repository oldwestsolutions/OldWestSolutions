'use client'

import { useRouter } from 'next/navigation'

interface Service {
  title: string
  description: string
  icon: string
}

const featuredProducts = [
  {
    title: 'ProHost Managed Servers',
    description: 'Fully managed dedicated and virtual servers with 24/7 monitoring, automated backups, and enterprise-grade security.',
    gradient: 'from-blue-600 to-cyan-500',
    category: 'Managed Servers',
  },
  {
    title: 'MacCloud Virtual Machines',
    description: 'High-performance macOS virtual machines for development, testing, and creative workflows. Pre-configured and ready to deploy.',
    gradient: 'from-purple-600 to-pink-500',
    category: 'Virtual Machines',
  },
  {
    title: 'BusinessMail Pro Setup',
    description: 'Professional email hosting and configuration with custom domains, advanced security, and seamless integration.',
    gradient: 'from-green-600 to-emerald-500',
    category: 'Email Solutions',
  },
  {
    title: 'TechSource Hardware',
    description: 'Certified pre-owned and new enterprise hardware from trusted suppliers. Servers, workstations, and networking equipment.',
    gradient: 'from-orange-600 to-red-500',
    category: 'Hardware',
  },
]

const services: Service[] = [
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services.',
    icon: '☁️',
  },
  {
    title: 'Network Security',
    description: 'Comprehensive security solutions to protect your business.',
    icon: '🔒',
  },
  {
    title: 'AI',
    description: 'Artificial intelligence solutions to transform your business.',
    icon: '🤖',
  },
  {
    title: 'Managed Services',
    description: '24/7 monitoring and support for your systems.',
    icon: '⚙️',
  },
  {
    title: 'Data & Analytics',
    description: 'Transform data into actionable business insights.',
    icon: '📊',
  },
  {
    title: 'Automation',
    description: 'Streamline processes with intelligent automation.',
    icon: '🤖',
  },
  {
    title: 'Hybrid Cloud',
    description: 'Seamless integration across cloud and on-premises.',
    icon: '🌐',
  },
  {
    title: 'Blockchain',
    description: 'Blockchain solutions for secure and transparent operations.',
    icon: '⛓️',
  },
]

export default function Services() {
  const router = useRouter()

  const handleServiceClick = (service: Service) => {
    const slug = service.title.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')
    router.push(`/services/${slug}`)
  }

  return (
    <section id="products" className="py-12 md:py-20 bg-windows-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Products Cards */}
        <div className="mb-12 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-6 md:mt-8">
            {featuredProducts.map((product, index) => (
              <div
                key={index}
                className="windows-card p-4 md:p-6 hover:scale-105 transition-transform duration-300 cursor-pointer group"
              >
                <div className={`w-full h-24 md:h-32 mb-3 md:mb-4 rounded bg-gradient-to-br ${product.gradient} opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center`}>
                  <span className="text-3xl md:text-4xl opacity-70">{product.category === 'Managed Servers' ? '🖥️' : product.category === 'Virtual Machines' ? '💻' : product.category === 'Email Solutions' ? '📧' : '🔧'}</span>
                </div>
                <div className="text-xs text-windows-dark-accent mb-2 font-medium">{product.category}</div>
                <h3 className="text-base md:text-lg font-semibold text-white mb-2">{product.title}</h3>
                <p className="text-windows-dark-text-secondary text-xs md:text-sm mb-3 md:mb-4">{product.description}</p>
                <a href="#" className="text-windows-dark-accent hover:text-windows-dark-accent-hover text-xs md:text-sm font-medium flex items-center gap-1">
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions Section - 4x2 Layout */}
        <div className="mb-16" id="solutions">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Solutions</h2>
          <p className="text-windows-dark-text-secondary text-base md:text-lg max-w-3xl mb-8 md:mb-12">
            From next-generation cloud solutions to cutting-edge security, our deep expertise across industries can help you reinvent how your business works in the digital age.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => handleServiceClick(service)}
                className="windows-card p-4 md:p-6 hover:border-windows-dark-accent transition-all duration-300 text-center group cursor-pointer"
              >
                <div className="text-4xl md:text-5xl mb-3 md:mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-base md:text-lg font-semibold text-white mb-2 md:mb-3">{service.title}</h3>
                <p className="text-windows-dark-text-secondary text-xs md:text-sm mb-3 md:mb-4">{service.description}</p>
                <div className="text-windows-dark-accent text-xs md:text-sm flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                  Learn more →
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

