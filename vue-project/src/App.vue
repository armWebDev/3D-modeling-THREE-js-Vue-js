<template>
  <div class="app">
    <div class="topBar">
      <div class="lineButton">
        <button @click="startDraw('line')" :class="{ active: line }">
          Line
        </button>
      </div>
      <div class="lineButton">
        <button @click="startDraw('circle')" :class="{ active: circle }">Circle</button>
      </div>
      <div class="lineButton">
        <button @click="selectLine()" :class="{ active: select }">Select</button>
      </div>
      <div class="lineButton">
        <button @click="valParalelLines" :class="{ active: valParalel }">Parallel</button>
      </div>
      <div class="lineButton">
        <button @click="perpendicularLines" :class="{ active: perpendicul }">Perpendicular</button>
      </div>
      <div class="lineButton">
        <button @click="tangentObjs" :class="{ active: tangentedOrNot }">Tangent</button>
      </div>
      <div class="lineButton">
        <button @click="clearScene">Clear</button>
      </div>
    </div>
    <ThreeScene :select="select" :circle="circle" :perpendicul="perpendicul" :tangentedOrNot="tangentedOrNot" :valParalel="valParalel" :line="line" 
      class="scene" />

  </div>
</template>

<script setup>
import * as THREE from 'three'

import { scene, startVector, endVector,selectedObj } from './utils/sharedVariables';

import { ref } from 'vue';

import ThreeScene from './ThreeScene.vue';
const circle = ref(false);
const line = ref(false);
const valParalel = ref(false);
const select = ref(false);
const perpendicul = ref(false);
const tangentedOrNot = ref(false);


function selectLine() {
  circle.value = false
  perpendicul.value = false
  select.value = !select.value
  line.value = false
  valParalel.value = false
  tangentedOrNot.value = false
}
function tangentObjs(){
  tangentedOrNot.value = !tangentedOrNot.value
  line.value = false
  valParalel.value = false
  circle.value = false
  perpendicul.value = false
  select.value = false

}
function clearScene() {
  while (scene.children.length > 1) {
    const object = scene.children[1];
    
    scene.remove(object);
    select.value = false
    line.value = false
    circle.value = false
    perpendicul.value = false
    valParalel.value = false
    tangentedOrNot.value = false

    startVector.value = [];
    endVector.value = [];
    selectedObj.clear()
  }

}
function valParalelLines() {

  valParalel.value = !valParalel.value
  circle.value = false
  select.value = false
  line.value = false
  perpendicul.value = false
  tangentedOrNot.value = false

}
function perpendicularLines() {

  perpendicul.value = !perpendicul.value
  circle.value = false
  select.value = false
  line.value = false
  valParalel.value = false
  tangentedOrNot.value = false

}
function startDraw(tool) {
  if (tool === 'line') {
    circle.value = false
    line.value = !line.value;
    select.value = false
    valParalel.value = false
    perpendicul.value = false
    tangentedOrNot.value = false

  }
  if (tool === 'circle') {
    line.value = false
    circle.value = !circle.value;
    select.value = false
    valParalel.value = false
    perpendicul.value = false
    tangentedOrNot.value = false

  }


  // console.log(drawingMode);

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

.topBar {
  background-color: lightgray;
  width: 100%;
  padding: 20px;
  display: flex;
  gap: 20px;
}

.lineButton button {
  padding: 10px 20px;
  display: inline-block;
  border: 1px solid #008d3b;

}

.active {
  background-color: #00ff6a;
  color: white;
  border: 1px solid #008d3b;
}

.scene {
  width: 100%;
  height: 100%;
}
</style>
