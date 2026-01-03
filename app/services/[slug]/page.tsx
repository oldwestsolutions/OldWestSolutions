import { notFound } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'

interface ServiceDetail {
  title: string
  icon: string
  description: string
  longDescription: string
  features: string[]
  benefits: string[]
  useCases: string[]
}

const services: Record<string, ServiceDetail> = {
  'cloud-solutions': {
    title: 'Cloud Solutions',
    icon: '☁️',
    description: 'Scalable cloud infrastructure and migration services.',
    longDescription: 'Transform your IT infrastructure with our comprehensive cloud solutions. We help businesses migrate to the cloud, optimize existing cloud deployments, and leverage cloud-native technologies to drive innovation and reduce costs.',
    features: [
      'Cloud migration and strategy',
      'Multi-cloud and hybrid cloud solutions',
      'Cloud infrastructure optimization',
      'Container orchestration and management',
      'Serverless architecture implementation',
      'Cloud security and compliance'
    ],
    benefits: [
      'Reduce infrastructure costs by up to 40%',
      'Improve scalability and flexibility',
      'Enhanced disaster recovery capabilities',
      'Faster time to market for new applications',
      '24/7 cloud monitoring and support'
    ],
    useCases: [
      'Enterprise cloud migration projects',
      'Hybrid cloud architecture design',
      'Cloud-native application development',
      'Cloud cost optimization initiatives'
    ]
  },
  'network-security': {
    title: 'Network Security',
    icon: '🔒',
    description: 'Comprehensive security solutions to protect your business.',
    longDescription: 'Protect your business from evolving cyber threats with our enterprise-grade network security solutions. We provide end-to-end security services including threat detection, vulnerability assessment, and incident response.',
    features: [
      'Firewall and network protection',
      'Intrusion detection and prevention',
      'Security information and event management (SIEM)',
      'Endpoint protection and EDR',
      'Identity and access management',
      'Security awareness training'
    ],
    benefits: [
      'Protect against 99.9% of known threats',
      'Compliance with industry regulations',
      'Real-time threat monitoring',
      'Reduced security incident response time',
      'Comprehensive security audits and assessments'
    ],
    useCases: [
      'Zero-trust security implementation',
      'Security compliance and auditing',
      'Incident response and recovery',
      'Security architecture design'
    ]
  },
  'ai': {
    title: 'AI',
    icon: '🤖',
    description: 'Artificial intelligence solutions to transform your business.',
    longDescription: 'Harness the power of artificial intelligence to transform your business operations, enhance customer experiences, and drive innovation. Our AI solutions leverage machine learning, natural language processing, and computer vision to solve complex business challenges and unlock new opportunities.',
    features: [
      'Machine learning model development',
      'Natural language processing (NLP)',
      'Computer vision and image recognition',
      'Predictive analytics and forecasting',
      'AI-powered automation',
      'Chatbots and virtual assistants'
    ],
    benefits: [
      'Automate complex decision-making processes',
      'Improve customer experience with personalization',
      'Increase operational efficiency',
      'Unlock insights from unstructured data',
      'Reduce costs through intelligent automation'
    ],
    useCases: [
      'Customer service automation',
      'Predictive maintenance',
      'Fraud detection and prevention',
      'Recommendation systems',
      'Document processing and analysis'
    ]
  },
  'managed-services': {
    title: 'Managed Services',
    icon: '⚙️',
    description: '24/7 monitoring and support for your systems.',
    longDescription: 'Focus on your core business while we manage your IT infrastructure. Our managed services provide proactive monitoring, maintenance, and support to ensure optimal performance and minimize downtime.',
    features: [
      '24/7 network and system monitoring',
      'Proactive maintenance and updates',
      'Help desk and technical support',
      'Backup and disaster recovery',
      'Performance optimization',
      'Security patch management'
    ],
    benefits: [
      '99.9% uptime SLA guarantee',
      'Reduced IT operational costs',
      'Access to expert IT team',
      'Predictable monthly costs',
      'Faster issue resolution'
    ],
    useCases: [
      'Outsourced IT operations',
      'Extended IT team support',
      'Infrastructure management',
      'Help desk services'
    ]
  },
  'data-and-analytics': {
    title: 'Data & Analytics',
    icon: '📊',
    description: 'Transform data into actionable business insights.',
    longDescription: 'Unlock the value of your data with our comprehensive analytics solutions. We help you collect, process, and analyze data to make informed business decisions and gain competitive advantages.',
    features: [
      'Data warehouse and lake design',
      'Business intelligence and reporting',
      'Advanced analytics and machine learning',
      'Data visualization and dashboards',
      'Data governance and quality',
      'Real-time analytics solutions'
    ],
    benefits: [
      'Make data-driven decisions',
      'Identify new business opportunities',
      'Improve operational efficiency',
      'Enhance customer experience',
      'Reduce costs through optimization'
    ],
    useCases: [
      'Business intelligence implementation',
      'Data warehouse modernization',
      'Predictive analytics projects',
      'Real-time data processing'
    ]
  },
  'automation': {
    title: 'Automation',
    icon: '🤖',
    description: 'Streamline processes with intelligent automation.',
    longDescription: 'Automate repetitive tasks and streamline business processes with our intelligent automation solutions. From robotic process automation to workflow automation, we help you increase efficiency and reduce manual errors.',
    features: [
      'Robotic Process Automation (RPA)',
      'Workflow automation',
      'IT process automation',
      'Business process automation',
      'API integration and automation',
      'AI-powered automation solutions'
    ],
    benefits: [
      'Reduce manual work by up to 80%',
      'Improve process accuracy',
      'Faster task completion',
      'Lower operational costs',
      'Enhanced scalability'
    ],
    useCases: [
      'IT operations automation',
      'Business process automation',
      'Data entry and processing automation',
      'Customer service automation'
    ]
  },
  'hybrid-cloud': {
    title: 'Hybrid Cloud',
    icon: '🌐',
    description: 'Seamless integration across cloud and on-premises.',
    longDescription: 'Build a flexible hybrid cloud infrastructure that combines the best of public cloud, private cloud, and on-premises environments. Our solutions enable seamless data and application portability across environments.',
    features: [
      'Hybrid cloud architecture design',
      'Cloud connectivity and networking',
      'Data synchronization and replication',
      'Unified management and monitoring',
      'Security across hybrid environments',
      'Cost optimization strategies'
    ],
    benefits: [
      'Flexibility to choose optimal deployment',
      'Improved data sovereignty',
      'Enhanced disaster recovery',
      'Cost-effective resource utilization',
      'Seamless workload portability'
    ],
    useCases: [
      'Hybrid cloud migration',
      'Multi-cloud management',
      'Edge computing integration',
      'Regulatory compliance requirements'
    ]
  },
  'blockchain': {
    title: 'Blockchain',
    icon: '⛓️',
    description: 'Blockchain solutions for secure and transparent operations.',
    longDescription: 'Implement blockchain technology to create secure, transparent, and decentralized solutions for your business. From smart contracts to supply chain tracking, our blockchain solutions enable trust, traceability, and efficiency in your operations.',
    features: [
      'Smart contract development',
      'Blockchain platform implementation',
      'Cryptocurrency and token solutions',
      'Supply chain transparency',
      'Digital identity management',
      'Decentralized application (DApp) development'
    ],
    benefits: [
      'Enhanced security and immutability',
      'Transparent and auditable transactions',
      'Reduced intermediaries and costs',
      'Improved traceability and provenance',
      'Decentralized trust mechanisms'
    ],
    useCases: [
      'Supply chain tracking',
      'Digital asset management',
      'Smart contract automation',
      'Identity verification',
      'Cross-border payments',
      'Voting and governance systems'
    ]
  }
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services[params.slug]

  if (!service) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-windows-dark-bg">
      <Header />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/#products" className="text-windows-dark-accent hover:text-windows-dark-accent-hover mb-8 inline-block">
            ← Back to Products
          </Link>
        </div>

        {/* Immersive Full-Page Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 p-4 md:p-6 max-w-[1920px] mx-auto">
          {/* Hero Section - Full Width */}
          <div className="md:col-span-2 lg:col-span-4 windows-card p-12 md:p-16 bg-gradient-to-br from-windows-dark-accent/30 via-windows-dark-accent/20 to-windows-dark-accent/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-windows-dark-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-windows-dark-accent/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="text-8xl md:text-9xl mb-6">{service.icon}</div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">{service.title}</h1>
              <p className="text-xl md:text-2xl text-windows-dark-text-secondary mb-4 max-w-4xl">{service.description}</p>
              <p className="text-lg md:text-xl text-windows-dark-text-secondary max-w-4xl leading-relaxed">
                {service.longDescription}
              </p>
            </div>
          </div>

          {/* Key Features - Large Section */}
          <div className="md:col-span-2 lg:col-span-2 windows-card p-8 md:p-12 hover:border-windows-dark-accent transition-all">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-start p-4 windows-card bg-windows-dark-surface/50">
                  <span className="text-windows-dark-accent mr-3 text-2xl">✓</span>
                  <span className="text-windows-dark-text-secondary text-base md:text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="md:col-span-2 lg:col-span-2 windows-card p-8 md:p-12 hover:border-windows-dark-accent transition-all bg-gradient-to-br from-windows-dark-surface to-windows-dark-bg">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Benefits</h2>
            <ul className="space-y-4">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-windows-dark-accent mr-4 text-2xl">→</span>
                  <span className="text-windows-dark-text-secondary text-base md:text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Use Cases Grid */}
          <div className="md:col-span-2 lg:col-span-4 windows-card p-10 md:p-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.useCases.map((useCase, index) => (
                <div key={index} className="windows-card p-6 hover:border-windows-dark-accent transition-all group cursor-pointer">
                  <div className="text-4xl mb-4">💡</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{useCase}</h3>
                  <p className="text-windows-dark-text-secondary text-sm">
                    Discover how {service.title} can address this specific use case in your organization.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="md:col-span-2 lg:col-span-4 windows-card p-10 md:p-16 bg-gradient-to-br from-windows-dark-surface to-windows-dark-bg">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Why Choose {service.title}?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-2xl font-semibold text-white mb-4">Expert Implementation</h3>
                <p className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed">
                  Our certified experts have years of experience implementing {service.title.toLowerCase()} solutions 
                  across various industries. We bring best practices and proven methodologies to every project.
                </p>
              </div>
              <div>
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-2xl font-semibold text-white mb-4">Rapid Deployment</h3>
                <p className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed">
                  Get up and running quickly with our streamlined implementation process. We minimize disruption 
                  to your business while maximizing the value of your investment.
                </p>
              </div>
              <div>
                <div className="text-5xl mb-4">🛡️</div>
                <h3 className="text-2xl font-semibold text-white mb-4">Enterprise-Grade Security</h3>
                <p className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed">
                  Security is built into every solution we deliver. We ensure your {service.title.toLowerCase()} 
                  implementation meets the highest security and compliance standards.
                </p>
              </div>
              <div>
                <div className="text-5xl mb-4">📈</div>
                <h3 className="text-2xl font-semibold text-white mb-4">Scalable Solutions</h3>
                <p className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed">
                  Our solutions are designed to grow with your business. Start small and scale as needed, 
                  ensuring your investment continues to deliver value as you expand.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="md:col-span-2 lg:col-span-4 windows-card p-12 md:p-16 bg-gradient-to-br from-windows-dark-accent/20 to-windows-dark-accent/5 text-center">
            <div className="text-7xl md:text-8xl mb-6">{service.icon}</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-windows-dark-text-secondary mb-10 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Contact us today to learn how {service.title} can transform your business. Our experts are ready 
              to discuss your specific needs and create a customized solution tailored to your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="windows-button windows-button-primary text-lg md:text-xl px-10 py-4">
                Schedule a Consultation
              </button>
              <button className="windows-button text-lg md:text-xl px-10 py-4">
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

