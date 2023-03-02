class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Pedido {
    constructor(direccion, formaDePago) {
        this.productos = [];
        this.direccion = direccion;
        this.formaDePago = formaDePago;
        this.estado = false;
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    calcularTotal() {
        let total = 0;
        for (let i = 0; i < this.productos.length; i++) {
            total += this.productos[i].precio;
        }
        return total;
    }

    mostrarResumen() {
        console.log("Productos: \n");

        for (let i = 0; i < this.productos.length; i++) {
            console.log(
                `- ${this.productos[i].nombre} - $${this.productos[i].precio}\n`
            );
        }

        console.log(`Total: $${this.calcularTotal()}\n`);

        console.log(`Dirección de envío: ${this.direccion}\n`);

        if (this.formaDePago == 1) {
            console.log("Forma de pago: Tarjeta de débito");
        } else if (this.formaDePago == 2) {
            console.log("Forma de pago: Tarjeta de crédito");
        } else if (this.formaDePago == 3) {
            console.log("Forma de pago: Efectivo");
        }

        if (verificacionPago === 1) {
            this.estado = true;
            console.log("Estado: Pagado");
        } else if (verificacionPago === 2) {
            this.estado = false;
            console.log("Estado: Pendiente de pago");
        }
    }
}

// Creación de un pedido

const direccionPedido = prompt("¿Cuál es tu dirección?");
let formaDePagoPedido = prompt(
    "¿Cómo abonás el pedido? \n 1 - Tarjeta de débito \n 2 - Tarjeta de crédito \n 3 - Efectivo"
);
while (formaDePagoPedido < 1 || formaDePagoPedido > 3) {
    alert("Error, elija una opción válida");
    formaDePagoPedido = prompt(
        "1 - Tarjeta de débito \n 2 - Tarjeta de crédito \n 3 - Efectivo"
    );
}
const pedido = new Pedido(direccionPedido, formaDePagoPedido);

// Agregar productos
let opcion = 0;
while (opcion !== 4) {
    alert(
        "Elige un producto:\n\n 1. Burrito - $2200 \n 2. Totopos - $1600 \n 3. Tacos - $1900 \n 4. Terminar pedido"
    );

    opcion = parseInt(prompt("Ingrese su opción:"));
    switch (opcion) {
        case 1:
            pedido.agregarProducto(new Producto("Burrito", 2200));
            break;
        case 2:
            pedido.agregarProducto(new Producto("Totopos", 1600));
            break;
        case 3:
            pedido.agregarProducto(new Producto("Tacos", 1900));
            break;
        case 4:
            break;
        default:
            alert("Opción inválida, intente de nuevo.");
            break;
    }
}

let verificacionPago = parseInt(
    prompt("¿Ya abonó su pedido? \n 1 - Si, pagué \n 2 - No, no pagué")
);

while (verificacionPago < 1 || verificacionPago > 2) {
    alert("Error, elija una opción válida");
    verificacionPago = parseInt(prompt("1 - Si, pagué \n 2 - No, no pagué"));
}

// Mostrar el resumen del pedido
pedido.mostrarResumen();
