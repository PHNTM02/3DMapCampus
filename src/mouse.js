import * as THREE from 'three';

export function setupMouseEvents(scene, camera, tiles, selectedObject) {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let lastHovered = null;

    function onMouseMove(event) {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(tiles);

        if (lastHovered) {
            lastHovered.material.color.set(0x228B22); // Reset color
        }

        if (intersects.length > 0) {
            lastHovered = intersects[0].object;
            lastHovered.material.color.set(0x808080); // Grey on hover
        }
    }

    function onMouseClick(event) {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects([...tiles, selectedObject]);

        if (intersects.length > 0) {
            const clickedObject = intersects[0].object;

            // If clicked on the object, move it up
            if (clickedObject === selectedObject) {
                selectedObject.position.y += 0.3; // Moves up slightly
            } 
            // If clicked on a tile, move the object smoothly to the tile
            else if (tiles.includes(clickedObject)) {
                moveObjectToTile(selectedObject, clickedObject.position);
            }
        }
    }

    function moveObjectToTile(object, targetPosition) {
        const duration = 0.5; // Animation duration in seconds
        const start = { x: object.position.x, z: object.position.z };
        const end = { x: targetPosition.x, z: targetPosition.z };
        const startTime = performance.now();

        function animate() {
            const elapsedTime = (performance.now() - startTime) / 1000;
            const t = Math.min(elapsedTime / duration, 1); // Clamp t between 0 and 1

            object.position.x = start.x + (end.x - start.x) * t;
            object.position.z = start.z + (end.z - start.z) * t;

            if (t < 1) {
                requestAnimationFrame(animate);
            }
        }

        animate();
    }

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('click', onMouseClick);
}
