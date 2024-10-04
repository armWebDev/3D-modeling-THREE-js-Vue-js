// import * as THREE from 'three';

import { pointer, raycaster,  plane,sceneContainer } from './sharedVariables';

function mouseCurrentPos(event,camera) {

    pointer.x = (event.offsetX / sceneContainer.value.clientWidth) * 2 - 1;
    pointer.y = - (event.offsetY / sceneContainer.value.clientHeight) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    
    
    const intersects = raycaster.intersectObject(plane.value);
    
    
    

    return intersects[0].point;
  
  }
export default mouseCurrentPos