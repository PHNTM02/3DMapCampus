import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


export class AssetLoader extends THREE.Group {
    constructor(tiles, tileSize = 1) {
        super();
        this.loader = new GLTFLoader();
        this.models = {};
        this.tiles = tiles || [];  // Ensure tiles array is valid
        this.tileSize = tileSize;
    }

    loadModels(callback) {
        const modelPaths = {
            tree1: 'assets/tree1.gltf',
            PIONEER: 'assets/PIONEER.gltf',
            CST1: 'assets/CST1.gltf',
            CAH: 'assets/CAH.gltf'
        };

        let loadedCount = 0;
        const totalModels = Object.keys(modelPaths).length;

        Object.entries(modelPaths).forEach(([key, path]) => {
            this.loader.load(
                path,
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(0.05, 0.05, 0.05);

                    model.traverse((child) => {
                        if (child.isMesh) {
                            child.castShadow = true;
                            child.receiveShadow = true;
                        }
                    });

                    this.models[key] = model;

                    if (key !== 'tree1') {
                        this.add(model);
                        this.placeOnClosestTile(model);
                        console.log(`${key} placed at:`, model.position);
                    }

                    loadedCount++;
                    if (loadedCount === totalModels) {
                        callback();
                    }
                },
                undefined,
                (error) => {
                    console.error(`Error loading ${key}:`, error);
                }
            );
        });
    }

    getModel(name) {
        if (!this.models[name]) {
            console.warn(`Model '${name}' not found!`);
            return null;
        }
        return this.models[name].clone();
    }

    placeOnClosestTile(model) {
        if (!this.tiles.length) {
            console.warn("No tiles available to place the model.");
            return;
        }

        let closestTile = null;
        let minDistance = Infinity;

        this.tiles.forEach((tile) => {
            const distance = model.position.distanceTo(tile.position);
            if (distance < minDistance) {
                minDistance = distance;
                closestTile = tile;
            }
        });

        if (closestTile) {
            model.position.set(closestTile.position.x, 0.1, closestTile.position.z);
            closestTile.material.color.set(0xff0000);
            console.log(`Model placed on tile: (x: ${closestTile.position.x}, z: ${closestTile.position.z})`);
        } else {
            console.warn("No nearby tile found for placement.");
        }
    }

    placeModelAtNearestTile(name) {
        const model = this.getModel(name);
        if (!model) return;

        this.add(model);
        this.placeOnClosestTile(model);
    }
}
