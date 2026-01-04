import Header from '@/components/Header'
import Link from 'next/link'

export default function CryptoPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Crypto</h1>
            <p className="text-xl md:text-2xl text-windows-dark-text-secondary max-w-3xl mx-auto">
              Comprehensive cryptocurrency solutions including trading, wallets, exchanges, and digital asset management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Cryptocurrency Trading</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Advanced trading platforms and tools for buying, selling, and managing cryptocurrency assets.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Trading platform integration</li>
                <li>• Automated trading bots</li>
                <li>• Portfolio management</li>
                <li>• Market analysis tools</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Digital Wallets</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Secure cryptocurrency wallet solutions for storing and managing digital assets.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Hot and cold wallets</li>
                <li>• Multi-signature wallets</li>
                <li>• Hardware wallet integration</li>
                <li>• Wallet security solutions</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Exchange Integration</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Connect with major cryptocurrency exchanges for seamless trading and liquidity access.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Exchange API integration</li>
                <li>• Liquidity aggregation</li>
                <li>• Order management</li>
                <li>• Real-time market data</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Payment Processing</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Accept cryptocurrency payments with secure processing and conversion solutions.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Payment gateway integration</li>
                <li>• Multi-currency support</li>
                <li>• Instant conversion</li>
                <li>• Transaction monitoring</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">DeFi Solutions</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Decentralized finance applications including lending, staking, and yield farming.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• DeFi protocol integration</li>
                <li>• Yield farming strategies</li>
                <li>• Liquidity provision</li>
                <li>• Staking services</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Crypto Consulting</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Strategic guidance on cryptocurrency adoption, implementation, and regulatory compliance.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Strategy development</li>
                <li>• Regulatory compliance</li>
                <li>• Risk assessment</li>
                <li>• Implementation planning</li>
              </ul>
            </div>
          </div>

          <div className="windows-card p-12 md:p-16 bg-gradient-to-br from-windows-dark-accent/20 to-windows-dark-accent/5 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Enter the Crypto Market?</h2>
            <p className="text-windows-dark-text-secondary mb-10 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Explore our cryptocurrency solutions and start your digital asset journey today.
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

