let usuario = {
    nombre : "Maria",
    apellido : "Rodriguez",
    NombreCompleto: function(){
        return this.nombre+" "+this.apellido;
    }
}

let persona ={
    nombre :"Juan",
    apellido: "Camacho",
}



//El metodo nombreCompleto pertenece a el objeto usuario
console.log(usuario.NombreCompleto());

//para usar call y acceder al metodo del objeto usuario para usarlo con el objeto persona se hace de la siguiente manera

console.log(usuario.NombreCompleto.call(persona));