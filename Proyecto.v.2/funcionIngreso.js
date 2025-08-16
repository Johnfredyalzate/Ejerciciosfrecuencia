//CREA LA FUNCION DE REGISTRO

function ingresoUnico(nombre, clave) {
    return (nombre, clave)
}
console.log("friififi" + nombre2)
//crear las variables necesarias para el   DOM
const formulario = document.getElementById("formularioRegistro")
const mensaje = document.getElementById("mensajeError")
const salida = document.getElementById("salidaDatos")

console.log("forofofoi")
//escuchar el evento
formulario.addEventListener("submit", (e) => {
    e.preventDefault();//funcion para no recargar la pagina. eventos pasivos
    mensaje.textContent = ""//llena el parrafo con ""
    salida.style.display = "none"//Salida no muestra el div


    console.log("farafafa")

    //recibir la información de los input
    const nombre2 = (formulario.nombre.value)
    const clave2 = (formulario.clave.value)

    console.log(nombre2)

    let registro = ingresoUnico(nombre2, clave2)



    console.log("ferefefei")
    if (usuario == nombre && contrasena == clave) {
        alert("Bienvenido " + us + " ingreso exitoso")

    } else {
        alert(nombre + " Usuario o contraseña incorrecto")
    }

    console.log("furufufu")


})



