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
        
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 h-full flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center pt-16 md:pt-20 lg:pt-24">
          {/* Left Column - Main Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Enterprise IT Solutions
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-windows-dark-text-secondary mb-6 md:mb-8 leading-relaxed">
              Empowering your business with cutting-edge technology and reliable IT services
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a href="/shop" className="windows-button windows-button-primary text-base md:text-lg px-6 md:px-8 py-2 md:py-3 text-center">
                Explore Products
              </a>
              <a href="/solutions" className="windows-button text-base md:text-lg px-6 md:px-8 py-2 md:py-3 text-center">
                View Solutions
              </a>
            </div>
          </div>

          {/* Right Column - Quick Links */}
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <a href="/solutions/orchestration" className="windows-card p-4 hover:border-windows-dark-accent transition-all duration-300 group">
              <div className="text-windows-dark-accent text-sm font-medium mb-1">Orchestration</div>
              <div className="text-xs text-windows-dark-text-secondary group-hover:text-white transition-colors">
                Unified system coordination →
              </div>
            </a>
            <a href="/solutions/dev-ops-ci-cd" className="windows-card p-4 hover:border-windows-dark-accent transition-all duration-300 group">
              <div className="text-windows-dark-accent text-sm font-medium mb-1">DevOps CI/CD</div>
              <div className="text-xs text-windows-dark-text-secondary group-hover:text-white transition-colors">
                Automated workflows →
              </div>
            </a>
            <a href="/shop/managed-servers" className="windows-card p-4 hover:border-windows-dark-accent transition-all duration-300 group">
              <div className="text-windows-dark-accent text-sm font-medium mb-1">Managed Servers</div>
              <div className="text-xs text-windows-dark-text-secondary group-hover:text-white transition-colors">
                24/7 monitoring →
              </div>
            </a>
            <a href="/solutions/kubernetes" className="windows-card p-4 hover:border-windows-dark-accent transition-all duration-300 group">
              <div className="text-windows-dark-accent text-sm font-medium mb-1">Kubernetes</div>
              <div className="text-xs text-windows-dark-text-secondary group-hover:text-white transition-colors">
                Container orchestration →
              </div>
            </a>
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

