// Wait for the DOM to be fully loaded before running any logic
document.addEventListener("DOMContentLoaded", () => {
    // Get the input field and menu list
    const input = document.getElementById("mySearch");
    const ul = document.getElementById("myMenu");
    const li = ul.getElementsByTagName("li");
  
    // Add an event listener to trigger on keyup (when typing)
    input.addEventListener("keyup", () => {
      const filter = input.value.toUpperCase(); // Get input and make it uppercase
      let hasVisibleItem = false; // Flag to track if any list item is visible
  
      // Loop through all list items
      for (let i = 0; i < li.length; i++) {
        const a = li[i].getElementsByTagName("a")[0];
        const text = a.textContent || a.innerText;
  
        // Check if the list item includes the filter text
        if (text.toUpperCase().includes(filter)) {
          li[i].style.display = ""; // Show item
          hasVisibleItem = true;
        } else {
          li[i].style.display = "none"; // Hide item
        }
      }
  
      // Toggle visibility of the whole list
      if (filter === "" || !hasVisibleItem) {
        ul.idList.add("hidden"); // Hide list if nothing to show
      } else {
        ul.idList.remove("hidden"); // Show list
      }
    });
});
  


document.addEventListener("DOMContentLoaded", () => {
  const collegeBtn = document.getElementById("collegebar");
  const dormBtn = document.getElementById("dormbar");
  const facilityBtn = document.getElementById("facollegebacilitybar");
  const collegeList = document.getElementById("collegelist");

  // const styleTag = document.createElement("style");
  // document.head.appendChild(styleTag);
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "main.css";
  document.head.appendChild(link);

  // Store original college content
  const originalCollegeHTML = `
    <div class="cahli" a href="https://www.google.com/">College of Arts and Humanities</div>
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

  const collegelist = `
    #collegelist {
      z-index: 50;
      width: 95%;
      position: relative;
      border-style: solid;
      border-color: chocolate;
      top: 100px;
      left: 40px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);
      gap: 10px;
      height: 5%;
    }

    #collegelist div {
      border-radius: 10px;
      position: relative;
      height: 150px;
      gap: 5px;
      justify-content: center;
      align-items: center;
    }
    .cahli {
        background-image: url("img/college_img/cah.jpg");
        background-size: cover;
        background-position: center center;
    }
    .cobli {
        background-image: url("img/college_img/cob.jpg");
        background-size: cover;
        background-position: center center;
    }
    .codli {
        background-image: url("img/college_img/cod.jpg");
        background-size: cover;
        background-position: center center;
    }
    .coeli {
        background-image: url("img/college_img/coe.jpg");
        background-size: cover;
        background-position: center center;
    }
    .cohli {
        background-image: url("img/college_img/coh.jpg");
        background-size: cover;
        background-position: center center;
    }
    .comli {
        background-image: url("img/college_img/com.jpg");
        background-size: cover;
        background-position: center center;
    }
    .conli {
        background-image: url("img/college_img/_con.jpg");
        background-size: cover;
        background-position: center center;
    }
    .cstli {
        background-image: url("img/college_img/cst.jpg");
        background-size: cover;
        background-position: center center;
    }
    .cotli {
        background-image: url("img/college_img/cot.jpg");
        background-size: cover;
        background-position: center center;
    }
  `;

  const dormlist = `


  
    #aptali {
      background-image: url("img/aupDorm/apt_a.jpg");
      background-size: cover;
      background-position: center center;
    }
    #aptbli {
        background-image: url("img/aupDorm/apt_b.jpg");
        background-size: cover;
        background-position: center center;
    }
    #apteli {
        background-image: url("img/aupDorm/apt_e.jpg");
        background-size: cover;
        background-position: center center;
    }
    #aptfli {
        background-image: url("img/aupDorm/apt_f.jpg");
        background-size: cover;
        background-position: center center;
    }
    #aptgli {
        background-image: url("img/aupDorm/apt_g.jpg");
        background-size: cover;
        background-position: center center;
    }
    #apthli {
        background-image: url("img/aupDorm/apt_h.jpg");
        background-size: cover;
        background-position: center center;
    }
    #mahoganyli {
        background-image: url("img/aupDorm/mahogany.jpg");
        background-size: cover;
        background-position: center center;
    }
    #acaciali {
        background-image: url("img/aupDorm/acacia.jpg");
        background-size: cover;
        background-position: center center;
    }
    #easternli {
        background-image: url("img/aupDorm/eastern.jpg");
        background-size: cover;
        background-position: center center;
    }
    #molaveli {
        background-image: url("img/aupDorm/molave.jpg");
        background-size: cover;
        background-position: center center;
    }
    #cadenali {
        background-image: url("img/aupDorm/cadena.jpg");
        background-size: cover;
        background-position: center center;
    }
    #damali {
        background-image: url("img/aupDorm/dama.jpg");
        background-size: cover;
        background-position: center center;
    }
    #catli {
        background-image: url("img/aupDorm/cattleya.jpg");
        background-size: cover;
        background-position: center center;
    }
    #walingli {
        background-image: url("img/aupDorm/waling.jpg");
        background-size: cover;
        background-position: center center;
    }
    #ilangli {
        background-image: url("img/aupDorm/ilang.jpg");
        background-size: cover;
        background-position: center center;
    }
    #sampali {
        background-image: url("img/aupDorm/sampa.jpg");
        background-size: cover;
        background-position: center center;
    }
  `;

  // College Buildings button
  collegeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    collegeList.innerHTML = originalCollegeHTML;
    collegeList.style.display = "block";
    collegeList.style = collegelist;
    console.log("Restored: College Buildings view");
  });

  // Dormitories button
  dormBtn.addEventListener("click", (e) => {
    e.preventDefault();
    collegeList.innerHTML = dormList;
    collegeList.style.display = "block";
    collegeList.style = list;
    console.log("Switched to: Dormitories view");
  });
});