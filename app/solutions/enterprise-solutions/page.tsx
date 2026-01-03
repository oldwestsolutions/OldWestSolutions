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

        {/* Immersive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 p-4 md:p-6 max-w-[1920px] mx-auto">
          {/* Hero Section - Full Width */}
          <div className="md:col-span-2 lg:col-span-3 windows-card p-8 md:p-12 bg-gradient-to-br from-windows-dark-accent/20 to-windows-dark-accent/5">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6">Enterprise Solutions</h1>
            <p className="text-lg md:text-xl text-windows-dark-text-secondary max-w-3xl">
              Comprehensive enterprise-grade solutions designed to transform your business operations, 
              streamline workflows, and drive digital innovation at scale.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="windows-card p-6 md:p-8 hover:border-windows-dark-accent transition-all group cursor-pointer">
            <div className="text-4xl md:text-5xl mb-4">🏢</div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Enterprise Architecture</h2>
            <p className="text-windows-dark-text-secondary text-sm md:text-base">
              Design and implement scalable enterprise architectures that support your business growth and digital transformation initiatives.
            </p>
          </div>

          <div className="windows-card p-6 md:p-8 hover:border-windows-dark-accent transition-all group cursor-pointer">
            <div className="text-4xl md:text-5xl mb-4">🔄</div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">System Integration</h2>
            <p className="text-windows-dark-text-secondary text-sm md:text-base">
              Seamlessly integrate disparate systems and applications to create a unified, efficient technology ecosystem.
            </p>
          </div>

          <div className="windows-card p-6 md:p-8 hover:border-windows-dark-accent transition-all group cursor-pointer">
            <div className="text-4xl md:text-5xl mb-4">📊</div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Enterprise Analytics</h2>
            <p className="text-windows-dark-text-secondary text-sm md:text-base">
              Leverage advanced analytics and business intelligence to make data-driven decisions across your organization.
            </p>
          </div>

          <div className="windows-card p-6 md:p-8 hover:border-windows-dark-accent transition-all group cursor-pointer">
            <div className="text-4xl md:text-5xl mb-4">🔐</div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Enterprise Security</h2>
            <p className="text-windows-dark-text-secondary text-sm md:text-base">
              Implement comprehensive security frameworks to protect your enterprise assets and ensure compliance.
            </p>
          </div>

          <div className="windows-card p-6 md:p-8 hover:border-windows-dark-accent transition-all group cursor-pointer">
            <div className="text-4xl md:text-5xl mb-4">☁️</div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Cloud Enterprise</h2>
            <p className="text-windows-dark-text-secondary text-sm md:text-base">
              Migrate and optimize enterprise workloads in the cloud for improved scalability and cost efficiency.
            </p>
          </div>

          <div className="windows-card p-6 md:p-8 hover:border-windows-dark-accent transition-all group cursor-pointer">
            <div className="text-4xl md:text-5xl mb-4">🤖</div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Process Automation</h2>
            <p className="text-windows-dark-text-secondary text-sm md:text-base">
              Automate complex business processes to increase efficiency and reduce operational costs.
            </p>
          </div>

          {/* Large Feature Section */}
          <div className="md:col-span-2 windows-card p-8 md:p-12 bg-gradient-to-br from-windows-dark-surface to-windows-dark-bg">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Enterprise Solutions?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-windows-dark-accent mr-4 text-2xl">✓</span>
                <div>
                  <h3 className="text-white font-semibold mb-1 text-lg">Scalable Infrastructure</h3>
                  <p className="text-windows-dark-text-secondary">Build systems that grow with your business</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-windows-dark-accent mr-4 text-2xl">✓</span>
                <div>
                  <h3 className="text-white font-semibold mb-1 text-lg">Cost Optimization</h3>
                  <p className="text-windows-dark-text-secondary">Reduce IT costs while improving performance</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-windows-dark-accent mr-4 text-2xl">✓</span>
                <div>
                  <h3 className="text-white font-semibold mb-1 text-lg">Business Agility</h3>
                  <p className="text-windows-dark-text-secondary">Respond quickly to market changes and opportunities</p>
                </div>
              </li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="md:col-span-2 lg:col-span-3 windows-card p-8 md:p-12 bg-gradient-to-br from-windows-dark-accent/10 to-windows-dark-accent/5 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Enterprise?</h2>
            <p className="text-windows-dark-text-secondary mb-8 text-lg max-w-2xl mx-auto">
              Contact us today to discuss how our enterprise solutions can help your organization achieve its strategic goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="windows-button windows-button-primary text-lg px-8 py-3">
                Schedule Consultation
              </button>
              <button className="windows-button text-lg px-8 py-3">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

