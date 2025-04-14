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
        this.loadCAH();
        // this.loadCON();
        this.loadCOE();
        // this.loadCOM();
        this.loadCOT();
        // this.loadPioneer();

    }

    loadGate() {
        const gatePath = '../models/model/modell/Gate 1.glb';
        const gatePosition = new THREE.Vector3(1, 4.5, 0);
        const gateRotation = new THREE.Euler(Math.PI / 2, Math.PI / 2 - 0.05, 0);
        const gateScale = 0.18;
        this.loadGLTFModel(gatePath, gatePosition, gateRotation, gateScale);
    }

    loadCAH() {
        const codPath = '../models/model/modell/CAH 1.glb';
        const codPosition = new THREE.Vector3(-49.5, 31.5, 0.1);
        const codRotation = new THREE.Euler(Math.PI / 2, Math.PI, 0);
        const codScale = 0.18;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }

    loadCOB() {
        const codPath = '../models/model/modell/CAH 1.glb';
        const codPosition = new THREE.Vector3(11.5, 10.5, 0);
        const codRotation = new THREE.Euler(Math.PI / 2, Math.PI / 2, Math.PI / 2);
        const codScale = 0.18;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }

    loadCOD() {
        const codPath = '../models/model/modell/COD (1).glb';
        const codPosition = new THREE.Vector3(-12.5, 40.5, 0);
        const codRotation = new THREE.Euler(Math.PI / 2, Math.PI, 0);
        const codScale = 0.18;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }

    loadCOE() {
        const codPath = '../models/model/modell/COE 1.glb';
        const codPosition = new THREE.Vector3(-47.5, 34.5, 0);
        // const codPosition = new THREE.Vector3(-5, 6, -0.32);
        const codRotation = new THREE.Euler(Math.PI / 2, Math.PI / 2, 0);
        const codScale = 0.25;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }

    loadCOM() {
        const codPath = '../models/model/modell/COM 1.glb';
        const codPosition = new THREE.Vector3(-20.5, 10.5, 0);
        const codRotation = new THREE.Euler(Math.PI / 2, Math.PI / 2, Math.PI / 2);
        const codScale = 0.18;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }

    loadCON() {
        const codPath = '../models/model/modell/_CON.glb';
        const codPosition = new THREE.Vector3(-1.5, 15.5, 0);
        const codRotation = new THREE.Euler(Math.PI / 2, Math.PI / 2, Math.PI / 2);
        const codScale = 0.18;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }

    loadCOT() {
        const codPath = '../models/model/modell/COT 1.glb';
        const codPosition = new THREE.Vector3(-43.5, 29.5, 0.7);
        // const codPosition = new THREE.Vector3(-5, 6, 0.5);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI, 0);
        const codScale = 0.25;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }

    loadCST() {
        const codPath = '../models/model/modell/CAH 1.glb';
        const codPosition = new THREE.Vector3(-1.5, 10.5, 0);
        const codRotation = new THREE.Euler(Math.PI / 2, Math.PI / 2, Math.PI / 2);
        const codScale = 0.18;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }

    loadPioneer() {
        const codPath = '../models/model/modell/PIONEER 1.glb';
        const codPosition = new THREE.Vector3(1.5, 25.5, 0);
        const codRotation = new THREE.Euler(Math.PI / 2, Math.PI / 2, Math.PI / 2);
        const codScale = 0.18;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
}
