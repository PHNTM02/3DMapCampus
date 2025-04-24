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

    loadAll() {
        this.loadGate();
        this.loadClinic();

        // this.loadCOM();

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

        this.loadfinster();
        this.loadgraduates();
        this.loadcaet();

        this.loadCOD();

        this.loadCSC();
        this.loadstore();
        this.loadCaff();
        this.loadWaterLaundry();
        this.loadMahogany();
        this.loadAcacia();
        this.dormA();
        this.dormB();
        this.dormC();
        this.dormD();



        // this.loadPioneer();
        // this.loadAdminOffice();
        // this.loadAlumni();
        // this.loadDormA();
        // this.loadDormMolave();
        // this.loadDormWaling();
        // this.loadDormSampa();
    }

    loadGate() {
        const gatePath = '../FinalModel/Gate.glb';
        const gatePosition = new THREE.Vector3(0.85, -3.2, 0);
        const gateRotation = new THREE.Euler(Math.PI / 2, Math.PI / 2 - 0.05, 0);
        const gateScale = 0.37;
        this.loadGLTFModel(gatePath, gatePosition, gateRotation, gateScale);
    }
    loadClinic() {
        const gatePath = '../FinalModel/AUPHealthCenter.glb';
        const gatePosition = new THREE.Vector3(-3.5, 1.5, 0);
        const gateRotation = new THREE.Euler(Math.PI / 2, -Math.PI / 2, 0);
        const gateScale = 0.37;
        this.loadGLTFModel(gatePath, gatePosition, gateRotation, gateScale);
    }
    loadGym() {
        const codPath = '../models/model/modell/Gym.gltf';
        const codPosition = new THREE.Vector3(6, 13.5, 0);
        const codRotation = new THREE.Euler(Math.PI / 2, Math.PI / 2, 0);
        const codScale = 1.5;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    loadPIC() {
        const codPath = '../FinalModel/PIC.glb';
        const codPosition = new THREE.Vector3(-7, 13.5, 0);
        const codRotation = new THREE.Euler(Math.PI / 2, Math.PI, 0);
        const codScale = 0.7;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    loadMusicDept() {
        const codPath = '../models/model/modell/Gym.gltf';
        const codPosition = new THREE.Vector3(-35, 15.5, 0);
        const codRotation = new THREE.Euler(Math.PI / 2, Math.PI / 2, 0);
        const codScale = 1.5;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    loadPool() {
        const codPath = '../models/model/modell/AUPPool.glb';
        const codPosition = new THREE.Vector3(-31, 6.5, 0);
        const codRotation = new THREE.Euler(Math.PI / 2, Math.PI, 0);
        const codScale = 0.17;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    loadPSD() {
        const codPath = '../models/model/modell/GuardHause.glb';
        const codPosition = new THREE.Vector3(-1, 35.5, 0.2);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI, 0);
        const codScale = 1.5;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    loadGuidance() {
        const codPath = '../models/model/modell/GuidanceService.glb';
        const codPosition = new THREE.Vector3(-5, 35.5, 0.2);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI * 2, 0);
        const codScale = 2.5;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    loadStudentService() {
        const codPath = '../models/model/modell/StudentService.glb';
        const codPosition = new THREE.Vector3(-17, 34.5, 0.7);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI * 2, 0);
        const codScale = 2.5;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    loadKubo() {
        const codPath = '../models/model/modell/Kubo.glb';
        const codPosition = new THREE.Vector3(-23, 35.5, 0.2);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI * 2, 0);
        const codScale = 1;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    loadLibrary() {
        const codPath = '../models/model/modell/Library.glb';
        const codPosition = new THREE.Vector3(-30.5, 44.5, 0.1);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI / 2, 0);
        const codScale = 0.14;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    loadCON() {
        const codPath = '../models/model/modell/_CON.glb';
        const codPosition = new THREE.Vector3(-46.5, 43.5, 0);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI / 2, 0);
        const codScale = 0.7;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    loadCOB() {
        const codPath = '../models/model/modell/Gym.gltf';
        const codPosition = new THREE.Vector3(-50.5, 50.5, 0);
        const codRotation = new THREE.Euler(Math.PI / 2, Math.PI / 2, 0);
        const codScale = 1.5;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    loadCST() {
        const codPath = '../FinalModel/CST.glb';
        const codPosition = new THREE.Vector3(-50.5, 55.5, 0.5);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI, 0);
        const codScale = 0.5;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }




    loadfinster() {
        const codPath = '../FinalModel/Finster.glb';
        const codPosition = new THREE.Vector3(-65.5, 43.5, 0);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI / 2, 0);
        const codScale = 0.7;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    loadgraduates() {
        const codPath = '../models/model/modell/Graduates.glb';
        const codPosition = new THREE.Vector3(-65.5, 50.5, 0);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI / 2, 0);
        const codScale = 0.7;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    loadcaet() {
        const codPath = '../models/model/modell/CAET.glb';
        const codPosition = new THREE.Vector3(-80.5, 44.5, 0);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI, 0);
        const codScale = 0.3;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }

    loadCOD() {
        const codPath = '../models/model/modell/COD .glb';
        const codPosition = new THREE.Vector3(-26.5, 65.5, -0.1);
        const codRotation = new THREE.Euler(Math.PI / 2, Math.PI, 0);
        const codScale = 0.7;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    




    loadCSC() {
        const codPath = '../models/model/modell/Stores.glb';
        const codPosition = new THREE.Vector3(-2, 60.5, 0.2);
        const codRotation = new THREE.Euler(Math.PI / 2, Math.PI, 0);
        const codScale = 1.3;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }

    loadCaff() {
        const codPath = '../models/model/modell/CAff.glb';
        const codPosition = new THREE.Vector3(17, 60.5, 0.2);
        const codRotation = new THREE.Euler(Math.PI / 2, Math.PI / 2, 0);
        const codScale = 1.3;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    loadWaterLaundry() {
        const codPath = '../models/model/modell/Water&LaundryDep.glb';
        const codPosition = new THREE.Vector3(6, 60.5, 0.2);
        const codRotation = new THREE.Euler(Math.PI / 2, Math.PI, 0);
        const codScale = 1.3;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    loadstore() {
        const codPath = '../models/model/modell/Stores.glb';
        const codPosition = new THREE.Vector3(22, 43.5, 0.2);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI * 2, 0);
        const codScale = 1.3;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    loadMahogany() {
        const codPath = '../models/model/modell/Mahugany.glb';
        const codPosition = new THREE.Vector3(40, 40.5, 1.5);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI / 2, 0);
        const codScale = 0.6;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    loadAcacia() {
        const codPath = '../FinalModel/AcaciaHall.glb';
        const codPosition = new THREE.Vector3(50, 46.5, 0.2);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI * 2, 0);
        const codScale = 1.3;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    dormA() {
        const codPath = '../models/model/modell/ApartmentD.glb';
        const codPosition = new THREE.Vector3(53, 34.5, 0.2);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI * 2, 0);
        const codScale = 0.7;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    dormB() {
        const codPath = '../models/model/modell/ApartmentD.glb';
        const codPosition = new THREE.Vector3(65, 34.5, 0.2);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI * 2, 0);
        const codScale = 0.7;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    dormC() {
        const codPath = '../models/model/modell/ApartmentD.glb';
        const codPosition = new THREE.Vector3(75, 34.5, 0.2);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI * 2, 0);
        const codScale = 0.7;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    dormD() {
        const codPath = '../models/model/modell/ApartmentD.glb';
        const codPosition = new THREE.Vector3(85, 34.5, 0.2);
        const codRotation = new THREE.Euler(Math.PI / 2, -Math.PI * 2, 0);
        const codScale = 0.7;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }
    







    loadCOM() {
        const codPath = '../models/model/modell/COM 1.glb';
        const codPosition = new THREE.Vector3(-20.5, 40.5, 0);
        const codRotation = new THREE.Euler(Math.PI / 2, Math.PI / 2, 0);
        const codScale = 0.18;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }

    loadPioneer() {
        const codPath = '../models/model/modell/PIONEER 1.glb';
        const codPosition = new THREE.Vector3(1.5, 25.5, 0);
        const codRotation = new THREE.Euler(Math.PI / 2, Math.PI / 2, Math.PI / 2);
        const codScale = 0.18;
        this.loadGLTFModel(codPath, codPosition, codRotation, codScale);
    }

    
}
