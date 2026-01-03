'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere } from '@react-three/drei'
import * as THREE from 'three'

export default function Planet() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3
    }
  })

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <pointLight position={[-5, -5, -5]} intensity={0.8} color="#4A90E2" />
      <pointLight position={[5, 5, 5]} intensity={0.6} color="#7B68EE" />
      
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={2.5}>
        <meshStandardMaterial
          color="#4A90E2"
          roughness={0.3}
          metalness={0.7}
          emissive="#1E3A8A"
          emissiveIntensity={0.3}
        />
      </Sphere>
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.8}
      />
    </>
  )
}

