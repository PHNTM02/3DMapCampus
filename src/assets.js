import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export class GetModel extends THREE.Group {
    constructor(tiles, tileSize = 1) {
        super();
        this.loader = new GLTFLoader();
        this.tiles = tiles;
        this.tileSize = tileSize;

        // Define model positions (supports .gltf & .glb)
        this.modelPositions = {
            'models/PIONEERNew.gltf': { x: 2, z: 2 },
            'models/CAH.gltf': { x: -3, z: 1 },
            'models/Tree1.gltf': { x: 0, z: -2 } // Example GLB model
        };

        this.loadModels();
    }

    loadModels() {
        for (const modelPath in this.modelPositions) {
            this.loadModel(modelPath, this.modelPositions[modelPath]);
        }
    }

    loadModel(modelPath, tileCoords) {
        this.loader.load(
            modelPath,
            (gltf) => {
                const model = gltf.scene;
                model.scale.set(0.08, 0.08, 0.08);
                model.traverse((child) => {
                    if (child.isMesh) {
                        child.castShadow = true;
                        child.receiveShadow = true;
                    }
                });

                this.placeModelOnTile(model, tileCoords);
                this.add(model);
            },
            undefined,
            (error) => {
                console.error(`Error loading model ${modelPath}:`, error);
            }
        );
    }

    placeModelOnTile(model, tileCoords) {
        let targetTile = this.findTileByCoords(tileCoords);
        if (targetTile) {
            model.position.set(
                targetTile.position.x,  
                targetTile.position.y + 0.2,  
                targetTile.position.z   
            );
            targetTile.material.color.set(0xff0000); // Highlight the tile
        } else {
            console.warn(`No tile found at (${tileCoords.x}, ${tileCoords.z}) for model placement.`);
        }
    }

    findTileByCoords(coords) {
        return this.tiles.find(tile => 
            Math.round(tile.position.x) === coords.x &&
            Math.round(tile.position.z) === coords.z
        );
    }
}
