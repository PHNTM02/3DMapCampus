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


backbtn.addEventListener("click", () => {
    modelBuilding.style.display = 'none';
    college.style.display = 'none';
    dorm.style.display = 'none';
});

cob.addEventListener("click", function () {
    modelBuilding.style.display = 'block';
    college.style.display = 'none';
    buildingImg.src = "img/college_img/cob.jpg";
    buildingtitle.innerHTML = "COLLEGE OF BUSINESS";
    buildingSummary.innerHTML= `The College of Business prepares students to become principled, competitive, and ingenious business professionals in order to drive economic development and improve the quality of human life.<br><br>
          COB serves as home to future entrepreneurs, business leaders, financial analysts, auditors, tax advisors, management consultants, IT experts, system administrators and analysts, office specialists and administrators in manufacturing, service, food, health, education, and agriculture industries in government or private companies and controlled corporations.  It is an advocate of innovation, linkages, and continuous learning.  COB has strong affiliation with universities in the ASEAN and reputable industry partners to provide a wide array of learning opportunities for students.<br><br>
          The Business Administration program is recognized as a Center of Development by the Commission on Higher Education (CHED).  Further, CHED awarded AUP as a Delivering Higher Education Institution (DHEI) of the Master’s in Business Administration and Doctor of Philosophy in Business Administration programs for the Scholarships for Instructors’ Knowledge Advancement Program (SIKAP).  Meanwhile, the Accountancy program is a Continuing Professional Development (CPD) provider duly accredited by the Professional Regulation Commission (PRC).`;
});

cah.addEventListener("click", () => {
    modelBuilding.style.display = 'block';
    buildingImg.src = "img/college_img/cah.jpg";
    buildingtitle.innerHTML = "COLLEGE OF ARTS AND HUMANITIES";
    buildingSummary.innerHTML = `The College of Arts and Humanities (CAH) is a community of passionate individuals who never cease to create meaningful ways of seeking answers to life’s puzzling questions so as to serve humanity. Here in CAH, we teach our students to amplify the voice of the voiceless. We value creative thinking skills. We also study how mind and body work together to better understand and help others. More so, we create meaningful careers and cultural engagement.`;
    
});
cod.addEventListener("click", function () {
    buildingtitle.innerHTML = "COLLEGE OF DENTISTRY";
    buildingImg.src = "img/college_img/cod.jpg";
    buildingSummary.innerHTML = `The College of Dentistry of the Adventist University of the Philippines prepares and train students for excellent dental service providing them with Bible-based education and training to become missionary dentists in all parts of the world. They are trained to be highly skilled, selfless, and compassionate dental professionals who has the excellent ability to alleviate ills, restore dental health and improve the quality of life of fellowmen.  Its learning and training synchronously take place in a multicultural environment with a diverse learning atmosphere.<br><br>

          Teachers at the College have outstanding communication skill, have an engaging classroom and clinical presence, educate with empathy, and advocate lifelong love of learning and love of Jesus.<br><br>

          The College administration continues to innovate and adapt to the everchanging landscape of education and continuous learning , creating linkages with other institutions, local and international, creating strong affiliation with Adventist Universities around the world with the objective of delivering a diversity of learning opportunities to students.<br><br>

          AUP College of Dentistry offers the program DOCTOR OF DENTAL MEDICINE and envisions to be a leading Adventist Dental Institution in the Asia Pacific Region.`;
});
coh.addEventListener("click", function () {
    buildingtitle.innerHTML = "COLLEGE OF HEALTH";
    buildingImg.src = "img/college_img/coh.jpg";
    buildingSummary.innerHTML = `he AUP College of Health is committed to provide quality Bible-based health professions education, nurturing students for academic excellence, Christlike character, and exemplary service.<br><br>

        The College of Health aims to produce graduates who will be licensed to practice as medical technologists/medical laboratory scientists; therapeutic, administrative, clinical nutritionist-dietitians;  foodservice managers, community health workers, public health administrators, researchers, consultants, academicians, preventive health clinicians, health and wellness advocates, lifestyle management and community development interventionists, program managers and healthcare leaders in hospitals, local government units, non-government organizations, corporate industries, health organizations, and academic institutions in the Philippines and other parts of the world.`;
});
coe.addEventListener("click", function () {
    buildingtitle.innerHTML = "COLLEGE OF EDUCATION";
    buildingImg.src = "img/college_img/coe.jpg";
    buildingSummary.innerHTML = `he College of Education (COE) is a training institution for Teacher Education that prepares graduates that demonstrate mastery of discipline, using a wide range of teaching methodologies and delivery modes appropriate to specific learners and their environment. COE is also committed to develop innovative curricula, instructional plans, teaching approaches, and resources for diverse learners.  It is the objective of the College to pursue lifelong learning for personal growth through varied experiential and field-based opportunities coupled with the Integration of Faith and Learning.`;
});
com.addEventListener("click", function () {
    buildingtitle.innerHTML = "COLLEGE OF MEDICINE";
    buildingImg.src = "img/college_img/com.jpg";
    buildingSummary.innerHTML = `The Adventist University of the Philippines College of Medicine (AUPCOM) is the first and only Adventist medical school in the Philippines and the Asia-Pacific region established in 2015. It is only the sixth of seven Adventist medical schools globally, the oldest of which is the Loma Linda University School of Medicine in Loma Linda, California, USA.  AUP College of Medicine is the only medical school in the Philippines and Southeast Asia which includes in its medical curriculum courses in Lifestyle Medicine, Religion, and Whole Person Care, because of its main thrust to produce physician-missionaries for Christ.<br><br>

          The medical school accepts baccalaureate allied health degree holders, to begin at the first-year level, with an NMAT score 60 and above, an above average GPA, an outstanding Christian character, and with good English communication skills. Freshmen Medicine students are welcomed in a White Coat Ceremony at the beginning of the year, with the donning of the white coat signifying the purity of the medical profession, and the giving out of the Holy Bible – the most important book above all books, and the Ministry of Healing. These medical students will be trained to become Five-Star Plus Physicians, namely, as mandated by CHED:  Clinician, Teacher, Researcher, Manager, and Social Mobilizer, and additionally the unique AUPCOM Plus – to become a Physician Missionary.<br><br>

          At the fourth-year level, selected outstanding medical students are given the opportunity to go on clinical clerkship rotation for six weeks at our sister institution – the Loma Linda University School of Medicine – Medical Center in Loma Linda, California.`;
});
con.addEventListener("click", function () {
    buildingtitle.innerHTML = "COLLEGE OF NURSING";
    buildingImg.src = "img/college_img/_con.jpg";
    buildingSummary.innerHTML = `The college is situated at the heart of the University where the utilization of science blends art, aptitude, and attitude in the making of a wholistic professional. It is the home base for developing competent, caring hands inspired by the purpose to harness the skillset hallmarked with quality in the rendering of nursing service to humankind. The College of Nursing is the training hive and haven that launches the future nurses for the world.`;
});
cst.addEventListener("click", function () {
    buildingtitle.innerHTML = "COLLEGE OF SCIENE AND TECHNOLOGY";
    buildingImg.src = "img/college_img/cst.jpg";
    buildingSummary.innerHTML = `The College of Science and Technology (CST) exists to provide excellent and quality Christian education to students who would be future biologists, medical doctors, chemists, chemical technicians, electronics engineers, mathematicians, data scientists, librarians, curators, and researchers equipped with the necessary skills reflecting Christian values. `;
});
cot.addEventListener("click", function () {
    buildingtitle.innerHTML = "COLLEGE OF THEOLOGY"
    buildingImg.src = "img/college_img/cot.jpg";
    buildingSummary.innerHTML = `The College of Theology is the home for those who want to experience the good news of salvation of Jesus Christ. It aims to lead every student to have a saving, loving, and growing, relationship with Him by being a receiver and a sharer of the gospel.<br><br>

        The College of Theology specifically provides education as the initial degree for those who are preparing for the gospel ministry in the Adventist church. For non-theology students, it provides Bible education that teaches Adventist values and lifestyle without forcing conversion of students from other faith. Overall, it exists to help in the faith development of the students.`;
});



let hidden = false;

collegebar.addEventListener("click", () => {
    if(!hidden){
        college.style.display = 'none';
        modelBuilding.style.display = 'none'; 
        hidden = true
    } else {
        college.style.display = 'block';
        dorm.style.display = 'none';
        modelBuilding.style.display = 'none'; 
        hidden = false;
    }
});
dormbar.addEventListener("click", () => {
    if(!hidden){
        dorm.style.display = 'none';
        modelBuilding.style.display = 'none'; 
        hidden = true
    } else {
        dorm.style.display = 'block';
        college.style.display = 'none';
        modelBuilding.style.display = 'none'; 
        hidden = false;
    }
});