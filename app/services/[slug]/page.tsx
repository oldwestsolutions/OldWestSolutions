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
  'it-consulting': {
    title: 'IT Consulting',
    icon: '💼',
    description: 'Expert guidance to optimize your technology strategy.',
    longDescription: 'Leverage our deep industry expertise to develop and execute technology strategies that align with your business goals. Our consultants work with you to identify opportunities, mitigate risks, and drive digital transformation.',
    features: [
      'IT strategy and roadmap development',
      'Technology assessment and evaluation',
      'Digital transformation planning',
      'Vendor selection and management',
      'IT governance and best practices',
      'Change management and training'
    ],
    benefits: [
      'Align IT with business objectives',
      'Reduce technology risks',
      'Optimize IT investments',
      'Accelerate digital initiatives',
      'Access to industry best practices'
    ],
    useCases: [
      'Digital transformation initiatives',
      'IT strategy development',
      'Technology vendor selection',
      'IT organizational optimization'
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
  'consulting': {
    title: 'Consulting',
    icon: '👥',
    description: 'Strategic IT consulting and implementation services.',
    longDescription: 'Get expert guidance on your most critical IT initiatives. Our consulting services help you navigate complex technology decisions, implement best practices, and achieve your strategic objectives.',
    features: [
      'Strategic IT planning',
      'Technology architecture design',
      'Implementation project management',
      'Process improvement consulting',
      'Technology training and enablement',
      'Post-implementation support'
    ],
    benefits: [
      'Expert guidance and best practices',
      'Reduced project risks',
      'Faster time to value',
      'Knowledge transfer to your team',
      'Proven methodologies and frameworks'
    ],
    useCases: [
      'Large-scale IT implementations',
      'Technology architecture redesign',
      'IT process improvement',
      'Digital transformation projects'
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
      <div className="pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link href="/#products" className="text-windows-dark-accent hover:text-windows-dark-accent-hover mb-8 inline-block">
          ← Back to Products
        </Link>

        <div className="mb-12">
          <div className="text-6xl mb-6">{service.icon}</div>
          <h1 className="text-5xl font-bold text-white mb-6">{service.title}</h1>
          <p className="text-xl text-windows-dark-text-secondary mb-4">{service.description}</p>
          <p className="text-lg text-windows-dark-text-secondary max-w-3xl">{service.longDescription}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="windows-card p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Key Features</h2>
            <ul className="space-y-3">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-windows-dark-accent mr-3">✓</span>
                  <span className="text-windows-dark-text-secondary">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="windows-card p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Benefits</h2>
            <ul className="space-y-3">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-windows-dark-accent mr-3">→</span>
                  <span className="text-windows-dark-text-secondary">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="windows-card p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Use Cases</h2>
            <ul className="space-y-3">
              {service.useCases.map((useCase, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-windows-dark-accent mr-3">•</span>
                  <span className="text-windows-dark-text-secondary">{useCase}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="windows-card p-8 bg-gradient-to-br from-windows-dark-accent/10 to-windows-dark-accent/5">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-windows-dark-text-secondary text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to learn how {service.title} can transform your business. Our experts are ready to discuss your specific needs and create a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="windows-button windows-button-primary text-lg px-8 py-3">
                Schedule a Consultation
              </button>
              <button className="windows-button text-lg px-8 py-3">
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

