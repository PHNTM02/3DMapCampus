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
                const gridhelper = new THREE.GridHelper(this.width, this.width / tileSize, 0x000000, 0x000000);
                terrainGrid.add(gridhelper);
            }
        }

        this.add(terrainGrid);
    }

    loadModel() {
        const tileSize = 1;
        const model = new GetModel(this.tiles, tileSize);
        model.position.set(0, 0.2, 0);
        this.add(model);
    }
}
