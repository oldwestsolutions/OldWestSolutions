'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, Stars } from '@react-three/drei'
import * as THREE from 'three'

export default function SpaceScene() {
  const moonRef = useRef<THREE.Mesh>(null)
  const crater1Ref = useRef<THREE.Mesh>(null)
  const crater2Ref = useRef<THREE.Mesh>(null)
  const crater3Ref = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    // Slow, smooth moon rotation
    if (moonRef.current) {
      moonRef.current.rotation.y += delta * 0.05
    }
    // Subtle crater rotations for depth
    if (crater1Ref.current) {
      crater1Ref.current.rotation.y += delta * 0.03
    }
    if (crater2Ref.current) {
      crater2Ref.current.rotation.y -= delta * 0.04
    }
    if (crater3Ref.current) {
      crater3Ref.current.rotation.y += delta * 0.02
    }
  })

  return (
    <>
      {/* Stars background - gray/white stars to match site theme */}
      <Stars radius={300} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      {/* Moon lighting - subtle and consistent with dark theme */}
      <ambientLight intensity={0.25} />
      <directionalLight position={[8, 6, 5]} intensity={0.6} color="#E0E0E0" />
      <directionalLight position={[-5, 4, -3]} intensity={0.3} color="#B0B0B0" />
      <pointLight position={[5, 5, 5]} intensity={0.4} color="#E0E0E0" />
      
      {/* 3D Moon with detailed surface */}
      <group position={[0, 0, 0]}>
        {/* Main moon sphere - high detail for smooth surface */}
        <Sphere ref={moonRef} args={[1, 128, 128]} scale={2.5}>
          <meshStandardMaterial
            color="#2D2D2D"
            roughness={0.9}
            metalness={0.1}
            emissive="#1A1A1A"
            emissiveIntensity={0.05}
          />
        </Sphere>
        
        {/* Surface texture layer - moon-like variations */}
        <Sphere args={[1.002, 128, 128]} scale={2.5}>
          <meshStandardMaterial
            color="#3D3D3D"
            roughness={0.95}
            metalness={0.05}
            transparent
            opacity={0.5}
          />
        </Sphere>
        
        {/* Darker surface patches - lunar maria effect */}
        <Sphere args={[1.001, 128, 128]} scale={2.5}>
          <meshStandardMaterial
            color="#1A1A1A"
            roughness={0.98}
            metalness={0.02}
            transparent
            opacity={0.4}
          />
        </Sphere>
        
        {/* Crater 1 - large impact crater */}
        <Sphere ref={crater1Ref} args={[0.15, 32, 32]} position={[0.8, 0.5, 0.6]} scale={2.5}>
          <meshStandardMaterial
            color="#1A1A1A"
            roughness={0.98}
            metalness={0.0}
            transparent
            opacity={0.7}
          />
        </Sphere>
        
        {/* Crater 2 - medium impact crater */}
        <Sphere ref={crater2Ref} args={[0.1, 32, 32]} position={[-0.6, -0.4, 0.7]} scale={2.5}>
          <meshStandardMaterial
            color="#151515"
            roughness={0.99}
            metalness={0.0}
            transparent
            opacity={0.6}
          />
        </Sphere>
        
        {/* Crater 3 - small impact crater */}
        <Sphere ref={crater3Ref} args={[0.08, 32, 32]} position={[0.3, -0.7, -0.5]} scale={2.5}>
          <meshStandardMaterial
            color="#1A1A1A"
            roughness={0.98}
            metalness={0.0}
            transparent
            opacity={0.5}
          />
        </Sphere>
        
        {/* Additional small craters for detail */}
        <Sphere args={[0.06, 24, 24]} position={[-0.4, 0.8, -0.3]} scale={2.5}>
          <meshStandardMaterial
            color="#151515"
            roughness={0.99}
            metalness={0.0}
            transparent
            opacity={0.4}
          />
        </Sphere>
        
        <Sphere args={[0.05, 24, 24]} position={[0.5, 0.2, -0.8]} scale={2.5}>
          <meshStandardMaterial
            color="#1A1A1A"
            roughness={0.98}
            metalness={0.0}
            transparent
            opacity={0.4}
          />
        </Sphere>
        
        {/* Subtle highlight on moon surface */}
        <Sphere args={[1.003, 128, 128]} scale={2.5}>
          <meshStandardMaterial
            color="#4D4D4D"
            roughness={0.85}
            metalness={0.15}
            transparent
            opacity={0.2}
          />
        </Sphere>
      </group>
      
      {/* Slow auto-rotate for viewing */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.1}
      />
    </>
  )
}

