// import * as THREE from 'three';

// export class Terrain extends THREE.Group{
//     constructor(width, height) {
//         super();

//         this.width = width;
//         this.height = height;
//         this.tiles = [];

        
//         // Export the Terrain
//         this.createTerrain();
//     }

//     createTerrain() {

//         const tileSize = 1;
//         const gridSize = 16;
//         const terrainGrid = new THREE.Group();

//         for (let i = 0; i < gridSize; i++) {
//             for (let j = 0; j < gridSize; j++) {
//                 const geometry = new THREE.BoxGeometry(tileSize, 0.3, tileSize);
//                 const material = new THREE.MeshStandardMaterial({ color: 0x2ff53c });
//                 const tile = new THREE.Mesh(geometry, material);

//                 tile.position.set(i - gridSize / 2, 0, j - gridSize / 2); // Center the grid
//                 terrainGrid.add(tile);
//                 this.tiles.push(tile);

//                 const edges = new THREE.EdgesGeometry(geometry);
//                 const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
//                 const line = new THREE.LineSegments(edges, lineMaterial);
//                 line.position.copy(tile.position);
//                 terrainGrid.add(line);
//             }
//         }
//         this.add(terrainGrid);

//     }
// }

import * as THREE from 'three';
import { GetModel } from './assets.js'; // Import assets (tree models)

export class Terrain extends THREE.Group {
    constructor(width=16, height=16) {
        super();

        this.width = width;
        this.height = height;
        this.tiles = [];


        // Create the terrain grid
        this.createTerrain();

        // Manually place objects
        // this.placeObjects();
        this.loadModel();
    }

    createTerrain() {
        const tileSize = 1;
        const gridSize = this.width;
        const terrainGrid = new THREE.Group();

        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                // Create green tile
                const geometry = new THREE.BoxGeometry(tileSize, 0.3, tileSize);
                const material = new THREE.MeshStandardMaterial({ color: 0x5ef77f });
                const tile = new THREE.Mesh(geometry, material);

                // Center each tile
                tile.position.set(i - gridSize / 2 + 0.5, 0, j - gridSize / 2 + 0.5);
                terrainGrid.add(tile);
                this.tiles.push(tile);
                // this.tiles.push({ tile, position: { x: i, z: j } });

                // Add grid lines
                const edges = new THREE.EdgesGeometry(geometry);
                const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
                const line = new THREE.LineSegments(edges, lineMaterial);
                line.position.copy(tile.position);
                terrainGrid.add(line);
                // const gridhelper = new THREE.GridHelper(this.width, this.width / tileSize, 0x000000, 0x000000);
                // terrainGrid.add(gridhelper);
            }
        }

        this.add(terrainGrid);
    }

    // placeObjects() {
    //     // Manually define object positions (grid coordinates)
    //     const objectPositions = [
    //         { type: 'pioneer', x: 4, z: 4 },   // Box at tile (4,4)
    //         { type: 'tree1', x: 2, z: 7 }, // Tree1 at tile (2,7)
    //     ];

    //     objectPositions.forEach(({ type, x, z }) => {
    //         let object;

    //         if (type === 'box') {
    //             object = this.createBox();
    //         } else {
    //             object = this.modelLoader.getModel(type);
    //         }

    //         if (object) {
    //             // Center the object on the tile
    //             object.position.set(x - 16 / 2 + 0.5, 0.5, z - 16 / 2 + 0.5);
    //             this.add(object);
    //         }
    //     });
    // }

    loadModel() {
        const tileSize = 1;
        const model = new GetModel(this.tiles, tileSize);
        model.position.set(0, 0.2, 0);
        this.add(model);
    }
}
