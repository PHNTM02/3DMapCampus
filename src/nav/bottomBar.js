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

  // Store original college content
  const originalCollegeHTML = `
    <div id="cahli" class="cdfList">College of Arts and Humanities</div>
    <div id="cobli" class="cdfList">College of Business</div>
    <div id="codli" class="cdfList">College of Dentistry</div>
    <div id="coeli" class="cdfList">College of Education</div>
    <div id="cohli" class="cdfList">College of Health</div>
    <div id="comli" class="cdfList">College of Medicine</div>
    <div id="conli" class="cdfList">College of Nursing</div>
    <div id="cstli" class="cdfList">College of Science and Technology</div>
    <div id="cotli" class="cdfList">College of Theology</div>
  `;

  const dormList = `
      <h3>Men's Dorm</h3>
      <div id="mahogayli" class="cdfList">Mahogany</div>
      <div id="acaciali" class="cdfList">Acacia Residence Hall</div>
      <div id="aptfli" class="cdfList">Apartment F</div>
      <div id="easternli" class="cdfList">Eastern Residence Hall</div>
      <div id="molaveli" class="cdfList">Molave</div>
      <div id="aptali" class="cdfList">Apartment A</div>

      <h3>Ladies's Dorm</h3>
      <a href="https://www.google.com/" class="cdfList"><div id="sampali" class="cdfList">Sampaguita Hall</div></a>
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

  // College Buildings button
  collegeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    collegeList.innerHTML = originalCollegeHTML;  // Restore college content
    collegeList.style.display = "block";
    console.log("Restored: College Buildings view");
  });

  // Dormitories button
  dormBtn.addEventListener("click", (e) => {
    e.preventDefault();
    collegeList.innerHTML = dormList;
    collegeList.style.display = "block";
    console.log("Switched to: Dormitories view");
  });
});

  










// document.addEventListener("DOMContentLoaded", () => {
//   const departmentBtn = document.querySelector("#sidebar a:nth-child(5)"); // 5th anchor is "Department"
//   const collegeList = document.getElementById("collegelist");

//   departmentBtn.addEventListener("click", (e) => {
//     e.preventDefault();

//     // Replace the college list content with dorm content
//     collegeList.innerHTML = `
//       <h3>Men's Dorm</h3>
//       <div id="mahogayli" class="cdfList">Mahogany</div>
//       <div id="acaciali" class="cdfList">Acacia Residence Hall</div>
//       <div id="aptfli" class="cdfList">Apartment F</div>
//       <div id="easternli" class="cdfList">Eastern Residence Hall</div>
//       <div id="molaveli" class="cdfList">Molave</div>
//       <div id="aptali" class="cdfList">Apartment A</div>

//       <h3>Ladies's Dorm</h3>
//       <a href="https://www.google.com/" class="cdfList"><div id="sampali" class="cdfList">Sampaguita Hall</div></a>
//       <div id="cadenali" class="cdfList">Cadena De Amor Hall</div>
//       <div id="damali" class="cdfList">Dama De Noche</div>
//       <div id="catli" class="cdfList">Cattleya</div>
//       <div id="walingli" class="cdfList">Waling-Waling Residence Hall</div>
//       <div id="ilangli" class="cdfList">Ilang-Ilang</div>

//       <h3>Family / Graduate</h3>
//       <div id="aptbli" class="cdfList">Apartment B</div>
//       <div id="aptgli" class="cdfList">Apartment G</div>
//       <div id="apthli" class="cdfList">Apartment H</div>
//       <div id="apteli" class="cdfList">Apartment E</div>
//     `;

//     // Make sure it's visible in case it was hidden
//     collegeList.style.display = "block";
//   });
// });





// document.addEventListener("DOMContentLoaded", () => {
//   const collegeBtn = document.getElementById("collegebar");
//   const departmentBtn = document.querySelector("#sidebar a:nth-child(5)"); // 5th anchor = "Department"
//   const collegeList = document.getElementById("collegelist");

//   // Save the original college HTML to restore later
//   const originalCollegeHTML = collegeList.innerHTML;

//   collegeBtn.addEventListener("click", (e) => {
//     e.preventDefault();

//     // If dorm content is showing, revert to college content
//     if (collegeList.innerHTML !== originalCollegeHTML) {
//       collegeList.innerHTML = originalCollegeHTML;
//     }

//     // Toggle visibility of college list
//     if (collegeList.style.display === "none" || collegeList.style.display === "") {
//       collegeList.style.display = "block";
//     } else {
//       collegeList.style.display = "none";
//     }
//   });

//   departmentBtn.addEventListener("click", (e) => {
//     e.preventDefault();

//     // Replace the college list content with dorm content
//     collegeList.innerHTML = `
//       <h3>Men's Dorm</h3>
//       <div id="mahogayli" class="cdfList">Mahogany</div>
//       <div id="acaciali" class="cdfList">Acacia Residence Hall</div>
//       <div id="aptfli" class="cdfList">Apartment F</div>
//       <div id="easternli" class="cdfList">Eastern Residence Hall</div>
//       <div id="molaveli" class="cdfList">Molave</div>
//       <div id="aptali" class="cdfList">Apartment A</div>

//       <h3>Ladies's Dorm</h3>
//       <a href="https://www.google.com/" class="cdfList"><div id="sampali" class="cdfList">Sampaguita Hall</div></a>
//       <div id="cadenali" class="cdfList">Cadena De Amor Hall</div>
//       <div id="damali" class="cdfList">Dama De Noche</div>
//       <div id="catli" class="cdfList">Cattleya</div>
//       <div id="walingli" class="cdfList">Waling-Waling Residence Hall</div>
//       <div id="ilangli" class="cdfList">Ilang-Ilang</div>

//       <h3>Family / Graduate</h3>
//       <div id="aptbli" class="cdfList">Apartment B</div>
//       <div id="aptgli" class="cdfList">Apartment G</div>
//       <div id="apthli" class="cdfList">Apartment H</div>
//       <div id="apteli" class="cdfList">Apartment E</div>
//     `;

//     collegeList.style.display = "block";
//   });
// });


    // Toggle display of collegeList
    // if (collegeList.style.display === "none" || collegeList.style.display === "") {
    //   collegeList.style.display = "block";
    // } else {
    //   collegeList.style.display = "none";
    // }