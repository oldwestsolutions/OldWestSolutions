import Header from '@/components/Header'
import Link from 'next/link'

export default function KubernetesPage() {
  return (
    <main className="min-h-screen bg-windows-dark-bg">
      <Header />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/#solutions" className="text-windows-dark-accent hover:text-windows-dark-accent-hover mb-8 inline-block">
            ← Back to Solutions
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="windows-card p-12 md:p-16 bg-gradient-to-br from-windows-dark-accent/30 via-windows-dark-accent/20 to-windows-dark-accent/10 text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Kubernetes</h1>
            <p className="text-xl md:text-2xl text-windows-dark-text-secondary max-w-3xl mx-auto">
              Enterprise-grade Kubernetes orchestration for containerized applications with automated scaling and management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Kubernetes Deployment</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Deploy and manage Kubernetes clusters across cloud and on-premises environments.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Cluster setup and configuration</li>
                <li>• Multi-cloud deployments</li>
                <li>• High availability clusters</li>
                <li>• Disaster recovery</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Container Orchestration</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Orchestrate containerized applications with automated scaling and load balancing.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Pod management</li>
                <li>• Service discovery</li>
                <li>• Auto-scaling</li>
                <li>• Load balancing</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Kubernetes Management</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Comprehensive cluster management with monitoring, logging, and resource optimization.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Cluster monitoring</li>
                <li>• Resource management</li>
                <li>• Log aggregation</li>
                <li>• Performance optimization</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">CI/CD Integration</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Integrate Kubernetes with CI/CD pipelines for automated deployment workflows.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• GitOps workflows</li>
                <li>• Automated deployments</li>
                <li>• Rollback capabilities</li>
                <li>• Pipeline integration</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Security & Compliance</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Secure Kubernetes clusters with RBAC, network policies, and compliance controls.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• RBAC implementation</li>
                <li>• Network policies</li>
                <li>• Secrets management</li>
                <li>• Compliance auditing</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Managed Kubernetes</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Fully managed Kubernetes services with 24/7 support and automated operations.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• EKS, AKS, GKE management</li>
                <li>• Automated updates</li>
                <li>• 24/7 monitoring</li>
                <li>• Expert support</li>
              </ul>
            </div>
          </div>

          <div className="windows-card p-12 md:p-16 bg-gradient-to-br from-windows-dark-accent/20 to-windows-dark-accent/5 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Deploy with Kubernetes?</h2>
            <p className="text-windows-dark-text-secondary mb-10 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Get started with our Kubernetes solutions for scalable, reliable container orchestration.
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

