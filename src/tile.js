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
        for(let a = 1; a < 150; a++) {
            this.loader.load(
                "../models/model/modell/straightRoad.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(2, 0.3, 0.335);
                    model.position.set( a + (-100.5), -70, 0);
                    model.rotation.set(0, Math.PI / 2, Math.PI / 2);
                    this.add(model);
                },
                undefined,
                (error) => {
                    console.error("Error loading straight.gltf:", error);
                }
            );
        }

// After Gate
        for(let i = 0; i < 44.5; i++) {
            this.loader.load(
                "../models/model/modell/straightRoad.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(2, 0.5, 1);
                    model.position.set(1, i + (-65), 0); 
                    model.rotation.x = Math.PI / 2;
                    this.add(model);
                },
                undefined,
                (error) => {
                    console.error("Error loading straight.gltf:", error);
                }
            );
        }
        for(let i = 0; i < 8; i++){
            this.loader.load(
                "../models/model/modell/road/noHutter.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(2, 0.3, 0.335);
                    model.position.set(1, i + -19.5, 0);
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
                model.position.set(1, -18.5, 0); 
                model.rotation.x = Math.PI / 2;
                this.add(model);
            },
            undefined,
            (error) => {
                console.error("Error loading straight.gltf:", error);
            }
        );
// First cross Road
        for(let a = 1; a < 20; a++) {
            this.loader.load(
                "../models/model/modell/straightRoad.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(2, 0.3, 0.335);
                    model.position.set( a + (3), -17, 0);
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
        for(let a = 1; a < 27; a++) {
            this.loader.load(
                "../models/model/modell/straightRoad.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(2, 0.3, 0.335);
                    model.position.set( -a + -1, -17, 0);
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
                    model.scale.set(0.7, .3, );
                    model.position.set(-28.5, -i + -21, 0);
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
                model.position.set(-28.5, -27, 0);
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
                model.scale.set(2, 0.3, 0.7);
                model.position.set(-28.5, -17, 0);
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
                    model.scale.set(0.7, 0.3, 5);
                    model.position.set( -a + (-36), -27, 0);
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
        for(let i = 0; i < 39; i++) {
            this.loader.load(
                "../models/model/modell/straightRoad.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(2, 0.3, 0.335);
                    model.position.set(1, i + -14, 0);
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
                    model.scale.set(2, 0.3, 2);
                    model.position.set(1, 27, 0);
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
        for(let a = 1; a < 32; a++) {
            this.loader.load(
                "../models/model/modell/straightRoad.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(2, 0.3, 0.335);
                    model.position.set( -a + -1, 27, 0);
                    model.rotation.set(0, Math.PI / 2, Math.PI / 2);
                    this.add(model);
                },
                undefined,
                (error) => {
                    console.error("Error loading straight.gltf:", error);
                }
            );
        }
        for(let a = 1; a < 181; a++) {
            this.loader.load(
                "../models/model/modell/straightRoad.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(2, 0.3, 0.335);
                    model.position.set( -a + (-37), 27, 0);
                    model.rotation.set(0, Math.PI / 2, Math.PI / 2);
                    this.add(model);
                },
                undefined,
                (error) => {
                    console.error("Error loading straight.gltf:", error);
                }
            );
        }
        this.loader.load(
            "../models/model/modell/road/upperrigthcorner.gltf",
            (gltf) => {
                const model = gltf.scene;
                model.scale.set(2, 0.3, 2);
                model.position.set(-220, 27, 0);
                model.rotation.set(Math.PI * 2, Math.PI / 2, Math.PI / 2);
                this.add(model);
            },
            undefined,
            (error) => {
                console.error("Error loading straight.gltf:", error);
            }
        );
        for(let i = 0; i < 125; i++) {
            this.loader.load(
                "../models/model/modell/straightRoad.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(2, 0.3, 0.335);
                    model.position.set(-220, i + 30.5, 0);
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
            "../models/model/modell/road/lowerleftcorner.gltf",
            (gltf) => {
                const model = gltf.scene;
                model.scale.set(2, 0.3, 0.7);
                model.position.set(-98, 54, 0);
                model.rotation.set(Math.PI * 2, Math.PI / 2, Math.PI / 2);
                this.add(model);
            },
            undefined,
            (error) => {
                console.error("Error loading straight.gltf:", error);
            }
        );
        for(let a = 1; a < 50; a++) {
            this.loader.load(
                "../models/model/modell/straightRoad.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(2, 0.3, 0.335);
                    model.position.set( -a + (-170.5), 150, 0);
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
        for(let a = 1; a < 7; a++) {
            this.loader.load(
                "../models/model/modell/straightRoad.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(2, 0.3, 0.335);
                    model.position.set( a + (3), 27, 0);
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
                    model.scale.set(2, 0.3, 2);
                    model.position.set(12, 27, 0);
                    model.rotation.set(Math.PI, -Math.PI / 2, Math.PI / 2);
                    this.add(model);
                },
                undefined,
                (error) => {
                    console.error("Error loading straight.gltf:", error);
                }
            );
        }
        for(let a = 1; a < 80; a++) {
            this.loader.load(
                "../models/model/modell/straightRoad.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(2, 0.3, 0.335);
                    model.position.set( a + (14), 27, 0);
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
                model.scale.set(2, 0.3, 2);
                model.position.set(-35, 27, 0);
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
                model.scale.set(2, 0.3, 2);
                model.position.set(-35, 70, 0);
                model.rotation.set(Math.PI, -Math.PI / 2, Math.PI / 2);
                this.add(model);
            },
            undefined,
            (error) => {
                console.error("Error loading straight.gltf:", error);
            }
        );
        for(let i = 0; i < 37; i++) {
            this.loader.load(
                "../models/model/modell/straightRoad.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(2, 0.3, 0.335);
                    model.position.set(-35, i + 30.5, 0); 
                    model.rotation.x = Math.PI / 2;
                    this.add(model);
                },
                undefined,
                (error) => {
                    console.error("Error loading straight.gltf:", error);
                }
            );
        }
        for(let a = 1; a < 45; a++) {
            this.loader.load(
                "../models/model/modell/straightRoad.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(2, 0.3, 0.335);
                    model.position.set( -a + (-37.5), 70, 0);
                    model.rotation.set(0, Math.PI / 2, Math.PI / 2);
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
                model.scale.set(2, 0.3, 2);
                model.position.set(-85, 70, 0);
                model.rotation.set(Math.PI * 2, Math.PI / 2, Math.PI / 2);
                this.add(model);
            },
            undefined,
            (error) => {
                console.error("Error loading straight.gltf:", error);
            }
        );
        for(let i = 0; i < 15; i++) {
            this.loader.load(
                "../models/model/modell/straightRoad.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(2, 0.3, 0.335);
                    model.position.set(-35, i + 73.5, 0);
                    model.rotation.x = Math.PI / 2;
                    this.add(model);
                },
                undefined,
                (error) => {
                    console.error("Error loading straight.gltf:", error);
                }
            );
        }

        for(let i = 0; i < 35; i++) {
            this.loader.load(
                "../models/model/modell/straightRoad.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(2, 0.3, 0.335);
                    model.position.set(-35, i + 85.5, 0);
                    model.rotation.x = Math.PI / 2;
                    this.add(model);
                },
                undefined,
                (error) => {
                    console.error("Error loading straight.gltf:", error);
                }
            );
        }
        for(let i = 0; i < 8; i++) {
            this.loader.load(
                "../models/model/modell/road/dirt.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(2, 0.3, 1);
                    model.position.set(-15, i + 90.5, 0);
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
                    model.scale.set(2, 0.3, 0.335);
                    model.position.set(12, i + 30.5, 0);
                    model.rotation.x = Math.PI / 2;
                    this.add(model);
                },
                undefined,
                (error) => {
                    console.error("Error loading straight.gltf:", error);
                }
            );
        }
        for(let i = 0; i < 7; i++) {
            this.loader.load(
                "../models/model/modell/road/dirt.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(0.7, 0.3, 0.335);
                    model.position.set(10, i + 71.5, 0);
                    model.rotation.x = Math.PI / 2;
                    this.add(model);
                },
                undefined,
                (error) => {
                    console.error("Error loading straight.gltf:", error);
                }
            );
        }
// LADIES DORM
        for(let i = 0; i < 33; i++) {
            this.loader.load(
                "../models/model/modell/road/dirt.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(0.7, 0.3, 0.335);
                    model.position.set(i + (-22), 120.5, 0);
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
