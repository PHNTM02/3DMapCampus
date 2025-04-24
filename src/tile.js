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
                    model.position.set(1, i + (-2.5), 0); 
                    model.rotation.x = Math.PI / 2;
                    this.add(model);
                },
                undefined,
                (error) => {
                    console.error("Error loading straight.gltf:", error);
                }
            );
        }
        for(let i = 0; i < 2; i++){
            this.loader.load(
                "../models/model/modell/road/noHutter.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(0.7, 0.3, 0.335);
                    model.position.set(1, i + 18.5, 0);
                    model.rotation.x = Math.PI / 2;
                    this.add(model);
                },
                undefined,
                (error) => {
                    console.error("Error loading straight.gltf:", error);
                }
            );
        }
        this.loader.load(
            "../models/model/modell/road/noHutter.gltf",
            (gltf) => {
                const model = gltf.scene;
                model.scale.set(0.7, 0.3, 0.335);
                model.position.set(1, 18.5, 0); 
                model.rotation.x = Math.PI / 2;
                this.add(model);
            },
            undefined,
            (error) => {
                console.error("Error loading straight.gltf:", error);
            }
        );
// First cross Road
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
        for(let i = 0; i < 5; i++) {
            this.loader.load(
                "../models/model/modell/straightRoad.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(0.7, 0.3, 0.335);
                    model.position.set(-25, -i + 17.5, 0);
                    model.rotation.x = Math.PI / 2;
                    this.add(model);
                },
                undefined,
                (error) => {
                    console.error("Error loading straight.gltf:", error);
                }
            );
        }
        this.loader.load(
            "../models/model/modell/road/lowergutter.gltf",
            (gltf) => {
                const model = gltf.scene;
                model.scale.set(0.7, 0.3, 0.7);
                model.position.set(-25, 12, 0);
                model.rotation.set(Math.PI, -Math.PI / 2, Math.PI / 2);
                this.add(model);
            },
            undefined,
            (error) => {
                console.error("Error loading straight.gltf:", error);
            }
        );
        this.loader.load(
            "../models/model/modell/road/lowerrightcorner.gltf",
            (gltf) => {
                const model = gltf.scene;
                model.scale.set(0.7, 0.3, 0.7);
                model.position.set(-25, 19, 0);
                model.rotation.set(Math.PI * 2, Math.PI / 2, Math.PI / 2);
                this.add(model);
            },
            undefined,
            (error) => {
                console.error("Error loading straight.gltf:", error);
            }
        );
        for(let a = 1; a < 10; a++) {
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
// CROSSROAD ABOVE IN GYM & PIC
        for(let i = 0; i < 18; i++) {
            this.loader.load(
                "../models/model/modell/straightRoad.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(0.7, 0.3, 0.335);
                    model.position.set(1, i + 20.5, 0);
                    model.rotation.x = Math.PI / 2;
                    this.add(model);
                },
                undefined,
                (error) => {
                    console.error("Error loading straight.gltf:", error);
                }
            );
        }
        for(let i = 0; i < 2; i++){
            this.loader.load(
                "../models/model/modell/road/rightgutter.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(0.7, 0.3, 0.7);
                    model.position.set(1, 39, 0);
                    model.rotation.set(Math.PI, -Math.PI / 2, Math.PI / 2);
                    this.add(model);
                },
                undefined,
                (error) => {
                    console.error("Error loading straight.gltf:", error);
                }
            );
        }
        
// PSD TO THE LEFT
        for(let a = 1; a < 22; a++) {
            this.loader.load(
                "../models/model/modell/straightRoad.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(0.7, 0.3, 0.335);
                    model.position.set( -a + 0.5, 39, 0);
                    model.rotation.set(0, Math.PI / 2, Math.PI / 2);
                    this.add(model);
                },
                undefined,
                (error) => {
                    console.error("Error loading straight.gltf:", error);
                }
            );
        }
        for(let a = 1; a < 100; a++) {
            this.loader.load(
                "../models/model/modell/straightRoad.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(0.7, 0.3, 0.335);
                    model.position.set( -a + (-22.5), 39, 0);
                    model.rotation.set(0, Math.PI / 2, Math.PI / 2);
                    this.add(model);
                },
                undefined,
                (error) => {
                    console.error("Error loading straight.gltf:", error);
                }
            );
        }
// PSD TO THE RIGHT
        for(let a = 1; a < 8; a++) {
            this.loader.load(
                "../models/model/modell/straightRoad.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(0.7, 0.3, 0.335);
                    model.position.set( a + (1.5), 39, 0);
                    model.rotation.set(0, Math.PI / 2, Math.PI / 2);
                    this.add(model);
                },
                undefined,
                (error) => {
                    console.error("Error loading straight.gltf:", error);
                }
            );
        }
        for(let i = 0; i < 2; i++){
            this.loader.load(
                "../models/model/modell/road/leftgutter.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(0.7, 0.3, 0.7);
                    model.position.set(10, 39, 0);
                    model.rotation.set(Math.PI, -Math.PI / 2, Math.PI / 2);
                    this.add(model);
                },
                undefined,
                (error) => {
                    console.error("Error loading straight.gltf:", error);
                }
            );
        }
        for(let a = 1; a < 50; a++) {
            this.loader.load(
                "../models/model/modell/straightRoad.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(0.7, 0.3, 0.335);
                    model.position.set( a + (10.5), 39, 0);
                    model.rotation.set(0, Math.PI / 2, Math.PI / 2);
                    this.add(model);
                },
                undefined,
                (error) => {
                    console.error("Error loading straight.gltf:", error);
                }
            );
        }
// BESIDE THE LIBRARY
        this.loader.load(
            "../models/model/modell/road/leftgutter.gltf",
            (gltf) => {
                const model = gltf.scene;
                model.scale.set(0.7, 0.3, 0.7);
                model.position.set(-22, 39, 0);
                model.rotation.set(-Math.PI, -Math.PI / 2, Math.PI / 2);
                this.add(model);
            },
            undefined,
            (error) => {
                console.error("Error loading straight.gltf:", error);
            }
        );
        this.loader.load(
            "../models/model/modell/road/lowergutter.gltf",
            (gltf) => {
                const model = gltf.scene;
                model.scale.set(0.7, 0.3, 0.7);
                model.position.set(-22, 51, 0);
                model.rotation.set(Math.PI, -Math.PI / 2, Math.PI / 2);
                this.add(model);
            },
            undefined,
            (error) => {
                console.error("Error loading straight.gltf:", error);
            }
        );
        for(let i = 0; i < 10; i++) {
            this.loader.load(
                "../models/model/modell/straightRoad.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(0.7, 0.3, 0.335);
                    model.position.set(-22, i + 40.5, 0); 
                    model.rotation.x = Math.PI / 2;
                    this.add(model);
                },
                undefined,
                (error) => {
                    console.error("Error loading straight.gltf:", error);
                }
            );
        }
        for(let a = 1; a < 18; a++) {
            this.loader.load(
                "../models/model/modell/straightRoad.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(0.7, 0.3, 0.335);
                    model.position.set( -a + (-22.5), 51, 0);
                    model.rotation.set(0, Math.PI / 2, Math.PI / 2);
                    this.add(model);
                },
                undefined,
                (error) => {
                    console.error("Error loading straight.gltf:", error);
                }
            );
        }
        for(let i = 0; i < 24; i++) {
            this.loader.load(
                "../models/model/modell/straightRoad.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(0.7, 0.3, 0.335);
                    model.position.set(-22, i + 52.5, 0);
                    model.rotation.x = Math.PI / 2;
                    this.add(model);
                },
                undefined,
                (error) => {
                    console.error("Error loading straight.gltf:", error);
                }
            );
        }


// TO THE CAFETERIA
        for(let i = 0; i < 31; i++) {
            this.loader.load(
                "../models/model/modell/straightRoad.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(0.7, 0.3, 0.335);
                    model.position.set(10, i + 40.5, 0);
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
}
