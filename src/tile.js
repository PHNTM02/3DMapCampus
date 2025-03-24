import * as THREE from 'three';

export class Tile extends THREE.Mesh {
    constructor(size = 1, color = 0x5ef77f) {
        const geometry = new THREE.BoxGeometry(size, 0.3, size);
        const material = new THREE.MeshStandardMaterial({ color });
        super(geometry, material);
        this.receiveShadow = true;
    }
}
