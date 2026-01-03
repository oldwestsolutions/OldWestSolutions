import Header from '@/components/Header'
import Link from 'next/link'

export default function EnterpriseSolutionsPage() {
  return (
    <main className="min-h-screen bg-windows-dark-bg">
      <Header />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/#solutions" className="text-windows-dark-accent hover:text-windows-dark-accent-hover mb-8 inline-block">
            ← Back to Solutions
          </Link>
        </div>

        {/* Immersive Full-Page Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 p-4 md:p-6 max-w-[1920px] mx-auto">
          {/* Hero Section - Full Width */}
          <div className="md:col-span-2 lg:col-span-4 windows-card p-12 md:p-16 bg-gradient-to-br from-windows-dark-accent/30 via-windows-dark-accent/20 to-windows-dark-accent/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-windows-dark-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-windows-dark-accent/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="text-8xl md:text-9xl mb-6">🏢</div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Enterprise Solutions</h1>
              <p className="text-xl md:text-2xl text-windows-dark-text-secondary max-w-4xl leading-relaxed">
                Comprehensive enterprise-grade solutions designed to transform your business operations, 
                streamline workflows, and drive digital innovation at scale. Built for organizations that 
                demand reliability, scalability, and excellence.
              </p>
            </div>
          </div>

          {/* Large Feature Section */}
          <div className="md:col-span-2 lg:col-span-2 windows-card p-8 md:p-12 hover:border-windows-dark-accent transition-all group">
            <div className="text-6xl md:text-7xl mb-6">🏛️</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Enterprise Architecture</h2>
            <p className="text-windows-dark-text-secondary text-base md:text-lg mb-6 leading-relaxed">
              Design and implement scalable enterprise architectures that support your business growth and digital transformation initiatives. 
              Our architects work with you to create a technology foundation that adapts to changing business needs.
            </p>
            <ul className="space-y-3 text-windows-dark-text-secondary">
              <li className="flex items-start">
                <span className="text-windows-dark-accent mr-3 text-xl">→</span>
                <span>Microservices and service-oriented architecture design</span>
              </li>
              <li className="flex items-start">
                <span className="text-windows-dark-accent mr-3 text-xl">→</span>
                <span>API-first architecture and integration patterns</span>
              </li>
              <li className="flex items-start">
                <span className="text-windows-dark-accent mr-3 text-xl">→</span>
                <span>Event-driven architecture for real-time processing</span>
              </li>
              <li className="flex items-start">
                <span className="text-windows-dark-accent mr-3 text-xl">→</span>
                <span>Cloud-native and hybrid cloud architectures</span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-2 windows-card p-8 md:p-12 hover:border-windows-dark-accent transition-all group bg-gradient-to-br from-windows-dark-surface to-windows-dark-bg">
            <div className="text-6xl md:text-7xl mb-6">🔄</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">System Integration</h2>
            <p className="text-windows-dark-text-secondary text-base md:text-lg mb-6 leading-relaxed">
              Seamlessly integrate disparate systems and applications to create a unified, efficient technology ecosystem. 
              Break down data silos and enable seamless information flow across your organization.
            </p>
            <ul className="space-y-3 text-windows-dark-text-secondary">
              <li className="flex items-start">
                <span className="text-windows-dark-accent mr-3 text-xl">→</span>
                <span>Enterprise Service Bus (ESB) implementation</span>
              </li>
              <li className="flex items-start">
                <span className="text-windows-dark-accent mr-3 text-xl">→</span>
                <span>API gateway and management solutions</span>
              </li>
              <li className="flex items-start">
                <span className="text-windows-dark-accent mr-3 text-xl">→</span>
                <span>Data integration and ETL pipelines</span>
              </li>
              <li className="flex items-start">
                <span className="text-windows-dark-accent mr-3 text-xl">→</span>
                <span>Real-time synchronization and event streaming</span>
              </li>
            </ul>
          </div>

          {/* Feature Cards Grid */}
          <div className="windows-card p-6 md:p-8 hover:border-windows-dark-accent transition-all group cursor-pointer">
            <div className="text-5xl md:text-6xl mb-4">📊</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Enterprise Analytics</h2>
            <p className="text-windows-dark-text-secondary text-sm md:text-base mb-4">
              Leverage advanced analytics and business intelligence to make data-driven decisions across your organization.
            </p>
            <div className="text-windows-dark-accent text-sm font-medium">Learn more →</div>
          </div>

          <div className="windows-card p-6 md:p-8 hover:border-windows-dark-accent transition-all group cursor-pointer">
            <div className="text-5xl md:text-6xl mb-4">🔐</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Enterprise Security</h2>
            <p className="text-windows-dark-text-secondary text-sm md:text-base mb-4">
              Implement comprehensive security frameworks to protect your enterprise assets and ensure compliance.
            </p>
            <div className="text-windows-dark-accent text-sm font-medium">Learn more →</div>
          </div>

          <div className="windows-card p-6 md:p-8 hover:border-windows-dark-accent transition-all group cursor-pointer">
            <div className="text-5xl md:text-6xl mb-4">☁️</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Cloud Enterprise</h2>
            <p className="text-windows-dark-text-secondary text-sm md:text-base mb-4">
              Migrate and optimize enterprise workloads in the cloud for improved scalability and cost efficiency.
            </p>
            <div className="text-windows-dark-accent text-sm font-medium">Learn more →</div>
          </div>

          <div className="windows-card p-6 md:p-8 hover:border-windows-dark-accent transition-all group cursor-pointer">
            <div className="text-5xl md:text-6xl mb-4">🤖</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Process Automation</h2>
            <p className="text-windows-dark-text-secondary text-sm md:text-base mb-4">
              Automate complex business processes to increase efficiency and reduce operational costs.
            </p>
            <div className="text-windows-dark-accent text-sm font-medium">Learn more →</div>
          </div>

          {/* Detailed Information Section */}
          <div className="md:col-span-2 lg:col-span-4 windows-card p-10 md:p-16 bg-gradient-to-br from-windows-dark-surface to-windows-dark-bg">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Why Enterprise Solutions Matter</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <div className="text-5xl mb-4">📈</div>
                <h3 className="text-2xl font-semibold text-white mb-4">Scalable Infrastructure</h3>
                <p className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed mb-4">
                  Build systems that grow with your business. Our enterprise solutions are designed to scale horizontally 
                  and vertically, ensuring your infrastructure can handle growth without major redesigns.
                </p>
                <p className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed">
                  From startup to enterprise scale, our architectures support millions of users and transactions 
                  while maintaining performance and reliability.
                </p>
              </div>
              <div>
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-2xl font-semibold text-white mb-4">Cost Optimization</h3>
                <p className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed mb-4">
                  Reduce IT costs while improving performance. Our enterprise solutions help you optimize resource 
                  utilization, eliminate redundant systems, and leverage cloud economics.
                </p>
                <p className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed">
                  Many organizations see 30-40% reduction in IT operational costs within the first year of implementation, 
                  while improving system reliability and user experience.
                </p>
              </div>
              <div>
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-2xl font-semibold text-white mb-4">Business Agility</h3>
                <p className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed mb-4">
                  Respond quickly to market changes and opportunities. Enterprise solutions enable rapid deployment 
                  of new features, services, and business capabilities.
                </p>
                <p className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed">
                  Modernize legacy systems incrementally while maintaining business continuity, allowing you to 
                  innovate without disruption.
                </p>
              </div>
              <div>
                <div className="text-5xl mb-4">🌍</div>
                <h3 className="text-2xl font-semibold text-white mb-4">Global Reach</h3>
                <p className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed mb-4">
                  Support global operations with distributed architectures. Our solutions enable multi-region deployments 
                  with data sovereignty and compliance considerations.
                </p>
                <p className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed">
                  Low-latency access for users worldwide, disaster recovery across regions, and compliance with 
                  local data regulations.
                </p>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="md:col-span-2 lg:col-span-4 windows-card p-10 md:p-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Enterprise Technology Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {['Salesforce', 'Microsoft Azure', 'Google Cloud', 'Snowflake', 'IBM', 'Splunk', 'Oracle', 'SAP', 'ServiceNow', 'Workday', 'Tableau', 'Power BI'].map((tech, index) => (
                <div key={index} className="windows-card p-6 text-center hover:border-windows-dark-accent transition-all group">
                  <div className="text-4xl mb-3">💼</div>
                  <div className="text-white font-semibold text-sm md:text-base">{tech}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="md:col-span-2 lg:col-span-4 windows-card p-12 md:p-16 bg-gradient-to-br from-windows-dark-accent/20 to-windows-dark-accent/5 text-center">
            <div className="text-7xl md:text-8xl mb-6">🚀</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Enterprise?</h2>
            <p className="text-windows-dark-text-secondary mb-10 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Contact us today to discuss how our enterprise solutions can help your organization achieve its strategic goals. 
              Our experts are ready to assess your needs and create a customized roadmap for success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="windows-button windows-button-primary text-lg md:text-xl px-10 py-4">
                Schedule Consultation
              </button>
              <button className="windows-button text-lg md:text-xl px-10 py-4">
                Download Enterprise Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
