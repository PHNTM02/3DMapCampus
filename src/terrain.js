import * as THREE from 'three';
// import { Asset } from './assets.js';

export class Terrain extends THREE.Group {
    constructor() {
        super();
        
        this.generate();
    }

    generate() {
        this.terrain();
        // this.loadAssets();
    }

    terrain() {
        const tileSize = 100;

        const geometry = new THREE.PlaneGeometry(tileSize, tileSize, tileSize, tileSize);
        const material = new THREE.MeshBasicMaterial({ color: 0x89f5a8, wireframe: true });
        const terrain = new THREE.Mesh( geometry, material );
        this.rotation.x = -Math.PI / 2;
        this.add(terrain);
    }

    // loadAssets() {
    //     const asset = new Asset();
    //     this.add(asset);
    // }
    
}
