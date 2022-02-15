import { useEffect, useState, useMemo} from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import CameraControls from 'camera-controls'
import * as THREE from 'three'


CameraControls.install({ THREE })

// const useCodes = () => {
//     const codes = useRef(new Set())
//     useEffect(() => {
//       const onKeyDown = (e) => codes.current.add(e.code)
//       const onKeyUp = (e) => codes.current.delete(e.code)
//       window.addEventListener('keydown', onKeyDown)
//       window.addEventListener('keyup', onKeyUp)
//       return () => {
//         window.removeEventListener('keydown', onKeyDown)
//         window.removeEventListener('keyup', onKeyUp)
//       }
//     }, [])
//     return codes
// }

function updateCamera(state, camera, controls, destination){
    camera.position.lerp( new THREE.Vector3(
        destination.cameraPositionX,
        destination.cameraPositionY,
        destination.cameraPositionZ
    ), 0.2)
    controls.setLookAt(
        state.camera.position.x, 
        state.camera.position.y, 
        state.camera.position.z, 
        destination.targetx, 
        destination.targety, 
        destination.targetz, 
        true)
}
  
export default function TargetControls({Target, AutoRotate}) {
    const { camera, gl } = useThree()
    // const code = useCodes()
    const controls = useMemo(() => new CameraControls(camera, gl.domElement), [camera, gl.domElement])
    const [DoneMoving, setDoneMoving] = useState(false)

    controls.addEventListener( 'rest', () => {

        setDoneMoving(true)
    
    } );
    controls.dampingFactor = 0.1
    controls.enabled = false

    useEffect(() => {
      console.log(Target)
      setDoneMoving(false)
    }, [Target])
    

    useFrame((state, delta) => {
        if(!DoneMoving){
            updateCamera(state, camera,controls,Target)
        } else if(AutoRotate){
            controls.azimuthAngle += 5 * delta * THREE.MathUtils.DEG2RAD;
        }
        return controls.update(delta)
    })
    return null
}