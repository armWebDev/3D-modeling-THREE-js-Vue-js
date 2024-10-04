import * as THREE from 'three'

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

export default pointOfCircile;