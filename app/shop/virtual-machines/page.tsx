import Header from '@/components/Header'
import Link from 'next/link'

export default function VirtualMachinesShopPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">MacCloud Virtual Machines</h1>
            <p className="text-xl md:text-2xl text-windows-dark-text-secondary max-w-3xl mx-auto">
              High-performance macOS virtual machines for development, testing, and creative workflows. Pre-configured and ready to deploy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">macOS Development</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Pre-configured macOS virtual machines optimized for iOS and macOS application development.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Xcode pre-installed</li>
                <li>• Development tools configured</li>
                <li>• Multiple macOS versions</li>
                <li>• Fast provisioning</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Creative Workflows</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                High-performance VMs for creative professionals using Adobe Creative Suite and other design tools.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• GPU acceleration support</li>
                <li>• High-resolution display support</li>
                <li>• Creative software pre-installed</li>
                <li>• Optimized performance</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Testing Environments</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Isolated testing environments for QA, compatibility testing, and software validation.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Snapshot capabilities</li>
                <li>• Multiple test environments</li>
                <li>• Automated testing support</li>
                <li>• Clean state restoration</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Pre-Configured Templates</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Ready-to-use VM templates with common development and design software pre-installed.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Development templates</li>
                <li>• Design templates</li>
                <li>• Testing templates</li>
                <li>• Custom configurations</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Scalable Resources</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Adjustable CPU, memory, and storage resources to match your workload requirements.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Flexible resource allocation</li>
                <li>• On-demand scaling</li>
                <li>• Performance optimization</li>
                <li>• Cost-effective pricing</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Secure Access</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Secure remote access with VPN support and multi-factor authentication.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• VPN connectivity</li>
                <li>• Secure remote desktop</li>
                <li>• Multi-factor authentication</li>
                <li>• Access logging</li>
              </ul>
            </div>
          </div>

          <div className="windows-card p-12 md:p-16 bg-gradient-to-br from-windows-dark-accent/20 to-windows-dark-accent/5 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Deploy?</h2>
            <p className="text-windows-dark-text-secondary mb-10 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Get started with MacCloud Virtual Machines and accelerate your development and creative workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="windows-button windows-button-primary text-lg md:text-xl px-10 py-4">
                Get Started
              </button>
              <button className="windows-button text-lg md:text-xl px-10 py-4">
                View Plans
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

