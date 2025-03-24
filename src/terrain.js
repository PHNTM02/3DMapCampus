import * as THREE from 'three';
import { Tile } from './tile.js'; // Import optimized tile class
// import { GetModel } from './assets.js'; // Import models (trees, buildings)


export class Terrain extends THREE.Group {
    constructor(width = 100, height = 100) {
        super();
        this.width = width;
        this.height = height;

        // Create the terrain grid
        this.createTerrain();
    }

    createTerrain() {
        const tileSize = 1;
        const gridSize = this.width; // Assuming square terrain
        const geometry = new THREE.BoxGeometry(tileSize, 0.3, tileSize);
        const material = new THREE.MeshStandardMaterial({ color: 0x5ef77f });

        // Use InstancedMesh to optimize performance (1 draw call instead of thousands)
        const terrainTiles = new THREE.InstancedMesh(geometry, material, gridSize * gridSize);
        const matrix = new THREE.Matrix4();

        let index = 0;
        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                matrix.setPosition(i - gridSize / 2 + 0.5, 0, j - gridSize / 2 + 0.5);
                terrainTiles.setMatrixAt(index, matrix);
                index++;
            }
        }

        terrainTiles.instanceMatrix.needsUpdate = true;
        this.add(terrainTiles);

        // Add Grid Helper (optional, only added once)
        const gridHelper = new THREE.GridHelper(this.width, this.width, 0x000000, 0x000000);
        this.add(gridHelper);
    }
}
