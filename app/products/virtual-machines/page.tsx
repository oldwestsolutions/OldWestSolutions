import Header from '@/components/Header'
import Link from 'next/link'

export default function VirtualMachinesPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Virtual Machines</h1>
            <p className="text-xl md:text-2xl text-windows-dark-text-secondary max-w-3xl mx-auto">
              High-performance virtualized computing environments for development, testing, and production workloads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">macOS Virtual Machines</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Pre-configured macOS virtual machines for development, testing, and creative workflows.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• High-performance macOS VMs</li>
                <li>• Pre-configured development environments</li>
                <li>• Creative workflow optimization</li>
                <li>• Testing and QA support</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Linux Virtual Machines</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Flexible Linux virtual machines for server workloads, development, and containerization.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Multiple Linux distributions</li>
                <li>• Server and desktop configurations</li>
                <li>• Container-ready environments</li>
                <li>• Custom configurations</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Windows Virtual Machines</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Enterprise Windows virtual machines for business applications and legacy system support.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Windows Server VMs</li>
                <li>• Windows Desktop VMs</li>
                <li>• Legacy application support</li>
                <li>• Enterprise licensing</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">GPU-Accelerated VMs</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                High-performance virtual machines with GPU acceleration for AI, ML, and graphics workloads.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• NVIDIA GPU support</li>
                <li>• AI/ML workload optimization</li>
                <li>• Graphics rendering</li>
                <li>• High-performance computing</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">VM Management</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Comprehensive virtual machine lifecycle management and monitoring solutions.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• VM provisioning and deployment</li>
                <li>• Resource monitoring</li>
                <li>• Automated scaling</li>
                <li>• Backup and recovery</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Cloud VM Solutions</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Deploy virtual machines across major cloud platforms with seamless integration.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• AWS EC2 instances</li>
                <li>• Azure Virtual Machines</li>
                <li>• Google Compute Engine</li>
                <li>• Multi-cloud deployments</li>
              </ul>
            </div>
          </div>

          <div className="windows-card p-12 md:p-16 bg-gradient-to-br from-windows-dark-accent/20 to-windows-dark-accent/5 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Deploy Virtual Machines?</h2>
            <p className="text-windows-dark-text-secondary mb-10 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Get started with our virtual machine solutions tailored to your specific workload requirements.
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

