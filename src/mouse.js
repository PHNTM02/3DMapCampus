import * as THREE from 'three';

export function setupMouseEvents(scene, camera, terrain) {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let lastHoveredTile = null;

    function onMouseMove(event) {
        // Convert mouse position to normalized device coordinates (-1 to +1)
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        // Perform raycasting
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(terrain.tiles);

        if (intersects.length > 0) {
            const hoveredTile = intersects[0].object;
            const tilePosition = hoveredTile.position;
            // console.log("Tile Position: (x:" + tilePosition.x + " y:" + tilePosition.z + " z:" + tilePosition.y + ")");
            
            if (lastHoveredTile !== hoveredTile) {
                // Reset color of previous tile
                if (lastHoveredTile) {
                    lastHoveredTile.material.color.set(0x5ef77f);
                }
                
                // Change color of hovered tile
                hoveredTile.material.color.set(0xd1cbcb);
                lastHoveredTile = hoveredTile;
            }
        } else if (lastHoveredTile) {
            // Reset color if no tile is hovered
            lastHoveredTile.material.color.set(0x5ef77f);
            lastHoveredTile = null;
        }
    }

    window.addEventListener('mousemove', onMouseMove);
}
