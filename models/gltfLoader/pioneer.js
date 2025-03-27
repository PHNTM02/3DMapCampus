import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export class pioneer {
    constructor(scene) {
        this.scene = scene;
        this.loader = new GLTFLoader();
    }

    loadModel() {
        this.loader.load(
            'model/PIONEEWNew.gltf', 
            (gltf) => {
                this.scene.add(gltf.scene);

                // Access properties from the loaded gltf
                console.log(gltf.animations); // Array<THREE.AnimationClip>
                console.log(gltf.scene); // THREE.Group
                console.log(gltf.scenes); // Array<THREE.Group>
                console.log(gltf.cameras); // Array<THREE.Camera>
                console.log(gltf.asset); // Object
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
            },
            (error) => {
                console.log('An error happened');
            }
        );
    }
}