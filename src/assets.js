import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export class GetModel extends THREE.Group {
    constructor() {
        super(); // Call parent class (THREE.Group)
        this.loader = new GLTFLoader();
        this.models = {}; // Store loaded models

        this.loadModels();
    }

    // Load multiple models
    loadModels() {
        const modelPaths = {
            tree1: './models/Tree1.gltf',
            pioneer: './models/PIONEER.glb'
        };

        for (const key in modelPaths) {
            this.loader.load(
                modelPaths[key],
                (gltf) => {
                    this.models[key] = gltf.scene;
                    console.log(`Loaded: ${key}`); // Debugging log
                },
                undefined,
                (error) => {
                    console.error(`Error loading ${modelPaths[key]}:`, error);
                }
            );
        }
    }

    // Generate a cube (for testing)
    createBox() {
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        cube.position.y = 0.5;
        this.add(cube);
    }

    // Get a cloned model by name
    getModel(name) {
        if (this.models[name]) {
            const clone = this.models[name].clone();
            clone.position.set(0, 0.5, 0); // Default position
            return clone;
        }
        console.warn(`Model ${name} not found.`);
        return null;
    }
}
