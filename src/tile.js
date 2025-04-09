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
        this.straightRoad3(20);
        // this.outRoad2(100);
    }

    straightRoad2() {
        this.loader.load(
            "../models/model/straightRoad.gltf", 
            (gltf) => {
            const model = gltf.scene;

            model.scale.set(0.33, 0.3, 0.335);
            
            model.position.set(2.5, 26.5, 0);
            model.rotation.set(0, Math.PI / 2, Math.PI / 2);
            this.add(model);
        }, undefined, (error) => {
            console.error("Error loading straightRoad.gltf:", error);
        });

        for(let a = 1; a < 100; a++) {
            this.loader.load(
                "../models/model/straightRoad.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(0.33, 0.3, 0.335);
                    model.position.set( a + (-49.5), 2.5, 0); // 0.5 on x to center, a + (-49.5) on x
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

    straightRoad3(count) {
        for(let i = 0; i < count; i++) {
            this.loader.load(
                "../models/model/straightRoad.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(0.33, 0.3, 0.335);
                    model.position.set(1.5, i + 6.5, 0); // 0.5 on x to center, i - 0.5 on y
                    model.rotation.x = Math.PI / 2;
                    this.add(model);
                },
                undefined,
                (error) => {
                    console.error("Error loading straight.gltf:", error);
                }
            );
        }
    }

    // outRoad2(count) {
    //     this.loader.load(
    //         "../models/model/straightRoad.gltf", 
    //         (gltf) => {
    //         const model = gltf.scene;

    //         model.scale.set(0.33, 0.3, 0.335);
            
    //         model.position.set(0.5, 1.5, 0);
    //         model.rotation.set(0, Math.PI / 2, Math.PI / 2);
    //         this.add(model);
    //     }, undefined, (error) => {
    //         console.error("Error loading straightRoad.gltf:", error);
    //     });

    //     for(let a = 0; a < count; a++) {
    //         this.loader.load(
    //             "../models/model/straightRoad.gltf",
    //             (gltf) => {
    //                 const model = gltf.scene;
    //                 model.scale.set(0.33, 0.3, 0.335);
    //                 model.position.set( a + (-49.5), 1.5, 0); // 0.5 on x to center, i - 0.5 on y
    //                 model.rotation.set(0, Math.PI / 2, Math.PI / 2);
    //                 this.add(model);
    //             },
    //             undefined,
    //             (error) => {
    //                 console.error("Error loading straight.gltf:", error);
    //             }
    //         );
    //     }

    //     for(let b = 0; b < count; b++) {
    //         this.loader.load(
    //             "../models/model/straightRoad.gltf",
    //             (gltf) => {
    //                 const model = gltf.scene;
    //                 model.scale.set(0.33, 0.3, 0.335);
    //                 model.position.set( -b + (-2.5), 1.5, 0); // 0.5 on x to center, i - 0.5 on y
    //                 model.rotation.set(0, Math.PI / 2, Math.PI / 2);
    //                 this.add(model);
    //             },
    //             undefined,
    //             (error) => {
    //                 console.error("Error loading straight.gltf:", error);
    //             }
    //         );
    //     }
    // }


}
