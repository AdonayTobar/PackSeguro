
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.get-started-btn');
    const phoneNumber = "60288548"; // Reemplaza con tu número de teléfono, con el código del país sin signos + ni espacios
    const message = "Necesito una encomienda";

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
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

    lastScrollTop = scrollTop;
});

menuToggle.addEventListener('click', function() {
    menu.classList.toggle('show');
    navbar.classList.toggle('cel-l');
});


