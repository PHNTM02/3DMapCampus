// import * as THREE from 'three';
// import { Tile } from './tile.js'; // Import optimized tile class
// // import { GetModel } from './assets.js'; // Import models (trees, buildings)


// export class Terrain extends THREE.Group {
//     constructor(width = 100, height = 100) {
//         super();
//         this.width = width;
//         this.height = height;

//         // Create the terrain grid
//         this.createTerrain();
//     }

//     createTerrain() {
//         const tileSize = 1;
//         const gridSize = this.width; // Assuming square terrain
//         const geometry = new THREE.BoxGeometry(tileSize, 0.3, tileSize);
//         const material = new THREE.MeshStandardMaterial({ color: 0x5ef77f });

//         // Use InstancedMesh to optimize performance (1 draw call instead of thousands)
//         const terrainTiles = new THREE.InstancedMesh(geometry, material, gridSize * gridSize);
//         const matrix = new THREE.Matrix4();

//         let index = 0;
//         for (let i = 0; i < gridSize; i++) {
//             for (let j = 0; j < gridSize; j++) {
//                 matrix.setPosition(i - gridSize / 2 + 0.5, 0, j - gridSize / 2 + 0.5);
//                 terrainTiles.setMatrixAt(index, matrix);
//                 index++;
//             }
//         }

//         terrainTiles.instanceMatrix.needsUpdate = true;
//         this.add(terrainTiles);

//         // Add Grid Helper (optional, only added once)
//         const gridHelper = new THREE.GridHelper(this.width, this.width, 0x000000, 0x000000);
//         this.add(gridHelper);
//     }
// }

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
        const assets = new Asset();
        this.add(assets);
    }
}
