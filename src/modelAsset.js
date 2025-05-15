import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export class building extends THREE.Group {
    constructor(scene) {
        super();

        this.loader = new GLTFLoader();
    }

    loadGLTFModel(path, position, rotation, scale, name) {
        this.loader.load(
            path,
            (gltf) => {
                const model = gltf.scene;
                model.scale.set(scale, scale, scale);
                model.position.set(position.x, position.y, position.z);
                model.rotation.set(rotation.x, rotation.y, rotation.z);
                model.name = name;
                this.add(model);
            },
            undefined,
            (error) => {
                console.error(`Error loading model at ${path}:`, error);
            }
        );
    }

    loadCOB() {
        const codPath = '../FinalModel/COB.glb';
        const codPosition = new THREE.Vector3(0, 0, 0);
        const codRotation = new THREE.Euler(Math.PI * 2, Math.PI, 0);
        const codScale = 0.8;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale, "cob");
    }

    loadArrow() {
        const codPath = './models/model/modell/road/direction_arrow.glb';
        const codPosition = new THREE.Vector3(1.5, 0.5, 0.7);
        const codRotation =  new THREE.Euler(0, 0, -Math.PI / 2);
        const codScale = 0.1;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale, "cst");
    }
}