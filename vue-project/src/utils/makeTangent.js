import * as THREE from 'three'

import { startVector,endVector, selectedObj, scene } from './sharedVariables';
import createPoint from './createPoint'


const makeTangent = () => {
   
    if (selectedObj.size > 0) {
        const selectedArr = Array.from(selectedObj)
        const objFirst = selectedArr[0];
        const objSecond = selectedArr[1];

        if(objFirst.userData.type === "line"){
            const line  = new THREE.Line3(objFirst.userData.startPoint,objFirst.userData.endPoint)
            const closestPointOfLine = line.closestPointToPoint(objSecond.userData.startPoint, false, new THREE.Vector3())
            const subCenterToClosePoint = new THREE.Vector3().subVectors(closestPointOfLine, objSecond.userData.startPoint).normalize();


            const closePointSubRad = closestPointOfLine.distanceTo(objSecond.userData.startPoint)
            
            const sizeOfdiferrence = closePointSubRad - objSecond.userData.radius


            let tangentPoint  = subCenterToClosePoint.clone().multiplyScalar(-sizeOfdiferrence).add(closestPointOfLine)
            

            const finalCordinatesX = new THREE.Vector3().subVectors(tangentPoint,closestPointOfLine ).add(objFirst.userData.startPoint)
            const finalCordinatesY = new THREE.Vector3().subVectors(tangentPoint,closestPointOfLine).add(objFirst.userData.endPoint)
            
            objFirst.geometry.setFromPoints([finalCordinatesX,finalCordinatesY])
            objFirst.children[0].geometry.setFromPoints([finalCordinatesX])
            objFirst.children[1].geometry.setFromPoints([finalCordinatesY])

        }

        selectedObj.clear()
    }
    else {
        console.log("Select lines");
    }
}


export default makeTangent