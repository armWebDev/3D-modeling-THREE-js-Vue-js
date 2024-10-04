import * as THREE from 'three' 
import { scene,plane } from './sharedVariables';

const initThreeJs = (sceneContainer,camera) => {

  // const axesHelper = new THREE.AxesHelper( 5 );
  // scene.add( axesHelper );
    if (!scene) {
        scene = new THREE.Scene();
      }
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(sceneContainer.clientWidth, sceneContainer.clientHeight);
    sceneContainer.appendChild(renderer.domElement);
    
    
    
    
  const planeGeometry = new THREE.PlaneGeometry(100, 100, 1, 1);
  const planeMaterial = new THREE.MeshBasicMaterial({ visible: false });
    plane.value = new THREE.Mesh(planeGeometry, planeMaterial);
   
  scene.add(plane.value);
  
  
  
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
  
    animate();
  
  
    window.addEventListener('resize', () => {
      renderer.setSize(sceneContainer.value.clientWidth, sceneContainer.value.clientHeight);
      camera.aspect = sceneContainer.value.clientWidth / sceneContainer.value.clientHeight;
      camera.updateProjectionMatrix();
    });
  };

  export default initThreeJs;