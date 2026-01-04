import Header from '@/components/Header'
import Link from 'next/link'

export default function SoftwarePage() {
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
          <div className="windows-card p-12 md:p-16 bg-gradient-to-br from-windows-dark-accent/30 via-windows-dark-accent/20 to-windows-dark-accent/10 text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Software</h1>
            <p className="text-xl md:text-2xl text-windows-dark-text-secondary max-w-3xl mx-auto">
              Enterprise software solutions and custom application development for modern business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Custom Software Development</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Tailored software solutions designed specifically for your business processes and requirements.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Business application development</li>
                <li>• Workflow automation</li>
                <li>• Legacy system modernization</li>
                <li>• Integration services</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Software</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Comprehensive enterprise software solutions for large-scale business operations.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• ERP systems</li>
                <li>• CRM platforms</li>
                <li>• Business intelligence tools</li>
                <li>• Enterprise resource planning</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">SaaS Solutions</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Software-as-a-Service platforms with multi-tenancy and subscription management.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Cloud-based applications</li>
                <li>• Multi-tenant architecture</li>
                <li>• Subscription management</li>
                <li>• Scalable infrastructure</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Software Integration</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Seamless integration of software systems with your existing technology stack.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• API integration</li>
                <li>• System connectivity</li>
                <li>• Data synchronization</li>
                <li>• Workflow automation</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Software Maintenance</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Ongoing support, updates, and maintenance for your software applications.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Bug fixes and patches</li>
                <li>• Feature updates</li>
                <li>• Performance optimization</li>
                <li>• Security updates</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Software Consulting</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Expert guidance on software strategy, selection, and implementation.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Technology assessment</li>
                <li>• Software selection</li>
                <li>• Implementation planning</li>
                <li>• Best practices</li>
              </ul>
            </div>
          </div>

          <div className="windows-card p-12 md:p-16 bg-gradient-to-br from-windows-dark-accent/20 to-windows-dark-accent/5 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Software?</h2>
            <p className="text-windows-dark-text-secondary mb-10 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Discover how our software solutions can streamline your business operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="windows-button windows-button-primary text-lg md:text-xl px-10 py-4">
                Get Started
              </button>
              <button className="windows-button text-lg md:text-xl px-10 py-4">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

