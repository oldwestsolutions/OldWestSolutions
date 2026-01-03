'use client'

import { Canvas } from '@react-three/fiber'
import Globe from './Globe'

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-b from-windows-dark-bg to-windows-dark-surface py-12 md:py-20 min-h-[500px] md:min-h-[600px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <Globe />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  )
}

