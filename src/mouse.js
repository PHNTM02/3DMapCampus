import * as THREE from 'three';

export function setupMouseEvents(scene, camera, terrain, buildingsGroup) {
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

    // Create search bar element
    let searchBar = document.getElementById('mesh-search-bar');
    if (!searchBar) {
        searchBar = document.createElement('input');
        searchBar.id = 'mesh-search-bar';
        searchBar.type = 'text';
        searchBar.placeholder = 'Search building mesh...';
        searchBar.style.position = 'fixed';
        searchBar.style.top = '10px';
        searchBar.style.left = '10px';
        searchBar.style.padding = '8px';
        searchBar.style.fontSize = '1em';
        searchBar.style.zIndex = '1002';
        document.body.appendChild(searchBar);
    }

    // Create suggestion dropdown element
    let suggestionBox = document.getElementById('mesh-suggestion-box');
    if (!suggestionBox) {
        suggestionBox = document.createElement('div');
        suggestionBox.id = 'mesh-suggestion-box';
        suggestionBox.style.position = 'fixed';
        suggestionBox.style.top = '40px';
        suggestionBox.style.left = '10px';
        suggestionBox.style.backgroundColor = 'rgba(0,0,0,0.85)';
        suggestionBox.style.color = '#fff';
        suggestionBox.style.maxHeight = '200px';
        suggestionBox.style.overflowY = 'auto';
        suggestionBox.style.width = '200px';
        suggestionBox.style.borderRadius = '5px';
        suggestionBox.style.display = 'none';
        suggestionBox.style.zIndex = '1003';
        document.body.appendChild(suggestionBox);
    }

    function getDisplayName(building) {
        if (building.name === 'Mesh_264_60') {
            return 'AUP Library';
        }
        return building.name || building.userData.name || 'Building';
    }

    function clearSuggestions() {
        suggestionBox.innerHTML = '';
        suggestionBox.style.display = 'none';
    }

    function showSuggestions(matches) {
        suggestionBox.innerHTML = '';
        matches.forEach(building => {
            const name = getDisplayName(building);
            const item = document.createElement('div');
            item.textContent = name;
            item.style.padding = '5px 10px';
            item.style.cursor = 'pointer';
            item.addEventListener('click', () => {
                const bbox = new THREE.Box3().setFromObject(building);
                const center = bbox.getCenter(new THREE.Vector3());
                const size = bbox.getSize(new THREE.Vector3());

                arrowMesh.position.set(center.x, center.y + size.y + 1, center.z);
                arrowMesh.visible = true;

                detailsPanel.innerHTML = `<h3>${name}</h3>`;
                detailsPanel.style.display = 'block';

                clearSuggestions();
                searchBar.value = name;
            });
            suggestionBox.appendChild(item);
        });
        suggestionBox.style.display = matches.length > 0 ? 'block' : 'none';
    }

    searchBar.addEventListener('input', () => {
        const query = searchBar.value.trim().toLowerCase();
        if (!query || !buildingsGroup) {
            arrowMesh.visible = false;
            detailsPanel.style.display = 'none';
            clearSuggestions();
            return;
        }

        const buildingMeshes = buildingsGroup.children.filter(child => child.isMesh || child.isGroup);
        const matches = buildingMeshes.filter(mesh => {
            const name = (mesh.name || mesh.userData.name || '').toLowerCase();
            return name.startsWith(query);
        });

        if (matches.length > 0) {
            showSuggestions(matches);
        } else {
            clearSuggestions();
            arrowMesh.visible = false;
            detailsPanel.style.display = 'none';
        }
    });

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

    function onClick(event) {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);

        if (buildingsGroup) {
            const buildingMeshes = buildingsGroup.children.filter(child => child.isMesh || child.isGroup);
            const buildingIntersects = raycaster.intersectObjects(buildingMeshes, true);

            if (buildingIntersects.length > 0) {
                selectedBuilding = buildingIntersects[0].object;
                const name = getDisplayName(selectedBuilding);

                if (selectedBuilding.name === 'Mesh_264_60') {
                    if (modelBuilding) modelBuilding.style.display = 'block';
                    if (dorm) dorm.style.display = 'none';
                    if (college) college.style.display = 'none';
                    if (buildingtitle) buildingtitle.innerHTML = 'Aup Library';
                    if (buildingImg) buildingImg.src = 'img/Facilities/library.jpg';
                    if (buildingSummary) buildingSummary.innerHTML = "John Lawrence Detwiler Memorial Library is centrally located on our campus, the lifeblood of the university’s academic life.  Dr. Howard Detwiler whose big picture is displayed under the stairs is the Philanthropist who donated an amount to construct the whole library building. His son, John Lawrence Detwiler. studied and took medicine at the University of Sto. Tomas. Right after graduation, he and some friends went scuba diving in Palawan where he met his untimely and tragic death. This is how AUP library was named John Lawrence Detwiler Memorial Library.";
                } else {
                    detailsPanel.innerHTML = `<h3>${name}</h3>`;
                    detailsPanel.style.display = 'block';
                }

                const bbox = new THREE.Box3().setFromObject(selectedBuilding);
                const center = bbox.getCenter(new THREE.Vector3());
                const size = bbox.getSize(new THREE.Vector3());

                arrowMesh.position.set(center.x, center.y + size.y + 1, center.z);
                arrowMesh.visible = true;
            } else {
                detailsPanel.style.display = 'none';
                arrowMesh.visible = false;
            }
        } else {
            arrowMesh.visible = false;
        }
    }

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('click', onClick);
}
