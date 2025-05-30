import * as THREE from 'three';
import { Asset } from './assets.js';
import { Road } from './tile.js';

export class Terrain extends THREE.Group {
    constructor() {
        super();
        
        this.terrain();
        this.loadAssets();
        this.loadRoad();
    }

    terrain() {
        const tileSize = 500;

        const geometry = new THREE.PlaneGeometry(tileSize, tileSize, tileSize, tileSize);
        const material = new THREE.MeshBasicMaterial({ color: 0x3d8219, wireframe: false });
        const terrain = new THREE.Mesh( geometry, material );
        terrain.position.set(0, 0, 0);
        this.rotation.x = -Math.PI / 2;
        this.add(terrain);
    }

    loadAssets() {
        const asset = new Asset();
        this.add(asset);
    }

    loadRoad(){
        const road = new Road();
        this.add(road);
    }
}
