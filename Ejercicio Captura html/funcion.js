//crear la funcion promedio

function calcularPromedio(not1, not2, not3) {
    return ((not1 + not2 + not3) / 3)
}

//crear las variables necesarias para el   DOM
const formulario = document.getElementById("formularioCalculadora")
const mensaje = document.getElementById("mensajeError")
const salida = document.getElementById("salidaDatos")

//escuchar el evento
formulario.addEventListener("submit", (e) => {
    e.preventDefault()//funcion para no recargar la pagina. eventos pasivos
    mensaje.textContent = ""//llena el parrafo con ""
    salida.style.display = "none"//Salida no muestra el div
    //recibir la información de los input
    const nota1 = parseFloat(formulario.not1.value)
    const nota2 = parseFloat(formulario.not2.value)
    const nota3 = parseFloat(formulario.not3.value)

    let resultado = calcularPromedio(nota1, nota2, nota3)
    console.log(resultado)
    let aprobacion

    if (resultado >= 3) {
        aprobacion = true
    } else {
        aprobacion = false
    }
    salida.textContent = `promedio:${resultado.toFixed(2)}- ${aprobacion ? "Aprobado👌 " : "Reprobado😢"}`
    salida.style = "block"


})
//dar una salida a los datos