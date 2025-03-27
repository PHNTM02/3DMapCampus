import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Terrain } from './terrain.js';

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


// --- CAMERA MAKER & POSITION
const camera = new THREE.PerspectiveCamera(75, size.width / size.height, 0.1, 1000);
camera.position.set(26, 23, 79);
scene.add(camera)

// --- LIGHTS/SHADOWS MAKER
const sun = new THREE.DirectionalLight( 0xFFFFFF );
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft background light
sun.intensity = 3; //the intenstity of the light
sun.position.set(7, 5, 1);
scene.add(sun, ambientLight);

// --- ORBITCONTROL MAKER
const controls = new OrbitControls( camera, canvas);
// controls.maxPolarAngle = Math.PI / 2.5;
// controls.screenSpacePanning = false;

// ADD TERRAIN
const terrain = new Terrain();
scene.add(terrain);

// ---HANDLING RE-SIZE OF THE SCREEN
function handleResize(){
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(newWidth, newHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
}

// --- ADVENT LISTENER
window.addEventListener("resize", handleResize);


function animate() {

    // console.log(camera.position);
    controls.update();
	renderer.render( scene, camera );

}
renderer.setAnimationLoop( animate );