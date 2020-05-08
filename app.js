const PROJECTS = [
    {
        name: 'Pomodoro Clock (React)',
        link: 'https://codepen.io/Radoogle/pen/xxwYrjL?editors=0010',
        class: 'tiles',
        imgSrc: 'images/PomodoroClock.jpg',
        category: ['All', 'React', 'CodePen', 'FCC']
    },
    {
        name: 'Calculator (React)',
        link: 'https://codepen.io/Radoogle/pen/mdewwgm?editors=0010',
        class: 'tiles',
        imgSrc: 'images/Calculator.jpg',
        category: ['All', 'React', 'CodePen']
    },
    {
        name: 'Drum Machine (React)',
        link: 'https://codepen.io/Radoogle/pen/XWmMKLK',
        class: 'tiles',
        imgSrc: 'images/drummachine.jpg',
        category: ['All', 'React', 'CodePen']
        
    },
    {
        name: 'Memory Game',
        link: 'https://radoogle.github.io/Memory-Game/',
        class: 'tiles',
        imgSrc: 'images/MemoryGame.jpg',
        category: ['All']
        
    },
    {
        name: 'Bar Chart (D3)',
        link: 'https://codepen.io/Radoogle/pen/BaowWqx?editors=0010',
        class: 'tiles',
        imgSrc: 'images/D3BarChart.jpg',
        category: ['All', 'D3', 'CodePen']
        
    },
    {
        name: 'Tribute Page',
        link: 'https://codepen.io/Radoogle/pen/GRJvMGy',
        class: 'tiles',
        imgSrc: 'images/tribute.jpg',
        category: ['All', 'FCC', 'CodePen']
        
    },
    {
        name: 'Survey Form',
        link: 'https://codepen.io/Radoogle/pen/mdJMXMw',
        class: 'tiles',
        imgSrc: 'images/survey.jpg',
        category: ['All', 'FCC', 'CodePen']
        
    },
    {
        name: 'Product Landing Page',
        link: 'https://codepen.io/Radoogle/pen/ExjvBZN',
        class: 'tiles',
        imgSrc: 'images/product.jpg',
        category: ['All', 'FCC', 'CodePen']
        
    },
    {
        name: 'Technical Documentation Page',
        link: 'https://codepen.io/Radoogle/pen/yLNzKBW',
        class: 'tiles',
        imgSrc: 'images/documentation.jpg',
        category: ['All', 'FCC', 'CodePen']
        
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