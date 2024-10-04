import * as THREE from 'three';
import { ref } from 'vue';

export const pointer = new THREE.Vector2();
export const raycaster = new THREE.Raycaster();
raycaster.params.Line.threshold = 0.2;
export let plane = ref(null);


export let selectedObj = new Set();
export let startVector = ref([])
export let endVector = ref([])
export const sceneContainer = ref(null); 
export const scene = new THREE.Scene();
export let line = ref(null); 


export const camera = ref(null); 
