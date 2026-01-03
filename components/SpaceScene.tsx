'use client'

import { Stars } from '@react-three/drei'

export default function SpaceScene() {
  return (
    <>
      {/* Stars background - gray/white stars to match site theme */}
      <Stars radius={300} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </>
  )
}

