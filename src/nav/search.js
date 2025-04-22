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
        ul.classList.add("hidden"); // Hide list if nothing to show
      } else {
        ul.classList.remove("hidden"); // Show list
      }
    });
});
  


document.addEventListener("DOMContentLoaded", () => {
  const collegeBtn = document.getElementById("collegebar");
  const dormBtn = document.getElementById("dormbar");
  const facilityBtn = document.getElementById("facilitybar");
  const collegeList = document.getElementById("collegelist");
  
  collegeBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default link behavior

    // Toggle display of collegeList
    // if (collegeList.style.display === "none" || collegeList.style.display === "") {
    //   collegeList.style.display = "block";
    // } else {
    //   collegeList.style.display = "none";
    // }
    collegeList.style.display = "block";
  });

  dormBtn.addEventListener("click", (e) =>{
    e.preventDefault();

    // if (collegeList.style.display === "none" || collegeList.style.display === "") {
    //   collegeList.style.display = "block";
    // } else {
    //   collegeList.style.display = "none";
    // }

    collegeList.innerHTML = `
      <h3>Men's Dorm</h3>
      <div class="mahogayli">Mahogany</div>
      <div class="acaciali">Acacia Residence Hall</div>
      <div class="aptfli">Apartment F</div>
      <div class="easternli">Eastern Residence Hall</div>
      <div class="molaveli">Molave</div>
      <div class="aptali">Apartment A</div>

      <h3>Ladies's Dorm</h3>
      <a href="https://www.google.com/"><div class="sampali">Sampaguita Hall</div></a>
      <div class="cadenali">Cadena De Amor Hall</div>
      <div class="damali">Dama De Noche</div>
      <div class="catli">Cattleya</div>
      <div class="walingli">Waling-Waling Residence Hall</div>
      <div class="ilangli">Ilang-Ilang</div>

      <h3>Family / Graduate</h3>
      <div class="aptbli">Apartment B</div>
      <div class="aptgli">Apartment G</div>
      <div class="apthli">Apartment H</div>
      <div class="apteli">Apartment E</div>
    `;
    collegeList.style.display = "block";
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
//       <div class="mahogayli">Mahogany</div>
//       <div class="acaciali">Acacia Residence Hall</div>
//       <div class="aptfli">Apartment F</div>
//       <div class="easternli">Eastern Residence Hall</div>
//       <div class="molaveli">Molave</div>
//       <div class="aptali">Apartment A</div>

//       <h3>Ladies's Dorm</h3>
//       <a href="https://www.google.com/"><div class="sampali">Sampaguita Hall</div></a>
//       <div class="cadenali">Cadena De Amor Hall</div>
//       <div class="damali">Dama De Noche</div>
//       <div class="catli">Cattleya</div>
//       <div class="walingli">Waling-Waling Residence Hall</div>
//       <div class="ilangli">Ilang-Ilang</div>

//       <h3>Family / Graduate</h3>
//       <div class="aptbli">Apartment B</div>
//       <div class="aptgli">Apartment G</div>
//       <div class="apthli">Apartment H</div>
//       <div class="apteli">Apartment E</div>
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
//       <div class="mahogayli">Mahogany</div>
//       <div class="acaciali">Acacia Residence Hall</div>
//       <div class="aptfli">Apartment F</div>
//       <div class="easternli">Eastern Residence Hall</div>
//       <div class="molaveli">Molave</div>
//       <div class="aptali">Apartment A</div>

//       <h3>Ladies's Dorm</h3>
//       <a href="https://www.google.com/"><div class="sampali">Sampaguita Hall</div></a>
//       <div class="cadenali">Cadena De Amor Hall</div>
//       <div class="damali">Dama De Noche</div>
//       <div class="catli">Cattleya</div>
//       <div class="walingli">Waling-Waling Residence Hall</div>
//       <div class="ilangli">Ilang-Ilang</div>

//       <h3>Family / Graduate</h3>
//       <div class="aptbli">Apartment B</div>
//       <div class="aptgli">Apartment G</div>
//       <div class="apthli">Apartment H</div>
//       <div class="apteli">Apartment E</div>
//     `;

//     collegeList.style.display = "block";
//   });
// });


