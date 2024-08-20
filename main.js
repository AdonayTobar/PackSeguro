
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.get-started-btn');
    const phoneNumber = "72757591"; // Reemplaza con tu número de teléfono, con el código del país sin signos + ni espacios
    const message = "Necesito una encomienda";

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });
    });
});



// Creamos un array de objetos que contiene las clases y los mensajes correspondientes
const buttons = [
    { selector: '.maxi', message: "Necesito algo de la Maxi" },
    { selector: '.selectos', message: "Necesito algo del Selectos" },
    { selector: '.little', message: "Necesito una Pizza" },
    { selector: '.santo', message: "Necesito algo de Santo Pecado" },
    { selector: '.integral', message: "Necesito Pan Integral" },
    { selector: '.fresa', message: "Necesito Fresas con crema" },
    { selector: '.ale', message: "Necesito comida de Ale" },
    { selector: '.gena', message: "Necesito algo de Gena Bistro Cafe" },
    { selector: '.zule', message: "Necesito una pupusas de Zuleima" },
    { selector: '.fuente', message: "Necesito una comida de La Fuente" },
    { selector: '.choco', message: "Necesito Chocos Lokos" }
];

// Iteramos sobre cada botón y le asignamos un event listener
buttons.forEach(buttonInfo => {
    const buttonElements = document.querySelectorAll(buttonInfo.selector);
        const phoneNumber = "72757591"; // Reemplaza con tu número de teléfono, con el código del país sin signos + ni espacios
    buttonElements.forEach(button => {
        button.addEventListener('click', () => {
            const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(buttonInfo.message)}`;
            window.open(whatsappUrl, '_blank');
        });
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

    if (scrollTop === 0) {
            // Al llegar al punto cero, asegúrate de que el navbar sea visible
            navbar.style.top = '0';
        }

    lastScrollTop = scrollTop;
});

menuToggle.addEventListener('click', function() {
    menu.classList.toggle('show');
    navbar.classList.toggle('cel-l');
});


