import * as THREE from 'three';

export class DragControl {
    constructor(camera, canvas, terrain) {
        this.camera = camera;
        this.canvas = canvas;
        this.terrain = terrain;

        this.isDragging = false;
        this.mouseButton = null;
        this.previousMousePosition = new THREE.Vector2();

        this.rotationMin = -Math.PI / 2; // -90 degrees
        this.rotationMax = Math.PI / 2;  // +90 degrees

        this._addEventListeners();
    }

    _addEventListeners() {
        this.canvas.addEventListener('mousedown', this._onMouseDown.bind(this), false);
        this.canvas.addEventListener('mouseup', this._onMouseUp.bind(this), false);
        this.canvas.addEventListener('mousemove', this._onMouseMove.bind(this), false);
        this.canvas.addEventListener('contextmenu', e => e.preventDefault()); // disable right-click

        // Touch support
        this.canvas.addEventListener('touchstart', this._onTouchStart.bind(this), false);
        this.canvas.addEventListener('touchmove', this._onTouchMove.bind(this), false);
        this.canvas.addEventListener('touchend', this._onTouchEnd.bind(this), false);
    }

    _getMousePosition(event) {
        return new THREE.Vector2(event.clientX, event.clientY);
    }

    _onMouseDown(event) {
        this.isDragging = true;
        this.mouseButton = event.button; // 0 = left, 2 = right
        this.previousMousePosition = this._getMousePosition(event);
    }

    _onMouseUp() {
        this.isDragging = false;
        this.mouseButton = null;
    }

    _onMouseMove(event) {
        if (!this.isDragging) return;

        const currentMousePosition = this._getMousePosition(event);
        const delta = currentMousePosition.clone().sub(this.previousMousePosition);

        if (this.mouseButton === 0) {
            // Rotate terrain
            const rotationSpeed = 0.005;
            this.terrain.rotation.y -= delta.x * rotationSpeed;

            // Clamp rotation
            this.terrain.rotation.y = Math.max(this.rotationMin, Math.min(this.rotationMax, this.terrain.rotation.y));
        } else if (this.mouseButton === 2) {
            // Drag terrain
            const dragSpeed = 0.1;
            this.terrain.position.x += delta.x * dragSpeed;
            this.terrain.position.z -= delta.y * dragSpeed;
        }

        this.previousMousePosition = currentMousePosition;
    }

    // --- TOUCH EVENTS ---

    _onTouchStart(event) {
        if (event.touches.length === 1 || event.touches.length === 2) {
            this.isDragging = true;
            this.previousMousePosition = new THREE.Vector2(
                event.touches[0].clientX,
                event.touches[0].clientY
            );
        }
    }

    _onTouchMove(event) {
        if (!this.isDragging) return;

        const touch = event.touches[0];
        const currentMousePosition = new THREE.Vector2(touch.clientX, touch.clientY);
        const delta = currentMousePosition.clone().sub(this.previousMousePosition);

        if (event.touches.length === 1) {
            // One finger = rotate
            const rotationSpeed = 0.005;
            this.terrain.rotation.y -= delta.x * rotationSpeed;
            this.terrain.rotation.y = Math.max(this.rotationMin, Math.min(this.rotationMax, this.terrain.rotation.y));
        } else if (event.touches.length === 2) {
            // Two fingers = drag
            const dragSpeed = 0.1;
            this.terrain.position.x += delta.x * dragSpeed;
            this.terrain.position.z -= delta.y * dragSpeed;
        }

        this.previousMousePosition = currentMousePosition;
    }

    _onTouchEnd() {
        this.isDragging = false;
    }
}
