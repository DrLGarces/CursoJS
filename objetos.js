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

//Otra forma de llamar atributos de objetos
//Se hace referencia al nombre del atributo como si se tratase del índice de un arreglo
console.log(persona['nombre']);

//Para recorrer este tipo de Arreglo se usa el ciclo for in 
let iteración = 0;
for (Dato in persona) {
    //la variable Dato tendrá el valor de cada atributo en cada ciclo
    console.log(`El valor: ${Dato} es la iteración ${iteración}`);
    iteración++;    
}
