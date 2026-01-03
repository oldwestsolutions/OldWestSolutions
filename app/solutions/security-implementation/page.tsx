import Header from '@/components/Header'
import Link from 'next/link'

export default function SecurityImplementationPage() {
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
          <div className="md:col-span-2 lg:col-span-3 windows-card p-8 md:p-12 bg-gradient-to-br from-red-600/20 to-orange-500/20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6">Security Implementation</h1>
            <p className="text-lg md:text-xl text-windows-dark-text-secondary max-w-3xl">
              Comprehensive security solutions to protect your organization from evolving cyber threats. 
              Implement enterprise-grade security frameworks that ensure compliance and peace of mind.
            </p>
          </div>

          {/* Security Framework */}
          <div className="md:col-span-2 windows-card p-6 md:p-8 hover:border-windows-dark-accent transition-all">
            <div className="text-4xl md:text-5xl mb-4">🛡️</div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Zero Trust Architecture</h2>
            <p className="text-windows-dark-text-secondary text-sm md:text-base mb-4">
              Implement a zero-trust security model that verifies every user and device before granting access.
            </p>
            <ul className="space-y-2 text-sm text-windows-dark-text-secondary">
              <li>• Identity and access management</li>
              <li>• Network segmentation</li>
              <li>• Continuous monitoring</li>
              <li>• Threat detection and response</li>
            </ul>
          </div>

          <div className="windows-card p-6 md:p-8 hover:border-windows-dark-accent transition-all group cursor-pointer">
            <div className="text-4xl md:text-5xl mb-4">🔐</div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Endpoint Protection</h2>
            <p className="text-windows-dark-text-secondary text-sm md:text-base">
              Advanced endpoint detection and response (EDR) to protect all devices in your network.
            </p>
          </div>

          <div className="windows-card p-6 md:p-8 hover:border-windows-dark-accent transition-all group cursor-pointer">
            <div className="text-4xl md:text-5xl mb-4">🌐</div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Network Security</h2>
            <p className="text-windows-dark-text-secondary text-sm md:text-base">
              Firewall, intrusion prevention, and network monitoring solutions to secure your infrastructure.
            </p>
          </div>

          <div className="windows-card p-6 md:p-8 hover:border-windows-dark-accent transition-all group cursor-pointer">
            <div className="text-4xl md:text-5xl mb-4">📧</div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Email Security</h2>
            <p className="text-windows-dark-text-secondary text-sm md:text-base">
              Protect against phishing, malware, and advanced email threats with enterprise-grade solutions.
            </p>
          </div>

          <div className="windows-card p-6 md:p-8 hover:border-windows-dark-accent transition-all group cursor-pointer">
            <div className="text-4xl md:text-5xl mb-4">🔍</div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Security Monitoring</h2>
            <p className="text-windows-dark-text-secondary text-sm md:text-base">
              24/7 security operations center (SOC) to detect and respond to threats in real-time.
            </p>
          </div>

          <div className="windows-card p-6 md:p-8 hover:border-windows-dark-accent transition-all group cursor-pointer">
            <div className="text-4xl md:text-5xl mb-4">📋</div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Compliance</h2>
            <p className="text-windows-dark-text-secondary text-sm md:text-base">
              Ensure compliance with GDPR, HIPAA, SOC 2, PCI-DSS, and other regulatory requirements.
            </p>
          </div>

          {/* Security Technologies */}
          <div className="md:col-span-2 lg:col-span-3 windows-card p-8 md:p-12 bg-gradient-to-br from-windows-dark-surface to-windows-dark-bg">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Security Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {['SIEM Solutions', 'Next-Gen Firewalls', 'Identity Management', 'Threat Intelligence', 'Vulnerability Management', 'Security Awareness'].map((tech) => (
                <div key={tech} className="windows-card p-4 md:p-6 text-center hover:border-windows-dark-accent transition-all">
                  <div className="text-2xl md:text-3xl mb-2">🔒</div>
                  <h3 className="text-white font-semibold text-sm md:text-base">{tech}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="md:col-span-2 lg:col-span-3 windows-card p-8 md:p-12 bg-gradient-to-br from-windows-dark-accent/10 to-windows-dark-accent/5 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Secure Your Organization</h2>
            <p className="text-windows-dark-text-secondary mb-8 text-lg max-w-2xl mx-auto">
              Get a comprehensive security assessment and learn how to protect your business from cyber threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="windows-button windows-button-primary text-lg px-8 py-3">
                Security Assessment
              </button>
              <button className="windows-button text-lg px-8 py-3">
                View Security Solutions
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

