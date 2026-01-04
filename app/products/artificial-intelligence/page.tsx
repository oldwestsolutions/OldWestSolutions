import Header from '@/components/Header'
import Link from 'next/link'

export default function ArtificialIntelligencePage() {
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Artificial Intelligence</h1>
            <p className="text-xl md:text-2xl text-windows-dark-text-secondary max-w-3xl mx-auto">
              Harness the power of AI to automate processes, gain insights, and transform your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Natural Language Processing</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Extract insights from unstructured text data and build intelligent conversational interfaces.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Text analysis and sentiment</li>
                <li>• Chatbots and virtual assistants</li>
                <li>• Document processing</li>
                <li>• Language translation</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Computer Vision</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Enable machines to interpret and understand visual information from images and videos.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Image recognition</li>
                <li>• Object detection</li>
                <li>• Facial recognition</li>
                <li>• Video analysis</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Predictive Analytics</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Forecast future trends and behaviors using advanced AI models and historical data.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Demand forecasting</li>
                <li>• Risk assessment</li>
                <li>• Customer behavior prediction</li>
                <li>• Maintenance scheduling</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">AI Automation</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Automate repetitive tasks and decision-making processes with intelligent AI systems.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Process automation</li>
                <li>• Intelligent document processing</li>
                <li>• Automated decision making</li>
                <li>• Workflow optimization</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">AI Strategy & Consulting</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Develop comprehensive AI strategies aligned with your business objectives.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• AI readiness assessment</li>
                <li>• Use case identification</li>
                <li>• ROI analysis</li>
                <li>• Implementation roadmap</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Custom AI Solutions</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Build tailored AI applications designed specifically for your unique business needs.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Custom model development</li>
                <li>• AI application integration</li>
                <li>• Model training and tuning</li>
                <li>• Production deployment</li>
              </ul>
            </div>
          </div>

          <div className="windows-card p-12 md:p-16 bg-gradient-to-br from-windows-dark-accent/20 to-windows-dark-accent/5 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Leverage AI?</h2>
            <p className="text-windows-dark-text-secondary mb-10 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Discover how artificial intelligence can transform your business operations and drive innovation.
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

