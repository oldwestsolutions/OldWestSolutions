import Header from '@/components/Header'
import Link from 'next/link'

export default function ManagedServersPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">ProHost Managed Servers</h1>
            <p className="text-xl md:text-2xl text-windows-dark-text-secondary max-w-3xl mx-auto">
              Fully managed dedicated and virtual servers with 24/7 monitoring, automated backups, and enterprise-grade security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">24/7 Monitoring</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Continuous monitoring of your server infrastructure with real-time alerts and proactive issue resolution.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Real-time performance monitoring</li>
                <li>• Automated alerting system</li>
                <li>• Proactive issue detection</li>
                <li>• 24/7 support availability</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Automated Backups</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Comprehensive backup solutions with automated scheduling and secure data retention.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Daily automated backups</li>
                <li>• Point-in-time recovery</li>
                <li>• Off-site backup storage</li>
                <li>• Backup verification</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Multi-layered security approach to protect your servers and data from threats.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Firewall configuration</li>
                <li>• Intrusion detection</li>
                <li>• Security patching</li>
                <li>• Compliance support</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Dedicated Servers</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                High-performance dedicated server solutions tailored to your specific requirements.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Custom configurations</li>
                <li>• High-performance hardware</li>
                <li>• Full root access</li>
                <li>• Scalable resources</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Virtual Servers</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Flexible virtual server solutions with on-demand scaling and resource allocation.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Virtual machine hosting</li>
                <li>• On-demand scaling</li>
                <li>• Resource optimization</li>
                <li>• Cost-effective solutions</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Server Management</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Complete server lifecycle management from deployment to maintenance and optimization.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Server provisioning</li>
                <li>• Configuration management</li>
                <li>• Performance optimization</li>
                <li>• Maintenance scheduling</li>
              </ul>
            </div>
          </div>

          <div className="windows-card p-12 md:p-16 bg-gradient-to-br from-windows-dark-accent/20 to-windows-dark-accent/5 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-windows-dark-text-secondary mb-10 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Contact us today to discuss your server requirements and get a customized solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="windows-button windows-button-primary text-lg md:text-xl px-10 py-4">
                Contact Us
              </button>
              <button className="windows-button text-lg md:text-xl px-10 py-4">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

