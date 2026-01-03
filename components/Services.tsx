interface Service {
  title: string
  description: string
  icon: string
}

const services: Service[] = [
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services to modernize your IT environment.',
    icon: '☁️',
  },
  {
    title: 'Network Security',
    description: 'Comprehensive security solutions to protect your business from cyber threats.',
    icon: '🔒',
  },
  {
    title: 'IT Consulting',
    description: 'Expert guidance to optimize your technology strategy and operations.',
    icon: '💼',
  },
  {
    title: 'Managed Services',
    description: '24/7 monitoring and support to keep your systems running smoothly.',
    icon: '⚙️',
  },
  {
    title: 'Data Backup & Recovery',
    description: 'Reliable backup solutions and disaster recovery planning for business continuity.',
    icon: '💾',
  },
  {
    title: 'Help Desk Support',
    description: 'Responsive technical support to resolve issues quickly and efficiently.',
    icon: '🛠️',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-windows-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-windows-dark-text-secondary text-lg max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="windows-card p-6 hover:border-windows-dark-accent transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-windows-dark-text-secondary">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

