import Header from '@/components/Header'
import Link from 'next/link'

export default function CloudMigrationPage() {
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
          {/* Hero Section */}
          <div className="md:col-span-2 lg:col-span-3 windows-card p-8 md:p-12 bg-gradient-to-br from-blue-600/20 to-cyan-500/20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6">Cloud Migration</h1>
            <p className="text-lg md:text-xl text-windows-dark-text-secondary max-w-3xl">
              Seamlessly migrate your infrastructure, applications, and data to the cloud with minimal disruption 
              and maximum efficiency. Our proven methodology ensures a smooth transition.
            </p>
          </div>

          {/* Migration Strategy */}
          <div className="md:col-span-2 windows-card p-6 md:p-8 hover:border-windows-dark-accent transition-all">
            <div className="text-4xl md:text-5xl mb-4">📋</div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Migration Strategy</h2>
            <p className="text-windows-dark-text-secondary text-sm md:text-base mb-4">
              Comprehensive assessment and planning to ensure successful cloud migration.
            </p>
            <ul className="space-y-2 text-sm text-windows-dark-text-secondary">
              <li>• Application portfolio analysis</li>
              <li>• Cloud readiness assessment</li>
              <li>• Migration roadmap development</li>
              <li>• Risk mitigation planning</li>
            </ul>
          </div>

          <div className="windows-card p-6 md:p-8 hover:border-windows-dark-accent transition-all group cursor-pointer">
            <div className="text-4xl md:text-5xl mb-4">🚀</div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Lift & Shift</h2>
            <p className="text-windows-dark-text-secondary text-sm md:text-base">
              Quick migration of existing applications to cloud infrastructure with minimal modifications.
            </p>
          </div>

          <div className="windows-card p-6 md:p-8 hover:border-windows-dark-accent transition-all group cursor-pointer">
            <div className="text-4xl md:text-5xl mb-4">🔄</div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Refactor & Optimize</h2>
            <p className="text-windows-dark-text-secondary text-sm md:text-base">
              Modernize applications for cloud-native architectures and improved performance.
            </p>
          </div>

          <div className="windows-card p-6 md:p-8 hover:border-windows-dark-accent transition-all group cursor-pointer">
            <div className="text-4xl md:text-5xl mb-4">💾</div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Data Migration</h2>
            <p className="text-windows-dark-text-secondary text-sm md:text-base">
              Secure and efficient transfer of data to cloud storage with zero downtime.
            </p>
          </div>

          <div className="windows-card p-6 md:p-8 hover:border-windows-dark-accent transition-all group cursor-pointer">
            <div className="text-4xl md:text-5xl mb-4">🔒</div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Security & Compliance</h2>
            <p className="text-windows-dark-text-secondary text-sm md:text-base">
              Ensure your cloud environment meets all security and regulatory requirements.
            </p>
          </div>

          <div className="windows-card p-6 md:p-8 hover:border-windows-dark-accent transition-all group cursor-pointer">
            <div className="text-4xl md:text-5xl mb-4">📊</div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Cost Optimization</h2>
            <p className="text-windows-dark-text-secondary text-sm md:text-base">
              Optimize cloud spending and achieve significant cost savings through right-sizing and automation.
            </p>
          </div>

          {/* Cloud Providers */}
          <div className="md:col-span-2 lg:col-span-3 windows-card p-8 md:p-12 bg-gradient-to-br from-windows-dark-surface to-windows-dark-bg">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Cloud Platforms We Support</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {['Microsoft Azure', 'Google Cloud', 'Amazon AWS', 'IBM Cloud', 'Oracle Cloud', 'Salesforce'].map((provider) => (
                <div key={provider} className="windows-card p-4 md:p-6 text-center hover:border-windows-dark-accent transition-all">
                  <div className="text-2xl md:text-3xl mb-2">☁️</div>
                  <h3 className="text-white font-semibold text-sm md:text-base">{provider}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="md:col-span-2 lg:col-span-3 windows-card p-8 md:p-12 bg-gradient-to-br from-windows-dark-accent/10 to-windows-dark-accent/5 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Start Your Cloud Journey</h2>
            <p className="text-windows-dark-text-secondary mb-8 text-lg max-w-2xl mx-auto">
              Let our experts guide you through a successful cloud migration that reduces costs and improves agility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="windows-button windows-button-primary text-lg px-8 py-3">
                Get Migration Assessment
              </button>
              <button className="windows-button text-lg px-8 py-3">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

