// Base de datos de productos actualizada para CÉRANCOIER
const productos = {
    bebidas: [
        // CERVEZAS NACIONALES
        {
            nombre: "Cerveza Cristal Botella",
            descripcion: "Cerveza cubana refrescante en botella",
            precio: "$320",
            imagen: "Resources/Cerveza Cristal de Botella.jpg",
            categoria: "cerveza",
            destacado: true
        },
        {
            nombre: "Cerveza Cristal Lata",
            descripcion: "Cerveza cubana refrescante en lata",
            precio: "$300",
            imagen: "Resources/Cristal.webp",
            categoria: "cerveza"
        },
        {
            nombre: "Cerveza Cristal Extra Lata",
            descripcion: "Cerveza cubana premium",
            precio: "$300",
            imagen: "Resources/CristalExtra.jpeg",
            categoria: "cerveza"
        },
         {
            nombre: "Cerveza Cristal Extra Botella",
            descripcion: "Cerveza cubana premium",
            precio: "$300",
            imagen: "Resources/CristalExtraBotella.webp",
            categoria: "cerveza"
        },
        {
            nombre: "Cerveza Muralla",
            descripcion: "Cerveza artesanal cubana",
            precio: "$230",
            imagen: "Resources/Cerveza La Muralla.jpeg",
            categoria: "cerveza"
        },
        {
            nombre: "Cerveza Bucanero Max",
            descripcion: "Cerveza cubana de alta graduación",
            precio: "$300",
            imagen: "Resources/BucaneroMax.jpeg",
            categoria: "cerveza"
        },
       {
            nombre: "Cerveza Bucanero Botella",
            descripcion: "Cerveza cubana de alta graduación",
            precio: "$300",
            imagen: "Resources/BucaneroBotella.webp",
            categoria: "cerveza"
        },
       
        {
            nombre: "Cerveza Parranda",
            descripcion: "Cerveza cubana con espíritu festivo",
            precio: "$230",
            imagen: "Resources/Parranda.jpeg",
            categoria: "cerveza"
        },

        // CERVEZAS IMPORTADAS
        {
            nombre: "Cerveza Heineken",
            descripcion: "Cerveza holandesa premium",
            precio: "$400",
            imagen: "Resources/Cerveza Haineken.jpeg",
            categoria: "cerveza",
            destacado: true
        },
        {
            nombre: "Cerveza Hollandia",
            descripcion: "Cerveza holandesa tradicional",
            precio: "$230",
            imagen: "Resources/Hollandia.jpeg",
            categoria: "cerveza"
        },
        {
            nombre: "Cerveza Breda",
            descripcion: "Cerveza importada refrescante",
            precio: "$230",
            imagen: "Resources/Breda.webp",
            categoria: "cerveza"
        },
        {
            nombre: "Cerveza Beck's",
            descripcion: "Cerveza alemana de calidad",
            precio: "$230",
            imagen: "Resources/Cerveza Becks.jpeg",
            categoria: "cerveza"
        },
        {
            nombre: "Cerveza Unlager",
            descripcion: "Cerveza importada especial",
            precio: "$230",
            imagen: "Resources/Unlager.jpeg",
            categoria: "cerveza"
        },

        // BEBIDAS ESPIRITUOSAS
        {
            nombre: "Ron Chanceler",
            descripcion: "Ron cubano de alta calidad",
            precio: "$1300",
            imagen: "Resources/Chanceler.webp",
            categoria: "licor",
            destacado: true
        },
        {
            nombre: "Ron Fire One",
            descripcion: "Ron premium importado",
            precio: "$1400",
            imagen: "Resources/Fire One.jpeg",
            categoria: "licor",
            destacado: true
        },

        {
            nombre: "Planchao SilverDry",
            descripcion: "Bebida cubana refrescante",
            precio: "$360",
            imagen: "Resources/SilverDry.webp",
            categoria: "mezclado"
        },
        
        // REFRESCOS Y JUGOS
        {
            nombre: "Refresco",
            descripcion: "Variedad de refrescos",
            precio: "$220",
            imagen:"Resources/refrescos.webp",
            categoria: "refresco"
        },
        {
            nombre: "Refresco Pepsi",
            descripcion: "Refresco de cola",
            precio: "$280",
            imagen: "Resources/Pepsi.webp",
            categoria: "refresco"
        },
        {
            nombre: "Refresco de Pomo",
            descripcion: "Refresco en presentación pomo",
            precio: "$650",
            imagen: "Resources/RefrescosPomo.webp",
            categoria: "refresco"
        },
        {
            nombre: "Refresco Mate",
            descripcion: "Bebida de mate refrescante",
            precio: "$250",
            imagen: "Resources/MateLata.webp",
            categoria: "refresco"
        },
        {
            nombre: "Jugo de Lata",
            descripcion: "Jugos naturales en lata",
            precio: "$300",
            imagen: "Resources/JugosLata.webp",
            categoria: "jugo"
        },
        {
            nombre: "Cajitas de Jugo",
            descripcion: "Jugos en cajita individual",
            precio: "$180",
            imagen: "Resources/Cajas Jugo.webp",
            categoria: "jugo"
        },

        // AGUAS
        {
            nombre: "Pomos de Agua Grande",
            descripcion: "Agua purificada en pomo grande",
            precio: "$250",
            imagen: "Resources/AguaG.webp",
            categoria: "agua"
        },
        {
            nombre: "Pomos de Agua Pequeños",
            descripcion: "Agua purificada en pomo pequeño",
            precio: "$160",
            imagen: "Resources/AguaP.webp",
            categoria: "agua"
        },

        // MALTA Y BEBIDAS ENERGÉTICAS
       
        {
            nombre: "Malta Bucanero",
            descripcion: "Malta con sabor intenso",
            precio: "$300",
            imagen: "Resources/Malta Bucanero.jpeg",
            categoria: "malta"
        },
        {
            nombre: "Malta Belga",
            descripcion: "Malta de estilo belga",
            precio: "$250",
            imagen: "Resources/MaltaBelga.webp",
            categoria: "malta"
        },
        {
            nombre: "Malta Perla Negra",
            descripcion: "Malta premium especial",
            precio: "$280",
            imagen: "Resources/Malta Perla Negra.jpeg",
            categoria: "malta"
        },
        {
            nombre: "Energético Evolution",
            descripcion: "Bebida energética revitalizante",
            precio: "$300",
            imagen: "Resources/Evolution.webp",
            categoria: "energetico"
        },
        {
            nombre: "Tigón",
            descripcion: "Bebida energética nacional",
            precio: "$320",
            imagen: "Resources/Tigon.jpeg",
            categoria: "energetico"
        }
    ],

    picaderas: [
        {
            nombre: "Pan con Lechón",
            descripcion: "Delicioso pan relleno de lechón asado jugoso",
            precio: "$450",
            imagen: "Resources/Lechon.webp",
            destacado: true
        },
        {
            nombre: "Brochetas",
            descripcion: "Brochetas de carne y vegetales a la parrilla",
            precio: "$700",
            imagen: "Resources/brochetas.webp",
            destacado: true
        },
        {
            nombre: "Posta de Pollo",
            descripcion: "Posta de pollo asada con especias",
            precio: "$600",
            imagen: "Resources/PostaPollo.webp",
            destacado: true
        },
        {
            nombre: "Papas Fritas",
            descripcion: "Papas fritas crujientes con especias secretas",
            precio: "$500",
            imagen: "Resources/Papas.webp"
        },
        {
            nombre: "Croquetas",
            descripcion: "Croquetas importadas con un sabor especial (8 unidades)",
            precio: "$700",
            imagen:"Resources/croquetas.webp"
        }
    ]
};

// Función para crear una tarjeta de producto
function crearTarjetaProducto(producto) {
    const destacadoClass = producto.destacado ? 'destacado' : '';
    
    return `
        <div class="product-card ${destacadoClass}">
            <div class="product-image">
                <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy">
                <div class="image-overlay"></div>
            </div>
            <div class="product-info">
                <h3>${producto.nombre}</h3>
                <p class="description">${producto.descripcion}</p>
                <p class="price">${producto.precio}</p>
            </div>
        </div>
    `;
}

// Función para cargar productos en una sección
function cargarProductos(seccion, productosArray) {
    const grid = document.getElementById(`${seccion}-grid`);
    if (grid) {
        grid.innerHTML = productosArray.map(crearTarjetaProducto).join('');
        console.log(`Cargados ${productosArray.length} productos en ${seccion}`);
    }
}

// Función para inicializar la página
function inicializarPagina() {
    console.log("Inicializando página CÉRANCOIER");
    
    // Cargar productos
    cargarProductos('bebidas', productos.bebidas);
    cargarProductos('picaderas', productos.picaderas);

    // Configurar navegación
    const navButtons = document.querySelectorAll('.nav-btn');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-section');
            
            // Actualizar botones activos
            navButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Mostrar/ocultar secciones
            document.querySelectorAll('.menu-section').forEach(section => {
                section.classList.remove('active');
            });
            document.getElementById(targetSection).classList.add('active');
        });
    });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', inicializarPagina);

// FUNCIONES PARA GESTIÓN DE PRODUCTOS
function agregarProducto(seccion, nuevoProducto) {
    productos[seccion].push(nuevoProducto);
    cargarProductos(seccion, productos[seccion]);
}

function eliminarProducto(seccion, nombreProducto) {
    productos[seccion] = productos[seccion].filter(
        producto => producto.nombre !== nombreProducto
    );
    cargarProductos(seccion, productos[seccion]);
}

function actualizarPrecio(seccion, nombreProducto, nuevoPrecio) {
    const producto = productos[seccion].find(p => p.nombre === nombreProducto);
    if (producto) {
        producto.precio = nuevoPrecio;
        cargarProductos(seccion, productos[seccion]);
    }
}