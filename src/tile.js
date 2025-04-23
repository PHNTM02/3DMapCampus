import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export class Road extends THREE.Group {
    constructor(scene) {
        super();
        
        this.loader = new GLTFLoader();
        this.road();
    }

    road() {
        this.straightRoad2();
    }

    straightRoad2() {
// Outside Road
        // for(let a = 1; a < 100; a++) {
        //     this.loader.load(
        //         "../models/model/modell/straightRoad.gltf",
        //         (gltf) => {
        //             const model = gltf.scene;
        //             model.scale.set(0.33, 0.3, 0.335);
        //             model.position.set( a + (-49.5), 2.5, 0); // 0.5 on x to center, a + (-49.5) on x
        //             model.rotation.set(0, Math.PI / 2, Math.PI / 2);
        //             this.add(model);
        //         },
        //         undefined,
        //         (error) => {
        //             console.error("Error loading straight.gltf:", error);
        //         }
        //     );
        // }

// After Gate
        for(let i = 0; i < 21; i++) {
            this.loader.load(
                "../models/model/modell/straightRoad.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(0.7, 0.3, 0.335);
                    model.position.set(1, i + (-2.5), 0); // 0.5 on x to center, i - 0.5 on y
                    model.rotation.x = Math.PI / 2;
                    this.add(model);
                },
                undefined,
                (error) => {
                    console.error("Error loading straight.gltf:", error);
                }
            );
        }
// First cross Road
        // this.loader.load(
        //     "../models/model/modell/roadT-section.gltf", 
        //     (gltf) => {
        //     const model = gltf.scene;

        //     model.scale.set(1, 0.7, 0.335);
            
        //     model.position.set(1, 21.5, 0);
        //     model.rotation.set(Math.PI / 2, Math.PI + 1.568, 0);
        //     this.add(model);
        // }, undefined, (error) => {
        //     console.error("Error loading straightRoad.gltf:", error);
        // });
        for(let a = 1; a < 13; a++) {
            this.loader.load(
                "../models/model/modell/straightRoad.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(0.7, 0.3, 0.335);
                    model.position.set( a + (1.5), 19, 0);
                    model.rotation.set(0, Math.PI / 2, Math.PI / 2);
                    this.add(model);
                },
                undefined,
                (error) => {
                    console.error("Error loading straight.gltf:", error);
                }
            );
        }

// TO MUSIC DEPT
        for(let a = 1; a < 25; a++) {
            this.loader.load(
                "../models/model/modell/straightRoad.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(0.7, 0.3, 0.335);
                    model.position.set( -a + 0.5, 19, 0);
                    model.rotation.set(0, Math.PI / 2, Math.PI / 2);
                    this.add(model);
                },
                undefined,
                (error) => {
                    console.error("Error loading straight.gltf:", error);
                }
            );
        }

        for(let i = 0; i < 15; i++) {
            this.loader.load(
                "../models/model/modell/straightRoad.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(0.7, 0.3, 0.335);
                    model.position.set(-25, -i + 17.5, 0); // 0.5 on x to center, i - 0.5 on y
                    model.rotation.x = Math.PI / 2;
                    this.add(model);
                },
                undefined,
                (error) => {
                    console.error("Error loading straight.gltf:", error);
                }
            );
        }

        for(let a = 1; a < 15; a++) {
            this.loader.load(
                "../models/model/modell/straightRoad.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(0.7, 0.3, 0.335);
                    model.position.set( -a + (-25.5), 12, 0);
                    model.rotation.set(0, Math.PI / 2, Math.PI / 2);
                    this.add(model);
                },
                undefined,
                (error) => {
                    console.error("Error loading straight.gltf:", error);
                }
            );
        }




    }
}
