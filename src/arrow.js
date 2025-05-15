import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export class Arrow extends THREE.Group {
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

    loadArrow() {
        const codPath = './models/model/modell/road/direction_arrow.glb';
        const codPosition = new THREE.Vector3(0, 10, 0);
        const codRotation =  new THREE.Euler(0, Math.PI / 2,  -Math.PI / 2);
        const codScale = 1.5;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale, "cst");
    }
}