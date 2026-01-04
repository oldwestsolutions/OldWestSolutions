import Header from '@/components/Header'
import Link from 'next/link'

export default function HardwareProductsPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Hardware</h1>
            <p className="text-xl md:text-2xl text-windows-dark-text-secondary max-w-3xl mx-auto">
              Enterprise hardware solutions including servers, workstations, networking equipment, and storage systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Server Hardware</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                High-performance server systems for enterprise applications and data centers.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Rack servers</li>
                <li>• Tower servers</li>
                <li>• Blade servers</li>
                <li>• Server components</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Workstations</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Powerful workstations for professional applications and creative workflows.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• High-performance workstations</li>
                <li>• GPU-accelerated systems</li>
                <li>• Professional displays</li>
                <li>• Custom configurations</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Networking Equipment</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Enterprise networking hardware for reliable connectivity and performance.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Network switches</li>
                <li>• Routers and firewalls</li>
                <li>• Wireless access points</li>
                <li>• Network infrastructure</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Storage Systems</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Enterprise storage solutions for data management and backup.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Network-attached storage</li>
                <li>• Storage area networks</li>
                <li>• Backup storage systems</li>
                <li>• Storage expansion</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Hardware Procurement</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Sourcing and procurement services for enterprise hardware needs.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Vendor management</li>
                <li>• Volume purchasing</li>
                <li>• Cost optimization</li>
                <li>• Supply chain management</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Hardware Support</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Comprehensive support services for hardware installation and maintenance.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Installation services</li>
                <li>• Configuration assistance</li>
                <li>• Maintenance contracts</li>
                <li>• Technical support</li>
              </ul>
            </div>
          </div>

          <div className="windows-card p-12 md:p-16 bg-gradient-to-br from-windows-dark-accent/20 to-windows-dark-accent/5 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Upgrade Your Hardware?</h2>
            <p className="text-windows-dark-text-secondary mb-10 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Explore our hardware solutions or contact us for custom recommendations tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="windows-button windows-button-primary text-lg md:text-xl px-10 py-4">
                Browse Hardware
              </button>
              <button className="windows-button text-lg md:text-xl px-10 py-4">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

