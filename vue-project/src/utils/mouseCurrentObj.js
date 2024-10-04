import * as THREE from 'three' 
import { pointer, raycaster,  scene,sceneContainer } from './sharedVariables';

function mouseCurrentObj(event,camera) {

  pointer.x = (event.offsetX / sceneContainer.value.clientWidth) * 2 - 1;
  pointer.y = - (event.offsetY / sceneContainer.value.clientHeight) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);

  scene.children.forEach(child => {
    if (child.type === "Line") {
      
      child.material.color.set(0x0000ff);
    }
  })

  const intersects = raycaster.intersectObjects(scene.children);
  
  if (intersects.length > 0) {
    
    if (intersects[0].object.type === "Line") { 
      intersects[0].object.material.color.set(0xffa500)
    } 
   
  }





  return intersects.length > 0 ? intersects[0].object : false;

}
export default mouseCurrentObj