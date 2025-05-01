import * as THREE from 'three';

export function setupMouseEvents(scene, camera, terrain, buildingsGroup, controls) {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let lastHoveredTile = null;
    let lastHoveredBuilding = null;
    let selectedBuilding = null;

    // Cache DOM elements for UI updates
    const modelBuilding = document.getElementById('modelBuilding');
    const dorm = document.getElementById('dorm');
    const college = document.getElementById('college');
    const buildingtitle = document.getElementById('buildingtitle');
    const buildingImg = document.getElementById('buildingImg');
    const buildingSummary = document.getElementById('buildingSummary');

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

    // Create arrow mesh for selection indicator
    const arrowGeometry = new THREE.ConeGeometry(1, 2, 8);
    const arrowMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const arrowMesh = new THREE.Mesh(arrowGeometry, arrowMaterial);
    arrowMesh.rotation.x = Math.PI; // Point downwards
    arrowMesh.visible = false;
    scene.add(arrowMesh);

    // Removed search bar and suggestion box creation and related functions and event listeners as per user request
function getDisplayName(building) {
    if (building.name === '../models/model/modell/Library.glb') {
        return 'AUP Library';
    }
    if (building.name === 'Mesh_69_14') {
        return 'College of Medicine';
    }
    return building.name || building.userData.name || 'Building';
}

    function onMouseMove(event) {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

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

        if (buildingsGroup) {
            const buildingMeshes = buildingsGroup.children.filter(child => child.isMesh || child.isGroup);
            const buildingIntersects = raycaster.intersectObjects(buildingMeshes, true);

            if (buildingIntersects.length > 0) {
                const hoveredBuilding = buildingIntersects[0].object;
                if (lastHoveredBuilding !== hoveredBuilding) {
                    lastHoveredBuilding = hoveredBuilding;
                    const name = getDisplayName(hoveredBuilding);
                    tooltip.style.display = 'block';
                    tooltip.textContent = name;
                }
                tooltip.style.left = event.clientX + 10 + 'px';
                tooltip.style.top = event.clientY + 10 + 'px';
            } else {
                lastHoveredBuilding = null;
                tooltip.style.display = 'none';
            }
        }
    }

let hideTimeout = null;

function onClick(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    if (buildingsGroup) {
        const buildingMeshes = buildingsGroup.children.filter(child => child.isMesh || child.isGroup);
        const buildingIntersects = raycaster.intersectObjects(buildingMeshes, true);

        if (buildingIntersects.length > 0) {
            if (hideTimeout) {
                clearTimeout(hideTimeout);
                hideTimeout = null;
            }

            selectedBuilding = buildingIntersects[0].object;
            const name = getDisplayName(selectedBuilding);

            if (selectedBuilding.name === 'Mesh_264_60') {
                detailsPanel.innerHTML = `<h3>${name}</h3><p>John Lawrence Detwiler Memorial Library</p>`;
            } else if (selectedBuilding.name === 'Mesh_69_14') {
                detailsPanel.innerHTML = `<h3>${name}</h3><p>The Adventist University of the Philippines College of Medicine (AUPCOM) is the first and only Adventist medical school in the Philippines and the Asia-Pacific region established in 2015. It is only the sixth of seven Adventist medical schools globally, the oldest of which is the Loma Linda University School of Medicine in Loma Linda, California, USA. AUP College of Medicine is the only medical school in the Philippines and Southeast Asia which includes in its medical curriculum courses in Lifestyle Medicine, Religion, and Whole Person Care, because of its main thrust to produce physician-missionaries for Christ.</p>`;

                // Move camera closer to Mesh_69_14
                const bbox = new THREE.Box3().setFromObject(selectedBuilding);
                const center = bbox.getCenter(new THREE.Vector3());
                const offset = new THREE.Vector3(0, 10, 15); // Adjust offset as needed
                const newCameraPos = center.clone().add(offset);

                camera.position.copy(newCameraPos);
                controls.target.copy(center);
                controls.update();
            } else {
                detailsPanel.innerHTML = `<h3>${name}</h3><p>Details about this building mesh will be displayed here.</p>`;
            }
            detailsPanel.style.display = 'block';

            if (selectedBuilding.name !== 'Mesh_69_14') {
                const bbox = new THREE.Box3().setFromObject(selectedBuilding);
                const center = bbox.getCenter(new THREE.Vector3());
                const size = bbox.getSize(new THREE.Vector3());

                arrowMesh.position.set(center.x, center.y + size.y + 1, center.z);
                arrowMesh.visible = true;
            }
        } else {
            hideTimeout = setTimeout(() => {
                detailsPanel.style.display = 'none';
                arrowMesh.visible = false;
            }, 500);
        }
    } else {
        arrowMesh.visible = false;
    }
}

// Prevent hiding detailsPanel when clicking inside it
detailsPanel.addEventListener('click', (e) => {
    e.stopPropagation();
});

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('click', onClick);

    // New function to select building by name programmatically
    function selectBuildingByName(name) {
        if (!buildingsGroup) return;
        const buildingMeshes = buildingsGroup.children.filter(child => child.isMesh || child.isGroup);
        const building = buildingMeshes.find(b => b.name === name);
        if (!building) return;

        // Clear previous highlight
        if (selectedBuilding && selectedBuilding.material && selectedBuilding.userData.originalColor) {
            selectedBuilding.material.color.set(selectedBuilding.userData.originalColor);
        }

        selectedBuilding = building;

        // Save original color if not saved
        if (selectedBuilding.material && !selectedBuilding.userData.originalColor) {
            selectedBuilding.userData.originalColor = selectedBuilding.material.color.getHex();
        }

        // Highlight selected building by changing color
        if (selectedBuilding.material) {
            selectedBuilding.material.color.set(0xff0000); // Red highlight
        }

        const displayName = getDisplayName(selectedBuilding);

        if (selectedBuilding.name === 'Mesh_264_60') {
                    detailsPanel.innerHTML = `<h3>${displayName}</h3><p>John Lawrence Detwiler Memorial Library</p>`;
                }
            }
}
