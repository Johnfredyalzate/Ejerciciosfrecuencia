//CREA LA FUNCION DE REGISTRO

document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formularioRegistro');
    const mensajeError = document.getElementById('mensajeError');
    const salidaDatos = document.getElementById('salidaDatos');


    //escuchar el evento



    formulario.addEventListener("submit", (e) => {
        e.preventDefault();//funcion para no recargar la pagina. eventos pasivos
        // mensaje.textContent = ""//llena el parrafo con ""
        // salida.style.display = "none"//Salida no muestra el div



        formulario.addEventListener('submit', function (e) {
            e.preventDefault(); // Evita que se recargue la página

            // Capturar los datos
            const usuario = formulario.usuario.value.trim();
            const clave = formulario.clave.value.trim();

            console.log(usuario)

            alert("Bienvenido " + usuario + " tu cuenta fue creada!")


            if (clave.length < 8) {

                alert(nombre + " Su contraseña es Muy corta Intenta otra vez:");

            } else {

                alert("Bienvenido " + usuario + " tu cuenta fue creada!")

            }

            salida.textContent = `${usuario} Su Ingreso ha sido Exitoso`
            salida.style.display = "block"
            alert("ingrso exitoso");
        });
    });
});
