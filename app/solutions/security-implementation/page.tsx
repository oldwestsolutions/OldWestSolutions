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

        {/* Immersive Full-Page Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 p-4 md:p-6 max-w-[1920px] mx-auto">
          {/* Hero Section */}
          <div className="md:col-span-2 lg:col-span-4 windows-card p-12 md:p-16 bg-gradient-to-br from-red-600/30 via-orange-500/20 to-red-400/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="text-8xl md:text-9xl mb-6">🛡️</div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Security Implementation</h1>
              <p className="text-xl md:text-2xl text-windows-dark-text-secondary max-w-4xl leading-relaxed">
                Comprehensive security solutions to protect your organization from evolving cyber threats. 
                Implement enterprise-grade security frameworks that ensure compliance and provide peace of mind 
                in an increasingly dangerous digital landscape.
              </p>
            </div>
          </div>

          {/* Zero Trust Architecture - Large */}
          <div className="md:col-span-2 lg:col-span-2 windows-card p-8 md:p-12 hover:border-windows-dark-accent transition-all bg-gradient-to-br from-windows-dark-surface to-windows-dark-bg">
            <div className="text-6xl md:text-7xl mb-6">🛡️</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Zero Trust Architecture</h2>
            <p className="text-windows-dark-text-secondary text-base md:text-lg mb-6 leading-relaxed">
              Implement a zero-trust security model that verifies every user and device before granting access. 
              Never trust, always verify - this modern security approach assumes breach and validates explicitly.
            </p>
            <ul className="space-y-3 text-windows-dark-text-secondary text-base">
              <li className="flex items-start">
                <span className="text-windows-dark-accent mr-3 text-xl">→</span>
                <span>Identity and access management (IAM) with multi-factor authentication</span>
              </li>
              <li className="flex items-start">
                <span className="text-windows-dark-accent mr-3 text-xl">→</span>
                <span>Network segmentation and micro-segmentation</span>
              </li>
              <li className="flex items-start">
                <span className="text-windows-dark-accent mr-3 text-xl">→</span>
                <span>Continuous monitoring and behavioral analytics</span>
              </li>
              <li className="flex items-start">
                <span className="text-windows-dark-accent mr-3 text-xl">→</span>
                <span>Threat detection and automated response</span>
              </li>
            </ul>
          </div>

          {/* Security Services */}
          <div className="windows-card p-6 md:p-8 hover:border-windows-dark-accent transition-all group cursor-pointer">
            <div className="text-5xl md:text-6xl mb-4">🔐</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Endpoint Protection</h2>
            <p className="text-windows-dark-text-secondary text-sm md:text-base mb-4">
              Advanced endpoint detection and response (EDR) to protect all devices in your network. 
              Real-time threat detection and automated remediation.
            </p>
            <div className="text-windows-dark-accent text-sm font-medium">Learn more →</div>
          </div>

          <div className="windows-card p-6 md:p-8 hover:border-windows-dark-accent transition-all group cursor-pointer">
            <div className="text-5xl md:text-6xl mb-4">🌐</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Network Security</h2>
            <p className="text-windows-dark-text-secondary text-sm md:text-base mb-4">
              Firewall, intrusion prevention, and network monitoring solutions to secure your infrastructure. 
              Advanced threat protection at the network layer.
            </p>
            <div className="text-windows-dark-accent text-sm font-medium">Learn more →</div>
          </div>

          <div className="windows-card p-6 md:p-8 hover:border-windows-dark-accent transition-all group cursor-pointer">
            <div className="text-5xl md:text-6xl mb-4">📧</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Email Security</h2>
            <p className="text-windows-dark-text-secondary text-sm md:text-base mb-4">
              Protect against phishing, malware, and advanced email threats with enterprise-grade solutions. 
              AI-powered threat detection and prevention.
            </p>
            <div className="text-windows-dark-accent text-sm font-medium">Learn more →</div>
          </div>

          <div className="windows-card p-6 md:p-8 hover:border-windows-dark-accent transition-all group cursor-pointer">
            <div className="text-5xl md:text-6xl mb-4">🔍</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Security Monitoring</h2>
            <p className="text-windows-dark-text-secondary text-sm md:text-base mb-4">
              24/7 security operations center (SOC) to detect and respond to threats in real-time. 
              Continuous monitoring and threat intelligence.
            </p>
            <div className="text-windows-dark-accent text-sm font-medium">Learn more →</div>
          </div>

          <div className="windows-card p-6 md:p-8 hover:border-windows-dark-accent transition-all group cursor-pointer">
            <div className="text-5xl md:text-6xl mb-4">📋</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Compliance</h2>
            <p className="text-windows-dark-text-secondary text-sm md:text-base mb-4">
              Ensure compliance with GDPR, HIPAA, SOC 2, PCI-DSS, and other regulatory requirements. 
              Automated compliance monitoring and reporting.
            </p>
            <div className="text-windows-dark-accent text-sm font-medium">Learn more →</div>
          </div>

          {/* Security Framework */}
          <div className="md:col-span-2 lg:col-span-4 windows-card p-10 md:p-16 bg-gradient-to-br from-windows-dark-surface to-windows-dark-bg">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">Comprehensive Security Framework</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🔒</div>
                <div className="text-2xl font-bold text-windows-dark-accent mb-2">Prevent</div>
                <p className="text-windows-dark-text-secondary text-base">
                  Proactive security measures to prevent attacks before they occur. Firewalls, 
                  access controls, and security policies.
                </p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">👁️</div>
                <div className="text-2xl font-bold text-windows-dark-accent mb-2">Detect</div>
                <p className="text-windows-dark-text-secondary text-base">
                  Continuous monitoring and threat detection. SIEM, log analysis, and behavioral 
                  analytics to identify threats.
                </p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">⚡</div>
                <div className="text-2xl font-bold text-windows-dark-accent mb-2">Respond</div>
                <p className="text-windows-dark-text-secondary text-base">
                  Rapid incident response and containment. Automated response playbooks and 
                  security orchestration.
                </p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🔄</div>
                <div className="text-2xl font-bold text-windows-dark-accent mb-2">Recover</div>
                <p className="text-windows-dark-text-secondary text-base">
                  Business continuity and disaster recovery. Backup and recovery solutions to 
                  restore operations quickly.
                </p>
              </div>
            </div>
          </div>

          {/* Security Technologies */}
          <div className="md:col-span-2 lg:col-span-4 windows-card p-10 md:p-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Security Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {['SIEM Solutions', 'Next-Gen Firewalls', 'Identity Management', 'Threat Intelligence', 'Vulnerability Management', 'Security Awareness'].map((tech) => (
                <div key={tech} className="windows-card p-6 text-center hover:border-windows-dark-accent transition-all group">
                  <div className="text-5xl mb-4">🔒</div>
                  <h3 className="text-white font-semibold text-base md:text-lg">{tech}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="md:col-span-2 lg:col-span-4 windows-card p-10 md:p-16 bg-gradient-to-br from-red-600/10 to-orange-500/10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">Security Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <div className="text-5xl mb-4">🛡️</div>
                <h3 className="text-2xl font-semibold text-white mb-4">Threat Protection</h3>
                <p className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed">
                  Protect against 99.9% of known threats with multi-layered security. Advanced threat detection 
                  using AI and machine learning to identify and block sophisticated attacks before they impact your business.
                </p>
              </div>
              <div>
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-semibold text-white mb-4">Compliance Assurance</h3>
                <p className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed">
                  Meet regulatory requirements with automated compliance monitoring. Stay compliant with GDPR, 
                  HIPAA, SOC 2, PCI-DSS, and industry-specific regulations.
                </p>
              </div>
              <div>
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-2xl font-semibold text-white mb-4">Rapid Response</h3>
                <p className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed">
                  Detect and respond to threats in real-time. Automated incident response reduces mean time 
                  to detection (MTTD) and mean time to response (MTTR) significantly.
                </p>
              </div>
              <div>
                <div className="text-5xl mb-4">💼</div>
                <h3 className="text-2xl font-semibold text-white mb-4">Business Continuity</h3>
                <p className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed">
                  Ensure business operations continue even during security incidents. Comprehensive disaster 
                  recovery and business continuity planning.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="md:col-span-2 lg:col-span-4 windows-card p-12 md:p-16 bg-gradient-to-br from-windows-dark-accent/20 to-windows-dark-accent/5 text-center">
            <div className="text-7xl md:text-8xl mb-6">🔒</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Secure Your Organization</h2>
            <p className="text-windows-dark-text-secondary mb-10 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Get a comprehensive security assessment and learn how to protect your business from cyber threats. 
              Our security experts will evaluate your current posture and recommend improvements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="windows-button windows-button-primary text-lg md:text-xl px-10 py-4">
                Security Assessment
              </button>
              <button className="windows-button text-lg md:text-xl px-10 py-4">
                View Security Solutions
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
