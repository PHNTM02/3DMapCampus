import * as THREE from 'three';
import { Asset } from './assets.js';

export class Terrain extends THREE.Group {
    constructor() {
        super();
        
        this.generate();
    }

    generate() {
        this.terrain();
        this.loadAssets();
    }

    terrain() {
        const tileSize = 1;
        const gridSize = 500; 
        
        // Create a box geometry for the tiles
        const geometry = new THREE.BoxGeometry(tileSize, 0.3, tileSize);
        const material = new THREE.MeshBasicMaterial({ color: 0x76e895 });

        // Number of instances (100x100)
        const count = gridSize * gridSize;

        // Create an InstancedMesh (100x100 instances of the box)
        const instancedMesh = new THREE.InstancedMesh(geometry, material, count);

        // Set the positions for each tile in the grid
        const matrix = new THREE.Matrix4();
        for (let x = 0; x < gridSize; x++) {
            for (let z = 0; z < gridSize; z++) {
                const posX = x * tileSize;
                const posZ = z * tileSize;

                matrix.setPosition(posX, 0, posZ);
                instancedMesh.setMatrixAt(x * gridSize + z, matrix);
            }
        }
        this.add(instancedMesh);
    }

    loadAssets() {
        if (!this.scene) {
            this.scene = new THREE.Scene(); // Create the scene if missing
        }
        
        const assets = new Asset(this.scene); // ✅ Pass the scene
    }
    
}
