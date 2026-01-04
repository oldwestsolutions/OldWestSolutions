import Header from '@/components/Header'
import Link from 'next/link'

export default function EmailSolutionsPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">BusinessMail Pro Setup</h1>
            <p className="text-xl md:text-2xl text-windows-dark-text-secondary max-w-3xl mx-auto">
              Professional email hosting and configuration with custom domains, advanced security, and seamless integration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Custom Domain Setup</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Professional email addresses using your own domain name for brand consistency.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Custom domain configuration</li>
                <li>• Multiple email accounts</li>
                <li>• Domain verification</li>
                <li>• DNS management</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Advanced Security</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Enterprise-grade email security with spam filtering and threat protection.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Spam and malware filtering</li>
                <li>• Email encryption</li>
                <li>• Two-factor authentication</li>
                <li>• Security monitoring</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Seamless Integration</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Integrate with your existing business tools and workflows.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Calendar integration</li>
                <li>• Contact management</li>
                <li>• CRM integration</li>
                <li>• Mobile device sync</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Email Management</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Comprehensive email management tools for efficient communication.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Email forwarding</li>
                <li>• Auto-responders</li>
                <li>• Email aliases</li>
                <li>• Distribution lists</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Storage & Archiving</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Generous storage options with email archiving and backup capabilities.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Generous storage quotas</li>
                <li>• Email archiving</li>
                <li>• Backup and recovery</li>
                <li>• Retention policies</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Support & Migration</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Expert setup assistance and seamless migration from existing email providers.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Migration services</li>
                <li>• Setup assistance</li>
                <li>• Training and documentation</li>
                <li>• Ongoing support</li>
              </ul>
            </div>
          </div>

          <div className="windows-card p-12 md:p-16 bg-gradient-to-br from-windows-dark-accent/20 to-windows-dark-accent/5 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Set Up Your Email?</h2>
            <p className="text-windows-dark-text-secondary mb-10 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Get professional email hosting configured for your business with our expert setup service.
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

