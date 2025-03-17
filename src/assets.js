import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// export class GetModel extends THREE.Group {
//     constructor() {
//         super(); // Call parent class (THREE.Group)
//         this.loader = new GLTFLoader();
//         this.models = {}; // Store loaded models

//         this.loadModels();
//     }

//     // Load multiple models
//     loadModels() {
//         const modelPaths = {
//             tree1: './models/Tree1.gltf',
//             pioneer: './models/PIONEER.glb'
//         };

//         for (const key in modelPaths) {
//             this.loader.load(
//                 modelPaths[key],
//                 (gltf) => {
//                     this.models[key] = gltf.scene;
//                     console.log(`Loaded: ${key}`); // Debugging log
//                 },
//                 undefined,
//                 (error) => {
//                     console.error(`Error loading ${modelPaths[key]}:`, error);
//                 }
//             );
//         }
//     }

//     // Generate a cube (for testing)
//     createBox() {
//         const geometry = new THREE.BoxGeometry(1, 1, 1);
//         const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//         const cube = new THREE.Mesh(geometry, material);
//         cube.position.y = 0.5;
//         this.add(cube);
//     }

//     // Get a cloned model by name
//     getModel(name) {
//         if (this.models[name]) {
//             const clone = this.models[name].clone();
//             clone.position.set(0, 0.5, 0); // Default position
//             return clone;
//         }
//         console.warn(`Model ${name} not found.`);
//         return null;
//     }
// }

// export class GetModel extends THREE.Group {
//     constructor(tiles, tileSize = 1) {
//         super();
//         this.loader = new GLTFLoader();
//         this.tiles = tiles;
//         this.tileSize = tileSize;
//         this.loadModel();
//     }

//     loadModel() {
//         this.loader.load(
//             'models/PIONEER.gltf',
//             (gltf) => {
//                 const model = gltf.scene;
//                 model.scale.set(0.05, 0.05, 0.05); // Adjust scale if necessary
//                 model.position.set(0, 0.2, 0); // Ensure it's slightly above the tile
//                 model.traverse((child) => {
//                     if (child.isMesh) {
//                         child.castShadow = true;
//                         child.receiveShadow = true;
//                     }
//                 });
//                 this.add(model);
//                 this.findtile(model);
//             },
//             undefined,
//             (error) => {
//                 console.error('Error loading model:', error);
//             }
//         );
//     }

//     findtile(model) {
//         const objPosition = model.position;

//         let closerTile = null;
//         let minDistance = Infinity;

//         this.tiles.forEach((tile) => {
//             const distance = objPosition.distanceTo(tile.position);
//             if(distance < minDistance){
//                 minDistance = distance;
//                 closerTile = tile;
//             }
//         });

//         if(closerTile) {
//             console.log("Model is placed at (x:"+ closerTile.position.x + ", y: "+ closerTile.position.z + ")");
//             closerTile.material.color.set(0xff0000);
//         }else {
//             console.log("No Tile is placed");
//         }
//     }
// }



// export class GetModel extends THREE.Group {
//     constructor(tiles, tileSize = 1) {
//         super();
//         this.loader = new GLTFLoader();
//         this.tiles = tiles;
//         this.tileSize = tileSize;
//         this.loadModels(); // Load multiple models
//     }

//     loadModels() {
//         this.loadModel('models/PIONEER.gltf', new THREE.Vector3(0, 0.2, 0)); // Original model
//         this.loadModel('models/CST1.gltf', new THREE.Vector3(3, 0.2, 0)); // Fixed position
//     }

//     loadModel(modelPath, position) {
//         this.loader.load(
//             modelPath,
//             (gltf) => {
//                 const model = gltf.scene;
//                 model.scale.set(0.05, 0.05, 0.05); // Adjust scale if necessary
//                 model.position.copy(position); // Set to specified position
//                 model.traverse((child) => {
//                     if (child.isMesh) {
//                         child.castShadow = true;
//                         child.receiveShadow = true;
//                     }
//                 });
//                 this.add(model);
//                 this.findTile(model);
//             },
//             undefined,
//             (error) => {
//                 console.error(`Error loading model ${modelPath}:`, error);
//             }
//         );
//     }

//     findTile(model) {
//         const objPosition = model.position;
//         let closestTile = null;
//         let minDistance = Infinity;

//         this.tiles.forEach((tile) => {
//             const distance = objPosition.distanceTo(tile.position);
//             if (distance < minDistance) {
//                 minDistance = distance;
//                 closestTile = tile;
//             }
//         });

//         if (closestTile) {
//             console.log(`Model placed near tile at (x: ${closestTile.position.x}, z: ${closestTile.position.z})`);
//             closestTile.material.color.set(0xff0000);
//         } else {
//             console.log("No tile found for model placement.");
//         }
//     }
// }



export class GetModel extends THREE.Group {
    constructor(tiles, tileSize = 1) {
        super();
        this.loader = new GLTFLoader();
        this.tiles = tiles;
        this.tileSize = tileSize;

        // Define model positions based on tile grid coordinates
        this.modelPositions = {
            'models/PIONEER.gltf': { x: 2, z: 2 }, // Example position (tile at 2,2)
            'models/CAH.gltf': { x: -3, z: 1 },   // Example position (tile at -3,1)
            'models/low_poly_building.glb': { x: 1, z: -3}
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

