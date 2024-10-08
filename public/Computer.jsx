/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 Computer.gltf 
Author: Cinnamine3D (https://sketchfab.com/LordCinn)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/pixel-pot-0d94fa80e87e49e2b0747d1252b9e3bd
Title: PIXEL POT
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/Computer.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.b001_Material005_0.geometry} material={materials['Material.005']} position={[1.435, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/Computer.gltf')
