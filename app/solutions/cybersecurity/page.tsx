import Header from '@/components/Header'
import Link from 'next/link'

export default function CyberSecurityPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">CyberSecurity</h1>
            <p className="text-xl md:text-2xl text-windows-dark-text-secondary max-w-3xl mx-auto">
              Protect your digital assets with comprehensive cybersecurity solutions and proactive threat management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Threat Detection & Response</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Identify and respond to security threats in real-time with advanced monitoring and detection systems.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• SIEM implementation</li>
                <li>• Threat intelligence</li>
                <li>• Incident response</li>
                <li>• Security monitoring</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Identity & Access Management</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Secure access to your systems with comprehensive identity management and authentication solutions.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Single sign-on (SSO)</li>
                <li>• Multi-factor authentication</li>
                <li>• Privileged access management</li>
                <li>• Identity governance</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Network Security</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Protect your network infrastructure with firewalls, intrusion prevention, and segmentation.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Firewall management</li>
                <li>• Network segmentation</li>
                <li>• Intrusion prevention</li>
                <li>• VPN solutions</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Security Assessment</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Evaluate your security posture with comprehensive assessments and penetration testing.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Vulnerability assessments</li>
                <li>• Penetration testing</li>
                <li>• Security audits</li>
                <li>• Compliance reviews</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Data Protection</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Safeguard sensitive data with encryption, data loss prevention, and backup solutions.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Data encryption</li>
                <li>• Data loss prevention</li>
                <li>• Backup and recovery</li>
                <li>• Data classification</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Security Compliance</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Achieve and maintain compliance with industry standards and regulations.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• GDPR compliance</li>
                <li>• HIPAA compliance</li>
                <li>• SOC 2 certification</li>
                <li>• ISO 27001</li>
              </ul>
            </div>
          </div>

          <div className="windows-card p-12 md:p-16 bg-gradient-to-br from-windows-dark-accent/20 to-windows-dark-accent/5 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Strengthen Your Security?</h2>
            <p className="text-windows-dark-text-secondary mb-10 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Protect your organization with comprehensive cybersecurity solutions tailored to your needs.
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

