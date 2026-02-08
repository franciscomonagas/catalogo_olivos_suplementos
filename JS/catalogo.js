// CATÁLOGO DE SUPLEMENTOS - TOP 10 POR CATEGORÍA (MERCADO ARGENTINO)
const grupos = [
    "Proteinas", "Creatinas", "PreWorks / Pre Entrenos", "Aminoacidos / Bcaas", "Ganadores de Peso / Gainers", "Quemadores / Fat Burners", "Oxido Nitritco"
];

const productos = [
    // ===== PROTEINAS - TOP 10 MERCADO ARGENTINO =====
    { nombre: "Platinum Whey Protein 2 Lbs Star Nutrition Sin Tacc", imagen_url: "Platinum Whey Protein 2 Lbs Star Nutrition Sin Tacc.jpg", grupo: "Proteinas" },
    { nombre: "True Made 2,05 Lbs ENA Sport", imagen_url: "True Made 2,05 Lbs ENA Sport.jpg", grupo: "Proteinas" },
    { nombre: "SOY PROTEIN Proteína de soja 1 Kg Pulver Sin Tacc", imagen_url: "SOY PROTEIN Proteína de soja 1 Kg Pulver Sin Tacc.jpg", grupo: "Proteinas" },
    { nombre: "Premium Whey Protein 1 Kg Gentech Sin Tacc", imagen_url: "Premium Whey Protein 1 Kg Gentech Sin Tacc.jpg", grupo: "Proteinas" },
    { nombre: "Whey Protein 1Kg Body Advance", imagen_url: "Whey Protein 1Kg Body Advance.jpg", grupo: "Proteinas" },
    { nombre: "Just Plant Protein 2 Lbs Star Nutrition Sin Tacc", imagen_url: "Just Plant Protein 2 Lbs Star Nutrition Sin Tacc.jpg", grupo: "Proteinas" },
    { nombre: "Gold Whey Standard 2 Lbs Optimum Nutrition", imagen_url: "Gold Whey Standard 2 Lbs Optimum Nutrition.jpg", grupo: "Proteinas" },
    { nombre: "Proteina Vegana 910 Grs Body Advance", imagen_url: "Proteina Vegana 910 Grs Body Advance.jpg", grupo: "Proteinas" },
    { nombre: "Proteina de Soja 1 Kg Athomx", imagen_url: "Proteina de Soja 1 Kg Athomx.jpg", grupo: "Proteinas" },
    { nombre: "Platinum ISO WHEY X 1 Kgrs Star Nutrition Sin Tacc Apto Diabeticos", imagen_url: "Platinum ISO WHEY X 1 Kgrs Star Nutrition Sin Tacc Apto Diabeticos.jpg", grupo: "Proteinas" },

    // ===== CREATINAS - TOP 10 MERCADO ARGENTINO =====
    { nombre: "Creatina monohidrato Ultra Micronizada 300 Grs Star Nutrition Sin Tacc", imagen_url: "Creatina monohidrato Ultra Micronizada 300 Grs Star Nutrition Sin Tacc.jpg", grupo: "Creatinas" },
    { nombre: "Creatina Micronizada 300Grs ENA", imagen_url: "Creatina Micronizada 300Grs ENA.jpg", grupo: "Creatinas" },
    { nombre: "Creatina Monohidrato 250 Grs Gentech Sin Tacc", imagen_url: "Creatina Monohidrato 250 Grs Gentech Sin Tacc.jpg", grupo: "Creatinas" },
    { nombre: "Creatina Micronizada 150 Grs Body Advance", imagen_url: "Creatina Micronizada 150 Grs Body Advance.jpg", grupo: "Creatinas" },
    { nombre: "Creatina Monohidrato 300 Grs 60 Serv Pulver Sin Tacc", imagen_url: "Creatina Monohidrato 300 Grs 60 Serv Pulver Sin Tacc.jpg", grupo: "Creatinas" },
    { nombre: "Creapure Creatina Alemana Neutra 300 Grs X Body Evolution", imagen_url: "Creapure Creatina Alemana Neutra 300 Grs X Body Evolution.jpg", grupo: "Creatinas" },
    { nombre: "Creatina Masticables 150 Tabs Gentech Sin Tacc", imagen_url: "Creatina Masticables 150 Tabs Gentech Sin Tacc.jpg", grupo: "Creatinas" },
    { nombre: "TNT 500 Grs (25 Serv) (Creatina + Arginina) Frutos del bosque Gentech Sin Tacc", imagen_url: "TNT 500 Grs (25 Serv) (Creatina + Arginina) Frutos del bosque Gentech Sin Tacc.jpg", grupo: "Creatinas" },
    { nombre: "Creatina Monohidrato 300Grs Gold Nutrition Sin Tacc", imagen_url: "Creatina Monohidrato 300Grs Gold Nutrition Sin Tacc.jpg", grupo: "Creatinas" },
    { nombre: "Creatina Micronizada 300 Grs (60 Serv) Optimun Nutrition", imagen_url: "Creatina Micronizada 300 Grs (60 Serv) Optimun Nutrition.jpg", grupo: "Creatinas" },

    // ===== PRE-ENTRENOS - TOP 10 MERCADO ARGENTINO =====
    { nombre: "C4 Ultimate 20 Serv Cellucor", imagen_url: "C4 Ultimate 20 Serv Cellucor.jpg", grupo: "PreWorks / Pre Entrenos" },
    { nombre: "Star V8 285 Grs / 30 Serv Star Nutrition Sin Tacc", imagen_url: "Star V8 285 Grs 30 Serv Star Nutrition Sin Tacc.jpg", grupo: "PreWorks / Pre Entrenos" },
    { nombre: "Pre War 400 Grs / 20 Serv ENA", imagen_url: "Pre War 400 Grs 20 Serv ENA.jpg", grupo: "PreWorks / Pre Entrenos" },
    { nombre: "Beta Xplode 210 Grs Htn Nutrition", imagen_url: "Beta Xplode 210 Grs Htn Nutrition.jpg", grupo: "PreWorks / Pre Entrenos" },
    { nombre: "Mesomorph 25 Serv APS Nutrition", imagen_url: "Mesomorph 25 Serv APS Nutrition.jpg", grupo: "PreWorks / Pre Entrenos" },
    { nombre: "Pre work 20 Serv Mango Gold Nutrition Sin Tacc", imagen_url: "Pre work 20 Serv Mango Gold Nutrition Sin Tacc.jpg", grupo: "PreWorks / Pre Entrenos" },
    { nombre: "Gold Standard Pre Work Out 30 Serv Optimum Nutrition", imagen_url: "Gold Standard Pre Work Out 30 Serv Optimum Nutrition.jpg", grupo: "PreWorks / Pre Entrenos" },
    { nombre: "Beast Blood 280 Grs Body Advance", imagen_url: "Beast Blood 280 Grs Body Advance.jpg", grupo: "PreWorks / Pre Entrenos" },
    { nombre: "Psychotic 35 Serv Insane Labs", imagen_url: "Psychotic 35 Serv Insane Labs.jpg", grupo: "PreWorks / Pre Entrenos" },
    { nombre: "Killer 5.0 25 Serv Generacion Fit  Sin Tacc", imagen_url: "Killer 5.0 25 Serv Generacion Fit  Sin Tacc.jpg", grupo: "PreWorks / Pre Entrenos" },

    // ===== AMINOACIDOS / BCAAS - TOP 10 MERCADO ARGENTINO =====
    { nombre: "BCAA 2000 120 Tabs Star Nutrition Sin Tacc", imagen_url: "placeholder.jpg", grupo: "Aminoacidos / Bcaas" },
    { nombre: "Mtor Bcaa Evolution 290Grs / 20 Serv Star Nutrition Sin Tacc", imagen_url: "placeholder.jpg", grupo: "Aminoacidos / Bcaas" },
    { nombre: "Bcaa 211 150 Grs / 30 Serv Pomelo Pulver Sin Tacc", imagen_url: "placeholder.jpg", grupo: "Aminoacidos / Bcaas" },
    { nombre: "Amino X 30 Serv BSN", imagen_url: "placeholder.jpg", grupo: "Aminoacidos / Bcaas" },
    { nombre: "Glutamina x 300Grs Star Nutrition Sin Tacc", imagen_url: "placeholder.jpg", grupo: "Aminoacidos / Bcaas" },
    { nombre: "EAA´S Essential Amino 20 Serv Star Nutrition Sin Tacc", imagen_url: "placeholder.jpg", grupo: "Aminoacidos / Bcaas" },
    { nombre: "β-BCAA 8.0 (+ Enzyme) 30 Serv HTN Nutrition Apto vegano y Diabetico", imagen_url: "placeholder.jpg", grupo: "Aminoacidos / Bcaas" },
    { nombre: "L Glutamina Micronizada 300grs Htn", imagen_url: "placeholder.jpg", grupo: "Aminoacidos / Bcaas" },
    { nombre: "Amino Energy 30 Serv Optimum Nutrition", imagen_url: "placeholder.jpg", grupo: "Aminoacidos / Bcaas" },
    { nombre: "BCAA AMINO 8.1.1 20 serv / 280 Grs Body Advance", imagen_url: "placeholder.jpg", grupo: "Aminoacidos / Bcaas" },

    // ===== GANADORES DE PESO - TOP 4 MERCADO ARGENTINO =====
    { nombre: "Mutant Mass x 1,5 Kilos Star Nutrition Sin Tacc", imagen_url: "Mutant Mass x 1,5 Kilos Star Nutrition Sin Tacc.jpg", grupo: "Ganadores de Peso / Gainers" },
    { nombre: "Plus Gainer  1,5 Kg Pulver Sin Tacc", imagen_url: "Plus Gainer  1,5 Kg Pulver Sin Tacc.jpg", grupo: "Ganadores de Peso / Gainers" },
    { nombre: "Muscle Mass Gainer Gold 5 Lbs Gold Nutrition Sin Tacc (vainilla / chocolate)", imagen_url: "Muscle Mass Gainer Gold 5 Lbs Gold Nutrition Sin Tacc.jpg", grupo: "Ganadores de Peso / Gainers" },
    { nombre: "Mass Generator 1,5 Kg Athmox", imagen_url: "Mass Generator 1,5 Kg Athmox.jpg", grupo: "Ganadores de Peso / Gainers" },

    // ===== QUEMADORES - TOP 10 MERCADO ARGENTINO =====
    { nombre: "L-carnitina Liquida 500 Ml Gentech Sin Tacc", imagen_url: "placeholder.jpg", grupo: "Quemadores / Fat Burners" },
    { nombre: "Thermo Fuel MAX x 120 Caps Star Nutrition Sin Tacc", imagen_url: "placeholder.jpg", grupo: "Quemadores / Fat Burners" },
    { nombre: "Lipo 6 Black 60 Caps Nutrex Research", imagen_url: "placeholder.jpg", grupo: "Quemadores / Fat Burners" },
    { nombre: "Cla 1000 Acido Linoleico Star Nutrition Sin Tacc", imagen_url: "placeholder.jpg", grupo: "Quemadores / Fat Burners" },
    { nombre: "Hydroxycut Hardcore Elite 110 Tabs Muscletech Nueva Presentacion!!!", imagen_url: "placeholder.jpg", grupo: "Quemadores / Fat Burners" },
    { nombre: "Lipo Extreme 30 Serv (Polvo) Body Advance", imagen_url: "placeholder.jpg", grupo: "Quemadores / Fat Burners" },
    { nombre: "TX3 Black cuts 60 Caps Gentech Sin Tacc", imagen_url: "placeholder.jpg", grupo: "Quemadores / Fat Burners" },
    { nombre: "L-carnitina 90 Caps Gentech Sin Tacc", imagen_url: "placeholder.jpg", grupo: "Quemadores / Fat Burners" },
    { nombre: "X6 Thermo Fire 120 Caps HTN Nutrition", imagen_url: "placeholder.jpg", grupo: "Quemadores / Fat Burners" },
    { nombre: "EPH 100 60 Tabs Kn Nutrition", imagen_url: "placeholder.jpg", grupo: "Quemadores / Fat Burners" },

    // ===== OXIDO NITRICO - TOP 6 MERCADO ARGENTINO =====
    { nombre: "STEAM N.O. 20 Serv Star Nutrition Sin Tacc", imagen_url: "STEAM N.O. 20 Serv Star Nutrition Sin Tacc.jpg", grupo: "Oxido Nitritco" },
    { nombre: "No Gold 195 Grs / 25 Serv Raspberry Gold Nutrition Sin Tacc", imagen_url: "No Gold 195 Grs 25 Serv Raspberry Gold Nutrition Sin Tacc.jpg", grupo: "Oxido Nitritco" },
    { nombre: "Arginox Nitric Oxide 240 Comp Nutrilab", imagen_url: "Arginox Nitric Oxide 240 Comp Nutrilab.jpg", grupo: "Oxido Nitritco" },
    { nombre: "Nitrix Bomb Oxido Nitrico 90 Tabs Body Advance", imagen_url: "Nitrix Bomb Oxido Nitrico 90 Tabs Body Advance.jpg", grupo: "Oxido Nitritco" },
    { nombre: "Muscle Max 90 Tabs Ena Post Work", imagen_url: "Muscle Max 90 Tabs Ena Post Work.jpg", grupo: "Oxido Nitritco" },
    { nombre: "Nitro M Extreme x 225 g. / 30 Serv HTN", imagen_url: "Nitro M Extreme x 225 g. 30 Serv HTN.jpg", grupo: "Oxido Nitritco" }
];

const buscador = document.getElementById('buscador');
const listaProductos = document.getElementById('lista-productos');
const imagenProducto = document.getElementById('imagen-producto');
const nombreProductoSeleccionado = document.getElementById('nombre-producto-seleccionado');

// Crear elemento de sugerencias del buscador
const sugerencias = document.createElement('div');
sugerencias.id = 'sugerencias-buscador';
buscador.parentNode.insertBefore(sugerencias, buscador.nextSibling);

// Crear botón X para limpiar el buscador
const limpiarBuscador = document.createElement('span');
limpiarBuscador.textContent = '✕';
limpiarBuscador.className = 'limpiar-buscador';
limpiarBuscador.setAttribute('aria-label', 'Limpiar');

// Contenedor para el input y la X
const buscadorWrapper = document.createElement('div');
buscadorWrapper.className = 'buscador-wrapper';
buscador.parentNode.insertBefore(buscadorWrapper, buscador);
buscadorWrapper.appendChild(buscador);
buscadorWrapper.appendChild(limpiarBuscador);

buscador.style.paddingRight = '32px';

// Obtener referencia al contenedor de grupos
const contenedorGrupos = document.getElementById('contenedor-grupos');

let grupoSeleccionado = null;

function renderBotonesGrupos() {
    contenedorGrupos.innerHTML = '';
    grupos.forEach(grupo => {
        const btn = document.createElement('button');
        btn.textContent = grupo;
        btn.className = `btn-grupo ${grupoSeleccionado === grupo ? 'activo' : ''}`;
        btn.addEventListener('click', () => {
            grupoSeleccionado = grupo;
            renderBotonesGrupos();
            mostrarProductos(productos.filter(p => p.grupo === grupo));
        });
        contenedorGrupos.appendChild(btn);
    });
}

// 1. FUNCIÓN PARA DIBUJAR LA LISTA
function mostrarProductos(lista) {
    listaProductos.innerHTML = '';
    if (lista.length === 0) {
        listaProductos.innerHTML = '<div style="padding:10px;">No hay productos en este grupo.</div>';
    } else {
        lista.forEach(producto => {
            const item = document.createElement('a');
            item.href = "#";
            item.textContent = producto.nombre;
            item.classList.add('item-producto');
            item.addEventListener('click', (e) => {
                e.preventDefault();
                seleccionarProducto(producto, item);
            });
            listaProductos.appendChild(item);
        });
    }
    
    if (!grupoSeleccionado && lista.length === productos.length) {
        listaProductos.innerHTML = '<div class="mensaje-estado"><span>Lista de Productos</span><span class="mensaje-estado-subtitulo">Seleccioná un grupo</span></div>';
    }
    
    nombreProductoSeleccionado.textContent = 'Seleccioná un producto';
    imagenProducto.style.display = 'none';
}

// 2. FUNCIÓN PARA EL BUSCADOR
buscador.addEventListener('input', (e) => {
    const terminoBusqueda = e.target.value.toLowerCase();
    limpiarBuscador.style.display = buscador.value.length > 0 ? 'block' : 'none';

    if (terminoBusqueda) {
        grupoSeleccionado = null;
        renderBotonesGrupos();
    }

    const resultados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(terminoBusqueda)
    );

    mostrarProductos(resultados);
    
    // Sugerencias si hay al menos 3 letras
    if (terminoBusqueda.length >= 3) {
        const sugeridos = productos.filter(producto =>
            producto.nombre.toLowerCase().includes(terminoBusqueda)
        ).map(p => p.nombre).slice(0, 10);
        
        sugerencias.innerHTML = '';
        sugeridos.forEach(nombre => {
            const opcion = document.createElement('div');
            opcion.textContent = nombre;
            opcion.addEventListener('mousedown', () => {
                buscador.value = nombre;
                sugerencias.style.display = 'none';
                mostrarProductos(productos.filter(p => p.nombre === nombre));
            });
            sugerencias.appendChild(opcion);
        });
        sugerencias.style.display = sugeridos.length ? 'block' : 'none';
        
        // Posiciona el cuadro debajo del input
        const rect = buscador.getBoundingClientRect();
        sugerencias.style.left = rect.left + 'px';
        sugerencias.style.top = rect.bottom + window.scrollY + 'px';
        sugerencias.style.width = rect.width + 'px';
    } else {
        sugerencias.style.display = 'none';
    }
});

limpiarBuscador.addEventListener('mousedown', (e) => {
    e.preventDefault();
    buscador.value = '';
    limpiarBuscador.style.display = 'none';
    sugerencias.style.display = 'none';
    grupoSeleccionado = null;
    renderBotonesGrupos();
    mostrarProductos(productos);
});

document.addEventListener('click', (e) => {
    if (e.target !== buscador) {
        sugerencias.style.display = 'none';
    }
});

// 3. FUNCIÓN PARA MOSTRAR LA IMAGEN AL SELECCIONAR
function seleccionarProducto(producto, elemento) {
    nombreProductoSeleccionado.textContent = producto.nombre;
    const mensajeSinImagen = document.getElementById('mensaje-sin-imagen');
    
    // Verificar si el producto tiene imagen placeholder
    if (producto.imagen_url === 'placeholder.jpg') {
        imagenProducto.style.display = 'none';
        mensajeSinImagen.style.display = 'block';
    } else {
        imagenProducto.src = `imagenes/${producto.imagen_url}`;
        imagenProducto.alt = `Imagen de ${producto.nombre}`;
        imagenProducto.style.display = 'block';
        mensajeSinImagen.style.display = 'none';
        
        // Manejar error de carga de imagen
        imagenProducto.onerror = function() {
            imagenProducto.style.display = 'none';
            mensajeSinImagen.style.display = 'block';
            this.onerror = null; // Evitar loop infinito
        };
    }

    // Desmarcar el producto previamente seleccionado
    document.querySelectorAll('.item-producto.seleccionado').forEach(el => el.classList.remove('seleccionado'));

    // Marcar el nuevo producto seleccionado
    if (elemento) elemento.classList.add('seleccionado');
}

// Zoom interactivo con movimiento de imagen
imagenProducto.addEventListener('mousemove', function(e) {
    if (this.style.display === 'none') return;
    
    const rect = this.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    this.style.transformOrigin = `${x}% ${y}%`;
});

imagenProducto.addEventListener('mouseleave', function() {
    this.style.transformOrigin = 'center center';
});

// Inicialización: mostrar botones de grupos y productos
renderBotonesGrupos();
mostrarProductos(productos);
