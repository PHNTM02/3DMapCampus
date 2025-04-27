import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export class Asset extends THREE.Group {
    constructor(scene) {
        super();

        this.loader = new GLTFLoader();
        this.loadAll();
    }

    loadGLTFModel(path, position, rotation, scale) {
        this.loader.load(
            path,
            (gltf) => {
                const model = gltf.scene;
                model.scale.set(scale, scale, scale);
                model.position.set(position.x, position.y, position.z);
                model.rotation.set(rotation.x, rotation.y, rotation.z);
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
        // Remove the old loadtree call and replace with new async call
        await this.loadTreeClusters();

        this.loadPioneer();
        // this.loadAdminOffice();
        // this.loadAlumni();
        // this.loadDormA();
        // this.loadDormMolave();
        this.loadDormWaling();
        this.loadDormSampa();
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

        // Define fixed positions for tree clusters (expanded positions)
        const clusterPositions = [
            new THREE.Vector3(-80, -80, 3),
            new THREE.Vector3(-60, -40, 3),
            new THREE.Vector3(-30, -30, 3),
            new THREE.Vector3(20, 10, 3),
            new THREE.Vector3(-10, 40, 3),
            new THREE.Vector3(40, -20, 3),
            new THREE.Vector3(0, 0, 3),
            new THREE.Vector3(-50, 20, 3),
            new THREE.Vector3(50, 50, 3),
            new THREE.Vector3(-40, 60, 3),
            new THREE.Vector3(30, -40, 3),
            new THREE.Vector3(10, -50, 3),
            new THREE.Vector3(60, 60, 3),
            new THREE.Vector3(-70, 70, 3),
            new THREE.Vector3(70, -70, 3)
        ];

        for (const pos of clusterPositions) {
            // Skip cluster if center is inside road
            if (isInRoad(pos.x, pos.y)) {
                continue;
            }

            // Place 3 to 4 trees clustered around the position
            const clusterSize = 3 + Math.floor(Math.random() * 2); // 3 or 4 trees
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

    loadGate() {
        const gatePath = '../FinalModel/Gate.glb';
        const gatePosition = new THREE.Vector3(0.85, -67, 0);
        const gateRotation = new THREE.Euler(Math.PI / 2, Math.PI / 2 - 0.05, 0);
        const gateScale = 1;
        this.loadGLTFModel(gatePath, gatePosition, gateRotation, gateScale);
    }
    loadClinic() {
        const gatePath = '../FinalModel/AUPHealthCenter.glb';
        const gatePosition = new THREE.Vector3(-8, -45, 0);
        const gateRotation = new THREE.Euler(Math.PI / 2, -Math.PI / 2, 0);
        const gateScale = .7;
        this.loadGLTFModel(gatePath, gatePosition, gateRotation, gateScale);
    }
    loadGym() {
        const codPath = '../models/model/modell/Gym.gltf';
        const codPosition = new THREE.Vector3(11, -26, 0);
        const codRotation = new THREE.Euler(Math.PI / 2, Math.PI / 2, 0);
        const codScale = 2.5;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    loadPIC() {
        const codPath = '../FinalModel/PIC.glb';
        const codPosition = new THREE.Vector3(-12, -26, 0);
        const codRotation = new THREE.Euler(Math.PI / 2, Math.PI, 0);
        const codScale = 1;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
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
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    loadPool() {
        const codPath = '../models/model/modell/AUPPool.glb';
        const codPosition = new THREE.Vector3(-43, -34, 0);
        const codRotation = new THREE.Euler(Math.PI / 2, Math.PI / 15, 0);
        const codScale = .2;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    loadPSD() {
        const codPath = '../models/model/modell/GuardHause.glb';
        const codPosition = new THREE.Vector3(-4, 10, 0.2);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI, 0);
        const codScale = 2;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    loadGuidance() {
        const codPath = '../models/model/modell/GuidanceService.glb';
        const codPosition = new THREE.Vector3(-15, 20, 0.2);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI * 2, 0);
        const codScale = 3.5;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    loadStudentService() {
        const codPath = '../models/model/modell/StudentService.glb';
        const codPosition = new THREE.Vector3(-30, 20, 0.7);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI * 2, 0);
        const codScale = 2.5;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    loadKubo() {
        const codPath = '../models/model/modell/Kubo.glb';
        const codPosition = new THREE.Vector3(-39, 19, 0.2);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI * 2, 0);
        const codScale = 2;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    loadLibrary() {
        const codPath = '../models/model/modell/Library.glb';
        const codPosition = new THREE.Vector3(-60.5, 45, 0.1);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI / 2, 0);
        const codScale = .4;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    loadCON() {
        const codPath = '../models/model/modell/_CON.glb';
        const codPosition = new THREE.Vector3(-115.5, 40, 0);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI / 2, 0);
        const codScale = 1.5;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    loadCOB() {
        const codPath = '../FinalModel/COB.glb';
        const codPosition = new THREE.Vector3(-110.5, 50, 1);
        const codRotation = new THREE.Euler(Math.PI / 2, Math.PI/2, 0);
        const codScale = 1;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    loadCST() {
        const codPath = '../FinalModel/CST.glb';
        const codPosition = new THREE.Vector3(-105.5, 65, 0.5);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI, 0);
        const codScale = .9;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    loadCOM() {
        const codPath = '../models/model/modell/COM 1.glb';
        const codPosition = new THREE.Vector3(-60.5, 95, 0);
        const codRotation = new THREE.Euler(Math.PI / 2, Math.PI / 2, 0);
        const codScale = 1;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    loadfinster() {
        const codPath = '../FinalModel/Finster.glb';
        const codPosition = new THREE.Vector3(-150.5, 40.5, 0);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI / 2, 0);
        const codScale = 1.5;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    loadgraduates() {
        const codPath = '../models/model/modell/Graduates.glb';
        const codPosition = new THREE.Vector3(-150.5, 50.5, 0);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI / 2, 0);
        const codScale = 1.5;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    loadGraduates2(){
        const codPath = '../FinalModel/GRADUATES2.glb';
        const codPosition = new THREE.Vector3(-140.5, 50.5, 0);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI / 2, 0);
        const codScale = 1.5;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    loadcaet() {
        const codPath = '../models/model/modell/CAET.glb';
        const codPosition = new THREE.Vector3(-200.5, 44.5, 0);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI, 0);
        const codScale = 1;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    loadCentinial(){
        const codPath = '../FinalModel/CentinialPark.glb';
        const codPosition = new THREE.Vector3(-150.5, 60.5, 0);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI, 0);
        const codScale = 2;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    loadfactory(){
        const codPath = '../FinalModel/Factory.glb';
        const codPosition = new THREE.Vector3(-190.5, 140.5, 0);
        // const codPosition = new THREE.Vector3(0, 0, 0);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI / -2, 0);
        const codScale = 3;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    loadCOD() {
        const codPath = '../models/model/modell/COD .glb';
        const codPosition = new THREE.Vector3(-45.5, 100, -2);
        const codRotation = new THREE.Euler(Math.PI / 2, Math.PI, 0);
        const codScale = 1.5;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    loadCaff() {
        const codPath = '../models/model/modell/CAff.glb';
        const codPosition = new THREE.Vector3(55, 75.5, 0.2);
        const codRotation = new THREE.Euler(Math.PI / 2, Math.PI / 27, 0);
        const codScale = 1.5;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }

    loadDormSampa(){
        const codPath = '../FinalModel/ Sampaguita.glb';
        const codPosition = new THREE.Vector3(-45.5, 100, -2);
        const codRotation = new THREE.Euler(Math.PI / 2, Math.PI, 0);
        const codScale = 1.5;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }

    loadDormWaling(){
        const codPath = '../FinalModel/WalingWaling.glb';
        const codPosition = new THREE.Vector3(5.5, 150, 2);
        const codRotation = new THREE.Euler(Math.PI / 2, Math.PI / -1, 0);
        const codScale = .6;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }

    loadIlangIlang(){
        const codPath = '../FinalModel/ILANGILANG.glb';
        const codPosition = new THREE.Vector3(10.5, 130, 2);
        const codRotation = new THREE.Euler(Math.PI / 2, Math.PI / 2, 0);
        const codScale = 1.5;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }

    loadCadena(){;
        const codPath = '../FinalModel/CADENA.glb';
        const codPosition = new THREE.Vector3(-22.5, 130, 2);
        const codRotation = new THREE.Euler(Math.PI / 2, Math.PI / 2, 0);
        const codScale = 1.5;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }



    loadWaterLaundry() {
        const codPath = '../models/model/modell/Water&LaundryDep.glb';
        const codPosition = new THREE.Vector3(20, 75.5, 0.2);
        const codRotation = new THREE.Euler(Math.PI / 2, Math.PI / -2, 0);
        const codScale = 2;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    loadstore() {
        const codPath = '../models/model/modell/Stores.glb';
        const codPosition = new THREE.Vector3(28, 35.5, 0.2);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI * 2, 0);
        const codScale = 2;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    loadMahogany() {
        const codPath = '../models/model/modell/Mahugany.glb';
        const codPosition = new THREE.Vector3(55, 35.5, 3);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI / 2, 0);
        const codScale = 1.1;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    loadAcacia() {
        const codPath = '../FinalModel/AcaciaHall.glb';
        const codPosition = new THREE.Vector3(75, 45.5, 1);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI * 2, 0);
        const codScale = 2.5;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    dormA() {
        const codPath = '../models/model/modell/ApartmentD.glb';
        const codPosition = new THREE.Vector3(55, 15.5, 0.2);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI * 2, 0);
        const codScale = 1.5;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    dormB() {
        const codPath = '../models/model/modell/ApartmentD.glb';
        const codPosition = new THREE.Vector3(75, 15.5, 0.2);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI * 2, 0);
        const codScale = 1.5;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    dormC() {
        const codPath = '../models/model/modell/ApartmentD.glb';
        const codPosition = new THREE.Vector3(95, 15.5, 0.2);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI * 2, 0);
        const codScale = 1.5;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    dormD() {
        const codPath = '../models/model/modell/ApartmentD.glb';
        const codPosition = new THREE.Vector3(115, 15.5, 0.2);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI * 2, 0);
        const codScale = 1.5;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }

    loadPioneer() {
        const codPath = '../models/model/modell/PIONEER 1.glb';
        const codPosition = new THREE.Vector3(-100, 60.5, 0);
        const codRotation = new THREE.Euler(Math.PI / 2, Math.PI / 2, Math.PI / 2);
        const codScale = 0.18;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }

    
}
