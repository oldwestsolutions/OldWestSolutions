'use client'

import { useState, useEffect } from 'react'

const articles = [
  {
    title: 'Orchestration: The Future of System Management',
    preview: 'Learn how orchestration coordinates infrastructure, applications, and AI workloads into a unified, reliable system. Discover how automated coordination eliminates manual intervention and improves system reliability.',
    href: '/solutions/orchestration',
    category: 'Solutions',
    readTime: '5 min read',
  },
  {
    title: 'DevOps CI/CD: Streamlining Your Development Pipeline',
    preview: 'Automate your development workflows with our comprehensive CI/CD solutions. From code commit to production deployment, streamline your entire development process with automated testing and deployment pipelines.',
    href: '/solutions/dev-ops-ci-cd',
    category: 'Solutions',
    readTime: '4 min read',
  },
  {
    title: 'Managed Servers: 24/7 Monitoring and Support',
    preview: 'Experience peace of mind with our fully managed server solutions. Get enterprise-grade security, automated backups, and round-the-clock monitoring to ensure your infrastructure runs smoothly.',
    href: '/shop/managed-servers',
    category: 'Products',
    readTime: '3 min read',
  },
  {
    title: 'Kubernetes: Container Orchestration at Scale',
    preview: 'Deploy and manage containerized applications with confidence. Our Kubernetes solutions provide automated scaling, self-healing capabilities, and seamless integration with your existing infrastructure.',
    href: '/solutions/kubernetes',
    category: 'Solutions',
    readTime: '6 min read',
  },
]

const TRANSITION_DURATION = 5000 // 5 seconds per article

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length)
      setProgress(0)
    }, TRANSITION_DURATION)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0
        }
        return prev + (100 / (TRANSITION_DURATION / 100)) // Update every 100ms
      })
    }, 100)

    return () => clearInterval(progressInterval)
  }, [currentIndex])

  return (
    <section id="home" className="relative py-12 md:py-20 min-h-[600px] md:min-h-[700px] overflow-hidden bg-windows-dark-bg">
      {/* Technical Galaxy Background - Gray theme to match site */}
      <div className="absolute inset-0 bg-gradient-to-b from-windows-dark-bg via-windows-dark-surface/50 to-windows-dark-bg">
        {/* Deep space stars layer - gray/white */}
        <div className="absolute inset-0">
          {[...Array(200)].map((_, i) => {
            const size = Math.random() * 2 + 0.5
            const delay = Math.random() * 10
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
                  animation: `twinkle ${Math.random() * 8 + 6}s infinite`,
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
                  animation: `pulse ${Math.random() * 6 + 4}s infinite`,
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

          {/* Right Column - News Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-lg h-[400px] md:h-[500px]">
              <div 
                className="flex flex-col transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateY(-${currentIndex * 100}%)` }}
              >
                {articles.map((article, index) => (
                  <a
                    key={index}
                    href={article.href}
                    className="windows-card p-6 md:p-8 hover:border-windows-dark-accent transition-all duration-300 group h-full flex-shrink-0 cursor-pointer flex flex-col"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-windows-dark-accent/20 text-windows-dark-accent text-xs font-medium rounded">
                        {article.category}
                      </span>
                      <span className="text-xs text-windows-dark-text-secondary">{article.readTime}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-windows-dark-accent transition-colors leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-sm md:text-base text-windows-dark-text-secondary leading-relaxed mb-6 flex-grow">
                      {article.preview}
                    </p>
                    <div className="flex items-center gap-2 text-windows-dark-accent text-sm font-medium group-hover:gap-3 transition-all">
                      Read more
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="mt-4 mb-3">
              <div className="h-1 bg-windows-dark-surface rounded-full overflow-hidden">
                <div 
                  className="h-full bg-windows-dark-accent transition-all duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2">
              {articles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setProgress(0)
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-windows-dark-accent w-8'
                      : 'bg-windows-dark-text-secondary w-2 hover:bg-windows-dark-accent/50'
                  }`}
                  aria-label={`Go to article ${index + 1}`}
                />
              ))}
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
            opacity: 0.8;
            transform: scale(1.1);
          }
        }
        
        @keyframes pulse {
          0%, 100% { 
            opacity: 0.4;
            transform: scale(1);
          }
          50% { 
            opacity: 0.7;
            transform: scale(1.15);
          }
        }
      `}</style>
    </section>
  )
}

