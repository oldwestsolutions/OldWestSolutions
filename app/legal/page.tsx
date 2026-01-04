import Header from '@/components/Header'
import Link from 'next/link'

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-windows-dark-bg">
      <Header />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/" className="text-windows-dark-accent hover:text-windows-dark-accent-hover mb-8 inline-block">
            ← Back to Home
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="windows-card p-12 md:p-16 bg-gradient-to-br from-windows-dark-accent/30 via-windows-dark-accent/20 to-windows-dark-accent/10 text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Legal</h1>
            <p className="text-xl md:text-2xl text-windows-dark-text-secondary max-w-3xl mx-auto">
              Legal information, terms of service, privacy policy, and compliance documentation.
            </p>
          </div>

          <div className="space-y-8 md:space-y-12">
            <div className="windows-card p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Terms of Service</h2>
              <p className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed mb-4">
                By accessing and using Old West Solutions services, you agree to be bound by our Terms of Service. 
                These terms govern your use of our platform, products, and services.
              </p>
              <p className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed">
                Our Terms of Service outline the rights and responsibilities of both Old West Solutions and our clients, 
                including service usage guidelines, payment terms, and dispute resolution procedures.
              </p>
            </div>

            <div className="windows-card p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Privacy Policy</h2>
              <p className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed mb-4">
                At Old West Solutions, we are committed to protecting your privacy and personal information. 
                Our Privacy Policy explains how we collect, use, store, and protect your data.
              </p>
              <p className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed">
                We implement industry-standard security measures to safeguard your information and comply with 
                applicable data protection regulations, including GDPR and CCPA requirements.
              </p>
            </div>

            <div className="windows-card p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Cookie Policy</h2>
              <p className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed mb-4">
                Our website uses cookies and similar tracking technologies to enhance your browsing experience 
                and provide personalized content.
              </p>
              <p className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed">
                You can manage your cookie preferences through your browser settings. Some cookies are essential 
                for the website to function properly, while others help us analyze usage and improve our services.
              </p>
            </div>

            <div className="windows-card p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Acceptable Use Policy</h2>
              <p className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed mb-4">
                Our Acceptable Use Policy defines the rules and guidelines for using Old West Solutions services. 
                This policy helps ensure a safe and secure environment for all users.
              </p>
              <p className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed">
                Prohibited activities include unauthorized access, data breaches, service disruption, and any 
                activities that violate applicable laws or regulations.
              </p>
            </div>

            <div className="windows-card p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Service Level Agreement (SLA)</h2>
              <p className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed mb-4">
                Our Service Level Agreement outlines the performance standards and availability guarantees for 
                our services, including uptime commitments and support response times.
              </p>
              <p className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed">
                We are committed to maintaining high service quality and will work to resolve any service 
                interruptions promptly and efficiently.
              </p>
            </div>

            <div className="windows-card p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Compliance & Certifications</h2>
              <p className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed mb-4">
                Old West Solutions maintains compliance with industry standards and regulations, including 
                SOC 2, ISO 27001, and other relevant certifications.
              </p>
              <p className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed">
                We regularly undergo security audits and assessments to ensure our services meet the highest 
                standards for data protection and security.
              </p>
            </div>
          </div>

          <div className="windows-card p-12 md:p-16 bg-gradient-to-br from-windows-dark-accent/20 to-windows-dark-accent/5 text-center mt-12 md:mt-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Questions About Our Legal Policies?</h2>
            <p className="text-windows-dark-text-secondary mb-10 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              If you have questions about our legal policies or need clarification on any terms, please contact our legal team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="windows-button windows-button-primary text-lg md:text-xl px-10 py-4">
                Contact Legal
              </button>
              <button className="windows-button text-lg md:text-xl px-10 py-4">
                Download Documents
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

