import Header from '@/components/Header'
import Link from 'next/link'

export default function DecentralizedPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Decentralized</h1>
            <p className="text-xl md:text-2xl text-windows-dark-text-secondary max-w-3xl mx-auto">
              Decentralized solutions and blockchain technologies for secure, transparent, and autonomous systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Blockchain Development</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Custom blockchain solutions and decentralized application development.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Smart contract development</li>
                <li>• DApp creation</li>
                <li>• Token development</li>
                <li>• Blockchain integration</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">DeFi Solutions</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Decentralized finance applications for lending, staking, and yield farming.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• DeFi protocol integration</li>
                <li>• Yield farming strategies</li>
                <li>• Liquidity provision</li>
                <li>• Staking services</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">NFT Platforms</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Non-fungible token platforms and marketplace development.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• NFT marketplace creation</li>
                <li>• Token minting systems</li>
                <li>• Digital asset management</li>
                <li>• Royalty distribution</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Decentralized Storage</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Distributed storage solutions for secure and resilient data management.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• IPFS integration</li>
                <li>• Distributed file systems</li>
                <li>• Data redundancy</li>
                <li>• Secure data storage</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">DAO Development</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Decentralized Autonomous Organization platforms for governance and decision-making.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Governance systems</li>
                <li>• Voting mechanisms</li>
                <li>• Treasury management</li>
                <li>• Proposal systems</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Web3 Integration</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Web3 technology integration for decentralized web applications.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Wallet integration</li>
                <li>• Blockchain connectivity</li>
                <li>• Smart contract interaction</li>
                <li>• Web3 API development</li>
              </ul>
            </div>
          </div>

          <div className="windows-card p-12 md:p-16 bg-gradient-to-br from-windows-dark-accent/20 to-windows-dark-accent/5 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Go Decentralized?</h2>
            <p className="text-windows-dark-text-secondary mb-10 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Explore how decentralized technologies can transform your business operations and create new opportunities.
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

