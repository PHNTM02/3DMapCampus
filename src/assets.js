import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export class Asset extends THREE.Group {
    constructor(scene) {
        super();

        this.loader = new GLTFLoader();
        // this.loadAll();
        this.building();
    }

    // loadGLTFModel(path, position, rotation, scale) {
    //     this.loader.load(
    //         path,
    //         (gltf) => {
    //             const model = gltf.scene;
    //             model.scale.set(scale, scale, scale);
    //             model.position.set(position.x, position.y, position.z);
    //             model.rotation.set(Math.PI / 2, rotation.y, rotation.z);
    //             this.add(model);
    //         },
    //         undefined,
    //         (error) => {
    //             console.error(`Error loading model at ${path}:`, error);
    //         }
    //     );
    // }

    // loadAll() {
    //     this.loadGate();
    // }

    // loadGate() {
    //     const gatePath = '../models/model/AUPGate.gltf';
    //     const gatePosition = new THREE.Vector3(0.5, 5.5, 0);
    //     const gateRotation = new THREE.Euler(0, Math.PI / 2, 0);
    //     const gateScale = 0.18;
    //     this.loadGLTFModel(gatePath, gatePosition, gateRotation, gateScale);
    // }

    building() {
        this.loader.load(
            "../models/model/AUPGate.gltf", 
            (gltf) => {
            const model = gltf.scene;

            model.scale.set(0.18, 0.18, 0.18);
            
            model.position.set(0.5, 5.5, 0);
            model.rotation.set(Math.PI / 2, Math.PI / 2, 0);
            this.add(model);
        }, undefined, (error) => {
            console.error("Error loading straightRoad.gltf:", error);
        });

        this.loader.load(
            "../models/model/COD.gltf", 
            (gltf) => {
            const model = gltf.scene;

            model.scale.set(0.18, 0.18, 0.18);
            
            model.position.set(-5.5, 10.5, 0);
            model.rotation.set(0, -Math.PI / 2, -Math.PI / 2);
            this.add(model);
        }, undefined, (error) => {
            console.error("Error loading straightRoad.gltf:", error);
        });
    }
}
