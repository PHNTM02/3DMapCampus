import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export class Asset extends THREE.Group {
    constructor(scene) {
        super();

        this.loader = new GLTFLoader();
        this.clouds = [];
        this.loadAll();
    }

    loadGLTFModel(path, position, rotation, scale, name) {
        this.loader.load(
            path,
            (gltf) => {
                const model = gltf.scene;
                model.scale.set(scale, scale, scale);
                model.position.set(position.x, position.y, position.z);
                model.rotation.set(rotation.x, rotation.y, rotation.z);
                model.name = name;
                this.add(model);
            },
            undefined,
            (error) => {
                console.error(`Error loading model at ${path}:`, error);
            }
        );
    }

    async loadAll() {
        this.loadGate();
        this.loadClinic();
        this.loadGym();
        this.loadPIC();
        this.loadMusicDept();
        this.loadPool();
        this.loadPSD();
        this.loadGuidance();
        this.loadStudentService();
        this.loadKubo();
        this.loadLibrary();
        this.loadCON();
        this.loadCOB();
        this.loadCST();
        this.loadCOM();
        this.loadfinster();
        this.loadgraduates();
        this.loadcaet();
        this.loadfactory();
        this.loadCOD();
        this.loadstore();
        this.loadCaff();
        this.loadWaterLaundry();
        this.loadMahogany();
        this.loadAcacia();
        this.dormA();
        this.dormB();
        this.dormC();
        this.dormD();
        this.loadIlangIlang();
        this.loadGraduates2();
        this.loadCentinial();
        this.loadCadena();
        this.loadStudentService();
        this.loadParkingS();
        this.loadMultipeTree();
        this.loadMultipeTree2();
        this.loadWideTree();
        this.loadRandomTrees();
        
        await this.loadTreeClusters();

        this.loadPIONEER();
        // this.loadAdminOffice();
        // this.loadAlumni();
        // this.loadDormA();
        // this.loadDormMolave();
        this.loadDormWaling();
        this.loadDormSampa();

        this.loadPolyClouds();
    }

    loadPolyClouds() {
        const cloudGeometry = new THREE.SphereGeometry(5, 6, 6);
        const cloudMaterial = new THREE.MeshLambertMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.8,
            depthWrite: false,
        });

        const cloudCount = 10;
        for (let i = 0; i < cloudCount; i++) {
            const cloud = new THREE.Mesh(cloudGeometry, cloudMaterial);
            const originalX = Math.random() * 200 - 100;
            const originalY = Math.random() * 200 - 100;
            const originalZ = 50 + Math.random() * 20;
            cloud.position.set(originalX, originalY, originalZ);
            cloud.scale.setScalar(1 + Math.random());
            cloud.userData = { originalPosition: new THREE.Vector3(originalX, originalY, originalZ), offset: Math.random() * Math.PI * 2 };
            this.clouds.push(cloud);
            this.add(cloud);
        }
    }

    update(delta) {
        // Move clouds with realistic drifting and floating effect, and spawn new clouds
        const cloudsToRemove = [];
        for (const cloud of this.clouds) {
            if (!cloud.userData.speed) {
                // Assign a random horizontal speed between 0.1 and 0.5 units per second
                cloud.userData.speed = 0.1 + Math.random() * 0.4;
                // Assign a random vertical oscillation amplitude between 1 and 3 units
                cloud.userData.verticalAmplitude = 1 + Math.random() * 2;
                // Assign a random vertical oscillation speed
                cloud.userData.verticalSpeed = 0.5 + Math.random();
                // Store a phase offset for vertical oscillation
                cloud.userData.verticalPhase = Math.random() * Math.PI * 2;
            }

            const originalPos = cloud.userData.originalPosition;
            const speed = cloud.userData.speed;
            const verticalAmplitude = cloud.userData.verticalAmplitude;
            const verticalSpeed = cloud.userData.verticalSpeed;
            const verticalPhase = cloud.userData.verticalPhase;

            // Update horizontal position (drift to the right)
            cloud.position.x += speed * delta;

            // Mark clouds that moved out of bounds for removal
            if (cloud.position.x > 100) {
                cloudsToRemove.push(cloud);
            }

            // Update vertical position with oscillation (floating effect)
            cloud.position.y = originalPos.y + Math.sin(verticalPhase + performance.now() * 0.001 * verticalSpeed) * verticalAmplitude;
        }

        // Remove clouds that moved out of bounds and spawn new clouds on the left
        for (const cloud of cloudsToRemove) {
            this.remove(cloud);
            const index = this.clouds.indexOf(cloud);
            if (index > -1) {
                this.clouds.splice(index, 1);
            }

            // Spawn new cloud on the left side with random vertical and depth positions
            const cloudGeometry = new THREE.SphereGeometry(5, 6, 6);
            const cloudMaterial = new THREE.MeshLambertMaterial({
                color: 0xffffff,
                transparent: true,
                opacity: 0.8,
                depthWrite: false,
            });
            const newCloud = new THREE.Mesh(cloudGeometry, cloudMaterial);
            const originalX = -100;
            const originalY = Math.random() * 200 - 100;
            const originalZ = 50 + Math.random() * 20;
            newCloud.position.set(originalX, originalY, originalZ);
            newCloud.scale.setScalar(1 + Math.random());
            newCloud.userData = { originalPosition: new THREE.Vector3(originalX, originalY, originalZ), offset: Math.random() * Math.PI * 2 };
            this.clouds.push(newCloud);
            this.add(newCloud);
        }
    }

    async loadTreeClusters() {
        const loader = this.loader;
        const treePath = '../FinalModel/tree1.glb';

        // Define approximate road bounding rectangles (xMin, xMax, yMin, yMax)
        const roadAreas = [
            { xMin: -101, xMax: 50, yMin: -70, yMax: -60 }, // Example road area 1
            { xMin: -40, xMax: 5, yMin: -20, yMax: 30 },    // Example road area 2
            { xMin: -220, xMax: -170, yMin: 25, yMax: 160 },// Example road area 3
            { xMin: -40, xMax: 20, yMin: 25, yMax: 70 },    // Example road area 4
            { xMin: -50, xMax: 50, yMin: -50, yMax: 50 }    // General road area
        ];

        // Function to check if a point is inside any road area
        function isInRoad(x, y) {
            for (const area of roadAreas) {
                if (x >= area.xMin && x <= area.xMax && y >= area.yMin && y <= area.yMax) {
                    return true;
                }
            }
            return false;
        }

        // Load the tree model once
        const gltf = await new Promise((resolve, reject) => {
            loader.load(
                treePath,
                (gltf) => resolve(gltf),
                undefined,
                (error) => reject(error)
            );
        });

        const treeModel = gltf.scene;

        // Define fixed positions for tree 
        const clusterPositions = [
           
           
        
            // COB Front
            new THREE.Vector3(-100, 64.5, 3),
            new THREE.Vector3(-110, 64.5, 3),
            new THREE.Vector3(100, -100, 3),
            new THREE.Vector3(-100, -100, 3),
            new THREE.Vector3(0, 100, 3),
            new THREE.Vector3(100, 0, 3),
            new THREE.Vector3(-100, 0, 3),
            new THREE.Vector3(15, -20, 3),
            //PSD 
            new THREE.Vector3(-3, 10, 3),
        ];

        for (const pos of clusterPositions) {
            // Skip cluster if center is inside road
            if (isInRoad(pos.x, pos.y)) {
                continue;
            }

            // Place 4 to 5 trees clustered around the position (increased cluster size)
            const clusterSize = 7 + Math.floor(Math.random() * 4); // 7 to 10 trees
            for (let i = 0; i < clusterSize; i++) {
                const treeInstance = treeModel.clone(true);

                // Small random offset within 2 units around cluster center
                const offsetX = (Math.random() - 0.5) * 2;
                const offsetY = (Math.random() - 0.5) * 2;

                // Skip tree if position is inside road
                if (isInRoad(pos.x + offsetX, pos.y + offsetY)) {
                    continue;
                }

                treeInstance.position.set(pos.x + offsetX, pos.y + offsetY, pos.z);

                // Random rotation around Y axis
                treeInstance.rotation.set(Math.PI / 2, Math.random() * Math.PI * 2, 0);

                // Random scale variation between 2.5 and 3.5
                const scale = 2.5 + Math.random();
                treeInstance.scale.set(scale, scale, scale);

                this.add(treeInstance);
            }
        }
    }
    
    loadRandomTrees() {
        const count = 10;
        const area = {
            x: { min: -200, max: 200 },
            z: { min: -200, max: 200 },
        };
    
        for (let i = 0; i < count; i++) {
            const x = THREE.MathUtils.randFloat(area.x.min, area.x.max);
            const z = THREE.MathUtils.randFloat(area.z.min, area.z.max);
            const position = new THREE.Vector3(x, 0, z);
            const rotation = new THREE.Euler(0, Math.random() * Math.PI * 2, 0);
            const scale = THREE.MathUtils.randFloat(0.8, 1.2);
    
            this.loadGLTFModel('./FinalModel/MultipleTree.glb', position, rotation, scale);
        }
    }

    loadGate() {
        const gatePath = '../FinalModel/FinalGate.glb';
        const gatePosition = new THREE.Vector3(0.85, -70.5, 1);
        const gateRotation = new THREE.Euler(Math.PI / 2, Math.PI / 2 - 0, 0);
        const gateScale = 1;
        this.loadGLTFModel(gatePath, gatePosition, gateRotation, gateScale, "gate");
    }
    loadClinic() {
        const gatePath = '../FinalModel/AUPHealthCenter.glb';
        const gatePosition = new THREE.Vector3(-8, -45, 0);
        const gateRotation = new THREE.Euler(Math.PI / 2, -Math.PI / 2, 0);
        const gateScale = .7;
        this.loadGLTFModel(gatePath, gatePosition, gateRotation, gateScale, "clinic");
    }
    loadGym() {
        const codPath = '../models/model/modell/Gym.gltf';
        const codPosition = new THREE.Vector3(11, -26, 1);
        const codRotation = new THREE.Euler(Math.PI / 2, Math.PI / 2, 0);
        const codScale = 2.5;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale, "gym");
    }
    loadWideTree(){
        const codPath = '../FinalModel/WideTree.glb';
        const codPosition = new THREE.Vector3(-70, 5, 1);
        const codRotation = new THREE.Euler(Math.PI / 2, Math.PI / 2, 0);
        const codScale = 2.5;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }

    loadPIC() {
        const codPath = '../FinalModel/PIC.glb';
        const codPosition = new THREE.Vector3(-12, -26, 1);
        const codRotation = new THREE.Euler(Math.PI / 2, Math.PI, 0);
        const codScale = 1;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale, "pic");
    }

    // Remove the old loadtree method and replace with new random trees method
    async loadRandomTrees(count = 50, terrainSize = 500) {
        const loader = this.loader;
        const treePath = '../FinalModel/tree1.glb';

        // Load the tree model once
        const gltf = await new Promise((resolve, reject) => {
            loader.load(
                treePath,
                (gltf) => resolve(gltf),
                undefined,
                (error) => reject(error)
            );
        });

        const treeModel = gltf.scene;

        for (let i = 0; i < count; i++) {
            // tree model
            const treeInstance = treeModel.clone(true);

            // Random position within terrain bounds
            const x = Math.random() * terrainSize - terrainSize / 2;
            const y = Math.random() * terrainSize - terrainSize / 2;
            const z = 0; // Assuming ground level is 0, adjust if needed

            treeInstance.position.set(x, y, 3);

            // Random rotation around Y axis
            treeInstance.rotation.set(Math.PI / 2, Math.random() * Math.PI * 2, 0);

            // Random scale variation between 2.5 and 3.5
            const scale = 2.5 + Math.random();
            treeInstance.scale.set(scale, scale, scale);

            this.add(treeInstance);
        }
    }
    loadMusicDept() {
        const codPath = '../FinalModel/DepartmentOfMusic.glb';
        const codPosition = new THREE.Vector3(-40, -20, 0);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI / 2, 0);
        const codScale = 1;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale, "music");
    }
    loadPool() {
        const codPath = '../models/model/modell/AUPPool.glb';
        const codPosition = new THREE.Vector3(-43, -34, 0);
        const codRotation = new THREE.Euler(Math.PI / 2, Math.PI / 15, 0);
        const codScale = .2;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale, "pool");
    }
    loadPSD() {
        const codPath = '../models/model/modell/GuardHause.glb';
        const codPosition = new THREE.Vector3(-4, 10, 0.2);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI, 0);
        const codScale = 2;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale, "psd");
    }

    loadMultipeTree(){
        const codPath = '../FinalModel/MultipleTree.glb';
        const codPosition = new THREE.Vector3(-5, -11, 0);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI, 0);
        const codScale = 2;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }

    loadMultipeTree2(){
        const codPath = '../FinalModel/MultipleTree.glb';
        const codPosition = new THREE.Vector3(-5, -3, 0);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI, 0);
        const codScale = 2;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }


    loadGuidance() {
        const codPath = '../models/model/modell/GuidanceService.glb';
        const codPosition = new THREE.Vector3(-15, 20, 0.2);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI * 2, 0);
        const codScale = 3.5;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale, "guidance");
    }
    loadStudentService() {
        const codPath = '../models/model/modell/StudentService.glb';
        const codPosition = new THREE.Vector3(-30, 20, 0.7);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI * 2, 0);
        const codScale = 2.5;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale, "sso");
    }
    loadKubo() {
        const codPath = '../models/model/modell/Kubo.glb';
        const codPosition = new THREE.Vector3(-39, 19, 0.2);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI * 2, 0);
        const codScale = 2;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale, "kubo");
    }
    loadLibrary() {
        const codPath = '../models/model/modell/Library.glb';
        const codPosition = new THREE.Vector3(-60.5, 45, .5);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI / 2, 0);
        const codScale = .4;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale, "library");
    }

    loadParkingS() {
        const codPath = '../FinalModel/ParkingS.glb';
        const codPosition = new THREE.Vector3(-12.5, 50, .5);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI / -2, 0);
        const codScale = 1;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }


    loadCON() {
        const codPath = '../models/model/modell/_CON.glb';
        const codPosition = new THREE.Vector3(-115.5, 40, 0);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI / 2, 0);
        const codScale = 1.5;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale, "con");
    }
    loadCOB() {
        const codPath = '../FinalModel/COB.glb';
        const codPosition = new THREE.Vector3(-110.5, 58, 2.2);
        const codRotation = new THREE.Euler(Math.PI / 2, Math.PI/-2, 0);
        const codScale = 1.2;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale, "cob");
    }
    loadCST() {
        const codPath = '../FinalModel/CST.glb';
        const codPosition = new THREE.Vector3(-105.5, 70, 1.5);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI, 0);
        const codScale = 1;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale, "cst");
    }
    loadCOM() {
        const codPath = '../models/model/modell/COM 1.glb';
        const codPosition = new THREE.Vector3(-60.5, 95, 0);
        const codRotation = new THREE.Euler(Math.PI / 2, Math.PI / 2, 0);
        const codScale = 1;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale, "com");
    }
    loadfinster() {
        const codPath = '../FinalModel/Finster.glb';
        const codPosition = new THREE.Vector3(-145.5, 40.5, 0);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI / 2, 0);
        const codScale = 1.5;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale, "finster");
    }
    loadgraduates() {
        const codPath = '../models/model/modell/Graduates.glb';
        const codPosition = new THREE.Vector3(-150.5, 55.5, 0);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI / 2, 0);
        const codScale = 1.5;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale, "graduates");
    }
    loadGraduates2(){
        const codPath = '../FinalModel/GRADUATES2.glb';
        const codPosition = new THREE.Vector3(-140.5, 55.5, 0);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI / 2, 0);
        const codScale = 1.5;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale, "graduates2");
    }
    loadcaet() {
        const codPath = '../models/model/modell/CAET.glb';
        const codPosition = new THREE.Vector3(-200.5, 44.5, 0);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI, 0);
        const codScale = 1;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale, "caet");
    }
    loadfactory(){
        const codPath = '../FinalModel/Factory.glb';
        const codPosition = new THREE.Vector3(-190.5, 140.5, 0);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI / -2, 0);
        const codScale = 3;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale, "factory");
    }
    loadCOD() {
        const codPath = '../models/model/modell/COD .glb';
        const codPosition = new THREE.Vector3(-45.5, 100, -1.5);
        const codRotation = new THREE.Euler(Math.PI / 2, Math.PI, 0);
        const codScale = 1.5;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale, "cod");
    }
    loadCaff() {
        const codPath = '../models/model/modell/CAff.glb';
        const codPosition = new THREE.Vector3(55, 75.5, 0.2);
        const codRotation = new THREE.Euler(Math.PI / 2, Math.PI / 27, 0);
        const codScale = 1.5;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale, "caff");
    }

    loadDormSampa(){
        const codPath = '../FinalModel/Sampaguita.glb';
        const codPosition = new THREE.Vector3(-45.5, 100, -2);
        const codRotation = new THREE.Euler(Math.PI / 2, Math.PI, 0);
        const codScale = 1.5;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale, "sampa");
    }

    loadDormWaling(){
        const codPath = '../FinalModel/WalingWaling.glb';
        const codPosition = new THREE.Vector3(5.5, 150, 2);
        const codRotation = new THREE.Euler(Math.PI / 2, Math.PI / -1, 0);
        const codScale = .6;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale, "waling");
    }

    loadIlangIlang(){
        const codPath = '../FinalModel/ILANGILANG.glb';
        const codPosition = new THREE.Vector3(10.5, 130, 2);
        const codRotation = new THREE.Euler(Math.PI / 2, Math.PI / 2, 0);
        const codScale = 1.5;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale, "ilang");
    }

    loadCadena(){;
        const codPath = '../FinalModel/CADENA.glb';
        const codPosition = new THREE.Vector3(-22.5, 130, 2);
        const codRotation = new THREE.Euler(Math.PI / 2, Math.PI / 2, 0);
        const codScale = 1.5;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale, "cadena");
    }
    loadWaterLaundry() {
        const codPath = '../models/model/modell/Water&LaundryDep.glb';
        const codPosition = new THREE.Vector3(20, 75.5, 0.2);
        const codRotation = new THREE.Euler(Math.PI / 2, Math.PI / -2, 0);
        const codScale = 2;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale, "laundry");
    }
    loadstore() {
        const codPath = '../models/model/modell/Stores.glb';
        const codPosition = new THREE.Vector3(28, 35.5, 0.2);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI * 2, 0);
        const codScale = 2;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale, "store");
    }
    loadMahogany() {
        const codPath = '../models/model/modell/Mahugany.glb';
        const codPosition = new THREE.Vector3(55, 35.5, 3);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI / 2, 0);
        const codScale = 1.1;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale, "mahogany");
    }
    loadAcacia() {
        const codPath = '../FinalModel/AcaciaHall.glb';
        const codPosition = new THREE.Vector3(75, 45.5, 1);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI * 2, 0);
        const codScale = 2.5;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale, "acacia");
    }
    dormA() {
        const codPath = '../models/model/modell/ApartmentD.glb';
        const codPosition = new THREE.Vector3(55, 15.5, 0.2);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI * 2, 0);
        const codScale = 1.5;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale, "dormA");
    }
    dormB() {
        const codPath = '../models/model/modell/ApartmentD.glb';
        const codPosition = new THREE.Vector3(75, 15.5, 0.2);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI * 2, 0);
        const codScale = 1.5;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale, "dormC");
    }
    dormC() {
        const codPath = '../models/model/modell/ApartmentD.glb';
        const codPosition = new THREE.Vector3(95, 15.5, 0.2);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI * 2, 0);
        const codScale = 1.5;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale, "dormC");
    }
    dormD() {
        const codPath = '../models/model/modell/ApartmentD.glb';
        const codPosition = new THREE.Vector3(115, 15.5, 0.2);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI * 2, 0);
        const codScale = 1.5;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale, "dormD");
    }

    loadPIONEER() {
        const codPath = '../FinalModel/Pioneer.glb';
        const codPosition = new THREE.Vector3(-108, 85,1);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI / 2, 0);
        const codScale = .8;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale, "pioneer");
    }

    loadCentinial(){
        const codPath = '../FinalModel/CentenialPark.glb';
        const codPosition = new THREE.Vector3(-144, 72, 3);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI / 2, 0);
        const codScale = .3;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale, "Centenial");
    }
    
    loadArrow() {
        const codPath = './models/model/modell/road/direction_arrow.glb';
        const codPosition = new THREE.Vector3(0, 5, 0);
        const codRotation =  new THREE.Euler(0, 0, -Math.PI / 2); 
        const codScale = 0.1;

        const arrowPosition = position.clone();
        arrowPosition.z += 5;

        this.loadGLTFModel(codPath, codPosition, codRotation, codScale, "arrow");
    }
}
