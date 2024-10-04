<template>
  <div ref="sceneContainer" @click="handleClick" @mousemove="(event) => mouseMuve(event)" class="three-scene">
  </div>
</template>

<script setup>import { onMounted, watch, ref } from 'vue';
import * as THREE from 'three'
import initThreeJs from './utils/initThreeJs';
import createLine from './utils/createLine';
import makePerpendicul from './utils/perpendicular'
import createCircle from './utils/createCircle';
import selectObject from './utils/selectObject';
import makevalParalel from './utils/makevalParalel';
import mouseCurrentPos from './utils/mouseCurrentPos';
import { scene, sceneContainer, camera } from './utils/sharedVariables';
import pointOfCircile from './utils/pointOfCircile'
import mouseCurrentObj from './utils/mouseCurrentObj'
import makeTangent from './utils/makeTangent'
let isDrawing = ref(false)


const props = defineProps({
  line: { type: Boolean, default: false },
  circle: { type: Boolean, default: false },
  select: { type: Boolean, default: false },
  valParalel: { type: Boolean, default: false },
  perpendicul: { type: Boolean, default: false },
  tangentedOrNot: { type: Boolean, default: false },
});


function mouseMuve(event) {
  if (props.select) {
    mouseCurrentObj(event, camera.value);
  }

  const pos = mouseCurrentPos(event, camera.value, props)

  let currentLine = scene.children.at(-1)
  if (props.line) {
    isDrawing.value = true
    if (currentLine?.userData?.startPoint && !currentLine.userData.endPoint && currentLine.userData.type === 'line' && isDrawing.value) {
      currentLine.geometry.setFromPoints([currentLine.userData.startPoint, pos]);
      currentLine.children[1].geometry.setFromPoints([pos])
      isDrawing.value = false

    }
  }
  if (props.circle) {
    isDrawing.value = true
    if (currentLine?.userData?.startPoint && !currentLine.userData.endPoint && currentLine.userData.type === 'circile' && isDrawing.value) {
      let radius = currentLine.userData.startPoint.distanceTo(pos)
  
        const points = pointOfCircile(radius, currentLine.userData.startPoint)

        currentLine.geometry.setFromPoints(points);


    }
  }



}



const handleClick = (event) => {

  if (props.line) {

    createLine(event, camera.value);


  }
  if(props.tangentedOrNot){
    makeTangent(event, camera.value);
  }
  if (props.perpendicul) makePerpendicul();
  if (props.circle) createCircle(event, camera.value);

  if (props.select) selectObject(event, sceneContainer.value, camera.value);
  if (props.valParalel) {
    makevalParalel();
  }
};

onMounted(() => {
  camera.value = new THREE.PerspectiveCamera(75, sceneContainer.value.clientWidth / sceneContainer.value.clientHeight, 0.1, 1000);
  camera.value.position.z = 5;

  initThreeJs(sceneContainer.value, camera.value);

});

watch(() => props.valParalel, (val) => {
  if (val) {
    makevalParalel();
  }
});

watch(() => props.perpendicul, (val) => {
  if (val) {
    makePerpendicul();
  }
});

watch(() => props.tangentedOrNot, (val) => {
  if (val) {
    makeTangent();
  }
});

</script>

<style scoped>
.three-scene {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 90vh;
}

canvas {
  margin: 0;
  padding: 0;
}
</style>