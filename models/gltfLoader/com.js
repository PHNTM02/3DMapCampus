// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


// const loader = new GLTFLoader();

// export class com {
//     constructor(scene) {
//         this.scene = scene;
//         this.loader = new GLTFLoader();
//     }

//     loader.load( './model/COMNew.gltf', function ( gltf ) => {
    
//             scene.add( gltf.scene );
    
//             gltf.animations; // Array<THREE.AnimationClip>
//             gltf.scene; // THREE.Group
//             gltf.scenes; // Array<THREE.Group>
//             gltf.cameras; // Array<THREE.Camera>
//             gltf.asset; // Object
    
//         },
//         // called while loading is progressing
//         function ( xhr ) {
    
//             console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    
//         },
//         // called when loading has errors
//         function ( error ) {
    
//             console.log( 'An error happened' );
    
//         }
//     );
// }

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export class ModelLoader {
    constructor(scene) {
        this.scene = scene;
        this.loader = new GLTFLoader();
    }

    loadModel() {
        this.loader.load(
            'model/COMNew.gltf', 
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
