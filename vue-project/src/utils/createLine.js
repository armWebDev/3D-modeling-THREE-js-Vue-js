import * as THREE from 'three'
import mouseCurrentPos from './mouseCurrentPos';
import onPointerClick from './onPointerClick'
import { scene } from './sharedVariables'
import createPoint from './createPoint'
// console.log(sceneContainer);

let lineLocal;
let isDrawing = false; 

const resetLine = () => {
    lineLocal = null;
    isDrawing = false; 
};

const createLine = (event, camera) => {
    const currentPos = onPointerClick(event, camera);

    if (!isDrawing) {
        isDrawing = true; 
        const material = new THREE.LineBasicMaterial({ color: 0x0000ff });

        const geometry = new THREE.BufferGeometry().setFromPoints([currentPos, currentPos]);
        lineLocal = new THREE.Line(geometry, material);
        lineLocal.userData.startPoint = currentPos
        lineLocal.userData.type = 'line'
        lineLocal.userData.pararelled = false
        scene.add(lineLocal);
        const pointStart = createPoint(lineLocal.userData.startPoint)
        lineLocal.add(pointStart)
        const endingPoint = createPoint(lineLocal.userData.startPoint)
        lineLocal.add(endingPoint)
    } else {
        

            lineLocal.userData.endPoint = currentPos
        
        
            lineLocal.userData.lineLength =  lineLocal.userData.startPoint.distanceTo(currentPos);
    
            lineLocal.geometry.setFromPoints([lineLocal.userData.startPoint, currentPos]);
            lineLocal.geometry.computeBoundingSphere();
            // createLine( lineLocal.userData.endPoint)
            resetLine()
        

        // endPoint = null
        // startPoint = null;
        // lineLocal = null
    }
};

export default createLine;