import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export class Asset extends THREE.Group {
    constructor(tileSize = 1) {
        super();
        this.loader = new GLTFLoader();
    }

    loadGLTFModel(path, position, rotation, scale) {
        this.loader.load(
            path,
            (gltf) => {
                const model = gltf.scene;
                model.scale.set(scale, scale, scale);
                model.position.set(position.x, position.y, position.z);
                model.rotation.set(Math.PI / 2, rotation.y, rotation.z);
                this.add(model);
            },
            undefined,
            (error) => {
                console.error(`Error loading model at ${path}:`, error);
            }
        );
    }

    loadAll() {
        this.loadApartment();
        this.loadHotel();
        this.loadStore();
    }

    loadApartment() {
        const apartmentPath = '/poly-apartment.gltf';
        const apartmentPosition = new THREE.Vector3(0, 0, 0);
        const apartmentRotation = new THREE.Euler(0, Math.PI / 2, 0);
        const apartmentScale = 2;
        this.loadGLTFModel(apartmentPath, apartmentPosition, apartmentRotation, apartmentScale);
    }
}
