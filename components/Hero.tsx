'use client'

import { Canvas } from '@react-three/fiber'
import Globe from './Globe'

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-b from-windows-dark-bg to-windows-dark-surface py-20 min-h-[600px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Enterprise IT Solutions
            </h1>
            <p className="text-xl md:text-2xl text-windows-dark-text-secondary mb-8">
              Empowering your business with cutting-edge technology and reliable IT services
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="windows-button windows-button-primary text-lg px-8 py-3">
                Get Started
              </button>
              <button className="windows-button text-lg px-8 py-3">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="h-[500px] w-full">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
              <Globe />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  )
}

