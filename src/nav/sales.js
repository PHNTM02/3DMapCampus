// Bottom Navigation
const collegebar = document.getElementById("collegebar");
const dormbar = document.getElementById("dormbar");
const facilitybar = document.getElementById("facilitybar");

// building Model Information
const modelBuilding = document.getElementById("modelBuilding");
const buildingtitle = document.getElementById("buildingtitle");
const buildingSummary = document.getElementById("buildingSummary");

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


cob.addEventListener("click", function () {
    modelBuilding.style.display = 'block';
 buildingtitle.innerHTML = "COLLEGE OF BUSINESS";
 buildingSummary.innerHTML= `The College of Business prepares students to become principled, competitive, and ingenious business professionals in order to drive economic development and improve the quality of human life.<br><br>
          COB serves as home to future entrepreneurs, business leaders, financial analysts, auditors, tax advisors, management consultants, IT experts, system administrators and analysts, office specialists and administrators in manufacturing, service, food, health, education, and agriculture industries in government or private companies and controlled corporations.  It is an advocate of innovation, linkages, and continuous learning.  COB has strong affiliation with universities in the ASEAN and reputable industry partners to provide a wide array of learning opportunities for students.<br><br>
          The Business Administration program is recognized as a Center of Development by the Commission on Higher Education (CHED).  Further, CHED awarded AUP as a Delivering Higher Education Institution (DHEI) of the Master’s in Business Administration and Doctor of Philosophy in Business Administration programs for the Scholarships for Instructors’ Knowledge Advancement Program (SIKAP).  Meanwhile, the Accountancy program is a Continuing Professional Development (CPD) provider duly accredited by the Professional Regulation Commission (PRC).`;
});

cah.addEventListener("click", () => {
    modelBuilding.style.display = 'block';
    buildingtitle.innerHTML = "COLLEGE OF ARTS AND HUMANITIES";
    buildingSummary.innerHTML = `The College of Arts and Humanities (CAH) is a community of passionate individuals who never cease to create meaningful ways of seeking answers to life’s puzzling questions so as to serve humanity. Here in CAH, we teach our students to amplify the voice of the voiceless. We value creative thinking skills. We also study how mind and body work together to better understand and help others. More so, we create meaningful careers and cultural engagement.`;
    
});

// cah.addEventListener("click", function () {
//     buildingtitle.innerHTML = "";
//     buildingSummary.innerHTML = ``;
// });

let hidden = false;

collegebar.addEventListener("click", () => {
    if(!hidden){
        college.style.display = 'none';
        hidden = true
    } else {
        college.style.display = 'block';
        dorm.style.display = 'none';
        hidden = false;
    }
});
dormbar.addEventListener("click", () => {
    if(!hidden){
        dorm.style.display = 'none';
        hidden = true
    } else {
        dorm.style.display = 'block';
        college.style.display = 'none';
        hidden = false;
    }
});