import Header from '@/components/Header'
import Link from 'next/link'

export default function DevOpsCICDPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Dev Ops CI/CD</h1>
            <p className="text-xl md:text-2xl text-windows-dark-text-secondary max-w-3xl mx-auto">
              Accelerate your software delivery with modern DevOps practices and continuous integration/continuous deployment pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Continuous Integration</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Automate code integration and testing to catch issues early and maintain code quality throughout development.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Automated testing pipelines</li>
                <li>• Code quality checks</li>
                <li>• Build automation</li>
                <li>• Integration with version control</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Continuous Deployment</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Streamline deployment processes to deliver updates faster and more reliably to production environments.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Automated deployment pipelines</li>
                <li>• Environment management</li>
                <li>• Rollback capabilities</li>
                <li>• Zero-downtime deployments</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Infrastructure as Code</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Manage and provision infrastructure through code for consistency, repeatability, and version control.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Terraform and CloudFormation</li>
                <li>• Configuration management</li>
                <li>• Infrastructure versioning</li>
                <li>• Automated provisioning</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Container Orchestration</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Deploy and manage containerized applications at scale with Kubernetes and Docker.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Kubernetes deployment</li>
                <li>• Container management</li>
                <li>• Auto-scaling</li>
                <li>• Service mesh integration</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Monitoring & Observability</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Gain visibility into your applications and infrastructure with comprehensive monitoring solutions.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Application performance monitoring</li>
                <li>• Log aggregation and analysis</li>
                <li>• Real-time alerting</li>
                <li>• Distributed tracing</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Security Integration</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Embed security practices into your CI/CD pipeline for secure software delivery.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Security scanning</li>
                <li>• Vulnerability assessment</li>
                <li>• Compliance automation</li>
                <li>• Secrets management</li>
              </ul>
            </div>
          </div>

          <div className="windows-card p-12 md:p-16 bg-gradient-to-br from-windows-dark-accent/20 to-windows-dark-accent/5 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your DevOps?</h2>
            <p className="text-windows-dark-text-secondary mb-10 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Let our DevOps experts help you build efficient CI/CD pipelines and modernize your software delivery process.
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

