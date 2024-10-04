import * as THREE from 'three'

const createPoint = (point) => {
   


    const geometry = new THREE.BufferGeometry();
    geometry.setFromPoints([point]); 


    const material = new THREE.PointsMaterial({ color: 0x00ff00, size: 0.05 });


    const pointObject = new THREE.Points(geometry, material);
    return pointObject
}



export default createPoint;