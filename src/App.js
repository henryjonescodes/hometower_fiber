import logo from './logo.svg';
// import './App.css';
import { createContext, Suspense, useContext, useEffect, useRef, useState } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import styled from 'styled-components';
import Floor2 from './components/GLTF/Floor2';
import Floor3 from './components/GLTF/Floor3';
import Floor4 from './components/GLTF/Floor4';
import Roof from './components/GLTF/Roof';
import ProgressBar from './components/ProgressBar/ProgressBar';
import { useSpring } from 'react-spring'
import * as THREE from "three";
import TWEEN from '@tweenjs/tween.js'


import {scenes, floors, sceneSettings} from './data/TowerSceneConfig'


const Container = styled.div`
  position: absolute ;
  margin: 0 0;
  height: 100vh;
  width: 100vw;
`

function App() {
  // const ControlsContext = createContext()
  const [Clicked, setClicked] = useState("")

  // const ControlsContainer = ({ children }) => {
  //   const controls = useRef()
  //   return (
  //     <ControlsContext.Provider value={{ controls: controls.current }}>
  //       <OrbitControls ref={controls}  target={[
  //                           floors.roof.targetx,
  //                           floors.roof.targety,
  //                           floors.roof.targetz ]}/>
  //       {children}
  //     </ControlsContext.Provider>
  //   )
  // }

  useEffect(() => {
    console.log(Clicked)
  }, [Clicked])

  // const UpdateCamera = () =>{
  //   const { controls } = useContext(ControlsContext)
  //   const { camera } = useThree()

  //   shiftCamera(floors.floor4, camera, controls, sceneSettings.animationDurations.moveFloor)
  // }
  

  // function Controls() {
  //   const { gl, camera } = useThree()

  //   useSpring({
  //     from: {
  //       z: 500
  //     },
  //     z: 2,
  //     onFrame: ({ z }) => {
  //       console.log(z)
  //       camera.position.z = z
  //     }
  //   })

  //   return <OrbitControls  
  //     target={[ 
  //       floors.roof.targetx, 
  //       floors.roof.targety, 
  //       floors.roof.targetz ]} 
  //     args={[
  //       camera, 
  //       gl.domElement]} />
  // }

  
  function shiftCamera(destination, cam, controls, duration){
    let time = {t:0};
    let currentTarget = {x: controls.target.x,y: controls.target.y,z: controls.target.z}
    new TWEEN.Tween(time)
        .to({t:1}, duration)
        .onStart(()=>{
            new TWEEN.Tween(cam.position)
                .to({
                    x: destination.cameraPositionX,
                    y: destination.cameraPositionY,
                    z: destination.cameraPositionZ
                }, duration)
                .onStart(() => {
                    new TWEEN.Tween(currentTarget)
                    .to({
                        x: destination.targetx,
                        y: destination.targety,
                        z: destination.targetz
                    }, duration)
                    .easing(TWEEN.Easing.Quadratic.InOut)
                    .onUpdate(()=>{
                        controls.target.set(currentTarget.x, currentTarget.y, currentTarget.z)
                    })
                    .start();
                })
                .easing(TWEEN.Easing.Quadratic.InOut)
                .start();
          
        })
        .easing(TWEEN.Easing.Quadratic.InOut)
        .start();
  }

  
  function Rig() {
    const { camera, mouse } = useThree()
    const vec = new THREE.Vector3()
    return useFrame(() => camera.position.lerp(vec.set(mouse.x * 2, mouse.y * 1 + 50, camera.position.z), 0.02))
  }
  
  return (
    <Container>
      <Suspense fallback={<ProgressBar/>}>
        <Canvas dpr={[1, 2]} camera={{ 
                                    fov: 45, 
                                    position: [
                                        floors.roof.cameraPositionX, 
                                        floors.roof.cameraPositionY, 
                                        floors.roof.cameraPositionZ ] }}>
          <Floor2 />
          <Floor3 />
          <Floor4 />
          <Roof onClick={(event) => setClicked("roof")}/>
          {/* <Rig/> */}
          {/* <ControlsContainer/> */}
          {/* <OrbitControls enabled = {true} target={[
                            floors.roof.targetx,
                            floors.roof.targety,
                            floors.roof.targetz ]} /> */}
        </Canvas>
      </Suspense>
    </Container>
  );
}

export default App;
