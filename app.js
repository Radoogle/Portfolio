// jshint esversion:6

const PROJECTS = [ 
    {
        name: 'eCommerce Website',
        link: 'https://radoogle.github.io/redStore/',
        className: 'tiles',
        imgSrc: 'images/project-thumbnails/eCommerce.jpg',
        category: ['All']
    },
    {
        name: 'Chat App Page',
        link: 'https://radoogle.github.io/chat-app/',
        className: 'tiles',
        imgSrc: 'images/project-thumbnails/chatAppPage.jpg',
        category: ['All', 'codeberry']
    },
    {
        name: 'Sign Up Page',
        link: 'https://radoogle.github.io/signup-page/',
        className: 'tiles',
        imgSrc: 'images/project-thumbnails/signUpPage.jpg',
        category: ['All', 'codeberry']
    },
    {
        name: 'Contact Me Page',
        link: 'https://radoogle.github.io/contact-me-page/',
        className: 'tiles',
        imgSrc: 'images/project-thumbnails/contactMePage.jpg',
        category: ['All', 'codeberry']
    },
    {
        name: 'Blog Main Page',
        link: 'https://radoogle.github.io/blog-main-page/',
        className: 'tiles',
        imgSrc: 'images/project-thumbnails/blogPage.jpg',
        category: ['All', 'codeberry']
    },
    {
        name: 'Tic Tac Toe',
        link: 'https://radoogle.github.io/Tic-Tac-Toe/',
        className: 'tiles',
        imgSrc: 'images/project-thumbnails/TicTacToe.jpg',
        category: ['All', 'game']
    },
    {
        name: 'Tree Map (D3)',
        link: 'https://codepen.io/Radoogle/full/GRpPzVG',
        className: 'tiles',
        imgSrc: 'images/project-thumbnails/D3TreeMap.jpg',
        category: ['All', 'D3', 'CodePen', 'fcc']
    },
    {
        name: 'Choropleth Map (D3)',
        link: 'https://codepen.io/Radoogle/full/xxwmWoz?',
        className: 'tiles',
        imgSrc: 'images/project-thumbnails/ChoroplethMap.jpg',
        category: ['All', 'D3', 'CodePen', 'fcc']
    },
    {
        name: 'Pomodoro Clock (React)',
        link: 'https://codepen.io/Radoogle/pen/xxwYrjL?editors=0010',
        className: 'tiles',
        imgSrc: 'images/project-thumbnails/PomodoroClock.jpg',
        category: ['All', 'React', 'CodePen', 'fcc']
    },
    {
        name: 'Heat Map (D3)',
        link: 'https://codepen.io/Radoogle/pen/mdejBQb?editors=0010',
        className: 'tiles',
        imgSrc: 'images/project-thumbnails/HeatMap.jpg',
        category: ['All', 'D3', 'CodePen', 'fcc']
    },
    {
        name: 'Scatter Plot (D3)',
        link: 'https://codepen.io/Radoogle/pen/VwvXoqR?editors=0010',
        className: 'tiles',
        imgSrc: 'images/project-thumbnails/D3ScatterPlot.jpg',
        category: ['All', 'D3', 'CodePen', 'fcc']
    },
    {
        name: 'Calculator (React)',
        link: 'https://codepen.io/Radoogle/pen/mdewwgm?editors=0010',
        className: 'tiles',
        imgSrc: 'images/project-thumbnails/Calculator.jpg',
        category: ['All', 'React', 'CodePen']
    },
    {
        name: 'Drum Machine (React)',
        link: 'https://codepen.io/Radoogle/pen/XWmMKLK',
        className: 'tiles',
        imgSrc: 'images/project-thumbnails/drummachine.jpg',
        category: ['All', 'React', 'CodePen']
        
    },
    {
        name: 'Memory Game',
        link: 'https://radoogle.github.io/Memory-Game/',
        className: 'tiles',
        imgSrc: 'images/project-thumbnails/MemoryGame.jpg',
        category: ['All', 'game']
        
    },
    {
        name: 'Bar Chart (D3)',
        link: 'https://codepen.io/Radoogle/pen/BaowWqx?editors=0010',
        className: 'tiles',
        imgSrc: 'images/project-thumbnails/D3BarChart.jpg',
        category: ['All', 'D3', 'CodePen']
        
    },
    {
        name: 'Tribute Page',
        link: 'https://codepen.io/Radoogle/pen/GRJvMGy',
        className: 'tiles',
        imgSrc: 'images/project-thumbnails/tribute.jpg',
        category: ['All', 'fcc', 'CodePen']
        
    },
    {
        name: 'Survey Form',
        link: 'https://codepen.io/Radoogle/pen/mdJMXMw',
        className: 'tiles',
        imgSrc: 'images/project-thumbnails/survey.jpg',
        category: ['All', 'fcc', 'CodePen']
        
    },
    {
        name: 'Product Landing Page',
        link: 'https://codepen.io/Radoogle/pen/ExjvBZN',
        className: 'tiles',
        imgSrc: 'images/project-thumbnails/product.jpg',
        category: ['All', 'fcc', 'CodePen']
        
    },
    {
        name: 'Technical Documentation Page',
        link: 'https://codepen.io/Radoogle/pen/yLNzKBW',
        className: 'tiles',
        imgSrc: 'images/project-thumbnails/documentation.jpg',
        category: ['All', 'fcc', 'CodePen']
        
    },
    {
        name: 'Countdown Timer',
        link: 'https://radoogle.github.io/Countdown-timer/',
        className: 'tiles',
        imgSrc: 'images/project-thumbnails/countdown.jpg',
        category: ['All', 'github']
        
    },
    {
        name: 'Image Manipulation',
        link: 'https://radoogle.github.io/ImageManipulation/',
        className: 'tiles',
        imgSrc: 'images/project-thumbnails/manipulation.jpg',
        category: ['All', 'github']
        
    },
];

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

    const footerYear = document.getElementById("footerYear");
    footerYear.innerHTML = new Date().getFullYear();
});