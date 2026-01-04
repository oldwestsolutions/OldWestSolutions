'use client'

export default function Hero() {
  return (
    <section id="home" className="relative py-12 md:py-20 min-h-[600px] md:min-h-[700px] overflow-hidden bg-windows-dark-bg">
      {/* Technical Galaxy Background - Gray theme to match site */}
      <div className="absolute inset-0 bg-gradient-to-b from-windows-dark-bg via-windows-dark-surface/50 to-windows-dark-bg">
        {/* Deep space stars layer - gray/white */}
        <div className="absolute inset-0">
          {[...Array(200)].map((_, i) => {
            const size = Math.random() * 2 + 0.5
            const delay = Math.random() * 5
            return (
              <div
                key={i}
                className="absolute rounded-full bg-gray-300"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  opacity: Math.random() * 0.4 + 0.2,
                  animation: `twinkle ${Math.random() * 4 + 3}s infinite`,
                  animationDelay: `${delay}s`,
                  boxShadow: `0 0 ${size * 2}px rgba(224, 224, 224, 0.6)`,
                }}
              />
            )
          })}
        </div>
        
        {/* Bright stars layer - gray tones */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => {
            const size = Math.random() * 3 + 2
            return (
              <div
                key={`bright-${i}`}
                className="absolute rounded-full bg-gray-200"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  opacity: Math.random() * 0.3 + 0.3,
                  animation: `pulse ${Math.random() * 3 + 2}s infinite`,
                  boxShadow: `0 0 ${size * 3}px rgba(224, 224, 224, 0.5), 0 0 ${size * 6}px rgba(224, 224, 224, 0.2)`,
                }}
              />
            )
          })}
        </div>
        
        {/* Galaxy nebula clouds - gray tones */}
        <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-gradient-radial from-gray-600/10 via-gray-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[700px] h-[500px] bg-gradient-radial from-gray-600/10 via-gray-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[400px] bg-gradient-radial from-gray-500/8 via-gray-400/3 to-transparent rounded-full blur-3xl"></div>
        
        {/* Technical grid overlay - gray */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(224, 224, 224, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(224, 224, 224, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        ></div>
        
        {/* Light rays - gray */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gray-400/10 to-transparent"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-gray-400/10 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 h-full flex items-center">
        <div className="w-full text-left pt-24 md:pt-32 lg:pt-40">
          <div className="flex flex-col justify-center items-start max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Enterprise IT Solutions
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-windows-dark-text-secondary mb-6 md:mb-8 leading-relaxed">
              Empowering your business with cutting-edge technology and reliable IT services
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-10">
              <button className="windows-button windows-button-primary text-base md:text-lg px-6 md:px-8 py-2 md:py-3">
                Get Started
              </button>
              <button className="windows-button text-base md:text-lg px-6 md:px-8 py-2 md:py-3">
                Learn More
              </button>
            </div>
            <div className="windows-card p-6 md:p-8 bg-transparent/60 border border-windows-dark-border/30 backdrop-blur-sm">
              <h3 className="text-lg md:text-xl font-semibold text-windows-dark-accent mb-4 uppercase tracking-wide text-white">
                Featured Applications
              </h3>
              <ul className="space-y-2 text-sm md:text-base text-windows-dark-text-secondary">
                <li>• Consequence — AI-powered music creation</li>
                <li>• PayPhone — Neural network song lyrics generator</li>
                <li>• Wintergarden — Music performance platform</li>
                <li>• EtherBonds — Educational decentralized systems</li>
                <li>• Lubbock.Cloud — Energy optimization platform</li>
                <li>• Deadwood.Software — Supply-chain optimization</li>
                <li>• OldWest — Freelancer collaboration platform</li>
                <li>• AutoEquityGroup — Vehicle equity management</li>
                <li>• HatedByMany — UGC image editing platform</li>
                <li>• Pressbox — News integration SaaS</li>
                <li>• Moneybagg — Customizable link hub</li>
                <li>• And more...</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { 
            opacity: 0.2;
            transform: scale(1);
          }
          50% { 
            opacity: 1;
            transform: scale(1.2);
          }
        }
        
        @keyframes pulse {
          0%, 100% { 
            opacity: 0.5;
            transform: scale(1);
          }
          50% { 
            opacity: 1;
            transform: scale(1.3);
          }
        }
      `}</style>
    </section>
  )
}

