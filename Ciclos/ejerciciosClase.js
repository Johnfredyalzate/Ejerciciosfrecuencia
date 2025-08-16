/*
//1. validar y contar cuales numeros son pares


        let contador = 0;
        for (let i = 1; i <= 100; i++) {
            if ((i % 2 == 0)) {

                console.log("El numero: " + i + " Es par")
                contador = contador + 1;

            } else {
                console.log("El numero: " + i + " Es Impar")

            }

        }
        console.log("el numero de pares que se encontro son " + contador);


//2.Tabla de multiplicar del 7 del 1 al 10
        let mult = 0;
        for (let i = 1; i <= 10; i++) {

            mult = 7 * i;
            console.log("Siete X " + i + " Es igual a: " + mult);
        }

*/

//5. Factorial de un numero. factorial de numero positivo ingresado por el usuairo
let fact = 1;
let num = parseInt(prompt("Ingrese el número del que quiere saber el factorial"));


for (let i = 1; i <= num; i++) {

    fact = fact * i;


}
console.log("El numero factorial de  " + num + " es: " + fact);
/*

//3. Crea un programa que pida al usuario una palabra y cuente cuantas vocales tiene.
let palabra = prompt("Digite una palabra");

 let contador = 0;
for (let i = 0; i < palabra.length; i++) {
   

    let letra = palabra[i];

    if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u")


        contador = contador + 1;

}
console.log("El total de vocales encontradas en la palabra son:  " + contador)


//4. Diseña un programa un program que imprima un triangulo de * donde el numero de filas lo inique el usuairo.

let filas = parseInt(prompt("Ingrese el número de filas:"));

for (let i = 1; i <= filas; i++) {
    let linea = "";
    for (let j = 1; j <= i; j++) {
        linea += "*";
    }
    console.log(linea);
}
*/