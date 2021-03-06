/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

export default function Floor4({ ...props }) {
  const group = useRef()
  const bakedTexture = useTexture('/textures/floor4.png')
  const { nodes, materials } = useGLTF('/models/floor4.glb')
  return (
    <group ref={group} {...props} dispose={null} scale={[10,10,10]}>
      <mesh geometry={nodes.Floor4_Scene.geometry} >
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
      {/* <mesh geometry={nodes.Floor4_Windows.geometry} material={nodes.Floor4_Windows.material} />
      <mesh geometry={nodes.Floor4_Clickable_Drums.geometry} material={nodes.Floor4_Clickable_Drums.material} />
      <mesh geometry={nodes.Floor4_Clickable_Desk.geometry} material={nodes.Floor4_Clickable_Desk.material} />
      <mesh geometry={nodes.Floor4_Clickable_Nook.geometry} material={nodes.Floor4_Clickable_Nook.material} /> */}
      <mesh geometry={nodes.Floor4_Black.geometry} material={nodes.Floor4_Black.material} />
      {/* <mesh geometry={nodes.Floor4_Clickable_Down.geometry} material={nodes.Floor4_Clickable_Down.material} /> */}
      {/* <mesh geometry={nodes.Floor4_Clickable_Up.geometry} material={nodes.Floor4_Clickable_Up.material} /> */}
    </group>
  )
}

useGLTF.preload('/models/floor4.glb')
