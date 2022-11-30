alert("Bienvenid@s al restaurant de la Ciudad");
    let nombreUsuario = prompt("Ingrese su nombre");
    while(nombreUsuario === ""){
        nombreUsuario = prompt("Ingrese su nombre")
    }

function solicitarNombre() {
    alert("Bienvenido " + nombreUsuario + ". Gracias por visitarnos.")
}

function elegirComida() {
    let comida;
    do {
       comida = parseInt(prompt("Elija el menú que desea comer.\n\n A continuacion, seleccione el numero que desea ordenar.\n\n1- Hamburguesa\n2- Ravioles\n3- Pizza"));
    } while (comida !=1 && comida !=2 && comida !=3);
    switch(comida){
        case 1:
            return "Hamburguesa";
        case 2:
            return "Ravioles";
        case 3:
            return "Pizza";
    }
}

function elegirBebida() {
    let bebida;
    do {
        bebida = parseInt(prompt("Por favor, elija su bebida.\n\nSeleccione el numero que desea ordenar.\n\n1- Agua \n2- Gaseosa \n3- Cerveza"));
    } while (bebida !=1 && bebida !=2 && bebida !=3);
    switch(bebida){
        case 1:
            return "Agua";
        case 2:
            return "Gaseosa";
        case 3:
            return "Cerveza";
    }
}


function validarPrecio (comida, bebida) {

    

        if (comida === "Hamburguesa" && bebida === "Gaseosa") {
                    return 1000;
        } else if (comida === "Hamburguesa" && bebida === "Agua") {
                    return 950;
        } else if (comida === "Hamburguesa" && bebida === "Cerveza") {
                    return 1200;
    
        
        } else if (comida === "Ravioles" && bebida === "Gaseosa") {
            return 1250;
        } else if (comida === "Ravioles" && bebida === "Agua") {
            return 1050;
        } else if (comida === "Ravioles" && bebida === "Cerveza") {
            return 1250;
    
    
        } else if (comida === "Pizza" && bebida === "Gaseosa") {
            return 1300;
        } else if (comida === "Pizza" && bebida === "Agua") {
            return 1200;
        } else if (comida === "pizza" && bebida === "Cerveza") {
            return 1350;
        } 
    }

function presupuesto (comida, bebida, precio){
    alert("El precio de " + comida + " acompañada de " + bebida + "\nes de $" + precio)
}

function cobrar (nombre, precio){
    let pago;
    do {
        pago = parseInt(prompt("Con cuanto desea abonar?. El precio final del menú " + nombre + " es de $" + precio));
        while (isNaN(pago)) {
            alert("Ingrese un valor númerico");
            pago = parseInt(prompt("Con cuanto desea abonar?. El precio final del menú " + nombre + " es de $" + precio));
        }
    } while (pago < precio);
    alert("Gracias!, " + nombreUsuario + ". Su compra se realizo con exito: " + nombre + ". Su vuelto es de $" + (pago - precio))
}

function saludoFinal (){
    alert("Gracias por elegirnos, lo esperamos pronto nuevamente! ");{
    }
}

solicitarNombre();
let comidaElegida = elegirComida();
let bebidaElegida = elegirBebida();
let precioProducto = validarPrecio(comidaElegida, bebidaElegida);
presupuesto(comidaElegida, bebidaElegida, precioProducto);
cobrar(comidaElegida, precioProducto);
saludoFinal();
