import Header from '@/components/Header'
import Link from 'next/link'

export default function BlockchainPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Blockchain</h1>
            <p className="text-xl md:text-2xl text-windows-dark-text-secondary max-w-3xl mx-auto">
              Decentralized blockchain solutions for secure, transparent, and immutable digital transactions and applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Smart Contracts</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Develop and deploy self-executing smart contracts on leading blockchain platforms.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Ethereum smart contracts</li>
                <li>• Solidity development</li>
                <li>• Contract auditing</li>
                <li>• DeFi applications</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Blockchain Development</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Build custom blockchain applications and decentralized solutions.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• DApp development</li>
                <li>• Token creation</li>
                <li>• NFT platforms</li>
                <li>• Blockchain integration</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Private Blockchains</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Deploy private and permissioned blockchain networks for enterprise use cases.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Hyperledger Fabric</li>
                <li>• Enterprise blockchain</li>
                <li>• Permissioned networks</li>
                <li>• Supply chain solutions</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Cryptocurrency Solutions</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Implement cryptocurrency payment systems and digital asset management.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Payment processing</li>
                <li>• Wallet integration</li>
                <li>• Exchange integration</li>
                <li>• Digital asset management</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Blockchain Infrastructure</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Set up and manage blockchain infrastructure and node networks.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Node deployment</li>
                <li>• Network management</li>
                <li>• Infrastructure monitoring</li>
                <li>• Security hardening</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Blockchain Consulting</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Strategic guidance on blockchain adoption and implementation strategies.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Use case analysis</li>
                <li>• Technology selection</li>
                <li>• Implementation planning</li>
                <li>• ROI assessment</li>
              </ul>
            </div>
          </div>

          <div className="windows-card p-12 md:p-16 bg-gradient-to-br from-windows-dark-accent/20 to-windows-dark-accent/5 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Explore Blockchain?</h2>
            <p className="text-windows-dark-text-secondary mb-10 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Discover how blockchain technology can transform your business processes and create new opportunities.
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

