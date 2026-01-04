import Header from '@/components/Header'
import Link from 'next/link'

export default function ApplicationsPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Applications</h1>
            <p className="text-xl md:text-2xl text-windows-dark-text-secondary max-w-3xl mx-auto">
              Custom application development and deployment solutions built with modern technologies and best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Web Applications</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Build scalable web applications with modern frameworks and cloud-native architectures.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• React, Next.js, Vue.js</li>
                <li>• Full-stack development</li>
                <li>• API development</li>
                <li>• Progressive web apps</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Mobile Applications</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Develop native and cross-platform mobile applications for iOS and Android.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• iOS and Android development</li>
                <li>• React Native and Flutter</li>
                <li>• Native app development</li>
                <li>• App store deployment</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Applications</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Custom enterprise applications designed for business-critical operations and workflows.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Business process automation</li>
                <li>• Enterprise integration</li>
                <li>• Legacy system modernization</li>
                <li>• Workflow management</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Applications</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Intelligent applications leveraging machine learning and AI capabilities.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• AI integration</li>
                <li>• Machine learning models</li>
                <li>• Natural language processing</li>
                <li>• Computer vision</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">SaaS Applications</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Software-as-a-Service applications with multi-tenancy and subscription management.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Multi-tenant architecture</li>
                <li>• Subscription management</li>
                <li>• Scalable infrastructure</li>
                <li>• API-first design</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Application Deployment</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Deploy and manage applications across cloud platforms with CI/CD pipelines.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Cloud deployment</li>
                <li>• Containerization</li>
                <li>• CI/CD pipelines</li>
                <li>• Monitoring and scaling</li>
              </ul>
            </div>
          </div>

          <div className="windows-card p-12 md:p-16 bg-gradient-to-br from-windows-dark-accent/20 to-windows-dark-accent/5 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build Your Application?</h2>
            <p className="text-windows-dark-text-secondary mb-10 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Partner with us to develop custom applications that drive your business forward.
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

