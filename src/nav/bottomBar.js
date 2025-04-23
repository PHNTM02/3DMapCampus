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

  const dormlist = `
    #collegelist {
      position: relative;
      top: 140px;
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
    collegeList.style = dormlist;
    console.log("Switched to: Dormitories view");
  });
});