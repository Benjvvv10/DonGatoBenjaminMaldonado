const productos = {
    cafes: [
        {
            nombre: "Espresso",
            precio: 1200,
            imagen: "img/expreso.jpg",
            descripcion: "Café concentrado, intenso y con un sabor puro, hecho con granos de café molidos y agua a alta presión"
        },
        {
            nombre: "Café Latte",
            precio: 1800,
            imagen: "img/latte.jpg",
            descripcion: "Café con leche que se prepara con espresso, leche al vapor y espuma"
        }
    ],
    postres: [
        {
            nombre: "Cheesecake",
            precio: 2500,
            imagen: "img/cheesecake.jpg",
            descripcion: "Delicioso pastel de queso con una base crujiente"
        },
        {
            nombre: "Brownie",
            precio: 2000,
            imagen: "img/brownie.jpg",
            descripcion: "Bizcocho o queque de chocolate húmedo con nueces"
        }
    ],
    bebidas: [
        {
            nombre: "Té Helado",
            precio: 1500,
            imagen: "img/teHelado.jpg",
            descripcion: "Bebida refrescante preparada con té infundido en agua caliente y luego servida fría o con hielo."
        },
        {
            nombre: "Smoothie de Frutas",
            precio: 2200,
            imagen: "img/smoothie.jpg",
            descripcion: "Batido natural de frutas de temporada"
        }
    ]
};

let carrito = [];

function cargarProductos() {
    Object.keys(productos).forEach(categoria => {
        const container = document.querySelector(`#${categoria} .products`);
        productos[categoria].forEach(prod => {
            const div = document.createElement("div");
            div.className = "product";
            div.innerHTML = `
                <img src="${prod.imagen}" alt="${prod.nombre}" class="product-img">
                <h4>${prod.nombre}</h4>
                <p>${prod.descripcion}</p>
                <p>$${prod.precio}</p>
                <button onclick='agregarAlCarrito("${prod.nombre}", ${prod.precio})'>Agregar</button>
            `;
            container.appendChild(div);
        });
    });
}

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    renderCarrito();
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    renderCarrito();
}

function renderCarrito() {
    const lista = document.getElementById("carrito-lista");
    lista.innerHTML = "";
    carrito.forEach((item, i) => {
        const li = document.createElement("li");
        li.textContent = `${item.nombre} - $${item.precio}`;
        li.innerHTML += ` <button onclick="eliminarDelCarrito(${i})">x</button>`;
        lista.appendChild(li);
    });
    const total = carrito.reduce((sum, item) => sum + item.precio, 0);
    document.getElementById("total").textContent = total;
}

function mostrarPago() {
    document.getElementById("pago").classList.remove("hidden");
}

function confirmarPago() {
    alert("¡Gracias por su compra!");
    carrito = [];
    renderCarrito();
    document.getElementById("pago").classList.add("hidden");
    return false;
}

window.onload = cargarProductos;
