import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export class Asset extends THREE.Group {
    constructor(scene) {
        super();

        this.loader = new GLTFLoader();
        this.loadAll();
    }

    loadGLTFModel(path, position, rotation, scale) {
        this.loader.load(
            path,
            (gltf) => {
                const model = gltf.scene;
                model.scale.set(scale, scale, scale);
                model.position.set(position.x, position.y, position.z);
                model.rotation.set(rotation.x, rotation.y, rotation.z);
                this.add(model);
            },
            undefined,
            (error) => {
                console.error(`Error loading model at ${path}:`, error);
            }
        );
    }

    loadAll() {
        this.loadGate();
        this.loadCOD();
    }

    loadGate() {
        const gatePath = '../models/model/AUPGate.gltf';
        const gatePosition = new THREE.Vector3(0.5, 5.5, 0);
        const gateRotation = new THREE.Euler(Math.PI / 2, Math.PI / 2, 0);
        const gateScale = 0.18;
        this.loadGLTFModel(gatePath, gatePosition, gateRotation, gateScale);
    }

    loadCOD() {
        const codPath = '../models/model/COD.gltf';
        const codPosition = new THREE.Vector3(-1.5, 10.5, 0);
        const codRotation = new THREE.Euler(Math.PI / 2, Math.PI / 2, Math.PI / 2);
        const codScale = 0.18;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
}
