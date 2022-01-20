
class Moneda{
    constructor(nombre, valor1, valor2) {
        this.nombre = nombre;
        this.valor1   = valor1;
        this.valor2 = valor2;
    }
}


                            //        arg,   ur
const moneda1 = new Moneda("Dolares", 208, 44.58);
                            //                  dol      ur
const moneda2 = new Moneda("Pesos Argentinos", 0.0096, 0.43 ); 
                            //                 dol    ar
const moneda3 = new Moneda("Pesos Uruguayos", 0.022,  2.34)

// array con objetos
const Monedas = [moneda1, moneda2, moneda3];
console.log(Monedas)


let cambio = 0; 
let resultado1;
let monedaDelUsuario;
let repeat;
let cantidad;

        alert("Bienvenido")

function solicitarDatos() {

    monedaDelUsuario = (prompt("Que moneda posee? (Dolares, Pesos Argentinos, Pesos Uruguayos"))

    cantidad = Number(prompt("Ingrese el monto a convertir"))

    cambio = (prompt("Ingrese a que desea convertirlo...(Dolares, Pesos Argentinos, Pesos Uruguayos"))
    
    
    verificar(cambio, cantidad,monedaDelUsuario); 
    
    }
    

    function verificar(cambio,cantidad,monedaDelUsuario) {
        if (monedaDelUsuario == "Pesos Arg"  && cambio == "Pesos Argentinos") {
            alert('Su transaccion es invalida, esta intentando cambiar Pesos Argentinos por Pesos Argentinos')
        } else if (monedaDelUsuario == "Pesos Argentinos"  && cambio == "Dolares") {
            resultado1 = cantidad * moneda2.valor1
            alert('Usted va a adquirir ' + resultado1 + ' Dolares')
        } else if (monedaDelUsuario == "Pesos Argentinos"  && cambio == "Pesos Uruguayos") {
            resultado1 = cantidad * moneda2.valor2
            alert('Usted va a adquirir ' + resultado1 + ' Pesos Uruguayos')
        } else if (monedaDelUsuario == "Dolares"  && cambio == "Pesos Argentinos") {
            resultado1 = cantidad * moneda1.valor1
            alert('Usted va a adquirir ' + resultado1 + ' Pesos Argentinos')
        } else if (monedaDelUsuario == "Dolares"  && cambio == "Dolares") {
            alert('Su transaccion es invalida, esta intentando cambiar Dolares por Dolares')
        } else if (monedaDelUsuario == "Dolares"  && cambio == "Pesos Uruguayos") {
            resultado1 = cantidad * moneda1.valor2
            alert('Usted va a adquirir ' + resultado1 + ' Pesos Uruguayos')
        } else if (monedaDelUsuario == "Pesos Uruguayos"  && cambio == "Pesos Uruguayos") {
            alert('Su transaccion es invalida, esta intentando cambiar Pesos Uruguayos por Pesos Uruguayos')
        } else if (monedaDelUsuario == "Pesos Uruguayos"  && cambio == "Pesos Argentinos") {
            resultado1 = cantidad * moneda3.valor2
            alert('Usted va a adquirir ' + resultado1 + ' Pesos Argentinos')
        } else if (monedaDelUsuario == "Pesos Uruguayos"  && cambio == "Dolares") {
            resultado1 = cantidad * moneda3.valor1
            alert('Usted va a adquirir ' + resultado1 + ' Dolares')
        } else if (monedaDelUsuario == "")  { 
            alert('Datos incorrectos, intente nuevamente')
        } else if (cambio == "")  { 
            alert('Datos incorrectos, intente nuevamente')
        }

        repeatConver() 
}


solicitarDatos()

function repeatConver() {
    let repeat = prompt("Desea repetir el proceso? (si / no)")
    if (repeat == "si") {
       return solicitarDatos()
    } else if (repeat == "no") {
       return alert("Gracias utilizar este servicio de conversion, nos vemos!")
    } else {
        return alert("Gracias utilizar este servicio de conversion, nos vemos!")
    }
    } 

