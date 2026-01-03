'use client'

import { Canvas } from '@react-three/fiber'
import SpaceScene from './SpaceScene'

export default function Hero() {
  return (
    <section id="home" className="relative py-12 md:py-20 min-h-[600px] md:min-h-[700px] overflow-hidden">
      {/* Technical Galaxy Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/80 to-black">
        {/* Deep space stars layer */}
        <div className="absolute inset-0">
          {[...Array(200)].map((_, i) => {
            const size = Math.random() * 2 + 0.5
            const delay = Math.random() * 5
            return (
              <div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  opacity: Math.random() * 0.6 + 0.2,
                  animation: `twinkle ${Math.random() * 4 + 3}s infinite`,
                  animationDelay: `${delay}s`,
                  boxShadow: `0 0 ${size * 2}px rgba(255, 255, 255, 0.8)`,
                }}
              />
            )
          })}
        </div>
        
        {/* Bright stars layer */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => {
            const size = Math.random() * 3 + 2
            return (
              <div
                key={`bright-${i}`}
                className="absolute rounded-full bg-blue-200"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  opacity: Math.random() * 0.5 + 0.5,
                  animation: `pulse ${Math.random() * 3 + 2}s infinite`,
                  boxShadow: `0 0 ${size * 3}px rgba(74, 144, 226, 0.8), 0 0 ${size * 6}px rgba(74, 144, 226, 0.4)`,
                }}
              />
            )
          })}
        </div>
        
        {/* Galaxy nebula clouds */}
        <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-gradient-radial from-blue-500/15 via-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[700px] h-[500px] bg-gradient-radial from-purple-500/15 via-blue-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[400px] bg-gradient-radial from-cyan-500/10 via-blue-500/5 to-transparent rounded-full blur-3xl"></div>
        
        {/* Technical grid overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(74, 144, 226, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(74, 144, 226, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        ></div>
        
        {/* Light rays */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400/20 to-transparent"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-indigo-400/20 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Enterprise IT Solutions
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-windows-dark-text-secondary mb-6 md:mb-8 leading-relaxed">
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
          
          <div className="h-[400px] sm:h-[500px] md:h-[600px] w-full order-1 lg:order-2 relative">
            <Canvas camera={{ position: [0, 0, 8], fov: 60 }} className="rounded-lg">
              <SpaceScene />
            </Canvas>
            {/* Technical overlay on canvas */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-4 right-4 text-xs text-blue-300/50 font-mono">ORBIT: ACTIVE</div>
              <div className="absolute bottom-4 left-4 text-xs text-blue-300/50 font-mono">ALT: 400KM</div>
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

