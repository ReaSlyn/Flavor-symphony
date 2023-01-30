import React from 'react'
import * as THREE from 'three'

import { useLoader } from '@react-three/fiber'
import img from './Recipe1.png'


export default function RecetteCard(props) {
    const texture = useLoader(THREE.TextureLoader, img)
  return (
    
<mesh position={ [ -props.x, 9, -3 ] }>
<planeGeometry attach="geometry" args={[3, 3]} />
<meshPhongMaterial attach="material" map={texture} />
</mesh>
  )
}


