import * as THREE from 'three';

export function setupMouseEvents(scene, camera, terrain, buildingsGroup) {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let lastHoveredTile = null;
    let lastHoveredBuilding = null;
    let selectedBuilding = null;

    // Create tooltip element
    let tooltip = document.getElementById('tooltip');
    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.id = 'tooltip';
        tooltip.style.position = 'absolute';
        tooltip.style.backgroundColor = 'rgba(0,0,0,0.7)';
        tooltip.style.color = '#fff';
        tooltip.style.padding = '4px 8px';
        tooltip.style.borderRadius = '4px';
        tooltip.style.pointerEvents = 'none';
        tooltip.style.display = 'none';
        tooltip.style.zIndex = '1000';
        document.body.appendChild(tooltip);
    }

    // Create details panel element
    let detailsPanel = document.getElementById('details-panel');
    if (!detailsPanel) {
        detailsPanel = document.createElement('div');
        detailsPanel.id = 'details-panel';
        detailsPanel.style.position = 'fixed';
        detailsPanel.style.top = '10px';
        detailsPanel.style.left = '50%';
        detailsPanel.style.transform = 'translateX(-50%)';
        detailsPanel.style.backgroundColor = 'rgba(0,0,0,0.85)';
        detailsPanel.style.color = '#fff';
        detailsPanel.style.padding = '20px';
        detailsPanel.style.borderRadius = '10px';
        detailsPanel.style.maxWidth = '400px';
        detailsPanel.style.maxHeight = '60vh';
        detailsPanel.style.overflowY = 'auto';
        detailsPanel.style.display = 'none';
        detailsPanel.style.zIndex = '1001';
        detailsPanel.style.fontSize = '1.2em';
        document.body.appendChild(detailsPanel);
    }

    function getDisplayName(building) {
        if (building.name === 'Mesh_264_60') {
            return 'AUP Library';
        }
        return building.name || building.userData.name || 'Building';
    }

    function onMouseMove(event) {
        // Convert mouse position to normalized device coordinates (-1 to +1)
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        // Perform raycasting on terrain tiles
        raycaster.setFromCamera(mouse, camera);
        const terrainIntersects = raycaster.intersectObjects(terrain.tiles);

        if (terrainIntersects.length > 0) {
            const hoveredTile = terrainIntersects[0].object;
            if (lastHoveredTile !== hoveredTile) {
                if (lastHoveredTile) {
                    lastHoveredTile.material.color.set(0x5ef77f);
                }
                hoveredTile.material.color.set(0xd1cbcb);
                lastHoveredTile = hoveredTile;
            }
        } else if (lastHoveredTile) {
            lastHoveredTile.material.color.set(0x5ef77f);
            lastHoveredTile = null;
        }

        // Perform raycasting on buildings
        if (buildingsGroup) {
            const buildingMeshes = buildingsGroup.children.filter(child => child.isMesh || child.isGroup);
            const buildingIntersects = raycaster.intersectObjects(buildingMeshes, true);

            if (buildingIntersects.length > 0) {
                const hoveredBuilding = buildingIntersects[0].object;
                if (lastHoveredBuilding !== hoveredBuilding) {
                    lastHoveredBuilding = hoveredBuilding;
                    // Show tooltip with building name or userData.name
                    const name = getDisplayName(hoveredBuilding);
                    tooltip.style.display = 'block';
                    tooltip.textContent = name;
                }
                // Position tooltip near mouse
                tooltip.style.left = event.clientX + 10 + 'px';
                tooltip.style.top = event.clientY + 10 + 'px';
            } else {
                lastHoveredBuilding = null;
                tooltip.style.display = 'none';
            }
        }
    }

    function onClick(event) {
        // Convert mouse position to normalized device coordinates (-1 to +1)
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);

        if (buildingsGroup) {
            const buildingMeshes = buildingsGroup.children.filter(child => child.isMesh || child.isGroup);
            const buildingIntersects = raycaster.intersectObjects(buildingMeshes, true);

            if (buildingIntersects.length > 0) {
                selectedBuilding = buildingIntersects[0].object;
                const name = getDisplayName(selectedBuilding);
                // Show only the name, no details
                detailsPanel.innerHTML = `<h3>${name}</h3>`;
                detailsPanel.style.display = 'block';
            } else {
                detailsPanel.style.display = 'none';
            }
        }
    }

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('click', onClick);
}
