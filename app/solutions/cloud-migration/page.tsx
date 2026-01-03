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

        {/* Immersive Full-Page Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 p-4 md:p-6 max-w-[1920px] mx-auto">
          {/* Hero Section */}
          <div className="md:col-span-2 lg:col-span-4 windows-card p-12 md:p-16 bg-gradient-to-br from-blue-600/30 via-cyan-500/20 to-blue-400/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="text-8xl md:text-9xl mb-6">☁️</div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Cloud Migration</h1>
              <p className="text-xl md:text-2xl text-windows-dark-text-secondary max-w-4xl leading-relaxed">
                Seamlessly migrate your infrastructure, applications, and data to the cloud with minimal disruption 
                and maximum efficiency. Our proven methodology ensures a smooth transition that minimizes risk 
                while maximizing the benefits of cloud computing.
              </p>
            </div>
          </div>

          {/* Migration Strategy - Large */}
          <div className="md:col-span-2 lg:col-span-2 windows-card p-8 md:p-12 hover:border-windows-dark-accent transition-all bg-gradient-to-br from-windows-dark-surface to-windows-dark-bg">
            <div className="text-6xl md:text-7xl mb-6">📋</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Migration Strategy</h2>
            <p className="text-windows-dark-text-secondary text-base md:text-lg mb-6 leading-relaxed">
              Comprehensive assessment and planning to ensure successful cloud migration. We analyze your entire 
              IT landscape to create a detailed roadmap that addresses technical, business, and operational considerations.
            </p>
            <ul className="space-y-3 text-windows-dark-text-secondary text-base">
              <li className="flex items-start">
                <span className="text-windows-dark-accent mr-3 text-xl">→</span>
                <span>Application portfolio analysis and dependency mapping</span>
              </li>
              <li className="flex items-start">
                <span className="text-windows-dark-accent mr-3 text-xl">→</span>
                <span>Cloud readiness assessment and TCO analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-windows-dark-accent mr-3 text-xl">→</span>
                <span>Migration roadmap with phased approach</span>
              </li>
              <li className="flex items-start">
                <span className="text-windows-dark-accent mr-3 text-xl">→</span>
                <span>Risk mitigation and rollback planning</span>
              </li>
            </ul>
          </div>

          {/* Migration Approaches */}
          <div className="windows-card p-6 md:p-8 hover:border-windows-dark-accent transition-all group cursor-pointer">
            <div className="text-5xl md:text-6xl mb-4">🚀</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Lift & Shift</h2>
            <p className="text-windows-dark-text-secondary text-sm md:text-base mb-4">
              Quick migration of existing applications to cloud infrastructure with minimal modifications. 
              Ideal for time-sensitive migrations and legacy applications.
            </p>
            <div className="text-windows-dark-accent text-sm font-medium">Learn more →</div>
          </div>

          <div className="windows-card p-6 md:p-8 hover:border-windows-dark-accent transition-all group cursor-pointer">
            <div className="text-5xl md:text-6xl mb-4">🔄</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Refactor & Optimize</h2>
            <p className="text-windows-dark-text-secondary text-sm md:text-base mb-4">
              Modernize applications for cloud-native architectures and improved performance. 
              Transform applications to leverage cloud capabilities fully.
            </p>
            <div className="text-windows-dark-accent text-sm font-medium">Learn more →</div>
          </div>

          <div className="windows-card p-6 md:p-8 hover:border-windows-dark-accent transition-all group cursor-pointer">
            <div className="text-5xl md:text-6xl mb-4">💾</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Data Migration</h2>
            <p className="text-windows-dark-text-secondary text-sm md:text-base mb-4">
              Secure and efficient transfer of data to cloud storage with zero downtime. 
              Enterprise-grade data migration with validation and verification.
            </p>
            <div className="text-windows-dark-accent text-sm font-medium">Learn more →</div>
          </div>

          <div className="windows-card p-6 md:p-8 hover:border-windows-dark-accent transition-all group cursor-pointer">
            <div className="text-5xl md:text-6xl mb-4">🔒</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Security & Compliance</h2>
            <p className="text-windows-dark-text-secondary text-sm md:text-base mb-4">
              Ensure your cloud environment meets all security and regulatory requirements. 
              Comprehensive security assessment and compliance validation.
            </p>
            <div className="text-windows-dark-accent text-sm font-medium">Learn more →</div>
          </div>

          <div className="windows-card p-6 md:p-8 hover:border-windows-dark-accent transition-all group cursor-pointer">
            <div className="text-5xl md:text-6xl mb-4">📊</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Cost Optimization</h2>
            <p className="text-windows-dark-text-secondary text-sm md:text-base mb-4">
              Optimize cloud spending and achieve significant cost savings through right-sizing and automation. 
              Continuous cost monitoring and optimization.
            </p>
            <div className="text-windows-dark-accent text-sm font-medium">Learn more →</div>
          </div>

          {/* Migration Process */}
          <div className="md:col-span-2 lg:col-span-4 windows-card p-10 md:p-16 bg-gradient-to-br from-windows-dark-surface to-windows-dark-bg">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">Our Migration Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🔍</div>
                <div className="text-3xl font-bold text-windows-dark-accent mb-2">1. Assess</div>
                <p className="text-windows-dark-text-secondary text-base">
                  Comprehensive analysis of your current infrastructure, applications, and dependencies. 
                  Identify migration candidates and create detailed inventory.
                </p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">📐</div>
                <div className="text-3xl font-bold text-windows-dark-accent mb-2">2. Design</div>
                <p className="text-windows-dark-text-secondary text-base">
                  Architect cloud-native solutions and design migration patterns. Create detailed 
                  technical specifications and migration runbooks.
                </p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <div className="text-3xl font-bold text-windows-dark-accent mb-2">3. Migrate</div>
                <p className="text-windows-dark-text-secondary text-base">
                  Execute migration with minimal downtime. Continuous monitoring and validation 
                  throughout the migration process.
                </p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">✅</div>
                <div className="text-3xl font-bold text-windows-dark-accent mb-2">4. Optimize</div>
                <p className="text-windows-dark-text-secondary text-base">
                  Post-migration optimization and tuning. Performance monitoring, cost optimization, 
                  and continuous improvement.
                </p>
              </div>
            </div>
          </div>

          {/* Cloud Providers */}
          <div className="md:col-span-2 lg:col-span-4 windows-card p-10 md:p-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Cloud Platforms We Support</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {['Microsoft Azure', 'Google Cloud', 'Amazon AWS', 'IBM Cloud', 'Oracle Cloud', 'Salesforce'].map((provider) => (
                <div key={provider} className="windows-card p-6 text-center hover:border-windows-dark-accent transition-all group">
                  <div className="text-5xl mb-4">☁️</div>
                  <h3 className="text-white font-semibold text-base md:text-lg">{provider}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="md:col-span-2 lg:col-span-4 windows-card p-10 md:p-16 bg-gradient-to-br from-blue-600/10 to-cyan-500/10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">Migration Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-2xl font-semibold text-white mb-4">Cost Reduction</h3>
                <p className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed">
                  Reduce infrastructure costs by up to 40% through cloud economics. Pay only for what you use, 
                  eliminate capital expenditures, and benefit from cloud provider economies of scale.
                </p>
              </div>
              <div>
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-2xl font-semibold text-white mb-4">Improved Agility</h3>
                <p className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed">
                  Deploy new resources in minutes instead of weeks. Scale up or down based on demand, 
                  and rapidly respond to changing business requirements.
                </p>
              </div>
              <div>
                <div className="text-5xl mb-4">🔒</div>
                <h3 className="text-2xl font-semibold text-white mb-4">Enhanced Security</h3>
                <p className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed">
                  Leverage enterprise-grade security features built into cloud platforms. Benefit from 
                  continuous security updates and compliance certifications.
                </p>
              </div>
              <div>
                <div className="text-5xl mb-4">🌍</div>
                <h3 className="text-2xl font-semibold text-white mb-4">Global Reach</h3>
                <p className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed">
                  Deploy applications closer to your users worldwide. Reduce latency and improve user 
                  experience with global cloud infrastructure.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="md:col-span-2 lg:col-span-4 windows-card p-12 md:p-16 bg-gradient-to-br from-windows-dark-accent/20 to-windows-dark-accent/5 text-center">
            <div className="text-7xl md:text-8xl mb-6">☁️</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Start Your Cloud Journey</h2>
            <p className="text-windows-dark-text-secondary mb-10 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Let our experts guide you through a successful cloud migration that reduces costs and improves agility. 
              Get a free assessment and migration roadmap tailored to your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="windows-button windows-button-primary text-lg md:text-xl px-10 py-4">
                Get Migration Assessment
              </button>
              <button className="windows-button text-lg md:text-xl px-10 py-4">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
