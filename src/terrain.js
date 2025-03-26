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
import { AssetManager } from './assets.js';

export class Terrain extends THREE.Group {
    constructor() {
        super(); // Call the constructor of THREE.Group
        
        this.createTerrain();
        // this.loadAssets();
    }


    // createTerrain() {
    //     const grid = 50; // Grid size (50x50)
    //     const tileSize = 1; // Size of each tile
    
    //     const terrainMaterial = new THREE.MeshStandardMaterial({ color: 0x5ef77f });
    //     const terrainGroup = new THREE.Group(); // Group to hold all terrain tiles
    
    //     for (let i = 0; i < grid; i++) {
    //         for (let j = 0; j < grid; j++) {
    //             const terrainGeometry = new THREE.BoxGeometry(tileSize, 0.3, tileSize);
    //             const terrain = new THREE.Mesh(terrainGeometry, terrainMaterial);
    
    //             // Set the position for each tile based on its row and column
    //             terrain.position.set(i * tileSize - (grid * tileSize) / 2, -0.05, j * tileSize - (grid * tileSize) / 2);
    
    //             // Add the terrain tile to the group
    //             terrainGroup.add(terrain);
    //         }
    //     }
    
    //     terrainGroup.name = 'Terrain'; // Set name for the entire terrain group
    //     this.add(terrainGroup); // Add the whole terrain group to the scene
    // }
    
    createTerrain() {
        const grid = 50; // Grid size (50x50)
        const tileSize = 1; // Size of each tile
        
        const terrainMaterial = new THREE.MeshStandardMaterial({ color: 0x5ef77f });
        const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 }); // Material for grid lines
        
        const terrainGroup = new THREE.Group(); // Group to hold all terrain tiles and borders
        
        for (let i = 0; i < grid; i++) {
            for (let j = 0; j < grid; j++) {
                // Create terrain tile
                const terrainGeometry = new THREE.BoxGeometry(tileSize, 0.3, tileSize);
                const terrain = new THREE.Mesh(terrainGeometry, terrainMaterial);
        
                // Set the position for each tile based on its row and column
                terrain.position.set(i * tileSize - (grid * tileSize) / 2, -0.05, j * tileSize - (grid * tileSize) / 2);
        
                // Add the terrain tile to the group
                terrainGroup.add(terrain);
        
                // Add border lines around each tile
                this.addTileBorder(i, j, tileSize, lineMaterial, terrainGroup);
            }
        }
    
        terrainGroup.name = 'Terrain'; // Set name for the entire terrain group
        this.add(terrainGroup); // Add the whole terrain group to the scene
    }
    
    // Function to add borders around each tile
    addTileBorder(i, j, tileSize, material, group) {
        const borderVertices = [
            // Bottom border
            new THREE.Vector3(i * tileSize - (50 * tileSize) / 2, 0.15, j * tileSize - (50 * tileSize) / 2),
            new THREE.Vector3(i * tileSize - (50 * tileSize) / 2 + tileSize, 0.15, j * tileSize - (50 * tileSize) / 2),
            
            // Right border
            new THREE.Vector3(i * tileSize - (50 * tileSize) / 2 + tileSize, 0.15, j * tileSize - (50 * tileSize) / 2),
            new THREE.Vector3(i * tileSize - (50 * tileSize) / 2 + tileSize, 0.15, j * tileSize - (50 * tileSize) / 2 + tileSize),
            
            // Top border
            new THREE.Vector3(i * tileSize - (50 * tileSize) / 2 + tileSize, 0.15, j * tileSize - (50 * tileSize) / 2 + tileSize),
            new THREE.Vector3(i * tileSize - (50 * tileSize) / 2, 0.15, j * tileSize - (50 * tileSize) / 2 + tileSize),
            
            // Left border
            new THREE.Vector3(i * tileSize - (50 * tileSize) / 2, 0.15, j * tileSize - (50 * tileSize) / 2 + tileSize),
            new THREE.Vector3(i * tileSize - (50 * tileSize) / 2, 0.15, j * tileSize - (50 * tileSize) / 2)
        ];
    
        const borderGeometry = new THREE.BufferGeometry().setFromPoints(borderVertices);
        const border = new THREE.LineSegments(borderGeometry, material);
        group.add(border);
    }
    
    

    // terrain() {
    //     const tileSize = 1;  // Size of each tile (box)
    //     const gridSize = 50; // 100x100 grid
        
    //     // Create a box geometry for the tiles
    //     const geometry = new THREE.BoxGeometry(tileSize, 0.3, tileSize);  // Flat tiles (thin height)
    //     const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });  // Tile color (green)

    //     // Number of instances (100x100)
    //     const count = gridSize * gridSize;

    //     // Create an InstancedMesh (100x100 instances of the box)
    //     const instancedMesh = new THREE.InstancedMesh(geometry, material, count);

    //     // Set the positions for each tile in the grid
    //     const matrix = new THREE.Matrix4();
    //     for (let x = 0; x < gridSize; x++) {
    //         for (let z = 0; z < gridSize; z++) {
    //             const posX = x * tileSize; // Set X position for each tile
    //             const posZ = z * tileSize; // Set Z position for each tile

    //             matrix.setPosition(posX, 0, posZ);  // Set each tile's position (Y = 0 for flat terrain)
    //             instancedMesh.setMatrixAt(x * gridSize + z, matrix);  // Set the matrix for each tile
    //         }
    //     }

    //     // Add the instanced mesh to this group
    //     this.add(instancedMesh);
    // }

    loadAssets() {
        const assets = new AssetManager();
        this.add(assets);
    }
}
