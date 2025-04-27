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
        for(let a = 1; a < 100; a++) {
            this.loader.load(
                "../models/model/modell/straightRoad.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(2, 0.3, 0.335);
                    model.position.set( a + (-49.5), -10, 0);
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
        for(let i = 0; i < 22; i++) {
            this.loader.load(
                "../models/model/modell/straightRoad.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(2, 0.5, 1);
                    model.position.set(1, i + (-5.5), 0); 
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
        for(let a = 1; a < 75; a++) {
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
        this.loader.load(
            "../models/model/modell/road/upperrigthcorner.gltf",
            (gltf) => {
                const model = gltf.scene;
                model.scale.set(0.7, 0.3, 0.7);
                model.position.set(-98, 39, 0);
                model.rotation.set(Math.PI * 2, Math.PI / 2, Math.PI / 2);
                this.add(model);
            },
            undefined,
            (error) => {
                console.error("Error loading straight.gltf:", error);
            }
        );
        for(let i = 0; i < 13; i++) {
            this.loader.load(
                "../models/model/modell/straightRoad.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(0.7, 0.3, 0.335);
                    model.position.set(-98, i + 40.5, 0);
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
                model.scale.set(0.7, 0.3, 0.7);
                model.position.set(-98, 54, 0);
                model.rotation.set(Math.PI * 2, Math.PI / 2, Math.PI / 2);
                this.add(model);
            },
            undefined,
            (error) => {
                console.error("Error loading straight.gltf:", error);
            }
        );
        for(let a = 1; a < 20; a++) {
            this.loader.load(
                "../models/model/modell/straightRoad.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(0.7, 0.3, 0.335);
                    model.position.set( -a + (-98.5), 54, 0);
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
        for(let a = 1; a < 80; a++) {
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
        for(let a = 1; a < 20; a++) {
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
        this.loader.load(
            "../models/model/modell/road/noHutter.gltf",
            (gltf) => {
                const model = gltf.scene;
                model.scale.set(0.7, 0.3, 0.7);
                model.position.set(-43, 51, 0);
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
                    model.scale.set(0.7, 0.3, 0.335);
                    model.position.set(-43, i + 52.5, 0);
                    model.rotation.x = Math.PI / 2;
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
        for(let i = 0; i < 2; i++) {
            this.loader.load(
                "../models/model/modell/road/dirt.gltf",
                (gltf) => {
                    const model = gltf.scene;
                    model.scale.set(0.7, 0.3, 0.335);
                    model.position.set(-22, i + 76.5, 0);
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
                    model.position.set(i + (-22), 78.5, 0);
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
