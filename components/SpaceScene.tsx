'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, Stars } from '@react-three/drei'
import * as THREE from 'three'

export default function SpaceScene() {
  const earthRef = useRef<THREE.Mesh>(null)
  const planetRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.1
    }
    if (planetRef.current) {
      planetRef.current.rotation.y += delta * 0.3
    }
  })

  return (
    <>
      {/* Stars background */}
      <Stars radius={300} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      {/* Ambient lighting for space */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
      <pointLight position={[-10, 10, -5]} intensity={0.8} color="#4A90E2" />
      <pointLight position={[10, -10, 5]} intensity={0.6} color="#7B68EE" />
      
      {/* Earth in background */}
      <Sphere ref={earthRef} args={[1.2, 64, 64]} position={[-3, 1, -5]} scale={1.5}>
        <meshStandardMaterial
          color="#4A90E2"
          roughness={0.8}
          metalness={0.2}
          emissive="#1E3A8A"
          emissiveIntensity={0.2}
        />
      </Sphere>
      
      {/* Main planet in foreground */}
      <Sphere ref={planetRef} args={[1, 64, 64]} position={[2, 0, 0]} scale={2.5}>
        <meshStandardMaterial
          color="#4A90E2"
          roughness={0.3}
          metalness={0.7}
          emissive="#1E3A8A"
          emissiveIntensity={0.4}
        />
      </Sphere>
      
      {/* Orbital rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.8, 3.2, 64]} />
        <meshBasicMaterial color="#4A90E2" opacity={0.3} transparent side={THREE.DoubleSide} />
      </mesh>
      
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[3.5, 3.7, 64]} />
        <meshBasicMaterial color="#7B68EE" opacity={0.2} transparent side={THREE.DoubleSide} />
      </mesh>
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  )
}

