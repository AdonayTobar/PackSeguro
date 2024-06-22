// script.js
document.addEventListener('DOMContentLoaded', () => {
    // JavaScript code to handle interactive elements goes here

    // Example: Handling click events for buttons
    document.querySelector('.get-started-btn').addEventListener('click', () => {
        alert('Get Started button clicked');
    });

    document.querySelector('.watch-video-btn').addEventListener('click', () => {
        alert('Watch Video button clicked');
    });

    document.querySelectorAll('.menu-item button').forEach(button => {
        button.addEventListener('click', () => {
            alert('Order Now button clicked for ' + button.closest('.menu-item').querySelector('h3').innerText);
        });
    });

    document.querySelector('.cta button').addEventListener('click', () => {
        alert('Get The App button clicked');
    });
});

let lastScrollTop = 0;
const navbar = document.querySelector('nav');
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.style.top = '-85px'; // Ajustar el valor según la altura de la barra de navegación
    } else {
        // Scrolling up
        navbar.style.top = '0';
    }

    lastScrollTop = scrollTop;
});

menuToggle.addEventListener('click', function() {
    menu.classList.toggle('show');
    navbar.classList.toggle('cel-l');
});


