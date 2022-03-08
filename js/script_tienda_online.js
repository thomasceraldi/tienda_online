// INDEX

class DataNewsletter {
    constructor (nombre, email) {
        this.nombre = nombre;
        this.email = email;
    };
};

let newsletter = [];

$(() => {

    let formularioNewsletter = $(`#formularioNewsletter`);
    let mensajeNewsletter = $(`#mensajeFormularioNewsletter`);

    if (formularioNewsletter) {
        formularioNewsletter.submit((e) => {
            e.preventDefault();
            let datosNewsletterFormulario = new FormData(e.target);
            let datosNewsletter = new DataNewsletter(datosNewsletterFormulario.get("nombre"), datosNewsletterFormulario.get("email"));
            if ((datosNewsletterFormulario.get("nombre") !== "") && (datosNewsletterFormulario.get("email") !== "") && (datosNewsletterFormulario.get("nombre") !== " ") && (datosNewsletterFormulario.get("email") !== " ")) {
                newsletter.push(datosNewsletter);
                localStorage.setItem('newsletter', JSON.stringify(newsletter));
                formularioNewsletter.trigger('reset');
                if (mensajeNewsletter) {
                    mensajeNewsletter.append(`
                    <p>¡Gracias por inscribirte, te mantendremos al tanto de todas las novedades!</p>
                    `);
                    setTimeout(() => mensajeNewsletter.children("p").remove(), 2000);
                };
            } else if ((datosNewsletterFormulario.get("nombre") === "") || (datosNewsletterFormulario.get("email") === "") || (datosNewsletterFormulario.get("nombre") === " ") || (datosNewsletterFormulario.get("email") === " ")) {
                if (mensajeNewsletter) {
                    mensajeNewsletter.append(`
                    <p>Debes completar todas las casillas</p>
                    `);
                    setTimeout(() => mensajeNewsletter.children("p").remove(), 2000);
                };
            };
            
        });
    };

});

// TIENDA

class Producto {
    constructor (id, imagen, alt, nombre, detalle, precio) {
        this.id = id;
        this.imagen = imagen;
        this.alt = alt;
        this.nombre = nombre;
        this.detalle = detalle;
        this.precio = precio;
    };
};

const producto1 = new Producto (1, "buzo_rojo_levis_nintendo.jpg", "buzo marca levis, con logo de nintendo", "Buzo Levis Nintendo", "Rojo - Negro // S - M - L - XL", 9900);
const producto2 = new Producto (2, "campera_levis_mario_jean.jpg", "campera de jean marca levis, con tematica de mario bros", "Campera Jean Levis Mario Bros", "S - M", 13400);
const producto3 = new Producto (3, "campera_negra_levis_power_up.jpg", "campera marca levis, powerup", "Campera Levis PowerUp", "M - L - XL", 15800);
const producto4 = new Producto (4, "campera_negra_levis_star_wars.jpg", "campera marca levis, con tematica de star wars", "Campera Levis StarWars", "M", 21100);
const producto5 = new Producto (5, "campera_star_wars_jean_levis.jpg", "campera de jean marca levis, con tematica de star wars", "Campera Jean Levis StarWars", "S - M - L - XL", 23100);
const producto6 = new Producto (6, "cartera_jean_levis_mario_bros.jpg", "cartera de jean marca levis, con tematica de mario bros", "Cartera Jean Levis Mario Bros", "Edicion unica", 7600);
const producto7 = new Producto (7, "gorra_jean_levis_mario_bros.jpg", "gorra de jean marca levis, con tematica de mario bros", "Gorra Jean Levis Mario Bros", "Edicion unica", 4400);

let productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7];
let divProductos = $(`#productosTienda`);

$(() => {

    productos.forEach((producto) => {
        if(divProductos) {
            divProductos.append(`
                <div class="card" id="producto${producto.id}" style="width: 18rem;">
                    <img src="../img/fotos_productos/${producto.imagen}" class="card-img-top" alt="${producto.alt}">
                    <div class="card-body">
                        <h3 class="card-title">${producto.nombre}</h3>
                        <p class="card-text detalleProducto">${producto.detalle}</p>
                        <p class="card-text precioProducto">$ ${producto.precio}</p>
                        <button type="button" id="botonProducto${producto.id}" class="botonProducto btn btn-primary"><i class="bi bi-cart4"></i>Agregar al carrito</button>
                    </div>
                </div>
            `);
        };
    });

});