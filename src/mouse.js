import * as THREE from 'three';

// export function setupMouseEvents(scene, camera, tiles, selectedObject) {
//     const raycaster = new THREE.Raycaster();
//     const mouse = new THREE.Vector2();
//     let lastHovered = null;

//     function onMouseMove(event) {
//         mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//         mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

//         raycaster.setFromCamera(mouse, camera);
//         const intersects = raycaster.intersectObjects(tiles);

//         if (lastHovered) {
//             lastHovered.material.color.set(0x228B22); // Reset color
//         }

//         if (intersects.length > 0) {
//             lastHovered = intersects[0].object;
//             lastHovered.material.color.set(0x808080); // Grey on hover
//         }
//     }

//     function onMouseClick(event) {
//         mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//         mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

//         raycaster.setFromCamera(mouse, camera);
//         const intersects = raycaster.intersectObjects([...tiles, selectedObject]);

//         if (intersects.length > 0) {
//             const clickedObject = intersects[0].object;

//             // If clicked on the object, move it up
//             if (clickedObject === selectedObject) {
//                 selectedObject.position.y += 0.3; // Moves up slightly
//             } 
//             // If clicked on a tile, move the object smoothly to the tile
//             else if (tiles.includes(clickedObject)) {
//                 moveObjectToTile(selectedObject, clickedObject.position);
//             }
//         }
//     }

//     function moveObjectToTile(object, targetPosition) {
//         const duration = 0.5; // Animation duration in seconds
//         const start = { x: object.position.x, z: object.position.z };
//         const end = { x: targetPosition.x, z: targetPosition.z };
//         const startTime = performance.now();

//         function animate() {
//             const elapsedTime = (performance.now() - startTime) / 1000;
//             const t = Math.min(elapsedTime / duration, 1); // Clamp t between 0 and 1

//             object.position.x = start.x + (end.x - start.x) * t;
//             object.position.z = start.z + (end.z - start.z) * t;

//             if (t < 1) {
//                 requestAnimationFrame(animate);
//             }
//         }

//         animate();
//     }

//     window.addEventListener('mousemove', onMouseMove);
//     window.addEventListener('click', onMouseClick);
// }


// export function setupMouseEvents(scene, camera, terrain, selectedObject) {
//     const raycaster = new THREE.Raycaster();
//     const mouse = new THREE.Vector2();
//     let lastHovered = null;

//     function onMouseMove(event) {
//         mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//         mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

//         raycaster.setFromCamera(mouse, camera);
//         const intersects = raycaster.intersectObjects(terrain.tiles.map(t => t.tile));

//         if (lastHovered) {
//             lastHovered.material.color.set(0x2ff53c); // Reset to green
//         }

//         if (intersects.length > 0) {
//             lastHovered = intersects[0].object;
//             lastHovered.material.color.set(0x808080); // Grey on hover
//         }
//     }

//     function onMouseClick(event) {
//         mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//         mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

//         raycaster.setFromCamera(mouse, camera);
//         const intersects = raycaster.intersectObjects(terrain.tiles.map(t => t.tile));

//         if (intersects.length > 0) {
//             const clickedTile = intersects[0].object;
//             moveObjectToTile(selectedObject, clickedTile.position);
//         }
//     }

//     function moveObjectToTile(object, targetPosition) {
//         object.position.set(targetPosition.x, 0.5, targetPosition.z);
//     }

//     window.addEventListener('mousemove', onMouseMove);
//     window.addEventListener('click', onMouseClick);
// }


// export function setupMouseEvents(scene, camera, terrain, selectedObject) {
//     const raycaster = new THREE.Raycaster();
//     const mouse = new THREE.Vector2();
//     let lastHovered = null;

//     // Ensure terrain and tiles are properly defined
//     if (!terrain || !Array.isArray(terrain.tiles)) {
//         console.error("Error: terrain tiles is undefined or empty~!");
//         return;
//     }

//     function onMouseMove(event) {
//         mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//         mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

//         raycaster.setFromCamera(mouse, camera);

//         // Ensure terrain.tiles is valid before mapping
//         const tileMeshes = terrain.tiles.map(t => t.tile).filter(tile => tile instanceof THREE.Mesh);
//         if (!tileMeshes.length) return;

//         const intersects = raycaster.intersectObjects(tileMeshes);

//         if (lastHovered) {
//             lastHovered.material.color.set(0x2ff53c); // Reset to green
//         }

//         if (intersects.length > 0) {
//             lastHovered = intersects[0].object;
//             lastHovered.material.color.set(0x808080); // Grey on hover
//         }
//     }

//     function onMouseClick(event) {
//         mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//         mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

//         raycaster.setFromCamera(mouse, camera);

//         // Ensure terrain.tiles is valid before mapping
//         const tileMeshes = terrain.tiles.map(t => t.tile).filter(tile => tile instanceof THREE.Mesh);
//         if (!tileMeshes.length) return;

//         const intersects = raycaster.intersectObjects(tileMeshes);

//         if (intersects.length > 0) {
//             const clickedTile = intersects[0].object;
//             moveObjectToTile(selectedObject, clickedTile.position);
//         }
//     }

//     function moveObjectToTile(object, targetPosition) {
//         if (!object) {
//             console.warn("Warning: selectedObject is undefined!");
//             return;
//         }
//         object.position.set(targetPosition.x, 0.5, targetPosition.z);
//     }

//     window.addEventListener('mousemove', onMouseMove);
//     window.addEventListener('click', onMouseClick);
// }


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
            console.log("Tile Position: (x:" + tilePosition.x + " y:" + tilePosition.z + ")");
            
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
