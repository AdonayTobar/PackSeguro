const negocios = [
  {
    id: 1,
    nombre: 'Pizza Litte Caesars',
    categorias: ['Pizza', 'Almuerzo'],
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoaORguKiAaXYq2m3P73HXpKEvSZ3bsA5R5A&s',
    url: 'https://pizzapizza.com.sv/',
    menu: [
      { id: 1, nombre: 'Pizza Pepperoni $5', imagen: 'https://pizzapizza.com.sv/wp-content/uploads/2021/01/Pepperoni.jpg', precio: 5.00 },
      { id: 2, nombre: 'Pizza Jamon', imagen: 'https://pizzapizza.com.sv/wp-content/uploads/2021/01/Jamon.jpg', precio: 5.00 },
      { id: 3, nombre: 'Super Chesse Gigante', imagen: 'https://pizzapizza.com.sv/wp-content/uploads/2022/07/Super-Cheese.jpg', precio: 7.75 }
    ]
  },

  // Agrega más negocios aquí
];

// Simulamos que estamos mostrando el menú del negocio con ID 1 (Pizza Little Caesars)
const negocioId = 1;
const negocioSeleccionado = negocios.find(negocio => negocio.id === negocioId);

// Mostrar productos en la página
const productList = document.getElementById('product-list');
negocioSeleccionado.menu.forEach(producto => {
  productList.innerHTML += `
    <div class="product-card">
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p>Precio: $${producto.precio.toFixed(2)}</p>
      <button onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
    </div>
  `;
});

// Array del carrito de compras
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para agregar producto al carrito
function agregarAlCarrito(idProducto) {
  const productoSeleccionado = negocioSeleccionado.menu.find(producto => producto.id === idProducto);
  
  // Verificar si ya existe en el carrito
  const itemEnCarrito = carrito.find(item => item.id === idProducto);
  if (itemEnCarrito) {
    itemEnCarrito.cantidad += 1;
  } else {
    carrito.push({ ...productoSeleccionado, cantidad: 1 });
  }

  // Guardar el carrito en localStorage
  localStorage.setItem('carrito', JSON.stringify(carrito));

  // Actualizar el conteo del carrito
  actualizarCarrito();
}

// Función para actualizar el conteo de productos en el carrito
function actualizarCarrito() {
  const cartCount = document.getElementById('cart-count');
  const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);
  cartCount.textContent = totalItems;
}

// Cargar el carrito al iniciar la página
actualizarCarrito();
