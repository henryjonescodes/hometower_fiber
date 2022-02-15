import {Suspense, useState } from 'react'
import { Canvas} from '@react-three/fiber'
import styled from 'styled-components';
import Floor2 from './components/GLTF/Floor2';
import Floor3 from './components/GLTF/Floor3';
import Floor4 from './components/GLTF/Floor4';
import Roof from './components/GLTF/Roof';
import ProgressBar from './components/ProgressBar/ProgressBar';

import {floors, scenes} from './data/TowerSceneConfig'
import TargetControls from './components/TargetControls';

const Container = styled.div`
  position: absolute ;
  margin: 0 0;
  height: 100vh;
  width: 100vw;
`

function LookUpTarget(event){
  switch(event.object.name){
    case "Floor4_Clickable_Drums":
        return scenes.Floor4_Clickable_Drums
        break
    case "Floor4_Clickable_Nook":
        return scenes.Floor4_Clickable_Nook
        break
    case "Floor4_Clickable_Desk":
        return scenes.Floor4_Clickable_Desk
        break
    case "Floor3_Clickable_Home":
        return scenes.Floor3_Clickable_Home
        break
    case "Floor3_Clickable_Acomplices":
        return scenes.Floor3_Clickable_Acomplices
        break
    case "Floor3_Clickable_MixedMessages":
        return scenes.Floor3_Clickable_MixedMessages
        break
    case "Floor3_Clickable_HiddenWorlds":
        return scenes.Floor3_Clickable_HiddenWorlds
        break
    case "Floor3_Clickable_WorldsEdge":
        return scenes.Floor3_Clickable_WorldsEdge
        break
    case "Floor3_Clickable_Graduation":
        return scenes.Floor3_Clickable_Graduation
        break
    case "Floor3_Clickable_Lombard":
        return scenes.Floor3_Clickable_Lombard
        break
    case "Floor3_Clickable_BlueHaze":
        return scenes.Floor3_Clickable_BlueHaze
        break
    case "Floor2_Clickable_BugLight":
        return scenes.Floor2_Clickable_BugLight
        break
    case "Floor2_Clickable_Moxie":
        return scenes.Floor2_Clickable_Moxie
        break
    case "Floor3_Clickable_Down":
        return floors.floor2
        break
    case "Floor2_Clickable_Up"||"Floor4_Clickable_Down":
        return floors.floor3
        break
    case "Floor3_Clickable_Up"||"Roof_Clickable_Down":
        return floors.floor4
        break
    case "Floor4_Clickable_Up":
        return floors.roof
        break
    default:
        return floors.roof
        break
  }
}

function App() {
  const [Target, setTarget] = useState(floors.roof)
  const [AutoRotate, setAutoRotate] = useState(true)

  return (
    <Container>
      <Suspense fallback={<ProgressBar/>}>
        <Canvas dpr={[1, 2]} camera={{ 
                                    fov: 45, 
                                    position: [
                                      Target.cameraPositionX, 
                                      Target.cameraPositionY, 
                                      Target.cameraPositionZ ] }}>
          <TargetControls Target={Target} AutoRotate={AutoRotate}/>
          <Floor2 onClick={(event) => {setTarget(LookUpTarget(event))}}/>
          <Floor3 onClick={(event) => {setTarget(LookUpTarget(event))}}/>
          <Floor4 onClick={(event) => {setTarget(LookUpTarget(event))}} />
          <Roof onClick={(event) => {setTarget(LookUpTarget(event))}}/>
        </Canvas>
      </Suspense>
    </Container>
  );
}

export default App;
