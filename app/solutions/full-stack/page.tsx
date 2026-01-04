import Header from '@/components/Header'
import Link from 'next/link'

export default function FullStackPage() {
  return (
    <main className="min-h-screen bg-windows-dark-bg">
      <Header />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/#solutions" className="text-windows-dark-accent hover:text-windows-dark-accent-hover mb-8 inline-block">
            ← Back to Solutions
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="windows-card p-12 md:p-16 bg-gradient-to-br from-windows-dark-accent/30 via-windows-dark-accent/20 to-windows-dark-accent/10 text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Full Stack</h1>
            <p className="text-xl md:text-2xl text-windows-dark-text-secondary max-w-3xl mx-auto">
              End-to-end full stack development services from frontend to backend, delivering complete web and mobile applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Frontend Development</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Modern frontend development using the latest frameworks and technologies for responsive, interactive user interfaces.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• React, Next.js, Vue.js</li>
                <li>• Responsive design</li>
                <li>• UI/UX optimization</li>
                <li>• Progressive web apps</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Backend Development</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Robust backend systems with scalable architecture, APIs, and database integration.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Node.js, Python, Java</li>
                <li>• RESTful and GraphQL APIs</li>
                <li>• Database design</li>
                <li>• Microservices architecture</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Database Solutions</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Comprehensive database design, implementation, and optimization for your application needs.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• SQL and NoSQL databases</li>
                <li>• Database optimization</li>
                <li>• Data migration</li>
                <li>• Backup and recovery</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">API Development</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Design and build secure, scalable APIs for seamless integration between systems.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• RESTful API design</li>
                <li>• GraphQL implementation</li>
                <li>• API documentation</li>
                <li>• Third-party integrations</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">DevOps Integration</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Seamless integration with CI/CD pipelines and deployment automation.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• CI/CD pipeline setup</li>
                <li>• Automated testing</li>
                <li>• Deployment automation</li>
                <li>• Monitoring and logging</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Full Stack Consulting</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Strategic guidance on technology stack selection and architecture decisions.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Technology assessment</li>
                <li>• Architecture design</li>
                <li>• Best practices</li>
                <li>• Performance optimization</li>
              </ul>
            </div>
          </div>

          <div className="windows-card p-12 md:p-16 bg-gradient-to-br from-windows-dark-accent/20 to-windows-dark-accent/5 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build Your Full Stack Application?</h2>
            <p className="text-windows-dark-text-secondary mb-10 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Partner with us to develop complete, scalable full stack applications from concept to deployment.
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

