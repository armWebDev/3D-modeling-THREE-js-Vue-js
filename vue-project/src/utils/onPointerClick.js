import * as THREE from 'three' 
import { pointer, raycaster,  plane,sceneContainer } from './sharedVariables';



const onPointerClick = (event,camera) => {
  pointer.x = (event.offsetX / sceneContainer.value.clientWidth) * 2 - 1;
  pointer.y = - (event.offsetY / sceneContainer.value.clientHeight) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);
 
  
  const intersects = raycaster.intersectObject(plane.value); 
  if (intersects.length > 0) {
    return intersects[0].point;
  }
  return null;
};


export default onPointerClick