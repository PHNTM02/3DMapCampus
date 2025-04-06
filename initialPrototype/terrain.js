import * as THREE from 'three';

export class Terrain extends THREE.Group {
    constructor(scene) {
        super();
        
        this.terrain();
        this.straightRoad();
    }

    terrain() {
        const tileSize = 50;

        const geometry = new THREE.PlaneGeometry(tileSize, tileSize);
        const material = new THREE.MeshBasicMaterial({ color: 0x89f5a8, wireframe: true });
        const terrain = new THREE.Mesh( geometry, material );
        this.rotation.x = -Math.PI / 2;
        this.add(CAH.gltf);
    }

    straightRoad() {
        this.loader.load("./straightRoad.gltf", (gltf) => {
            const model = gltf.scene;

            model.scale.set(1, 1, 1);
            
            model.position.set(0, 0.1, 0); // Adjust position as needed + Always make the 'y' above the tile
            model.rotation.y = -Math.PI / 2;
            this.add(model);
        }, undefined, (error) => {
            console.error("Error loading straight.gltf:", error);
        });
    }
}