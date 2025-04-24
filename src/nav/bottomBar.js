// // Wait for the DOM to be fully loaded before running any logic
// document.addEventListener("DOMContentLoaded", () => {
//     // Get the input field and menu list
//     const input = document.getElementById("mySearch");
//     const ul = document.getElementById("myMenu");
//     const li = ul.getElementsByTagName("li");
  
//     // Add an event listener to trigger on keyup (when typing)
//     input.addEventListener("keyup", () => {
//       const filter = input.value.toUpperCase(); // Get input and make it uppercase
//       let hasVisibleItem = false; // Flag to track if any list item is visible
  
//       // Loop through all list items
//       for (let i = 0; i < li.length; i++) {
//         const a = li[i].getElementsByTagName("a")[0];
//         const text = a.textContent || a.innerText;
  
//         // Check if the list item includes the filter text
//         if (text.toUpperCase().includes(filter)) {
//           li[i].style.display = ""; // Show item
//           hasVisibleItem = true;
//         } else {
//           li[i].style.display = "none"; // Hide item
//         }
//       }
  
//       // Toggle visibility of the whole list
//       if (filter === "" || !hasVisibleItem) {
//         ul.idList.add("hidden"); // Hide list if nothing to show
//       } else {
//         ul.idList.remove("hidden"); // Show list
//       }
//     });
// });
  


document.addEventListener("DOMContentLoaded", () => {
  const collegeBtn = document.getElementById("collegebar");
  const dormBtn = document.getElementById("dormbar");
  const facilityBtn = document.getElementById("facilitybar");
  const collegeList = document.getElementById("collegelist");

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "src/nav/main.css";
  document.head.appendChild(link);

  // Store original college content
  const originalCollegeHTML = `
    <div class="cahli">College of Arts and Humanities</div>
    <div class="cobli">College of Business</div>
    <div class="codli">College of Dentistry</div>
    <div class="coeli">College of Education</div>
    <div class="cohli">College of Health</div>
    <div class="comli">College of Medicine</div>
    <div class="conli">College of Nursing</div>
    <div class="cstli">College of Science and Technology</div>
    <div class="cotli">College of Theology</div>
  `;

  const dormList = `
    <h3>Men's Dorm</h3>
    <div id="mahoganyli" class="cdfList">Mahogany</div>
    <div id="acaciali" class="cdfList">Acacia Residence Hall</div>
    <div id="aptfli" class="cdfList">Apartment F</div>
    <div id="easternli" class="cdfList">Eastern Residence Hall</div>
    <div id="molaveli" class="cdfList">Molave</div>
    <div id="aptali" class="cdfList">Apartment A</div>

    <h3>Ladies's Dorm</h3>
    <div id="sampali" class="cdfList">Sampaguita Hall</div>
    <div id="cadenali" class="cdfList">Cadena De Amor Hall</div>
    <div id="damali" class="cdfList">Dama De Noche</div>
    <div id="catli" class="cdfList">Cattleya</div>
    <div id="walingli" class="cdfList">Waling-Waling Residence Hall</div>
    <div id="ilangli" class="cdfList">Ilang-Ilang</div>

    <h3>Family / Graduate</h3>
    <div id="aptbli" class="cdfList">Apartment B</div>
    <div id="aptgli" class="cdfList">Apartment G</div>
    <div id="apthli" class="cdfList">Apartment H</div>
    <div id="apteli" class="cdfList">Apartment E</div>
  `;

  const dormlist = `
    #collegelist {
      z-index: 100;
      position: absolute;
      top: 190px;
      background-color: rgb(0, 255, 255, 0.9);
      display: grid;
      grid-template-columns: repeat(3, 1fr);  
      gap: 20px;
      padding: 20px;
      border: 2px solid chocolate;
      height: 445px;
      overflow-y: auto;
      width: 100%;
      margin: 100px auto;
      box-sizing: border-box;

      scrollbar-width: none;
      -ms-overflow-style: none;
    }

    #collegelist .cdfList{
      background-size: cover;
      background-position: center;
      border-radius: 10px;
      position: relative;
      display: flex;
      height: 150px;
      gap: 5px;
      justify-content: left;
      align-items: center;
    }

    #collegelist h3 {
      grid-column: 1 / -1;
      margin: 10px 0;
      font-size: 1.5em;
      text-align: left;
      color: chocolate;
    }
  `;

  const collegelist = `
    #collegelist {
      z-index: 100;
      top: 190px;
      display: grid;
      grid-template-columns: repeat(3, 1fr); /* 3 per row */
      gap: 20px;
      padding: 20px;
      border: 2px solid chocolate;
      width: 100%;
      margin: 100px auto;
      box-sizing: border-box;
      }

      #collegelist div {
      background-size: cover;
      background-position: center;
      border-radius: 10px;
      position: relative;
      display: flex;
      height: 150px;
      gap: 5px;
      justify-content: center;
      align-items: left;
    }
  `;

  let lastClicked = null;

  function handleToggle(button, contentHTML, styleCSS) {
    // If the same button is clicked again, hide the list
    if (lastClicked === button) {
      collegeList.style.display = "none";
      lastClicked = null; // Reset the lastClicked
      console.log("Hiding collegelist");
    } else {
      // Show the content, update display and CSS
      collegeList.innerHTML = contentHTML;
      collegeList.style.display = "block";
      collegeList.style = styleCSS;
      lastClicked = button; // Set current button as lastClicked
      console.log("Showing collegelist from:", button.id);
    }
  }

  // College Buildings button
  collegeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    handleToggle(collegeBtn, originalCollegeHTML, collegelist);
  });

  // Dormitories button
  dormBtn.addEventListener("click", (e) => {
    e.preventDefault();
    handleToggle(dormBtn, dormList, dormlist);
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const backbtn = document.getElementById("btckbtn");
  const cah = document.getElementsByClassName("cahli");
  const cob = document.getElementsByClassName("cobli");
  const cod = document.getElementsByClassName("codli");
  const coe = document.getElementsByClassName("coeli");
  const coh = document.getElementsByClassName("cohli");
  const com = document.getElementsByClassName("comli");
  const con = document.getElementsByClassName("conli");
  const cst = document.getElementsByClassName("cstli");
  const cot = document.getElementsByClassName("cotli");

  const mahogany = document.getElementById("mahoganyli");
  const acaia = document.getElementById("acaiali");
  const aptf = document.getElementById("aptfli");
  const eastern = document.getElementById("easternli");
  const molave = document.getElementById("molaveli");
  const aptali = document.getElementById("aptali");
  const sampa = document.getElementById("sampali");
  const cadena = document.getElementById("cadenali");
  const dama = document.getElementById("damali");
  const catt = document.getElementById("catli");
  const waling = document.getElementById("ilangli");
  const ilang = document.getElementById("btckbtn");
  const aptb = document.getElementById("aptbli");
  const aptg = document.getElementById("aptgli");
  const apth = document.getElementById("apthli");
  const apte = document.getElementById("apteli");

  const cahsum = `
    <div id="backbtn">Back</div>
      <h1>COLLEGE OF ARTS AND HUMANITIES</h1>
      <div class="buildingSummary">
        <div class="buidlingImage"><img src="img/college_img/cah.jpg"></div>
        <p>The College of Arts and Humanities (CAH) is a community of passionate individuals who never cease to create meaningful ways of seeking answers to life’s puzzling questions so as to serve humanity. Here in CAH, we teach our students to amplify the voice of the voiceless. We value creative thinking skills. We also study how mind and body work together to better understand and help others. More so, we create meaningful careers and cultural engagement.
        </p>
      </div>
  `;

  const cobsum = `
    <div id="backbtn">Back</div>
      <h1>COLLEGE OF BUSINESS</h1>
      <div class="buildingSummary">
        <div class="buidlingImage"><img src="img/college_img/cob.jpg"></div>
        <p>The College of Business prepares students to become principled, competitive, and ingenious business professionals in order to drive economic development and improve the quality of human life.<br><br>

          COB serves as home to future entrepreneurs, business leaders, financial analysts, auditors, tax advisors, management consultants, IT experts, system administrators and analysts, office specialists and administrators in manufacturing, service, food, health, education, and agriculture industries in government or private companies and controlled corporations.  It is an advocate of innovation, linkages, and continuous learning.  COB has strong affiliation with universities in the ASEAN and reputable industry partners to provide a wide array of learning opportunities for students.<br><br>
          
          The Business Administration program is recognized as a Center of Development by the Commission on Higher Education (CHED).  Further, CHED awarded AUP as a Delivering Higher Education Institution (DHEI) of the Master’s in Business Administration and Doctor of Philosophy in Business Administration programs for the Scholarships for Instructors’ Knowledge Advancement Program (SIKAP).  Meanwhile, the Accountancy program is a Continuing Professional Development (CPD) provider duly accredited by the Professional Regulation Commission (PRC).
        </p>
      </div>
  `;

  const codsum = `
    <div id="backbtn">Back</div>
      <h1>COLLEGE OF DENTSITRY</h1>
      <div class="buildingSummary">
        <div class="buidlingImage"><img src="img/college_img/cod.jpg"></div>
        <p>
          The College of Dentistry of the Adventist University of the Philippines prepares and train students for excellent dental service providing them with Bible-based education and training to become missionary dentists in all parts of the world. They are trained to be highly skilled, selfless, and compassionate dental professionals who has the excellent ability to alleviate ills, restore dental health and improve the quality of life of fellowmen.  Its learning and training synchronously take place in a multicultural environment with a diverse learning atmosphere.<br><br>

          Teachers at the College have outstanding communication skill, have an engaging classroom and clinical presence, educate with empathy, and advocate lifelong love of learning and love of Jesus.<br><br>

          The College administration continues to innovate and adapt to the everchanging landscape of education and continuous learning , creating linkages with other institutions, local and international, creating strong affiliation with Adventist Universities around the world with the objective of delivering a diversity of learning opportunities to students.<br><br>

          AUP College of Dentistry offers the program DOCTOR OF DENTAL MEDICINE and envisions to be a leading Adventist Dental Institution in the Asia Pacific Region.
        </p>
      </div>
  `;

  const coesum = `
    <div id="backbtn">Back</div>
      <h1>COLLEGE OF EDUCATION</h1>
      <div class="buildingSummary">
        <div class="buidlingImage"><img src="img/college_img/coe.jpg"></div>
        <p>The College of Education (COE) is a training institution for Teacher Education that prepares graduates that demonstrate mastery of discipline, using a wide range of teaching methodologies and delivery modes appropriate to specific learners and their environment. COE is also committed to develop innovative curricula, instructional plans, teaching approaches, and resources for diverse learners.  It is the objective of the College to pursue lifelong learning for personal growth through varied experiential and field-based opportunities coupled with the Integration of Faith and Learning.
        </p>
      </div>
  `;

  const cohsum = `
    <div id="backbtn">Back</div>
      <h1>COLLEGE OF HEALTH</h1>
      <div class="buildingSummary">
        <div class="buidlingImage"><img src="img/college_img/coh.jpg"></div>
        <p>The AUP College of Health is committed to provide quality Bible-based health professions education, nurturing students for academic excellence, Christlike character, and exemplary service.<br><br

        The College of Health aims to produce graduates who will be licensed to practice as medical technologists/medical laboratory scientists; therapeutic, administrative, clinical nutritionist-dietitians;  foodservice managers, community health workers, public health administrators, researchers, consultants, academicians, preventive health clinicians, health and wellness advocates, lifestyle management and community development interventionists, program managers and healthcare leaders in hospitals, local government units, non-government organizations, corporate industries, health organizations, and academic institutions in the Philippines and other parts of the world.
        </p>
      </div>
  `;

  const comsum = `
    <div id="backbtn">Back</div>
      <h1>COLLEGE OF MEDICINE</h1>
      <div class="buildingSummary">
        <div class="buidlingImage"><img src="img/college_img/com.jpg"></div>
        <p>
          The Adventist University of the Philippines College of Medicine (AUPCOM) is the first and only Adventist medical school in the Philippines and the Asia-Pacific region established in 2015. It is only the sixth of seven Adventist medical schools globally, the oldest of which is the Loma Linda University School of Medicine in Loma Linda, California, USA.  AUP College of Medicine is the only medical school in the Philippines and Southeast Asia which includes in its medical curriculum courses in Lifestyle Medicine, Religion, and Whole Person Care, because of its main thrust to produce physician-missionaries for Christ.<br><br>

          The medical school accepts baccalaureate allied health degree holders, to begin at the first-year level, with an NMAT score 60 and above, an above average GPA, an outstanding Christian character, and with good English communication skills. Freshmen Medicine students are welcomed in a White Coat Ceremony at the beginning of the year, with the donning of the white coat signifying the purity of the medical profession, and the giving out of the Holy Bible – the most important book above all books, and the Ministry of Healing. These medical students will be trained to become Five-Star Plus Physicians, namely, as mandated by CHED:  Clinician, Teacher, Researcher, Manager, and Social Mobilizer, and additionally the unique AUPCOM Plus – to become a Physician Missionary.<br><br>

          At the fourth-year level, selected outstanding medical students are given the opportunity to go on clinical clerkship rotation for six weeks at our sister institution – the Loma Linda University School of Medicine – Medical Center in Loma Linda, California.
        </p>
      </div>
  `;

  const consum = `
    <div id="backbtn">Back</div>
      <h1>COLLEGE OF NURSING</h1>
      <div class="buildingSummary">
        <div class="buidlingImage"><img src="img/college_img/_con.jpg"></div>
        <p>The college is situated at the heart of the University where the utilization of science blends art, aptitude, and attitude in the making of a wholistic professional. It is the home base for developing competent, caring hands inspired by the purpose to harness the skillset hallmarked with quality in the rendering of nursing service to humankind. The College of Nursing is the training hive and haven that launches the future nurses for the world.
        </p>
      </div>
  `;

  const cstsum = `
    <div id="backbtn">Back</div>
      <h1>COLLEGE OF SCIENCE AND TECHNOLOGY</h1>
      <div class="buildingSummary">
        <div class="buidlingImage"><img src="img/college_img/cst.jpg"></div>
        <p>The College of Science and Technology (CST) exists to provide excellent and quality Christian education to students who would be future biologists, medical doctors, chemists, chemical technicians, electronics engineers, mathematicians, data scientists, librarians, curators, and researchers equipped with the necessary skills reflecting Christian values. 
        </p>
      </div>
  `;

  const cotsum = `
    <div id="backbtn">Back</div>
      <h1>COLLEGE OF THEOLOGY</h1>
      <div class="buildingSummary">
        <div class="buidlingImage"><img src="img/college_img/cot.jpg"></div>
        <p>The College of Theology is the home for those who want to experience the good news of salvation of Jesus Christ. It aims to lead every student to have a saving, loving, and growing, relationship with Him by being a receiver and a sharer of the gospel.<br><br>

        The College of Theology specifically provides education as the initial degree for those who are preparing for the gospel ministry in the Adventist church. For non-theology students, it provides Bible education that teaches Adventist values and lifestyle without forcing conversion of students from other faith. Overall, it exists to help in the faith development of the students.
        </p>
      </div>
  `;

  const modelBuilding = document.getElementById("modelBuilding");

  const summaryMap = {
    cahli: cahsum,
    cobli: cobsum,
    codli: codsum,
    coeli: coesum,
    cohli: cohsum,
    comli: comsum,
    conli: consum,
    cstli: cstsum,
    cotli: cotsum
  };

  Object.keys(summaryMap).forEach(className => {
    const elements = document.getElementsByClassName(className);
    Array.from(elements).forEach(el => {
      el.addEventListener("click", () => {
        modelBuilding.innerHTML = summaryMap[className];
      });
    });
  });

  document.addEventListener("click", e => {
    if (e.target && e.target.id === "backbtn") {
      modelBuilding.style.display = "none";
      modelBuilding.innerHTML = ""; // Optional: Clear content
    }
  });

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "src/nav/sidebar.css";
  document.head.appendChild(link);

  document.querySelector('.codli').addEventListener('click', function() {
    document.getElementById('modelBuilding').innerHTML = codsum;
  });




});