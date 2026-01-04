'use client'

const applications = [
  {
    name: 'Wintergarden',
    description: 'Music learning platform with interactive lessons and personalized paths.',
  },
  {
    name: 'moneyba.gg',
    description: 'Link embedded website for seamless content sharing and management.',
  },
  {
    name: 'Pressbox',
    description: 'SaaS platform for streamlined content management and publishing.',
  },
  {
    name: 'Consequence',
    description: 'AI-powered music creation tool for generating original compositions.',
  },
  {
    name: 'PayPhone',
    description: 'Neural network for generating context-aware song lyrics across genres.',
  },
]

export default function NewsTicker() {
  return (
    <div className="p-6 md:p-8 h-full flex flex-col bg-transparent/80 border border-windows-dark-border/30 backdrop-blur-md shadow-lg overflow-y-auto">
      <div className="mb-6">
        <h3 className="text-sm md:text-base font-semibold text-windows-dark-accent mb-2 uppercase tracking-wide text-white">
          Our Applications
        </h3>
        <div className="h-px bg-windows-dark-border/50 mb-6"></div>
      </div>
      
      <div className="flex flex-col gap-4">
        {applications.map((app, index) => (
          <div
            key={index}
            className="p-4 bg-transparent/60 border border-windows-dark-border/20 backdrop-blur-sm hover:border-windows-dark-accent/50 transition-all"
          >
            <h4 className="text-lg md:text-xl font-bold text-white mb-2 leading-tight">
              {app.name}
            </h4>
            <p className="text-sm md:text-base text-white leading-relaxed opacity-90">
              {app.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

