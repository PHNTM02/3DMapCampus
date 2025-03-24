import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Terrain } from './terrain.js';
// import { setupMouseEvents } from './mouse.js';


// --- SCENE MAKER
const scene = new THREE.Scene();
const canvas = document.getElementById("experience-canvas");
const size = {
    width: window.innerWidth,
    height: window.innerHeight
}

// --- RENDERER MAKER
const renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setAnimationLoop(animate);

// --- CAMERA MAKER & POSITION
const camera = new THREE.PerspectiveCamera(75, size.width / size.height, 0.1, 1000);
camera.position.set(0.08, 7, 11);

// ---Import Files Here
const terrainSize = 100; // Adjust this value to control performance
const terrain = new Terrain(terrainSize, terrainSize);
scene.add(terrain);


// --- Mouse Hover
// setupMouseEvents(scene, camera, terrain);


// --- LIGHTS/SHADOWS MAKER
const sun = new THREE.DirectionalLight( 0xFFFFFF );
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft background light
sun.intensity = 3; //the intenstity of the light
sun.position.set(7, 5, 1);
scene.add( sun );
scene.add(ambientLight);


// --- ORBITCONTROL MAKER
const controls = new OrbitControls( camera, canvas);
controls.maxPolarAngle = Math.PI / 2.5;
controls.screenSpacePanning = false;


// ---HANDLING RE-SIZE OF THE SCREEN
function handleResize(){
    size.width = window.innerWidth;
    size.Height = window.innerHeight;
    camera.aspect = size.width / size.height;
    camera.updateProjectionMatrix();

    renderer.setSize( size.width, size.height);
}

// --- ADVENT LISTENER
window.addEventListener("resize", handleResize);


// --- ANIMATE THE SCENE
function animate(){
    // console.log(camera.position);
    controls.update();
    renderer.render(scene, camera);
}