// SIMULACIÓN DE TUS DATOS (¡A COMPLETAR!)
const productos = [
    { nombre: "Shaker Black Gold Nutrition Simple 600 Ml", imagen_url: "Shaker Black Gold Nutrition Simple 600 Ml.jpg" },
    { nombre: "shaker 2 en 1 Gold Nutrition 600 Ml", imagen_url: "shaker 2 en 1 Gold Nutrition 600 Ml.jpg" },
    { nombre: "Shaker Pro One Tapa negra/blanca Gold Nutrition", imagen_url: "Shaker Pro One Tapa negra blanca Gold Nutrition.jpg" },
    { nombre: "Shaker Black Simple 600 Ml HTN", imagen_url: "Shaker Black Simple 600 Ml HTN.jpg" },
    { nombre: "***shaker 2 en 1 Con Compartimiento 600 Ml HTN", imagen_url: "shaker 2 en 1 Con Compartimiento 600 Ml HTN.jpg" },
    { nombre: "***Shaker Flip 2 En 1 Con Compartimiento y Cuchara Dosificadora", imagen_url: "Shaker Flip 2 En 1 Con Compartimiento y Cuchara Dosificadora.jpg" },
    { nombre: "***Shaker Blender Botless 400 / 600 Ml Star Nutrition", imagen_url: "Shaker Blender Botless 400 600 Ml Star Nutrition.jpg" },
    { nombre: "Shaker GOT PROTEIN BLENDER 400 Ml BSN O OPTIMUM NUTRITION", imagen_url: "Shaker GOT PROTEIN BLENDER 400 Ml BSN O OPTIMUM NUTRITION.jpg" },
    { nombre: "Shaker GOT PROTEIN BLENDER 600 Ml BSN O OPTIMUM NUTRITION", imagen_url: "Shaker GOT PROTEIN BLENDER 600 Ml BSN O OPTIMUM NUTRITION.jpg" },
    { nombre: "***Shaker Gentech 3 en 1 COLOR ROSA O AZUL", imagen_url: "Shaker Gentech 3 en 1 COLOR ROSA O AZUL.jpg" },
    { nombre: "***Shaker Automatico Promix (Pilas)", imagen_url: "Shaker Automatico Promix (Pilas).jpg" },
    { nombre: "***Botellon 1,3 Lts", imagen_url: "Botellon 1,3 Lts.jpg" },
    { nombre: "***Cuchara Dosificadora 100 mg", imagen_url: "Cuchara Dosificadora 100 mg.jpg" },
    { nombre: "***Cuchara Dosificadora 1 Gr", imagen_url: "Cuchara Dosificadora 1 Gr.jpg" },
    { nombre: "***Cuchara Dosificadora 5 Gr", imagen_url: "Cuchara Dosificadora 5 Gr.jpg" },
    { nombre: "***Cuchara Dosificadora 40 Gr (Proteina)", imagen_url: "Cuchara Dosificadora 40 Gr (Proteina).jpg" }

    // ... ¡El resto de tus productos irán aquí!
];

const buscador = document.getElementById('buscador');
const listaProductos = document.getElementById('lista-productos');
const imagenProducto = document.getElementById('imagen-producto');
const nombreProductoSeleccionado = document.getElementById('nombre-producto-seleccionado');

// 1. FUNCIÓN PARA DIBUJAR LA LISTA
function mostrarProductos(lista) {
    listaProductos.innerHTML = ''; // Limpiar la lista anterior

    lista.forEach(producto => {
        const item = document.createElement('a');
        item.href = "#"; // Evita que recargue la página
        item.textContent = producto.nombre;
        item.classList.add('item-producto'); // Para dar estilo

        // Asignar el evento al hacer clic
        item.addEventListener('click', () => seleccionarProducto(producto, item));

        listaProductos.appendChild(item);
    });
}

// 2. FUNCIÓN PARA EL BUSCADOR
buscador.addEventListener('input', (e) => {
    const terminoBusqueda = e.target.value.toLowerCase();

    const resultados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(terminoBusqueda)
    );

    mostrarProductos(resultados);
});

// 3. FUNCIÓN PARA MOSTRAR LA IMAGEN AL SELECCIONAR
function seleccionarProducto(producto, elemento) {
    nombreProductoSeleccionado.textContent = producto.nombre;
    imagenProducto.src = `imagenes/${producto.imagen_url}`;
    imagenProducto.alt = `Imagen de ${producto.nombre}`;
    imagenProducto.style.display = 'block'; // Mostrar la imagen

    // Desmarcar el producto previamente seleccionado
    document.querySelectorAll('.item-producto.seleccionado').forEach(el => el.classList.remove('seleccionado'));

    // Marcar el nuevo producto seleccionado
    if (elemento) elemento.classList.add('seleccionado');
}

// Inicializar la lista al cargar la página
mostrarProductos(productos);