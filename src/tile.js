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
        for(let i = 0; i < 20; i++) {
            this.loader.load(
                "../models/model/modell/straightRoad.gltf",
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

// First cross Road
        this.loader.load(
            "../models/model/modell/roadT-section.gltf", 
            (gltf) => {
            const model = gltf.scene;

            model.scale.set(0.33, 0.3, 0.335);
            
            model.position.set(1.5, 26.5, 0);
            model.rotation.set(Math.PI / 2, Math.PI + 1.568, 0);
            this.add(model);
        }, undefined, (error) => {
            console.error("Error loading straightRoad.gltf:", error);
        });
// Above Rotonda Left and Right
        for(let a = 1; a < 40; a++) {
            this.loader.load(
                "../models/model/modell/straightRoad.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(0.33, 0.3, 0.335);
                    model.position.set( a + (2.5), 26.5, 0);
                    model.rotation.set(0, Math.PI / 2, Math.PI / 2);
                    this.add(model);
                },
                undefined,
                (error) => {
                    console.error("Error loading straight.gltf:", error);
                }
            );
        }
        for(let a = 1; a < 10; a++) {
            this.loader.load(
                "../models/model/modell/straightRoad.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(0.33, 0.3, 0.335);
                    model.position.set( -a + (0.5), 26.5, 0);
                    model.rotation.set(0, Math.PI / 2, Math.PI / 2);
                    this.add(model);
                },
                undefined,
                (error) => {
                    console.error("Error loading straight.gltf:", error);
                }
            );
        }
        for(let a = 1; a < 39; a++) {
            this.loader.load(
                "../models/model/modell/straightRoad.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(0.33, 0.3, 0.335);
                    model.position.set( -a + (-11.5), 26.5, 0);
                    model.rotation.set(0, Math.PI / 2, Math.PI / 2);
                    this.add(model);
                },
                undefined,
                (error) => {
                    console.error("Error loading straight.gltf:", error);
                }
            );
        }
// Left side T-section
        this.loader.load(
            "../models/model/modell/roadT-section.gltf", 
            (gltf) => {
            const model = gltf.scene;

            model.scale.set(0.33, 0.3, 0.335);
            
            model.position.set(-10.5, 26.5, 0);
            model.rotation.set(Math.PI / 2, Math.PI - 1.568, 0);
            this.add(model);
        }, undefined, (error) => {
            console.error("Error loading straightRoad.gltf:", error);
        });
// Above Left side T-section
        for(let i = 0; i < 5; i++) {
            this.loader.load(
                "../models/model/modell/straightRoad.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(0.33, 0.3, 0.335);
                    model.position.set(-10.5, i + 28.5, 0);
                    model.rotation.x = Math.PI / 2;
                    this.add(model);
                },
                undefined,
                (error) => {
                    console.error("Error loading straight.gltf:", error);
                }
            );
        }
// Left above side T-section Library
        this.loader.load(
            "../models/model/modell/roadT-section.gltf", 
            (gltf) => {
            const model = gltf.scene;

            model.scale.set(0.33, 0.3, 0.335);
            
            model.position.set(-10.5, 34.5, 0);
            model.rotation.set(Math.PI / 2, Math.PI, 0);
            this.add(model);
        }, undefined, (error) => {
            console.error("Error loading straightRoad.gltf:", error);
        });
// straigh to COB & CST
        for(let a = 1; a < 20; a++) {
            this.loader.load(
                "../models/model/modell/straightRoad.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(0.33, 0.3, 0.335);
                    model.position.set( -a + (-11.5), 34.5, 0);
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
