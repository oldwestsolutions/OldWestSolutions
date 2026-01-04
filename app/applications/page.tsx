import Header from '@/components/Header'
import Link from 'next/link'

const applications = [
  {
    name: 'Wintergarden',
    description: 'A music learning site that helps users master musical instruments through interactive lessons and personalized learning paths.',
    icon: '🎵',
    features: [
      'Interactive music lessons',
      'Personalized learning paths',
      'Progress tracking',
      'Multiple instrument support',
    ],
  },
  {
    name: 'moneyba.gg',
    description: 'A link embedded website platform that enables seamless content sharing and link management for businesses and creators.',
    icon: '🔗',
    features: [
      'Link embedding and management',
      'Content sharing platform',
      'Analytics and tracking',
      'Custom branding options',
    ],
  },
  {
    name: 'Pressbox',
    description: 'A new SaaS platform designed to streamline content management and publishing workflows for modern teams.',
    icon: '📦',
    features: [
      'Content management system',
      'Publishing workflows',
      'Team collaboration',
      'Version control',
    ],
  },
  {
    name: 'Consequence',
    description: 'An AI-powered music creation tool that leverages machine learning to help producers generate original compositions, optimize their workflow, and explore new sonic possibilities.',
    icon: '🎹',
    features: [
      'AI-powered composition',
      'Machine learning integration',
      'Workflow optimization',
      'Sonic exploration tools',
    ],
  },
  {
    name: 'PayPhone',
    description: 'A neural network dedicated to generating song lyrics. Leveraging advanced sequence models and LLMs to produce context-aware, coherent, and adaptable lyrics across musical genres.',
    icon: '📞',
    features: [
      'Neural network lyrics generation',
      'Advanced sequence models',
      'Context-aware output',
      'Multi-genre support',
    ],
  },
]

export default function ApplicationsPage() {
  return (
    <main className="min-h-screen bg-windows-dark-bg">
      <Header />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/#home" className="text-windows-dark-accent hover:text-windows-dark-accent-hover mb-8 inline-block">
            ← Back to Home
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="mb-12 md:mb-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Applications</h1>
            <p className="text-lg md:text-xl text-windows-dark-text-secondary max-w-3xl mx-auto">
              Discover the innovative applications we've built to solve real-world problems and enhance user experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {applications.map((app, index) => (
              <div
                key={index}
                className="windows-card p-6 md:p-8 hover:border-windows-dark-accent transition-all group"
              >
                <div className="text-5xl md:text-6xl mb-4">{app.icon}</div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{app.name}</h2>
                <p className="text-windows-dark-text-secondary mb-6 leading-relaxed">
                  {app.description}
                </p>
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-windows-dark-accent uppercase tracking-wide mb-3">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {app.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <span className="text-windows-dark-accent mr-2">→</span>
                        <span className="text-windows-dark-text-secondary text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

