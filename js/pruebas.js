function probarValidarNombre() {
    console.assert(
      validarNombre("") === "Este campo debe tener al menos un caracter",
      'Validar nombre no validó que el nombre no sea vacío'
  );

     console.assert(
      validarNombre(
        '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111'
        ) === 'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres'
  );

    console.assert(
     validarNombre("5321353") === "El campo nombre solo acepta letras",
        "ValidarNombre no validó que el nombre sea solo letras"
   );
    
};

function probarValidarCiudad(){
    console.assert(
    validarCiudad("Buenos Aires") === "",
    "Validar ciudad no funcionó con un nombre de ciudad válido"
    );
    
    console.assert(
        validarCiudad("") === "El campo ciudad no puede estar vacío",
        "ValidarCiudad no mostró un error cuando la ciudad es vacía"
    )
}

function probarValidarDescripcionRegalo(){
    console.assert(
      validarDescripcionRegalo("") === "El campo descripción no puede estar vacío",
      "validarDescripcionRegalo no validó que que el campo no sea vacío"
    );
    
    console.assert(
      validarDescripcionRegalo("111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111") === "El campo descripción es demasiado largo",
      "validarDescripcionRegalo no validó que el campo no sea mayor a 100 caracteres"
    );

    console.assert(
      validarDescripcionRegalo("Regalo") === "",
      "La función validar regalo no funcionó con una descripción correcta"
    );

    console.assert(
      validarDescripcionRegalo(".,..,,.") === "El campo descripción solo puede tener letras o números",
      "La función validar regalo no validó que el campo tenga solo letras o números"
    );
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();