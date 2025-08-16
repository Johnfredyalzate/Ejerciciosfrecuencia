/*
Ejercicio 1. Ingresado 2 números, mostrar el
resultado de la suma, la
multiplicación, la resta y la división de
los dos números.


let numero1 = 45;
let numero2 = 5;
let suma;
let multiplicación;
let resta;
let div;


suma = numero1 + numero2;
resta = numero1 - numero2;
multiplicación = numero1 * numero2;
div = numero1 / numero2;

console.log("El resultado de la suma entre el numero: " + numero1 + " y " + " el numero: " + numero2 + " es: " + suma)
console.log("El resultado de la resta entre el numero: " + numero1 + " y " + " el numero: " + numero2 + " es: " + resta)
console.log("El resultado de la multiplicación entre el numero: " + numero1 + " y " + " el numero: " + numero2 + " es: " + multiplicación)
console.log("El resultado de la división entre el numero: " + numero1 + " y " + " el numero: " + numero2 + " es: " + div)



Ejercicio 2:  Ingresada la edad de una persona calcular el numero de días que ha vivido

let años = 40;

let calculo = 40 * 365;

console.log("Según la edad ingresada, que son " + años + " Años Usted ha vivido: " + calculo + " días")


Ejercicio 3: Ingresar el costo de una compra con 10 Productos, Aplicar un descuento del 20% y mostrar el valor a pagar.
*/
let compra1 = 1000;
let compra2 = 100000;
let compra3 = 8000;
let compra4 = 15200;
let compra5 = 3400;
let compra6 = 5500;
let compra7 = 30000;
let compra8 = 18600;
let compra9 = 20000;
let compra10 = 12100;

let subtotal;
subtotal = compra1 + compra2 + compra3 + compra4 + compra5 + compra6 + compra7 + compra8 + compra9 + compra10;
descuento = subtotal * 0.2;

let valorapagar;
valorapagar = subtotal - descuento;

console.log("El valor de la compra es:  " + subtotal + " El descuento aplicado del 20% fue: " + descuento + " El valor total a pagar es:  " + valorapagar)


//Ejercicio 4: ingreando dos numeros diferentes, decir cual es el valor resultante de cada valor elevado al cubo.


let valor1 = 80;
let valor2 = 20;


let cubo1 = valor1 * valor1 * valor1;
let cubo2 = valor2 * valor2 * valor2;


console.log("El valor del primer numero: " + valor1 + " Elevado al cubo es: " + cubo1)
console.log("El valor del segundo numero: " + valor2 + " Elevado al cubo es: " + cubo2)


// Ejercicio 5: Ingresada las edades de cada uno de los integrantes de una familia compuesta integrada por: Papá, Mamá y los tres hijos, mostrar la edad promedio de la familia


let papa = 60;
let mama = 58;
let hijo1 = 30;
let hijo2 = 25;
let hijo3 = 23;
let promedio = ((papa + mama + hijo1 + hijo2 + hijo3) / 5);

console.log("La edad promedio de la familia Perez es: " + promedio);

*/


//Ejercicio pagina 2 Condicionales.
//Ejercicio1

//el programa solicita un usuario y una contraseña, si el usuario es admin y la contraseña es 1234 el programa permite el acceso, de lo contrario lo deniega
/*

let usuario = "admin"
let contraseña = 1234
let i = "admin";
let j = 1234;

if (usuario == i & contraseña == j) {
    console.log("Acceso Concedido")
}
else {
    console.log("Acceso Denegado")
}


*/

/*
let usuario;
usuario = prompt("Ingrese el Usuario");

let contrasena;
contrasena = prompt("Ingrese la contraseña");

let i = "admin";
let j = 1234;

if (usuario == i & contrasena == j) {
    console.log("Acceso Concedido")
}
else {
    console.log("Acceso Denegado")
}

*/

