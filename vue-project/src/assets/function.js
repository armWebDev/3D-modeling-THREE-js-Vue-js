
// function createLine(event) {
//     const currentPos = onPointerClick(event)
//     console.log(currentPos);
  
//     if (startPoint == null) {
//       startPoint = currentPos
  
//       geometry = new THREE.BufferGeometry().setFromPoints([startPoint, startPoint]);
//       line = new THREE.Line(geometry, material)
//       scene.add(line)
  
//     } else {
  
//       endPoint = mouseCurrentPos(event)
//       console.log(endPoint);
  
  
  
//       line.geometry.setFromPoints([startPoint, endPoint]);
  
  
//       startPoint = null
//       endPoint = null
//     }
//   }

  
//   export default{createLine}