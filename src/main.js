import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Terrain } from './terrain.js';
import { setupMouseEvents } from './mouse.js';


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
renderer.setAnimationLoop(animate);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// --- CAMERA MAKER & POSITION
const camera = new THREE.PerspectiveCamera(75, size.width / size.height, 0.1, 1000);
camera.position.set(0.08, 7, 11);

// ---Import Files Here
const terrain = new Terrain();
scene.add(terrain);

setTimeout(() => {
    if(!terrain.tiles || terrain.tiles.length === 0){
        console.error("Error: Terrain tiles is undefined or empty~!");
    }else{
        console.log("Terrain tiles have loaded successfully");
    };
}, 500);

// --- Mouse Hover
setupMouseEvents(scene, camera, terrain);


// --- LIGHTS/SHADOWS MAKER
const sun = new THREE.DirectionalLight( 0xFFFFFF );
const sun2 = new THREE.DirectionalLight( 0xFFFFFF );
sun.intensity = 3; //the intenstity of the light
sun.position.set(7, 5, 1);
sun2.position.set(-10, 3, -3);
const helper = new THREE.DirectionalLightHelper( sun, 5 );
const helper2 = new THREE.DirectionalLightHelper( sun2, 5 );
// const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft background light
scene.add( sun );
scene.add( sun2);
//scene.add(ambientLight);
scene.add( helper );
scene.add( helper2 );

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