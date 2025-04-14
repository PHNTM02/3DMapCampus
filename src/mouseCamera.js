// cameraMouse.js
export class CameraMouseControls {
    constructor(camera, domElement) {
      this.camera = camera;
      this.domElement = domElement;
  
      this.isDragging = false;
      this.previousMousePosition = { x: 0, y: 0 };
      this.dragSpeed = 0.5;
  
      this.init();
    }
  
    init() {
      this.domElement.addEventListener('mousedown', this.onMouseDown.bind(this), false);
      this.domElement.addEventListener('mouseup', this.onMouseUp.bind(this), false);
      this.domElement.addEventListener('mousemove', this.onMouseMove.bind(this), false);
    }
  
    onMouseDown(event) {
      if (event.button === 0) { // Left mouse button
        this.isDragging = true;
        this.previousMousePosition.x = event.clientX;
        this.previousMousePosition.y = event.clientY;
      }
    }
  
    onMouseUp(event) {
      if (event.button === 0) {
        this.isDragging = false;
      }
    }
  
    onMouseMove(event) {
      if (!this.isDragging) return;
  
      const deltaX = event.clientX - this.previousMousePosition.x;
      const deltaY = event.clientY - this.previousMousePosition.y;
  
      this.camera.position.x -= deltaX * this.dragSpeed;
      this.camera.position.z -= deltaY * this.dragSpeed;
  
      this.previousMousePosition.x = event.clientX;
      this.previousMousePosition.y = event.clientY;
    }
  }
  