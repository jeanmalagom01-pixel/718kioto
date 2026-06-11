let carrito = [];
let total = 0;

function agregarProducto(nombre, precio){

    carrito.push({
        nombre,
        precio
    });

    total += precio;

    actualizarCarrito();
}

function actualizarCarrito(){

    const lista =
        document.getElementById("lista-carrito");

    lista.innerHTML = "";

    carrito.forEach(item => {

        const li =
            document.createElement("li");

        li.textContent =
            item.nombre +
            " - $" +
            item.precio.toLocaleString();

        lista.appendChild(li);
    });

    document.getElementById("total")
        .innerText =
        total.toLocaleString();
}

function enviarWhatsapp(){

    let mensaje =
        "Hola, quiero realizar el siguiente pedido:%0A%0A";

    carrito.forEach(item => {

        mensaje +=
            "- " +
            item.nombre +
            " ($" +
            item.precio +
            ")%0A";
    });

    mensaje +=
        "%0ATotal: $" +
        total;

    window.open(
        "https://wa.me/573001112233?text=" +
        mensaje
    );
}
