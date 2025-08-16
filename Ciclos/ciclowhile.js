
/*
//contraseña

let pass = prompt("Ingrese su contraseña: ");

while (pass.length < 8) {


    pass = prompt("Muy corta. Intenta otra vez:");

}
alert("Contraseña aceptada");
*/
// Ejercicio 5 Crea un programa que funcione como una calaculadora simple, que solicite dos numeros y la operacion a realizar (+,-,*,/) y que se repita hasta que el usuario decida salir


let cont = true;
let opera = 0;

while (cont == true) {

    let num1 = parseInt(prompt("Ingrese numero 1"))
    let num2 = parseInt(prompt("Ingrese numero 2"))
    let opera = prompt("ingrese la operación que quiere realizar: + - * /")

    if (opera == "+") {
        opera = num1 + num2;
        alert("El Resultado de la Suma entre: " + num1 + " Y " + num2 + " es:  " + opera);
    }
    if (opera == "-") {
        opera = num1 - num2;
        alert("El Resultado de la Resta entre: " + num1 + " Y " + num2 + " es:  " + opera);
    }

    if (opera == "*") {
        opera = num1 * num2;
        alert("El Resultado de la Multiplicación entre: " + num1 + " Y " + num2 + " es:  " + opera);
    }
    else {
        opera = num1 / num2;
        alert("El Resultado de la División entre: " + num1 + " Y " + num2 + " es:  " + opera);
    }



    let sig = prompt("desea continuar digite si o no");

    if (sig == "no") {
        cont = false;
    }

}

