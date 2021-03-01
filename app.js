// jshint esversion:6

const displayProjects = (projects, filterValue) => {
  let result = "";
  
  projects.forEach( ({name, link, className, imgSrc, category}) => {
    if (category.includes(filterValue)) {
      result += `
        <a href="${link}" class="${className}" target="_blank">
          <img src="${imgSrc}" alt="${name}">
          <p><span class="code">&lt;</span>${name}<span class="code">/&gt;</span></p>
        </a>
      `;
    }
  });
  document.getElementById('project-tile').innerHTML = result;
};

//Get the button for scrolling to the top
var scrollTop = document.getElementById("scrollTop");
var scrollDown = document.getElementById("scrollDown");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTop.style.display = "block";
    scrollDown.style.display = "none";
  } else {
    scrollTop.style.display = "none";
    scrollDown.style.display = "block";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function scrollDownFunction() {
  // + 75px because the nav bar has 75px
  window.scrollTo(0,document.querySelector("#welcome-section").scrollHeight + 75);
}

document.addEventListener('DOMContentLoaded', function() {
const filter = document.getElementById("filter");

// readFromJSONFile();
fetch('projects-db.json')
  .then(response => response.json())
  .then(PROJECTS => 
    {
    

    // first display all project, category === "All"
    displayProjects(PROJECTS, "All"); 

    // building the filter list options from the category in PROJECTS
    
      // 1. build an array with distinct category values
      let selectFilterValues = [];
      PROJECTS.forEach( ({category}) => {
        for (let cat of category) {
          if (!selectFilterValues.includes(cat)) {
            selectFilterValues.push(cat);
          }
        }
      });

      // 2. add the values from selectFilterValues to the dropdownlist
      let resultList = "";
      selectFilterValues.forEach( (value) => {
        resultList += `
          <option value="${value}">${value}</option>
        `;
      });
      filter.innerHTML = resultList;
    
    // every change in filter list will refresh the list of tiles.
    filter.addEventListener("change", () => {
      displayProjects(PROJECTS, filter.value);
    });

  });
    const footerYear = document.getElementById("footerYear");
    footerYear.innerHTML = new Date().getFullYear();
});