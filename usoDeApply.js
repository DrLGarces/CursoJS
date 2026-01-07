let usuario = {
    nombre : "Maria",
    apellido : "Rodriguez",
    NombreCompleto: function(cedula, edad){
        return cedula + ": " + this.nombre+" "+this.apellido + " tiene " + edad + " años de edad";
    }
}

let persona ={
    nombre :"Juan",
    apellido: "Camacho",
}



//El metodo nombreCompleto pertenece a el objeto usuario
console.log(usuario.NombreCompleto(3456451, 25));

//para usar Apply y acceder al metodo del objeto usuario para usarlo con el objeto persona se hace de la siguiente manera
//si la función recibe parámetros se le pasa como argumento un array de la siguiente manera ->
let arreglo = [28566120,24];
console.log(usuario.NombreCompleto.apply( persona, arreglo));