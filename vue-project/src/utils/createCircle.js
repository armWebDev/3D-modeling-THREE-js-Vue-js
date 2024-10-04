import * as THREE from 'three'
import onPointerClick from './onPointerClick'
import mouseCurrentPos from './mouseCurrentPos';
import { scene} from './sharedVariables'
import createPoint from './createPoint'

let line;
let isDrawing = false; 



const resetLine = () => {
    line = null;
    isDrawing = false; 
};


const createCircle = (event,camera) => {
    const currentPos = onPointerClick(event,camera)


    if (!isDrawing) {


       
        const material = new THREE.LineBasicMaterial({ color: 0x0000ff });


        const geometry = new THREE.BufferGeometry().setFromPoints([currentPos, currentPos]);

        line = new THREE.Line(geometry, material);
        line.userData.type = 'circile'
        line.userData.startPoint = currentPos
        scene.add(line);
        const pointStart = createPoint( line.userData.startPoint)
        line.add(pointStart)
        console.log(line);
        isDrawing = true
        
    } else {

        line.userData.endPoint = currentPos

        let radius =  line.userData.startPoint.distanceTo(currentPos)

        line.userData.radius = radius 
        const points = pointOfCircile(radius, line.userData.startPoint)

        line.geometry.setFromPoints(points);
        line.geometry.computeBoundingSphere();

        resetLine()
        
    }
}


export default createCircle;


function pointOfCircile(radius,startPoint) {
    let points = []

    let angel = ((2 * Math.PI) / 60)

    for (let i = 0; i <= 60; i++) {
        const angelStep = i * angel
        let x = startPoint.x + radius * Math.cos(angelStep)
        let y = startPoint.y + radius * Math.sin(angelStep)
        let z = startPoint.z
        points.push(new THREE.Vector3(x, y, z))
    }
    return points
}
