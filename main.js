
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

// Array de negocios afiliados
const negocios = [
  {
    id: 1,
    nombre: 'Pizza Litte Caesars',
    categorias: ['Pizza', 'Almuerzo'],
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoaORguKiAaXYq2m3P73HXpKEvSZ3bsA5R5A&s',
    url: '/cesar.html',
    menu: [
      { id: 1, nombre: 'Pizza Pepperoni $5', imagen: 'https://pizzapizza.com.sv/wp-content/uploads/2021/01/Pepperoni.jpg', precio: 5.00 },
      { id: 2, nombre: 'Pizza Jamon', imagen: 'https://pizzapizza.com.sv/wp-content/uploads/2021/01/Jamon.jpg', precio: 5.00 },
      { id: 3, nombre: 'Super Chesse Gigante', imagen: 'https://pizzapizza.com.sv/wp-content/uploads/2022/07/Super-Cheese.jpg', precio: 7.75 }
    ]
  },

  // Agrega más negocios aquí
];

// Filtrar negocios por categoría
const filtrarPorCategoria = (categoria) => {
  return negocios.filter((negocio) => negocio.categorias.includes(categoria));
};

// Ejemplo de cómo obtener los negocios de la categoría "Pizza"
const negociosPizza = filtrarPorCategoria('Pizza');
console.log(negociosPizza);

const contenedor = document.getElementById('negocios-afiliados');

    negocios.forEach((negocio) => {
      contenedor.innerHTML += `
        <div class="negocio" onclick="window.location.href='${negocio.url}'">
          <img src="${negocio.logo}" alt="${negocio.nombre}">
          <h3>${negocio.nombre}</h3>
        </div>
      `;
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


