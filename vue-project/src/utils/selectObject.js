import * as THREE from 'three';
import { pointer, raycaster, startVector,endVector, scene, selectedObj } from './sharedVariables';

const selectObject = (event, sceneContainer, camera) => {
    
    pointer.x = (event.offsetX / sceneContainer.clientWidth) * 2 - 1;
    pointer.y = - (event.offsetY / sceneContainer.clientHeight) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);

    const intersects = raycaster.intersectObjects(scene.children);
    console.log(scene)
    if (intersects.length > 0 && intersects[0].object.type !== "Mesh" && intersects[0].object.userData.type !== "circile" && intersects[0].object.type !== "AxesHelper") {
        const selectedObject = intersects[0].object;
        console.log(selectedObject);
        
        selectedObj.add(selectedObject);
   

        startVector.value.push(selectedObject.userData.startPoint)
        endVector.value.push(selectedObject.userData.endPoint)

    }
   else if (intersects[0].object.userData.type === "circile") {
        const selectedObject = intersects[0].object;
        
        selectedObj.add(selectedObject);
        

        startVector.value.push(selectedObject.userData.startPoint)
        endVector.value.push(selectedObject.userData.endPoint)

    }

    // console.log(startVectors);
};

export default selectObject;
