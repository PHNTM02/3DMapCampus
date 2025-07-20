
// CANVA 3D MAP
const map = document.getElementById("experience-canvas");

// Bottom Navigation
const collegebar = document.getElementById("collegebar");
const dormbar = document.getElementById("dormbar");
const facilitybar = document.getElementById("facilitybar");

// building Model Information
const modelBuilding = document.getElementById("modelBuilding");
const buildingtitle = document.getElementById("buildingtitle");
const buildingSummary = document.getElementById("buildingSummary");
const buildingImage = document.getElementById("buildingImage");
const buidlingImg = document.querySelector('.buidlingImg img');
const backbtn = document.getElementById("backbtn");

// College & dorm Display
const dorm = document.getElementById("dorm");
const college = document.getElementById("college");
const facility = document.getElementById("faci");

// COLLEGE & DORM LIST
const cah = document.getElementById("cahli");
const cob = document.getElementById("cobli");
const cod = document.getElementById("codli");
const coe = document.getElementById("coeli");
const coh = document.getElementById("cohli");
const com = document.getElementById("comli");
const con = document.getElementById("conli");
const cst = document.getElementById("cstli");
const cot = document.getElementById("cotli");
const Mahogany = document.getElementById("mahoganyli");
const Acacia = document.getElementById("acaciali");
const F = document.getElementById("aptfli");
const Eastern = document.getElementById("easternli");
const Molave = document.getElementById("molaveli");
const A = document.getElementById("aptali");
const Sampaguita = document.getElementById("sampali");
const Cadena = document.getElementById("cadenali");
const Dama = document.getElementById("damali");
const Cattleya = document.getElementById("catli");
const Waling = document.getElementById("walingli");
const Ilang = document.getElementById("ilangli");
const aptbli = document.getElementById("aptbli");
const aptgli = document.getElementById("aptgli");
const apthli = document.getElementById("apthli");
const apteli = document.getElementById("apteli");
const foodfac = document.getElementById("foodfac");
const clinic = document.getElementById("clinic");
const store = document.getElementById("store");
const waterstation = document.getElementById("waterstation");
const guidance = document.getElementById("guidance");
const kubo = document.getElementById("kubo");
const psd = document.getElementById("psd");
const gym = document.getElementById("gym");
const pic = document.getElementById("pic");
const cintennial = document.getElementById("cintenial");
const ssc = document.getElementById("ssc");

let hidden = false;

collegebar.addEventListener("click", () => {
    if(!hidden){
        college.style.display = 'none';
        modelBuilding.style.display = 'none'; 
        faci.style.display = 'none'; 
        hidden = true
    } else {
        college.style.display = 'block';
        dorm.style.display = 'none';
        modelBuilding.style.display = 'none'; 
        faci.style.display = 'none'; 
        hidden = false;
    }
dormbar.addEventListener("click", () => {
    if(!hidden){
        dorm.style.display = 'none';
        modelBuilding.style.display = 'none'; 
        faci.style.display = 'none'; 
        hidden = true
    } else {
        dorm.style.display = 'block';
        college.style.display = 'none';
        modelBuilding.style.display = 'none'; 
        faci.style.display = 'none'; 
        hidden = false;
    }
});
facilitybar.addEventListener("click", () => {
    if(!hidden){
        dorm.style.display = 'none';
        modelBuilding.style.display = 'none'; 
        modelBuilding.style.display = 'none'; 
        hidden = true
    } else {
        facility.style.display = 'block';
        college.style.display = 'none';
        modelBuilding.style.display = 'none'; 
        hidden = false;
    }
});

backbtn.addEventListener("click", () => {
    modelBuilding.style.display = 'none';
    college.style.display = 'none';
    dorm.style.display = 'none';
    facility.style.display = 'none';
    document.getElementById('building').style.display = 'none';
    document.getElementById('locate').style.display = 'none';
});

cob.addEventListener("click", function () {
    modelBuilding.style.display = 'block';
    document.getElementById('locate').style.display = 'block';
    college.style.display = 'none';
    buildingImg.src = "img/college_img/cob.jpg";
    buildingtitle.innerHTML = "COLLEGE OF BUSINESS";
    buildingSummary.innerHTML= `The College of Business prepares students to become principled, competitive, and ingenious business professionals in order to drive economic development and improve the quality of human life.<br><br>
          COB serves as home to future entrepreneurs, business leaders, financial analysts, auditors, tax advisors, management consultants, IT experts, system administrators and analysts, office specialists and administrators in manufacturing, service, food, health, education, and agriculture industries in government or private companies and controlled corporations.  It is an advocate of innovation, linkages, and continuous learning.  COB has strong affiliation with universities in the ASEAN and reputable industry partners to provide a wide array of learning opportunities for students.<br><br>
          The Business Administration program is recognized as a Center of Development by the Commission on Higher Education (CHED).  Further, CHED awarded AUP as a Delivering Higher Education Institution (DHEI) of the Master’s in Business Administration and Doctor of Philosophy in Business Administration programs for the Scholarships for Instructors’ Knowledge Advancement Program (SIKAP).  Meanwhile, the Accountancy program is a Continuing Professional Development (CPD) provider duly accredited by the Professional Regulation Commission (PRC).`;
});

cah.addEventListener("click", () => {
    modelBuilding.style.display = 'block';
    college.style.display = 'none';
    buildingImg.src = "img/college_img/cah.jpg";
    buildingtitle.innerHTML = "COLLEGE OF ARTS AND HUMANITIES";
    buildingSummary.innerHTML = `The College of Arts and Humanities (CAH) is a community of passionate individuals who never cease to create meaningful ways of seeking answers to life’s puzzling questions so as to serve humanity. Here in CAH, we teach our students to amplify the voice of the voiceless. We value creative thinking skills. We also study how mind and body work together to better understand and help others. More so, we create meaningful careers and cultural engagement.`;
    
});
cod.addEventListener("click", function () {
    modelBuilding.style.display = 'block';
    college.style.display = 'none';
    buildingtitle.innerHTML = "COLLEGE OF DENTISTRY";
    buildingImg.src = "img/college_img/cod.jpg";
    buildingSummary.innerHTML = `The College of Dentistry of the Adventist University of the Philippines prepares and train students for excellent dental service providing them with Bible-based education and training to become missionary dentists in all parts of the world. They are trained to be highly skilled, selfless, and compassionate dental professionals who has the excellent ability to alleviate ills, restore dental health and improve the quality of life of fellowmen.  Its learning and training synchronously take place in a multicultural environment with a diverse learning atmosphere.<br><br>

          Teachers at the College have outstanding communication skill, have an engaging classroom and clinical presence, educate with empathy, and advocate lifelong love of learning and love of Jesus.<br><br>

          The College administration continues to innovate and adapt to the everchanging landscape of education and continuous learning , creating linkages with other institutions, local and international, creating strong affiliation with Adventist Universities around the world with the objective of delivering a diversity of learning opportunities to students.<br><br>

          AUP College of Dentistry offers the program DOCTOR OF DENTAL MEDICINE and envisions to be a leading Adventist Dental Institution in the Asia Pacific Region.`;
});
coh.addEventListener("click", function () {
    modelBuilding.style.display = 'block';
    college.style.display = 'none';
    buildingtitle.innerHTML = "COLLEGE OF HEALTH";
    buildingImg.src = "img/college_img/coh.jpg";
    buildingSummary.innerHTML = `he AUP College of Health is committed to provide quality Bible-based health professions education, nurturing students for academic excellence, Christlike character, and exemplary service.<br><br>

        The College of Health aims to produce graduates who will be licensed to practice as medical technologists/medical laboratory scientists; therapeutic, administrative, clinical nutritionist-dietitians;  foodservice managers, community health workers, public health administrators, researchers, consultants, academicians, preventive health clinicians, health and wellness advocates, lifestyle management and community development interventionists, program managers and healthcare leaders in hospitals, local government units, non-government organizations, corporate industries, health organizations, and academic institutions in the Philippines and other parts of the world.`;
});
coe.addEventListener("click", function () {
    modelBuilding.style.display = 'block';
    college.style.display = 'none';
    buildingtitle.innerHTML = "COLLEGE OF EDUCATION";
    buildingImg.src = "img/college_img/coe.jpg";
    buildingSummary.innerHTML = `he College of Education (COE) is a training institution for Teacher Education that prepares graduates that demonstrate mastery of discipline, using a wide range of teaching methodologies and delivery modes appropriate to specific learners and their environment. COE is also committed to develop innovative curricula, instructional plans, teaching approaches, and resources for diverse learners.  It is the objective of the College to pursue lifelong learning for personal growth through varied experiential and field-based opportunities coupled with the Integration of Faith and Learning.`;
});
com.addEventListener("click", function () {
    modelBuilding.style.display = 'block';
    college.style.display = 'none';
    buildingtitle.innerHTML = "COLLEGE OF MEDICINE";
    buildingImg.src = "img/college_img/com.jpg";
    buildingSummary.innerHTML = `The Adventist University of the Philippines College of Medicine (AUPCOM) is the first and only Adventist medical school in the Philippines and the Asia-Pacific region established in 2015. It is only the sixth of seven Adventist medical schools globally, the oldest of which is the Loma Linda University School of Medicine in Loma Linda, California, USA.  AUP College of Medicine is the only medical school in the Philippines and Southeast Asia which includes in its medical curriculum courses in Lifestyle Medicine, Religion, and Whole Person Care, because of its main thrust to produce physician-missionaries for Christ.<br><br>

          The medical school accepts baccalaureate allied health degree holders, to begin at the first-year level, with an NMAT score 60 and above, an above average GPA, an outstanding Christian character, and with good English communication skills. Freshmen Medicine students are welcomed in a White Coat Ceremony at the beginning of the year, with the donning of the white coat signifying the purity of the medical profession, and the giving out of the Holy Bible – the most important book above all books, and the Ministry of Healing. These medical students will be trained to become Five-Star Plus Physicians, namely, as mandated by CHED:  Clinician, Teacher, Researcher, Manager, and Social Mobilizer, and additionally the unique AUPCOM Plus – to become a Physician Missionary.<br><br>

          At the fourth-year level, selected outstanding medical students are given the opportunity to go on clinical clerkship rotation for six weeks at our sister institution – the Loma Linda University School of Medicine – Medical Center in Loma Linda, California.`;

    // Move camera closer to Mesh_69_14
    if (selectedBuilding.name === 'Mesh_69_14') {
        detailsPanel.innerHTML = `<h3>${buildingtitle.innerHTML}</h3><p>${buildingSummary.innerHTML}</p>`;

        const bbox = new THREE.Box3().setFromObject(selectedBuilding);
        const center = bbox.getCenter(new THREE.Vector3());
        const offset = new THREE.Vector3(0, 10, 15);
        const newCameraPos = center.clone().add(offset);

        camera.position.copy(newCameraPos);
        controls.target.copy(center);
        controls.update();
    }
    });
});
con.addEventListener("click", function () {
    modelBuilding.style.display = 'block';
    college.style.display = 'none';
    buildingtitle.innerHTML = "COLLEGE OF NURSING";
    buildingImg.src = "img/college_img/_con.jpg";
    buildingSummary.innerHTML = `The college is situated at the heart of the University where the utilization of science blends art, aptitude, and attitude in the making of a wholistic professional. It is the home base for developing competent, caring hands inspired by the purpose to harness the skillset hallmarked with quality in the rendering of nursing service to humankind. The College of Nursing is the training hive and haven that launches the future nurses for the world.`;
});
cst.addEventListener("click", function () {
    modelBuilding.style.display = 'block';
    college.style.display = 'none';
    buildingtitle.innerHTML = "COLLEGE OF SCIENE AND TECHNOLOGY";
    buildingImg.src = "img/college_img/cst.jpg";
    buildingSummary.innerHTML = `The College of Science and Technology (CST) exists to provide excellent and quality Christian education to students who would be future biologists, medical doctors, chemists, chemical technicians, electronics engineers, mathematicians, data scientists, librarians, curators, and researchers equipped with the necessary skills reflecting Christian values. `;
});
cot.addEventListener("click", function () {
    modelBuilding.style.display = 'block';
    college.style.display = 'none';
    buildingtitle.innerHTML = "COLLEGE OF THEOLOGY";
    buildingImg.src = "img/college_img/cot.jpg";
    buildingSummary.innerHTML = `The College of Theology is the home for those who want to experience the good news of salvation of Jesus Christ. It aims to lead every student to have a saving, loving, and growing, relationship with Him by being a receiver and a sharer of the gospel.<br><br>

        The College of Theology specifically provides education as the initial degree for those who are preparing for the gospel ministry in the Adventist church. For non-theology students, it provides Bible education that teaches Adventist values and lifestyle without forcing conversion of students from other faith. Overall, it exists to help in the faith development of the students.`;
});

// APARTMENT
Mahogany.addEventListener("click", () => {
    modelBuilding.style.display = 'block';
    dorm.style.display = 'none';
    buildingtitle.innerHTML = "MAHOGANY";
    buildingImg.src = "img/aupDorm/mahogany.jpg";
    buildingSummary.innerHTML = "Mahogany Residence Hall has rooms good for two occupants only. Each room also has its own toilet. It has a big parking space nearby, making it easy for students with vehicles to park their cars or motorbikes.";
});
Acacia.addEventListener("click", () => {
    modelBuilding.style.display = 'block';
    dorm.style.display = 'none';
    buildingtitle.innerHTML = "ACACIA RESIDENCE HALL";
    buildingImg.src = "img/aupDorm/acacia.jpg";
    buildingSummary.innerHTML = "Acacia Residence Hall is a two-story dormitory which has a variety of rooms that can accommodate working, high school and full-time students. Because of its diverse occupants, students in this dorm are given the opportunity to mingle with other students from different backgrounds and status in life. It also has wider hallways, and rooms have good ventilation for comfortable living.";
});
F.addEventListener("click", () => {
    modelBuilding.style.display = 'block';
    dorm.style.display = 'none';
    buildingtitle.innerHTML = "APARTMENT F";
    buildingImg.src = "img/aupDorm/apt_f.jpg";
    buildingSummary.innerHTML = " For male-medical students.";
});
Eastern.addEventListener("click", () => {
    modelBuilding.style.display = 'block';
    dorm.style.display = 'none';
    buildingtitle.innerHTML = "EASTERN RESIDENCE HALL";
    buildingImg.src = "img/aupDorm/eastern.jpg";
    buildingSummary.innerHTML = "A dormitory for self-cooked and working students.";
});
Molave.addEventListener("click", () => {
    modelBuilding.style.display = 'block';
    dorm.style.display = 'none';
    buildingtitle.innerHTML = "MOLAVE";
    buildingImg.src = "img/aupDorm/molave.jpg";
    buildingSummary.innerHTML = "This dorm is set into three categories Molave A, B and C";
});
A.addEventListener("click", () => {
    modelBuilding.style.display = 'block';
    dorm.style.display = 'none';
    buildingtitle.innerHTML = "APARTMENT A";
    buildingImg.src = "img/aupDorm/apt_a.jpg";
    buildingSummary.innerHTML = "For male undergraduate students (junior and senior only)";
});
Sampaguita.addEventListener("click", () => {
    modelBuilding.style.display = 'block';
    dorm.style.display = 'none';
    buildingtitle.innerHTML = "SAMPAGUITA HALL";
    buildingImg.src = "img/aupDorm/sampa.jpg";
    buildingSummary.innerHTML = "Sampaguita Hall is the longest reigning dorm for ladies to date. A 2 storey building that can house 246 ladies. It has a spacious and well ventilated rooms, the ground floor offers 4 person in a room occupancy with bathroom and cr inside. Meanwhile, the 2nd floor offers 6 person in a room occupancy with common bathroom and CR. It is located near the cafeteria and the College of Dentistry, university store, offices and classrooms.";
});
Cadena.addEventListener("click", () => {
    modelBuilding.style.display = 'block';
    dorm.style.display = 'none';
    buildingtitle.innerHTML = "CADENA DE AMOR HALL";
    buildingImg.src = "img/aupDorm/cadena.jpg";
    buildingSummary.innerHTML = "It’s chain of Love (Cadena de Amor) still serving AUP university with its uniqueness being one of  the oldest ladies dorm it withstand earthquakes & the challenge of Pandemic. A two-story-building with 54 rooms ready for occupancy and 4 hallways. It can house 200 beautiful, independent young ladies ready for growth. Cadena is very accessible to the Cafeteria, store and and even the offices and classrooms for many. Being one of the oldest residential hall for ladies, it’s durability ensures security to become a home away from home.";
});
Dama.addEventListener("click", () => {
    modelBuilding.style.display = 'block';
    dorm.style.display = 'none';
    buildingtitle.innerHTML = "DAMA DE NOCHE";
    buildingImg.src = "img/aupDorm/dama.jpg";
    buildingSummary.innerHTML = "Dama de Noche (Lady in the night) is also an apartment type dormitory for women that cater dentistry and foreign students that are on their 3rd or 4th year levels only. It is a 4 story- building with 16 unit door. Each Unit is fully furnished with dining area, living rooms, kitchen and laundry area. The 1st and 2nd floor units have 2 rooms with 2 occupants in each room, making it 4 occupants in a unit. Meanwhile, the 3rd and 4th floors have 3 single rooms. Students in this dorm enjoyed their own privacy while studying and at the same time promoting a community vibe amongst them.";
});
Cattleya.addEventListener("click", () => {
    modelBuilding.style.display = 'block';
    dorm.style.display = 'none';
    buildingtitle.innerHTML = "CATTLEYA";
    buildingImg.src = "img/aupDorm/cattleya.jpg";
    buildingSummary.innerHTML = "Cattleya Residence Hall is an apartment type dormitory for women. It is a four story building with 15 unit doors. Each Unit is fully furnished with dining area, living rooms, kitchen and laundry area. Each unit has 3 single rooms. It caters dentistry and foreign students that are on their 3rd or 4th year levels only. Students in this dorm enjoyed their own privacy while studying and at the same time promoting a community vibe amongst them.";
});
Waling.addEventListener("click", () => {
    modelBuilding.style.display = 'block';
    dorm.style.display = 'none';
    buildingtitle.innerHTML = "WALING-WALING RESIDENCE HALL";
    buildingImg.src = "img/aupDorm/waling.jpg";
    buildingSummary.innerHTML = "The grandeur and beauty of Waling-Waling outstands all trying circumstances of academic life and day to day stresses. A 3 story- building with 2 unique basements of 2 or 4 occupants in a room and can house 194 ladies. It is strategically situated in the center of most dormitory, adjacent to the cafeteria and student park. It’ modern home design promotes a conducive environment for living and learning.";
});
Ilang.addEventListener("click", () => {
    modelBuilding.style.display = 'block';
    dorm.style.display = 'none';
    buildingtitle.innerHTML = "ILANG-ILANG";
    buildingImg.src = "img/aupDorm/ilang.jpg";
    buildingSummary.innerHTML = "The U shape design of Ilang-ilang attracts ladies to its well ventilated environment. It can house 167 ladies with 6-8 ladies promoting a happy family life living and growing together enhancing a well-rounded ability of communication skills to have a wholesome atmosphere of friendship, camaraderie and togetherness. It is also the home for our work scholars with  a kitchen is provided for them to cook their own meals.  It is situated beside Waling-Waling ladies dorm, and adjacent to the student park and Roda’s park.";
});
aptbli.addEventListener("click", () => {
    modelBuilding.style.display = 'block';
    dorm.style.display = 'none';
    buildingtitle.innerHTML = "APARTMENT B";
    buildingImg.src = "img/aupDorm/apt_b.jpg";
    buildingSummary.innerHTML = "Home setting: with 2 bedrooms, kitchen, living room and comfort room";
});
aptgli.addEventListener("click", () => {
    modelBuilding.style.display = 'block';
    dorm.style.display = 'none';
    buildingtitle.innerHTML = "APARTMENT G";
    buildingImg.src = "img/aupDorm/apt_g.jpg";
    buildingSummary.innerHTML = "For graduate and post graduate students.";
});
apthli.addEventListener("click", () => {
    modelBuilding.style.display = 'block';
    dorm.style.display = 'none';
    buildingtitle.innerHTML = "APARTMENT H";
    buildingImg.src = "img/aupDorm/apt_h.jpg";
    buildingSummary.innerHTML = "For chinese undergraduate students.";
});
apteli.addEventListener("click", () => {
    modelBuilding.style.display = 'block';
    dorm.style.display = 'none';
    buildingtitle.innerHTML = "APARTMENT E";
    buildingImg.src = "img/aupDorm/apt_e.jpg";
    buildingSummary.innerHTML = "For female-medical students.";
});

// FACILITIES
foodfac.addEventListener("click", () => {
    facility.style.display = 'none';
    modelBuilding.style.display = 'block';
    dorm.style.display = 'none';
    college.style.display = 'none';
    buildingtitle.innerHTML = "AUP Food Factory";
    buildingImg.src = "img/Facilities/Factory.jpg";
    buildingSummary.innerHTML = "The Adventist University of the Philippines Food Factory produces wholesome, plant-based food products that reflect the university’s commitment to health and nutrition. It serves the campus and community with nutritious options while promoting the Adventist principles of healthy living.";
});
clinic.addEventListener("click", () => {
    facility.style.display = 'none';
    modelBuilding.style.display = 'block';
    dorm.style.display = 'none';
    college.style.display = 'none';
    buildingtitle.innerHTML = "AUP Health Service";
    buildingImg.src = "img/Facilities/HealthService.jpg";
    buildingSummary.innerHTML = "The Adventist University of the Philippines Clinic provides quality healthcare services to students, staff, and the campus community. Committed to promoting wellness and preventive care, the clinic supports AUP's mission of holistic health in harmony with Adventist principles.";
});
store.addEventListener("click", () => {
    facility.style.display = 'none';
    modelBuilding.style.display = 'block';
    dorm.style.display = 'none';
    college.style.display = 'none';
    buildingtitle.innerHTML = "AUP Store";
    buildingImg.src = "img/Facilities/AUPstore.jpg";
    buildingSummary.innerHTML = "The Adventist University of the Philippines University Store offers a variety of school supplies, snacks, and daily essentials for students and staff. Conveniently located on campus, it supports the needs of the AUP community with friendly service and practical products.";
});
waterstation.addEventListener("click", () => {
    facility.style.display = 'none';
    modelBuilding.style.display = 'block';
    dorm.style.display = 'none';
    college.style.display = 'none';
    buildingtitle.innerHTML = "AUP Water Station";
    buildingImg.src = "img/Facilities/WaterStation.jpg";
    buildingSummary.innerHTML = "The Silver Spring Water Station at Adventist University of the Philippines provides clean, safe, and refreshing drinking water for the campus community. It supports AUP's commitment to health and wellness by offering purified water through reliable and accessible service.";
});
guidance.addEventListener("click", () => {
    facility.style.display = 'none';
    modelBuilding.style.display = 'block';
    dorm.style.display = 'none';
    college.style.display = 'none';
    buildingtitle.innerHTML = "Guidance Service Center";
    buildingImg.src = "img/Facilities/GuidaneServiceCenter.jpg";
    buildingSummary.innerHTML = "The Guidance Service Center at Adventist University of the Philippines offers counseling, guidance, and support to help students achieve personal, academic, and spiritual growth. It provides a safe and caring space where students can find help and direction in line with AUP’s values.";
});
kubo.addEventListener("click", () => {
    facility.style.display = 'none';
    modelBuilding.style.display = 'block';
    dorm.style.display = 'none';
    college.style.display = 'none';
    buildingtitle.innerHTML = "AUP Kubo";
    buildingImg.src = "img/Facilities/Kubo.jpg";
    buildingSummary.innerHTML = "The Kubo Canteen at Adventist University of the Philippines offers a variety of healthy, vegetarian meals and snacks in a relaxed, open-air setting. It’s a favorite gathering spot where students and staff enjoy wholesome food and fellowship in a peaceful, nature-inspired environment.   ";
});
psd.addEventListener("click", () => {
    facility.style.display = 'none';
    modelBuilding.style.display = 'block';
    dorm.style.display = 'none';
    college.style.display = 'none';
    buildingtitle.innerHTML = "Public Safety Department";
    buildingImg.src = "img/Facilities/PublicSafetyDepartment.jpg";
    buildingSummary.innerHTML = "The Public Safety Department at Adventist University of the Philippines ensures campus security through patrols, access control, and emergency response management.";
});
ssc.addEventListener("click", () => {
    facility.style.display = 'none';
    modelBuilding.style.display = 'block';
    dorm.style.display = 'none';
    college.style.display = 'none';
    buildingtitle.innerHTML = "Student Service Center";
    buildingImg.src = "img/Facilities/StudentServiceCenter.jpg";
    buildingSummary.innerHTML = "The Student Services Office (SSO) at Adventist University of the Philippines (AUP) supports students by offering guidance counseling, educational information services, and facilitating orientation programs. These services aim to assist students in their academic and personal development, ensuring a well-rounded university experience.";
});
Library.addEventListener("click", () => {
    facility.style.display = 'none';
    modelBuilding.style.display = 'block';
    dorm.style.display = 'none';
    college.style.display = 'none';
    buildingtitle.innerHTML = "Aup Library";
    buildingImg.src = "img/Facilities/library.jpg";
    buildingSummary.innerHTML = "John Lawrence Detwiler Memorial Library is centrally located on our campus, the lifeblood of the university’s academic life.  Dr. Howard Detwiler whose big picture is displayed under the stairs is the Philanthropist who donated an amount to construct the whole library building. His son, John Lawrence Detwiler. studied and took medicine at the University of Sto. Tomas. Right after graduation, he and some friends went scuba diving in Palawan where he met his untimely and tragic death. This is how AUP library was named John Lawrence Detwiler Memorial Library.";

});

cintennial.addEventListener("click", () => {
    facility.style.display = 'none';
    modelBuilding.style.display = 'block';
    dorm.style.display = 'none';
    college.style.display = 'none';
    buildingtitle.innerHTML = "CENTENNIAL PARK";
    buildingImg.src = "img/Facilities/centennial.jpg";
    buildingSummary.innerHTML = `The Adventist University of the Philippines (AUP) features a gymnasium that serves as a central hub for sports, fitness, and community events on campus. <br><br>
    the gymnasium is known to host recreational activities and events. For instance, the AUP Central Student Council has previously announced that the gym is open for recreational activities, inviting students to participate.`;
});
gym.addEventListener("click", () => {
    facility.style.display = 'none';
    modelBuilding.style.display = 'block';
    dorm.style.display = 'none';
    college.style.display = 'none';
    buildingtitle.innerHTML = "AUP Gymnasium";
    buildingImg.src = "img/Facilities/gym.jpg";
    buildingSummary.innerHTML = "The Adventist University of the Philippines (AUP) commemorated its centennial in 2017, marking 100 years since its establishment in 1917. The celebration featured a series of events that honored the university's rich history and its commitment to Christian education. These celebrations reflect AUP's dedication to its mission of providing quality Christian education and its commitment to service, excellence, and character development.";
});
pic.addEventListener("click", () => {
    facility.style.display = 'none';
    modelBuilding.style.display = 'block';
    dorm.style.display = 'none';
    college.style.display = 'none';
    buildingtitle.innerHTML = "Philippine International Church";
    buildingImg.src = "img/Facilities/pic.jpg";
    buildingSummary.innerHTML = "The Adventist University of the Philippines (AUP) commemorated its centennial in 2017, marking 100 years since its establishment in 1917. The celebration featured a series of events that honored the university's rich history and its commitment to Christian education. These celebrations reflect AUP's dedication to its mission of providing quality Christian education and its commitment to service, excellence, and character development.";
});

map.addEventListener("click", () => {
    document.getElementById('building').style.display = 'none';
    document.getElementById('locate').style.display = 'none';
    modelBuilding.style.display = 'none';
    dorm.style.display = 'none';
    college.style.display = 'none';
    facility.style.display = 'none';
});

function addButtonToElement(element, buttonText, onClickHandler) {
    const button = document.createElement('button');
    button.innerHTML = buttonText;
    button.style.marginLeft = '10px';
    button.style.padding = '5px 10px';
    button.style.fontSize = '12px';
    button.style.cursor = 'pointer';
    button.addEventListener('click', onClickHandler);
    element.appendChild(button);
}

document.getElementById('searchBar').addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase().trim();

    // Remove any existing search result panel
    let existingPanel = document.getElementById('searchResultPanel');
    if (existingPanel) {
        existingPanel.remove();
    }

    // Create a new search result panel
    if (searchTerm) {
        const searchBar = document.getElementById('searchBar');
        const searchBarRect = searchBar.getBoundingClientRect();

        const searchResultPanel = document.createElement('div');
        searchResultPanel.id = 'searchResultPanel';
        searchResultPanel.style.position = 'absolute';
        searchResultPanel.style.top = `${searchBarRect.bottom + window.scrollY}px`; 
        searchResultPanel.style.left = `${searchBarRect.left + window.scrollX}px`; 
        searchResultPanel.style.width = `${searchBarRect.width}px`; 
        searchResultPanel.style.maxHeight = '400px';
        searchResultPanel.style.overflow = 'hidden';
        searchResultPanel.style.overflowY = 'auto';
        searchResultPanel.style.backgroundColor = '#fff';
        searchResultPanel.style.border = '1px solid #ccc';
        searchResultPanel.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        searchResultPanel.style.padding = '10px';
        searchResultPanel.style.zIndex = '1000';


        // Search through all items in dorm, college, and faci sections
        let resultsFound = false;
        document.querySelectorAll('#dorm .cdfList, #college .cdfList, #faci .cdfList').forEach(item => {
            const text = item.textContent.toLowerCase();

            // Check if the search term matches the text or the first four letters
            if (text.includes(searchTerm) || text.startsWith(searchTerm.slice(0, 4))) {
                const resultItem = document.createElement('div');
                resultItem.textContent = item.textContent;
                resultItem.style.padding = '5px';
                resultItem.style.cursor = 'pointer';
                resultItem.style.borderBottom = '1px solid #eee';

                // Highlight the result on hover
                resultItem.addEventListener('mouseover', () => {
                    resultItem.style.backgroundColor = '#f0f0f0';
                });
                resultItem.addEventListener('mouseout', () => {
                    resultItem.style.backgroundColor = '#fff';
                });

                // Add click event to show the corresponding section
                resultItem.addEventListener('click', () => {
                    const section = item.closest('div[id]');
                    if (section) {
                        // Trigger the click event of the corresponding building
                        const buildingId = item.id; 
                        const buildingElement = document.getElementById(buildingId);
                        if (buildingElement) {
                            buildingElement.click(); 
                        }

                        // Hide all sections
                        document.querySelectorAll('#dorm, #college, #faci').forEach(sec => {
                            sec.style.display = 'none';
                        });

                        // Show the corresponding section
                        section.style.display = 'block';

                        // Optionally scroll to the clicked item
                        item.scrollIntoView({ behavior: 'smooth', block: 'center' });

                        // Close the search result panel
                        searchResultPanel.remove();
                    }
                });

                searchResultPanel.appendChild(resultItem);
                resultsFound = true;
            }
        });

        // If no results are found, display a message
        if (!resultsFound) {
            const noResults = document.createElement('div');
            noResults.textContent = 'No results found.';
            noResults.style.textAlign = 'center';
            noResults.style.color = '#888';
            searchResultPanel.appendChild(noResults);
        }

        document.body.appendChild(searchResultPanel);
    }
});

// Add keyboard navigation for search results
    document.addEventListener('keydown', function handleKeyNavigation(event) {
        if (resultItems.length === 0) return;

        if (event.key === 'ArrowDown') {
            if (currentIndex < resultItems.length - 1) {
                if (currentIndex >= 0) {
                    resultItems[currentIndex].style.backgroundColor = '#fff';
                }
                currentIndex++;
                resultItems[currentIndex].style.backgroundColor = '#f0f0f0';
                resultItems[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
            event.preventDefault();
        } else if (event.key === 'ArrowUp') {
            if (currentIndex > 0) {
                resultItems[currentIndex].style.backgroundColor = '#fff';
                currentIndex--;
                resultItems[currentIndex].style.backgroundColor = '#f0f0f0';
                resultItems[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
            event.preventDefault();
        } else if (event.key === 'Enter') {
            if (currentIndex >= 0 && currentIndex < resultItems.length) {
                resultItems[currentIndex].click();
            }
            event.preventDefault();
        } else if (event.key === 'Escape') {
            existingPanel.style.display = 'none';
            document.removeEventListener('keydown', handleKeyNavigation);
            document.querySelectorAll('#dorm, #college, #faci, #modelBuilding').forEach(sec => {
                sec.style.display = 'none';
            });
        }
    });