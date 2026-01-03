'use client'

import { Canvas } from '@react-three/fiber'
import Planet from './Planet'

export default function Hero() {
  return (
    <section id="home" className="relative py-12 md:py-20 min-h-[500px] md:min-h-[600px] overflow-hidden">
      {/* Galaxy Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-blue-900/20 to-indigo-900/30">
        {/* Stars */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                opacity: Math.random() * 0.8 + 0.2,
                animation: `twinkle ${Math.random() * 3 + 2}s infinite`,
              }}
            />
          ))}
        </div>
        {/* Nebula effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
              Enterprise IT Solutions
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-windows-dark-text-secondary mb-6 md:mb-8">
              Empowering your business with cutting-edge technology and reliable IT services
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <button className="windows-button windows-button-primary text-base md:text-lg px-6 md:px-8 py-2 md:py-3">
                Get Started
              </button>
              <button className="windows-button text-base md:text-lg px-6 md:px-8 py-2 md:py-3">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="h-[300px] sm:h-[400px] md:h-[500px] w-full order-1 lg:order-2">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
              <Planet />
            </Canvas>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  )
}

