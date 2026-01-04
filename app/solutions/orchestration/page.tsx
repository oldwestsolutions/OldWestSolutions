import type { Metadata } from 'next'
import Header from '@/components/Header'
import Link from 'next/link'
import { 
  Network, 
  Cpu, 
  Settings, 
  Zap, 
  Layers,
  Workflow,
  CheckCircle2,
  ArrowRight
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Old West Solutions',
  description: 'Orchestration services coordinating infrastructure, applications, and AI workloads into a unified, reliable system. Automated deployment, scaling, and management.',
  keywords: 'orchestration, infrastructure orchestration, application orchestration, Kubernetes orchestration, AI workload orchestration, CI/CD, automation',
  alternates: {
    canonical: '/solutions/orchestration',
  },
  openGraph: {
    title: 'Orchestration - Old West Solutions',
    description: 'Coordinating infrastructure, applications, and AI workloads into a unified, reliable system.',
    url: 'https://oldwestsolutions.com/solutions/orchestration',
    type: 'website',
  },
}

const coreComponents = [
  {
    title: 'Application Delivery',
    description: 'CI/CD pipelines, automated testing, and production deployment.',
    icon: Zap,
  },
  {
    title: 'Infrastructure & Compute',
    description: 'VMs, containers, GPUs (CoreWeave), and other resources.',
    icon: Cpu,
  },
  {
    title: 'Kubernetes Workloads',
    description: 'Clusters, namespaces, and service orchestration.',
    icon: Settings,
  },
  {
    title: 'AI / LLM Workloads',
    description: 'Scheduling, model promotion, and GPU resource management.',
    icon: Network,
  },
  {
    title: 'System Integration',
    description: 'APIs, services, and pipelines coordinated into workflows.',
    icon: Workflow,
  },
]

const benefits = [
  {
    title: 'Eliminates Manual Intervention',
    description: 'Reduces errors and human oversight requirements through automated coordination.',
  },
  {
    title: 'Improves Reliability',
    description: 'Enhances uptime, predictability, and system stability across all environments.',
  },
  {
    title: 'Enables Controlled Scaling',
    description: 'Allows for predictable system growth and resource management.',
  },
  {
    title: 'Unified Coordination',
    description: 'Provides a single layer of coordination across multiple services and platforms.',
  },
]

const targetAudience = [
  'Run multiple environments (dev, staging, prod)',
  'Deploy AI or GPU-heavy workloads',
  'Need repeatable, reliable deployment processes',
  'Require unified system management across multiple platforms',
]

export default function OrchestrationPage() {
  return (
    <main className="min-h-screen bg-windows-dark-bg">
      <Header />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/solutions" className="text-windows-dark-accent hover:text-windows-dark-accent-hover mb-8 inline-block">
            ← Back to Solutions
          </Link>
        </div>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="windows-card p-12 md:p-16 bg-gradient-to-br from-windows-dark-accent/30 via-windows-dark-accent/20 to-windows-dark-accent/10 text-center mb-12 md:mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-6 bg-windows-dark-accent/20 rounded-full">
                <Layers className="w-16 h-16 md:w-20 md:h-20 text-windows-dark-accent" strokeWidth={1.5} />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6">Orchestration</h1>
            <p className="text-xl md:text-2xl text-windows-dark-text-secondary max-w-3xl mx-auto">
              Coordinating infrastructure, applications, and AI workloads into a unified, reliable system.
            </p>
            
            {/* Visual Diagram */}
            <div className="mt-8 md:mt-12 flex flex-wrap justify-center items-center gap-4 md:gap-6">
              <div className="windows-card p-4 bg-windows-dark-surface/50">
                <Cpu className="w-8 h-8 text-windows-dark-accent mx-auto mb-2" />
                <span className="text-xs text-windows-dark-text-secondary">VMs</span>
              </div>
              <ArrowRight className="w-6 h-6 text-windows-dark-accent hidden md:block" />
              <div className="windows-card p-4 bg-windows-dark-surface/50">
                <Settings className="w-8 h-8 text-windows-dark-accent mx-auto mb-2" />
                <span className="text-xs text-windows-dark-text-secondary">Kubernetes</span>
              </div>
              <ArrowRight className="w-6 h-6 text-windows-dark-accent hidden md:block" />
              <div className="windows-card p-4 bg-windows-dark-surface/50">
                <Network className="w-8 h-8 text-windows-dark-accent mx-auto mb-2" />
                <span className="text-xs text-windows-dark-text-secondary">AI</span>
              </div>
              <ArrowRight className="w-6 h-6 text-windows-dark-accent hidden md:block" />
              <div className="windows-card p-4 bg-windows-dark-accent/30 border-2 border-windows-dark-accent">
                <Layers className="w-8 h-8 text-windows-dark-accent mx-auto mb-2" />
                <span className="text-xs text-white font-semibold">Unified System</span>
              </div>
            </div>
          </div>

          {/* What Orchestration Is */}
          <div className="windows-card p-8 md:p-12 mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">What Orchestration Is</h2>
            <div className="space-y-4 text-windows-dark-text-secondary text-base md:text-lg leading-relaxed">
              <p>
                Orchestration coordinates systems rather than operating them in isolation. It ensures automation, 
                scalability, and reliability across your entire technology stack.
              </p>
              <p>
                At its core, orchestration is about control and predictability of deployments. It provides a unified 
                approach to managing complex systems, eliminating the need for manual intervention and reducing the 
                risk of errors.
              </p>
            </div>
          </div>

          {/* Core Components */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 md:mb-12 text-center">What We Orchestrate</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {coreComponents.map((component, index) => {
                const IconComponent = component.icon
                return (
                  <div key={index} className="windows-card p-6 md:p-8 hover:border-windows-dark-accent transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-windows-dark-accent/10 rounded-lg">
                        <IconComponent className="w-8 h-8 text-windows-dark-accent" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold text-white">{component.title}</h3>
                    </div>
                    <p className="text-windows-dark-text-secondary text-sm md:text-base leading-relaxed">
                      {component.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Benefits */}
          <div className="windows-card p-8 md:p-12 mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8">Why Orchestration Matters</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-windows-dark-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-windows-dark-text-secondary text-sm md:text-base leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How Orchestration Fits With Other Services */}
          <div className="windows-card p-8 md:p-12 mb-12 md:mb-16 bg-gradient-to-br from-windows-dark-surface to-windows-dark-bg">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">How Orchestration Fits With Other Services</h2>
            <div className="space-y-4 text-windows-dark-text-secondary text-base md:text-lg leading-relaxed">
              <p>
                Orchestration serves as the glue between DevOps, Kubernetes, applications, and AI workloads. 
                It's not a standalone product but enhances all other services by providing unified coordination 
                and management.
              </p>
              <p>
                Think of orchestration as the control layer that connects everything: your CI/CD pipelines 
                flow into Kubernetes clusters, which manage your AI workloads and compute resources, all 
                coordinated through a single orchestration system.
              </p>
            </div>
            
            {/* Flow Diagram */}
            <div className="mt-8 md:mt-12 p-6 md:p-8 bg-windows-dark-bg rounded-lg">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
                <div className="text-center">
                  <Zap className="w-10 h-10 text-windows-dark-accent mx-auto mb-2" />
                  <p className="text-sm text-windows-dark-text-secondary">DevOps / CI/CD</p>
                </div>
                <ArrowRight className="w-6 h-6 text-windows-dark-accent rotate-90 md:rotate-0" />
                <div className="text-center">
                  <Settings className="w-10 h-10 text-windows-dark-accent mx-auto mb-2" />
                  <p className="text-sm text-windows-dark-text-secondary">Kubernetes</p>
                </div>
                <ArrowRight className="w-6 h-6 text-windows-dark-accent rotate-90 md:rotate-0" />
                <div className="text-center">
                  <Network className="w-10 h-10 text-windows-dark-accent mx-auto mb-2" />
                  <p className="text-sm text-windows-dark-text-secondary">AI / Compute</p>
                </div>
                <ArrowRight className="w-6 h-6 text-windows-dark-accent rotate-90 md:rotate-0" />
                <div className="text-center">
                  <CheckCircle2 className="w-10 h-10 text-windows-dark-accent mx-auto mb-2" />
                  <p className="text-sm text-windows-dark-text-secondary">Production</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-windows-dark-accent/20 rounded-lg">
                  <Layers className="w-5 h-5 text-windows-dark-accent" />
                  <span className="text-sm text-white font-medium">Orchestration as the Control Layer</span>
                </div>
              </div>
            </div>
          </div>

          {/* Who It's For */}
          <div className="windows-card p-8 md:p-12 mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8">Who It's For</h2>
            <p className="text-windows-dark-text-secondary text-base md:text-lg mb-6 leading-relaxed">
              Orchestration is ideal for companies or teams that:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {targetAudience.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-windows-dark-accent flex-shrink-0 mt-1" />
                  <span className="text-windows-dark-text-secondary text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="windows-card p-12 md:p-16 bg-gradient-to-br from-windows-dark-accent/20 to-windows-dark-accent/5 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Orchestrate Your Systems?</h2>
            <p className="text-windows-dark-text-secondary mb-10 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Let's discuss how orchestration can unify your infrastructure, applications, and AI workloads 
              into a reliable, automated system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#shop" className="windows-button windows-button-primary text-lg md:text-xl px-10 py-4">
                Contact Us
              </a>
              <a href="/solutions" className="windows-button text-lg md:text-xl px-10 py-4">
                View All Solutions
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

