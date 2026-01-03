import Header from '@/components/Header'
import Link from 'next/link'

export default function DigitalTransformationPage() {
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
          <div className="md:col-span-2 lg:col-span-3 windows-card p-8 md:p-12 bg-gradient-to-br from-purple-600/20 to-pink-500/20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6">Digital Transformation</h1>
            <p className="text-lg md:text-xl text-windows-dark-text-secondary max-w-3xl">
              Transform your business with cutting-edge digital technologies. Drive innovation, improve customer 
              experience, and create competitive advantages through strategic digital initiatives.
            </p>
          </div>

          {/* Transformation Strategy */}
          <div className="md:col-span-2 windows-card p-6 md:p-8 hover:border-windows-dark-accent transition-all">
            <div className="text-4xl md:text-5xl mb-4">🎯</div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Transformation Strategy</h2>
            <p className="text-windows-dark-text-secondary text-sm md:text-base mb-4">
              Develop a comprehensive digital transformation roadmap aligned with your business objectives.
            </p>
            <ul className="space-y-2 text-sm text-windows-dark-text-secondary">
              <li>• Digital maturity assessment</li>
              <li>• Technology roadmap development</li>
              <li>• Change management planning</li>
              <li>• ROI and success metrics</li>
            </ul>
          </div>

          <div className="windows-card p-6 md:p-8 hover:border-windows-dark-accent transition-all group cursor-pointer">
            <div className="text-4xl md:text-5xl mb-4">🤖</div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">AI & Automation</h2>
            <p className="text-windows-dark-text-secondary text-sm md:text-base">
              Leverage artificial intelligence and automation to streamline operations and enhance decision-making.
            </p>
          </div>

          <div className="windows-card p-6 md:p-8 hover:border-windows-dark-accent transition-all group cursor-pointer">
            <div className="text-4xl md:text-5xl mb-4">📱</div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Customer Experience</h2>
            <p className="text-windows-dark-text-secondary text-sm md:text-base">
              Create seamless, personalized customer experiences across all digital touchpoints.
            </p>
          </div>

          <div className="windows-card p-6 md:p-8 hover:border-windows-dark-accent transition-all group cursor-pointer">
            <div className="text-4xl md:text-5xl mb-4">📊</div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Data-Driven Insights</h2>
            <p className="text-windows-dark-text-secondary text-sm md:text-base">
              Transform data into actionable insights that drive business growth and innovation.
            </p>
          </div>

          <div className="windows-card p-6 md:p-8 hover:border-windows-dark-accent transition-all group cursor-pointer">
            <div className="text-4xl md:text-5xl mb-4">☁️</div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Cloud-First Approach</h2>
            <p className="text-windows-dark-text-secondary text-sm md:text-base">
              Adopt cloud-native technologies for agility, scalability, and innovation.
            </p>
          </div>

          <div className="windows-card p-6 md:p-8 hover:border-windows-dark-accent transition-all group cursor-pointer">
            <div className="text-4xl md:text-5xl mb-4">🔄</div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Agile Transformation</h2>
            <p className="text-windows-dark-text-secondary text-sm md:text-base">
              Implement agile methodologies and DevOps practices for faster delivery cycles.
            </p>
          </div>

          {/* Transformation Pillars */}
          <div className="md:col-span-2 lg:col-span-3 windows-card p-8 md:p-12 bg-gradient-to-br from-windows-dark-surface to-windows-dark-bg">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Transformation Pillars</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Technology Modernization</h3>
                <p className="text-windows-dark-text-secondary text-sm md:text-base">
                  Modernize legacy systems and adopt cutting-edge technologies that enable innovation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Process Optimization</h3>
                <p className="text-windows-dark-text-secondary text-sm md:text-base">
                  Redesign business processes to be more efficient, customer-centric, and data-driven.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Culture & Change</h3>
                <p className="text-windows-dark-text-secondary text-sm md:text-base">
                  Foster a culture of innovation and continuous improvement across your organization.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Innovation Labs</h3>
                <p className="text-windows-dark-text-secondary text-sm md:text-base">
                  Establish innovation labs to experiment with emerging technologies and new business models.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="md:col-span-2 lg:col-span-3 windows-card p-8 md:p-12 bg-gradient-to-br from-windows-dark-accent/10 to-windows-dark-accent/5 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Begin Your Digital Journey</h2>
            <p className="text-windows-dark-text-secondary mb-8 text-lg max-w-2xl mx-auto">
              Partner with us to transform your business and unlock new opportunities in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="windows-button windows-button-primary text-lg px-8 py-3">
                Start Transformation
              </button>
              <button className="windows-button text-lg px-8 py-3">
                View Success Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

