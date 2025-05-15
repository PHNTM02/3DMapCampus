import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { building } from './modelAsset.js';

const scene = new THREE.Scene();
const canvas = document.getElementById("building-canva");
const size = {
    width: window.innerWidth,
    height: window.innerHeight
}

const renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 3));
renderer.setClearColor(0x000000, 0);

const camera = new THREE.PerspectiveCamera(75, size.width / size.height, 0.1, 1000);
camera.position.set(5, 5, 5);
scene.add(camera);
const controls = new OrbitControls( camera, canvas);
controls.maxPolarAngle = Math.PI / 2.5;
controls.screenSpacePanning = false;

const sun = new THREE.DirectionalLight( 0xFFFFFF );
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
sun.intensity = 3;
sun.position.set(7, 5, 1);
scene.add(sun, ambientLight);

const asset = new building();
scene.add(asset);

asset.clear = function() {
    while(this.children.length > 0) {
        this.remove(this.children[0]);
    }
};

document.getElementById("locate")?.addEventListener("click", () => {
    document.getElementById('building').style.display = 'block';
    asset.clear();
    asset.loadCOB();
    asset.loadArrow();
    controls.target.set(0, 0, 0)
    camera.position.set(6.06, 0.78, 0.17);
});
document.getElementById("conli")?.addEventListener("click", () => {
    asset.clear();
    asset.loadCST();
    camera.position.set(0.11, 2.68, 8.24);
});

function handleResize(){
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(newWidth, newHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
}

window.addEventListener("resize", handleResize);

function animate() {
    controls.update();
    renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );