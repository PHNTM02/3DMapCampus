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
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 3));
renderer.setClearColor(0x000000, 0);

// --- CAMERA MAKER & POSITION
const camera = new THREE.PerspectiveCamera(75, size.width / size.height, 0.1, 1000);
camera.position.set(1, 20, 10);
// camera.position.set(1, 1, 6); 
// camera.position.set(1, 9, 9); 
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
// terrain.position.set(-20,-15, -15);
terrain.position.set(0, -5, -60);
scene.add(terrain);


document.getElementById("clinic").addEventListener("click", () => {
    const model = terrain.getObjectByName("clinic");

    if(model){
        const worldPos = new THREE.Vector3();
        model.getWorldPosition(worldPos);

        const shift = worldPos.clone().negate();
        terrain.position.add(shift);

        console.log("Moved terrain so model is at origin:", terrain.position);
    } else {
        console.warn("Model not yet loaded.");
    }
});
document.getElementById("psd").addEventListener("click", () => {
    const model = terrain.getObjectByName("psd");

    if(model){
        const worldPos = new THREE.Vector3();
        model.getWorldPosition(worldPos);

        const shift = worldPos.clone().negate();
        terrain.position.add(shift);

        console.log("Moved terrain so model is at origin:", terrain.position);
    } else {
        console.warn("Model not yet loaded.");
    }
});
document.getElementById("guidance").addEventListener("click", () => {
    const model = terrain.getObjectByName("guidance");

    if(model){
        const worldPos = new THREE.Vector3();
        model.getWorldPosition(worldPos);

        const shift = worldPos.clone().negate();
        terrain.position.add(shift);

        console.log("Moved terrain so model is at origin:", terrain.position);
    } else {
        console.warn("Model not yet loaded.");
    }
});
document.getElementById("ssc").addEventListener("click", () => {
    const model = terrain.getObjectByName("sso");

    if(model){
        const worldPos = new THREE.Vector3();
        model.getWorldPosition(worldPos);

        const shift = worldPos.clone().negate();
        terrain.position.add(shift);

        console.log("Moved terrain so model is at origin:", terrain.position);
    } else {
        console.warn("Model not yet loaded.");
    }
});
document.getElementById("kubo").addEventListener("click", () => {
    const model = terrain.getObjectByName("kubo");

    if(model){
        const worldPos = new THREE.Vector3();
        model.getWorldPosition(worldPos);

        const shift = worldPos.clone().negate();
        terrain.position.add(shift);

        console.log("Moved terrain so model is at origin:", terrain.position);
    } else {
        console.warn("Model not yet loaded.");
    }
});
document.getElementById("Library").addEventListener("click", () => {
    const model = terrain.getObjectByName("library");

    if(model){
        const worldPos = new THREE.Vector3();
        model.getWorldPosition(worldPos);

        const shift = worldPos.clone().negate();
        terrain.position.add(shift);

        console.log("Moved terrain so model is at origin:", terrain.position);
    } else {
        console.warn("Model not yet loaded.");
    }
});
document.getElementById("conli").addEventListener("click", () => {
    const model = terrain.getObjectByName("con");

    if(model){
        const worldPos = new THREE.Vector3();
        model.getWorldPosition(worldPos);

        const shift = worldPos.clone().negate();
        terrain.position.add(shift);
        camera.position.set(23, 15, 0.61);

        console.log("Moved terrain so model is at origin:", terrain.position);
    } else {
        console.warn("Model not yet loaded.");
    }
});
document.getElementById("cobli").addEventListener("click", () => {
    const model = terrain.getObjectByName("cob");

    if(model){
        const worldPos = new THREE.Vector3();
        model.getWorldPosition(worldPos);

        const shift = worldPos.clone().negate();
        terrain.position.add(shift);
        camera.position.set(0, 7, -12);

        console.log("Moved terrain so model is at origin:", terrain.position);
    } else {
        console.warn("Model not yet loaded.");
    }
});
document.getElementById("cstli").addEventListener("click", () => {
    const model = terrain.getObjectByName("cst");

    if(model){
        const worldPos = new THREE.Vector3();
        model.getWorldPosition(worldPos);

        const shift = worldPos.clone().negate();
        terrain.position.add(shift);
        camera.position.set(-0.82, 9.31, 13.4);

        console.log("Moved terrain so model is at origin:", terrain.position);
    } else {
        console.warn("Model not yet loaded.");
    }
});
document.getElementById("comli").addEventListener("click", () => {
    const model = terrain.getObjectByName("com");

    if(model){
        const worldPos = new THREE.Vector3();
        model.getWorldPosition(worldPos);

        const shift = worldPos.clone().negate();
        terrain.position.add(shift);
        camera.position.set(-0.82, 9.3, 13);

        console.log("Moved terrain so model is at origin:", terrain.position);
    } else {
        console.warn("Model not yet loaded.");
    }
});
document.getElementById("foodfac").addEventListener("click", () => {
    const model = terrain.getObjectByName("factory");

    if(model){
        const worldPos = new THREE.Vector3();
        model.getWorldPosition(worldPos);

        const shift = worldPos.clone().negate();
        terrain.position.add(shift);

        console.log("Moved terrain so model is at origin:", terrain.position);
    } else {
        console.warn("Model not yet loaded.");
    }
});
document.getElementById("codli").addEventListener("click", () => {
    const model = terrain.getObjectByName("cod");

    if(model){
        const worldPos = new THREE.Vector3();
        model.getWorldPosition(worldPos);

        const shift = worldPos.clone().negate();
        terrain.position.add(shift);
        camera.position.set(16, 9, -0.99)

        console.log("Moved terrain so model is at origin:", terrain.position);
    } else {
        console.warn("Model not yet loaded.");
    }
});
document.getElementById("sampali").addEventListener("click", () => {
    const model = terrain.getObjectByName("sampa");

    if(model){
        const worldPos = new THREE.Vector3();
        model.getWorldPosition(worldPos);

        const shift = worldPos.clone().negate();
        terrain.position.add(shift);

        console.log("Moved terrain so model is at origin:", terrain.position);
    } else {
        console.warn("Model not yet loaded.");
    }
});
document.getElementById("walingli").addEventListener("click", () => {
    const model = terrain.getObjectByName("waling");

    if(model){
        const worldPos = new THREE.Vector3();
        model.getWorldPosition(worldPos);

        const shift = worldPos.clone().negate();
        terrain.position.add(shift);

        console.log("Moved terrain so model is at origin:", terrain.position);
    } else {
        console.warn("Model not yet loaded.");
    }
});
document.getElementById("ilangli").addEventListener("click", () => {
    const model = terrain.getObjectByName("ilang");

    if(model){
        const worldPos = new THREE.Vector3();
        model.getWorldPosition(worldPos);

        const shift = worldPos.clone().negate();
        terrain.position.add(shift);

        console.log("Moved terrain so model is at origin:", terrain.position);
    } else {
        console.warn("Model not yet loaded.");
    }
});
document.getElementById("cadenali").addEventListener("click", () => {
    const model = terrain.getObjectByName("cadena");

    if(model){
        const worldPos = new THREE.Vector3();
        model.getWorldPosition(worldPos);

        const shift = worldPos.clone().negate();
        terrain.position.add(shift);

        console.log("Moved terrain so model is at origin:", terrain.position);
    } else {
        console.warn("Model not yet loaded.");
    }
});
document.getElementById("store").addEventListener("click", () => {
    const model = terrain.getObjectByName("store");

    if(model){
        const worldPos = new THREE.Vector3();
        model.getWorldPosition(worldPos);

        const shift = worldPos.clone().negate();
        terrain.position.add(shift);

        console.log("Moved terrain so model is at origin:", terrain.position);
    } else {
        console.warn("Model not yet loaded.");
    }
});
document.getElementById("mahoganyli").addEventListener("click", () => {
    const model = terrain.getObjectByName("mahogany");

    if(model){
        const worldPos = new THREE.Vector3();
        model.getWorldPosition(worldPos);

        const shift = worldPos.clone().negate();
        terrain.position.add(shift);
        camera.position.set(0.40, 6.71, 14.88);

        console.log("Moved terrain so model is at origin:", terrain.position);
    } else {
        console.warn("Model not yet loaded.");
    }
});
document.getElementById("acaciali").addEventListener("click", () => {
    const model = terrain.getObjectByName("acacia");

    if(model){
        const worldPos = new THREE.Vector3();
        model.getWorldPosition(worldPos);

        const shift = worldPos.clone().negate();
        terrain.position.add(shift);
        camera.position.set(1, 7, 21);

        console.log("Moved terrain so model is at origin:", terrain.position);
    } else {
        console.warn("Model not yet loaded.");
    }
});
document.getElementById("cahli").addEventListener("click", () => {
    const model = terrain.getObjectByName("caet");

    if(model){
        const worldPos = new THREE.Vector3();
        model.getWorldPosition(worldPos);

        const shift = worldPos.clone().negate();
        terrain.position.add(shift);

        console.log("Moved terrain so model is at origin:", terrain.position);
    } else {
        console.warn("Model not yet loaded.");
    }
});
document.getElementById("coeli").addEventListener("click", () => {
    const model = terrain.getObjectByName("caet");

    if(model){
        const worldPos = new THREE.Vector3();
        model.getWorldPosition(worldPos);

        const shift = worldPos.clone().negate();
        terrain.position.add(shift);

        console.log("Moved terrain so model is at origin:", terrain.position);
    } else {
        console.warn("Model not yet loaded.");
    }
});
document.getElementById("cotli").addEventListener("click", () => {
    const model = terrain.getObjectByName("caet");

    if(model){
        const worldPos = new THREE.Vector3();
        model.getWorldPosition(worldPos);

        const shift = worldPos.clone().negate();
        terrain.position.add(shift);

        console.log("Moved terrain so model is at origin:", terrain.position);
    } else {
        console.warn("Model not yet loaded.");
    }
});

document.getElementById("cintenial").addEventListener("click", () => {
    const model = terrain.getObjectByName("Centenial");
    if (model) {
        const worldPos = new THREE.Vector3();
        model.getWorldPosition(worldPos);

        const shift = worldPos.clone().negate();
        terrain.position.add(shift);

        console.log("Moved terrain so model is at origin:", terrain.position);
    } else {
        console.warn("Model not yet loaded.");
    }
});
document.getElementById("pic").addEventListener("click", () => {
    const model = terrain.getObjectByName("pic");
    if (model) {
        const worldPos = new THREE.Vector3();
        model.getWorldPosition(worldPos);

        const shift = worldPos.clone().negate();
        terrain.position.add(shift);

        console.log("Moved terrain so model is at origin:", terrain.position);
    } else {
        console.warn("Model not yet loaded.");
    }
});
document.getElementById("gym").addEventListener("click", () => {
    const model = terrain.getObjectByName("gym");
    if (model) {
        const worldPos = new THREE.Vector3();
        model.getWorldPosition(worldPos);

        const shift = worldPos.clone().negate();
        terrain.position.add(shift);

        console.log("Moved terrain so model is at origin:", terrain.position);
    } else {
        console.warn("Model not yet loaded.");
    }
});


// setTimeout(() => {
//     const asset = terrain.children.find(child => child.type === 'Group' && child.name === '');
//     const buildingsGroup = asset || null;
//     const mouseEvents = setupMouseEvents(scene, camera, terrain, buildingsGroup, controls);

//     const libraryDiv = document.getElementById('Library');
//     if (libraryDiv) {
//         libraryDiv.addEventListener('click', () => {
//             mouseEvents.selectBuildingByName('Mesh_264_60');

//             if (!buildingsGroup) return;
//             const buildingMeshes = buildingsGroup.children.filter(child => child.isMesh || child.isGroup);
//             const targetMesh = buildingMeshes.find(b => b.name === 'Mesh_264_60');
//             if (!targetMesh) return;

//             const bbox = new THREE.Box3().setFromObject(targetMesh);
//             const center = bbox.getCenter(new THREE.Vector3());

//             const offset = new THREE.Vector3(0, 10, 15); 
//             const newCameraPos = center.clone().add(offset);

//             camera.position.copy(newCameraPos);
//             controls.target.copy(center);
//             controls.update();
//         });
//     }

//     const highlightedCodeDiv = document.getElementById('highlightedCode');
//     if (highlightedCodeDiv) {
//         highlightedCodeDiv.addEventListener('click', () => {
//             const fixedPosition = new THREE.Vector3(-60.5, 95, 0);
//             camera.position.copy(fixedPosition);

//             controls.target.set(0, 0, 0);
//             controls.update();

//             mouseEvents.selectBuildingByName('Mesh_69_14');
//         });
//     }

//     document.addEventListener('moveCameraToCOM', () => {
//         mouseEvents.selectBuildingByName('Mesh_69_14');

//         if (!buildingsGroup) return;
//         const buildingMeshes = buildingsGroup.children.filter(child => child.isMesh || child.isGroup);
//         const targetMesh = buildingMeshes.find(b => b.name === 'Mesh_69_14');
//         if (!targetMesh) return;

//         const bbox = new THREE.Box3().setFromObject(targetMesh);
//         const center = bbox.getCenter(new THREE.Vector3());

//         const offset = new THREE.Vector3(0, 10, 15);
//         const newCameraPos = center.clone().add(offset);

//         camera.position.copy(newCameraPos);
//         controls.target.copy(center);
//         controls.update();
//     });

//     const comliDiv = document.getElementById('comli');
//     if (comliDiv) {
//         comliDiv.addEventListener('click', () => {
//             const modelBuilding = document.getElementById('modelBuilding');
//             const college = document.getElementById('college');
//             const buildingtitle = document.getElementById('buildingtitle');
//             const buildingImg = document.getElementById('buildingImg');
//             const buildingSummary = document.getElementById('buildingSummary');

//             if (modelBuilding) modelBuilding.style.display = 'block';
//             if (college) college.style.display = 'none';

//             if (buildingtitle) buildingtitle.innerHTML = "COLLEGE OF MEDICINE";
//             if (buildingImg) buildingImg.src = "img/college_img/com.jpg";
//             if (buildingSummary) buildingSummary.innerHTML = `The Adventist University of the Philippines College of Medicine (AUPCOM) is the first and only Adventist medical school in the Philippines and the Asia-Pacific region established in 2015. It is only the sixth of seven Adventist medical schools globally, the oldest of which is the Loma Linda University School of Medicine in Loma Linda, California, USA.  AUP College of Medicine is the only medical school in the Philippines and Southeast Asia which includes in its medical curriculum courses in Lifestyle Medicine, Religion, and Whole Person Care, because of its main thrust to produce physician-missionaries for Christ.<br><br>

//             The medical school accepts baccalaureate allied health degree holders, to begin at the first-year level, with an NMAT score 60 and above, an above average GPA, an outstanding Christian character, and with good English communication skills. Freshmen Medicine students are welcomed in a White Coat Ceremony at the beginning of the year, with the donning of the white coat signifying the purity of the medical profession, and the giving out of the Holy Bible – the most important book above all books, and the Ministry of Healing. These medical students will be trained to become Five-Star Plus Physicians, namely, as mandated by CHED:  Clinician, Teacher, Researcher, Manager, and Social Mobilizer, and additionally the unique AUPCOM Plus – to become a Physician Missionary.<br><br>

//             At the fourth-year level, selected outstanding medical students are given the opportunity to go on clinical clerkship rotation for six weeks at our sister institution – the Loma Linda University School of Medicine – Medical Center in Loma Linda, California.`;  

//             mouseEvents.selectBuildingByName('Mesh_69_14');

//             if (!buildingsGroup) return;
//             const buildingMeshes = buildingsGroup.children.filter(child => child.isMesh || child.isGroup);
//             const targetMesh = buildingMeshes.find(b => b.name === 'Mesh_69_14');
//             if (!targetMesh) return;

//             const bbox = new THREE.Box3().setFromObject(targetMesh);
//             const center = bbox.getCenter(new THREE.Vector3());

//             const offset = new THREE.Vector3(0, 10, 15);
//             const newCameraPos = center.clone().add(offset);

//             camera.position.copy(newCameraPos);
//             controls.target.copy(center);
//             controls.update();
//         });
//     }
// }, 1000);

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

