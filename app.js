// jshint esversion:6

const PROJECTS = [ 
    {
        name: 'eCommerce Website',
        link: 'https://radoogle.github.io/redStore/',
        class: 'tiles',
        imgSrc: 'images/eCommerce.jpg',
        category: ['all']
    },
    {
        name: 'Chat App Page',
        link: 'https://radoogle.github.io/chat-app/',
        class: 'tiles',
        imgSrc: 'images/chatAppPage.jpg',
        category: ['all', 'codeberry']
    },
    {
        name: 'Sign Up Page',
        link: 'https://radoogle.github.io/signup-page/',
        class: 'tiles',
        imgSrc: 'images/signUpPage.jpg',
        category: ['all', 'codeberry']
    },
    {
        name: 'Contact Me Page',
        link: 'https://radoogle.github.io/contact-me-page/',
        class: 'tiles',
        imgSrc: 'images/contactMePage.jpg',
        category: ['all', 'codeberry']
    },
    {
        name: 'Blog Main Page',
        link: 'https://radoogle.github.io/blog-main-page/',
        class: 'tiles',
        imgSrc: 'images/blogPage.jpg',
        category: ['all', 'codeberry']
    },
    {
        name: 'Tic Tac Toe',
        link: 'https://radoogle.github.io/Tic-Tac-Toe/',
        class: 'tiles',
        imgSrc: 'images/TicTacToe.jpg',
        category: ['all', 'game']
    },
    {
        name: 'Tree Map (D3)',
        link: 'https://codepen.io/Radoogle/full/GRpPzVG',
        class: 'tiles',
        imgSrc: 'images/D3TreeMap.jpg',
        category: ['all', 'D3', 'CodePen', 'fcc']
    },
    {
        name: 'Choropleth Map (D3)',
        link: 'https://codepen.io/Radoogle/full/xxwmWoz?',
        class: 'tiles',
        imgSrc: 'images/ChoroplethMap.jpg',
        category: ['all', 'D3', 'CodePen', 'fcc']
    },
    {
        name: 'Pomodoro Clock (React)',
        link: 'https://codepen.io/Radoogle/pen/xxwYrjL?editors=0010',
        class: 'tiles',
        imgSrc: 'images/PomodoroClock.jpg',
        category: ['all', 'React', 'CodePen', 'fcc']
    },
    {
        name: 'Heat Map (D3)',
        link: 'https://codepen.io/Radoogle/pen/mdejBQb?editors=0010',
        class: 'tiles',
        imgSrc: 'images/HeatMap.jpg',
        category: ['all', 'D3', 'CodePen', 'fcc']
    },
    {
        name: 'Scatter Plot (D3)',
        link: 'https://codepen.io/Radoogle/pen/VwvXoqR?editors=0010',
        class: 'tiles',
        imgSrc: 'images/D3ScatterPlot.jpg',
        category: ['all', 'D3', 'CodePen', 'fcc']
    },
    {
        name: 'Calculator (React)',
        link: 'https://codepen.io/Radoogle/pen/mdewwgm?editors=0010',
        class: 'tiles',
        imgSrc: 'images/Calculator.jpg',
        category: ['all', 'React', 'CodePen']
    },
    {
        name: 'Drum Machine (React)',
        link: 'https://codepen.io/Radoogle/pen/XWmMKLK',
        class: 'tiles',
        imgSrc: 'images/drummachine.jpg',
        category: ['all', 'React', 'CodePen']
        
    },
    {
        name: 'Memory Game',
        link: 'https://radoogle.github.io/Memory-Game/',
        class: 'tiles',
        imgSrc: 'images/MemoryGame.jpg',
        category: ['all', 'game']
        
    },
    {
        name: 'Bar Chart (D3)',
        link: 'https://codepen.io/Radoogle/pen/BaowWqx?editors=0010',
        class: 'tiles',
        imgSrc: 'images/D3BarChart.jpg',
        category: ['all', 'D3', 'CodePen']
        
    },
    {
        name: 'Tribute Page',
        link: 'https://codepen.io/Radoogle/pen/GRJvMGy',
        class: 'tiles',
        imgSrc: 'images/tribute.jpg',
        category: ['all', 'fcc', 'CodePen']
        
    },
    {
        name: 'Survey Form',
        link: 'https://codepen.io/Radoogle/pen/mdJMXMw',
        class: 'tiles',
        imgSrc: 'images/survey.jpg',
        category: ['all', 'fcc', 'CodePen']
        
    },
    {
        name: 'Product Landing Page',
        link: 'https://codepen.io/Radoogle/pen/ExjvBZN',
        class: 'tiles',
        imgSrc: 'images/product.jpg',
        category: ['All', 'fcc', 'CodePen']
        
    },
    {
        name: 'Technical Documentation Page',
        link: 'https://codepen.io/Radoogle/pen/yLNzKBW',
        class: 'tiles',
        imgSrc: 'images/documentation.jpg',
        category: ['All', 'fcc', 'CodePen']
        
    },
    {
        name: 'Countdown Timer',
        link: 'https://radoogle.github.io/Countdown-timer/',
        class: 'tiles',
        imgSrc: 'images/countdown.jpg',
        category: ['All', 'github']
        
    },
    {
        name: 'Image Manipulation',
        link: 'https://radoogle.github.io/ImageManipulation/',
        class: 'tiles',
        imgSrc: 'images/manipulation.jpg',
        category: ['All', 'github']
        
    },
];

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('project-tile');
    PROJECTS.map( (obj) => {
        let a = document.createElement('a');
        a.setAttribute('class', obj.class);
        a.setAttribute('href', obj.link);
        a.setAttribute('target', '_blank');
        a.setAttribute('loading', 'lazy');
        
        let img = document.createElement('img');
        img.setAttribute('src', obj.imgSrc);
        img.setAttribute('alt', obj.name);
        
        let p = document.createElement('p');
        p.innerHTML = `<span class="code">&lt; </span>${obj.name}<span class="code"> /&gt;</span>`;
        
        a.append(img);
        a.append(p);
        container.append(a);
    })
});