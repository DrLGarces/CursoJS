let persona = {
    nombre : "Luis",
    apellido : "Garcés",
    correo : "garcesramirezluismiguel@gmail.com",
    cedula : 28566120,

    nombreCompleto : function(){
        return "Nombre de la persona: "+this.nombre +" "+ this.apellido;
    }
}

console.log(persona.nombre);
console.log(persona.cedula);

console.log(persona.nombreCompleto());