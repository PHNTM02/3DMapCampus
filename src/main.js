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
const renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true, alpha: true});
renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 3));
renderer.setClearColor(0x000000, 0);

// --- CAMERA MAKER & POSITION
const camera = new THREE.PerspectiveCamera(75, size.width / size.height, 0.1, 1000);
// camera.position.set(1, 20, 10);
// camera.position.set(1, 1, 6); 
camera.position.set(1, 9, 9); 
scene.add(camera);

// --- ORBITCONTROL MAKER
const controls = new OrbitControls( camera, canvas);
controls.maxPolarAngle = Math.PI / 2.5;
controls.screenSpacePanning = false;

// --- LIGHTS/SHADOWS MAKER
const sun = new THREE.DirectionalLight( 0xFFFFFF );
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
sun.intensity = 3;
sun.position.set(7, 5, 1);
scene.add(sun, ambientLight);

// ADD TERRAIN
const terrain = new Terrain();
terrain.position.set(-20,-15, -15);
scene.add(terrain);


setTimeout(() => {
    const asset = terrain.children.find(child => child.type === 'Group' && child.name === '');
    const buildingsGroup = asset || null;
    const mouseEvents = setupMouseEvents(scene, camera, terrain, buildingsGroup, controls);

    const libraryDiv = document.getElementById('Library');
    if (libraryDiv) {
        libraryDiv.addEventListener('click', () => {
            mouseEvents.selectBuildingByName('Mesh_264_60');

            if (!buildingsGroup) return;
            const buildingMeshes = buildingsGroup.children.filter(child => child.isMesh || child.isGroup);
            const targetMesh = buildingMeshes.find(b => b.name === 'Mesh_264_60');
            if (!targetMesh) return;

            const bbox = new THREE.Box3().setFromObject(targetMesh);
            const center = bbox.getCenter(new THREE.Vector3());

            const offset = new THREE.Vector3(0, 10, 15); 
            const newCameraPos = center.clone().add(offset);

            camera.position.copy(newCameraPos);
            controls.target.copy(center);
            controls.update();
        });
    }

    const highlightedCodeDiv = document.getElementById('highlightedCode');
    if (highlightedCodeDiv) {
        highlightedCodeDiv.addEventListener('click', () => {
            const fixedPosition = new THREE.Vector3(-60.5, 95, 0);
            camera.position.copy(fixedPosition);

            controls.target.set(0, 0, 0);
            controls.update();

            mouseEvents.selectBuildingByName('Mesh_69_14');
        });
    }

    document.addEventListener('moveCameraToCOM', () => {
        mouseEvents.selectBuildingByName('Mesh_69_14');

        if (!buildingsGroup) return;
        const buildingMeshes = buildingsGroup.children.filter(child => child.isMesh || child.isGroup);
        const targetMesh = buildingMeshes.find(b => b.name === 'Mesh_69_14');
        if (!targetMesh) return;

        const bbox = new THREE.Box3().setFromObject(targetMesh);
        const center = bbox.getCenter(new THREE.Vector3());

        const offset = new THREE.Vector3(0, 10, 15);
        const newCameraPos = center.clone().add(offset);

        camera.position.copy(newCameraPos);
        controls.target.copy(center);
        controls.update();
    });

    const comliDiv = document.getElementById('comli');
    if (comliDiv) {
        comliDiv.addEventListener('click', () => {
            const modelBuilding = document.getElementById('modelBuilding');
            const college = document.getElementById('college');
            const buildingtitle = document.getElementById('buildingtitle');
            const buildingImg = document.getElementById('buildingImg');
            const buildingSummary = document.getElementById('buildingSummary');

            if (modelBuilding) modelBuilding.style.display = 'block';
            if (college) college.style.display = 'none';

            if (buildingtitle) buildingtitle.innerHTML = "COLLEGE OF MEDICINE";
            if (buildingImg) buildingImg.src = "img/college_img/com.jpg";
            if (buildingSummary) buildingSummary.innerHTML = `The Adventist University of the Philippines College of Medicine (AUPCOM) is the first and only Adventist medical school in the Philippines and the Asia-Pacific region established in 2015. It is only the sixth of seven Adventist medical schools globally, the oldest of which is the Loma Linda University School of Medicine in Loma Linda, California, USA.  AUP College of Medicine is the only medical school in the Philippines and Southeast Asia which includes in its medical curriculum courses in Lifestyle Medicine, Religion, and Whole Person Care, because of its main thrust to produce physician-missionaries for Christ.<br><br>

            The medical school accepts baccalaureate allied health degree holders, to begin at the first-year level, with an NMAT score 60 and above, an above average GPA, an outstanding Christian character, and with good English communication skills. Freshmen Medicine students are welcomed in a White Coat Ceremony at the beginning of the year, with the donning of the white coat signifying the purity of the medical profession, and the giving out of the Holy Bible – the most important book above all books, and the Ministry of Healing. These medical students will be trained to become Five-Star Plus Physicians, namely, as mandated by CHED:  Clinician, Teacher, Researcher, Manager, and Social Mobilizer, and additionally the unique AUPCOM Plus – to become a Physician Missionary.<br><br>

            At the fourth-year level, selected outstanding medical students are given the opportunity to go on clinical clerkship rotation for six weeks at our sister institution – the Loma Linda University School of Medicine – Medical Center in Loma Linda, California.`;  

            mouseEvents.selectBuildingByName('Mesh_69_14');

            if (!buildingsGroup) return;
            const buildingMeshes = buildingsGroup.children.filter(child => child.isMesh || child.isGroup);
            const targetMesh = buildingMeshes.find(b => b.name === 'Mesh_69_14');
            if (!targetMesh) return;

            const bbox = new THREE.Box3().setFromObject(targetMesh);
            const center = bbox.getCenter(new THREE.Vector3());

            const offset = new THREE.Vector3(0, 10, 15);
            const newCameraPos = center.clone().add(offset);

            camera.position.copy(newCameraPos);
            controls.target.copy(center);
            controls.update();
        });
    }
}, 1000);

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
    controls.update();
    renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );
