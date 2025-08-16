//validar y contar cuales numeros son pares


let contador=0;
for (let i = 1; i <= 100; i++) {
    if ((i % 2 == 0)) {

        console.log("El numero: " + i + " Es par")
        let contador=contador+1;

    } else {
        console.log("el numero: " + i + " Es Impar")

    }

}
console.log("el numero de pares que se encontro son "+ contador);