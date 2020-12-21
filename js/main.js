
function validarNombre(nombre) {
    if (nombre.length === 0) {
        return "Este campo debe tener al menos un caracter";
    }
    if (nombre.length >= 50){
        return "Este campo debe tener menos de 50 caracteres";
    }

    if (!/^[a-z]+$/i.test(nombre)) {
        return "El campo nombre solo acepta letras";
    }
 
    return "";
}



function validarCiudad(ciudad) {
    if (ciudad.length === 0) {
        return "El campo ciudad no puede estar vacío";
    } 
    return "";
}

function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo.length >= 100){
        return "El campo descripción es demasiado largo";
    } if (descripcionRegalo.length === 0 ){
        return "El campo descripción no puede estar vacío";
    } else if (!/^[a-z0-9]+$/i.test(descripcionRegalo)) {
        return "El campo descripción solo puede tener letras o números";
    } else {
        return ""
    } 
}

function validarFormulario(event) {
    
    const $form = document.querySelector("#carta-a-santa");
    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const comportamiento = $form.comportamiento.value;
    const descripcionRegalo = $form["descripcion-regalo"].value;

    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);
    

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        "descripcion-regalo": errorDescripcionRegalo
    };
    
    const arrayErrores = document.querySelectorAll(".errores li")
    arrayErrores.forEach(function(key) {
        key.remove();
    })

    const esExito = manejarErrores(errores) === 0

    if (esExito) {
        $form.className = "oculto";
        document.querySelector("#exito").className = ""
      
        setTimeout(function(){location.href="wishlist.html"}, 5000); 
        
    }

    
    event.preventDefault();
}

      

function manejarErrores(errores) {

    const keys = Object.keys(errores);
    const $errores = document.querySelector("#errores");
    let cantidadErrores = 0;

    keys.forEach(function(key){
        const error = errores[key];
        
        if (error) {
            cantidadErrores ++;    
            $form[key].className = "error";
            const $error = document.createElement("li");
            $error.innerText = error;

            $errores.appendChild($error)

            
        
        } else {
            $form[key].className = ""
        }
       
        
    });
    
    return cantidadErrores

   
}    
const $form = document.querySelector("#carta-a-santa");
$form.onsubmit = validarFormulario;





    /*    errorNombre = errores.nombre;
    errorCiudad = errores.ciudad;
    errorDescripcionRegalo = errores.descripcionRegalo;

    if (errorNombre) {
        $form.nombre.className = "error";
    } else {
        $form.nombre.className = "";    
    }

    if (errorCiudad) {
        $form.ciudad.className = "error"; 
    } else {
        $form.ciudad.className = "";
    }
    if (errorDescripcionRegalo){
        $form["descripcion-regalo"].className = "error"; 
    } else {
        $form["descripcion-regalo"].className = "";
    }*/ //ESTA ES LA FORMA ESTÁTICA DE MANEJAR LOS ERRORES




