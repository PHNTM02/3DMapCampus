import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { models } from './model.js';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export class AssetManager extends THREE.Group {
    constructor(tileSize = 1) {
        super();
        this.loader = new GLTFLoader();
        this.tileSize = tileSize; // Tile size for reference

        // Define positions for each model
        this.modelData = {
            'PIONEER': { x: 2, z: 2 },
            'CAH': { x: -3, z: 1 },
            'Tree1': { x: 0, z: -2 },
            'COD': { x: 4, z: 4},
            'COM': { x: 7, z: 7},
            'CaHCoTCoE': { x: 9, z: 9},
            'COD': { x: 1, z: 2},


        };

        this.loadModels();
    }

    // Function to calculate scale based on tile size
    modelSize(modelKey, baseScale) {
        return (baseScale / 3) * this.tileSize;
    }

    loadModels() {
        models.forEach((model) => {
            const modelKey = model.path.split('/').pop().replace('.gltf', '');
            const modelInfo = this.modelData[modelKey];

            if (modelInfo) {
                this.loader.load(model.path, (gltf) => {
                    const object = gltf.scene;
                    const adjustedScale = this.modelSize(modelKey, model.scale);

                    object.scale.set(adjustedScale, adjustedScale, adjustedScale);
                    object.position.set(modelInfo.x, 0, modelInfo.z);
                    this.add(object);
                });
            } else {
                console.warn(`No position data defined for ${model.path}`);
            }
        });
    }
}

// import * as THREE from 'three';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// export class Asset {
//     constructor(scene) {
//         this.scene = scene;
//         this.loader = new GLTFLoader();

//         this.generate();
//     }
    
//     generate() {
//         this.com();
//         this.pioneer();
//     }

//     com() {
//         this.loader.load('../models/model/COMNew.gltf', (gltf) => {
//             const model = gltf.scene;
//             model.position.set(0, 0, 0); // Adjust position as needed
//             this.scene.add(model);
//         });
//     }

//     pioneer() {
//         this.loader.load('../models/model/PIONEERNew.gltf', (gltf) => {
//             const model = gltf.scene;
//             model.position.set(5, 0, 0); // Adjust position as needed
//             this.scene.add(model);
//         });
//     }
// }

// import * as THREE from 'three';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// // Create Scene
// const scene = new THREE.Scene();

// // Asset Class
// export class Asset {
//     constructor(scene) {
//         if (!scene) {
//             console.error("Error: Scene is undefined! Make sure to pass a valid THREE.Scene.");
//             return;
//         }

//         this.scene = scene;
//         this.loader = new GLTFLoader();
//          HEAD
//          HEAD
//         this.tileSize = tileSize; // Tile size for reference

//         // Define positions for each model
//         this.modelData = {
//             'PIONEER': { x: 2, z: 2 },
//             'CAH': { x: -3, z: 1 },
//             'Tree1': { x: 0, z: -2 },
//             'COD': { x: 4, z: 4},
//             'COM': { x: 7, z: 7},
//             'CaHCoTCoE': { x: 9, z: 9},
//             'AUP Gate': { x: 1, z: 2}, // Added AUP Gate model
//             'COD': { x: 1, z: 2},



//         };

//         this.loadModels();

//      //497d8711a4962eade10ca07ed4324f93701a1448
//         this.generate();
//     }
    
//     generate() {
//         this.com();
//         this.pioneer();
//      HEAD
//      //497d8711a4962eade10ca07ed4324f93701a1448

//     // 497d8711a4962eade10ca07ed4324f93701a1448
//     }

//     com() {
//         this.loader.load(
//             '../models/model/COMNew.gltf',
//             (gltf) => {
//                 if (!this.scene) {
//                     console.error("Error: Scene is undefined when adding model!");
//                     return;
//                 }
//                 const model = gltf.scene;
//                 model.position.set(0, 5, 0);
//                 model.scale.set(5, 5, 5);
//                 this.scene.add(model);
//                 console.log("COMNew.gltf loaded successfully!");
//             },
//             undefined,
//             (error) => console.error("Failed to load COMNew.gltf:", error)
//         );
//     }

//     pioneer() {
//         this.loader.load(
//             '../models/model/PIONEERNew.gltf',
//             (gltf) => {
//                 if (!this.scene) {
//                     console.error("Error: Scene is undefined when adding model!");
//                     return;
//                 }
//                 const model = gltf.scene;
//                 model.position.set(5, 10, 0);
//                 model.scale.set(5, 5, 5);
//                 this.scene.add(model);
//                 console.log("PIONEERNew.gltf loaded successfully!");
//             },
//             undefined,
//             (error) => console.error("Failed to load PIONEERNew.gltf:", error)
//         );
//     }
// }
