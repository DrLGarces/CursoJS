function Estudiante(nombre, apellido, cedula, seccion){
    this.nombre = nombre;
    this.apellido = apellido;
    this.cedula = cedula;
    this.seccion = seccion;

    this.datosEstudiante = function(){
        return `Datos de estudiante -> Nombre: ${this.nombre}, Apellido: ${this.apellido}, Cedula: ${this.cedula} y sección: ${this.seccion}`;
    }
}
//la propiedad prototype perminte añadir nuevas propiedades a un objeto y asignar un valor por defecto.
Estudiante.prototype.nacionalidad = "Venezolano/a"; 


let estudiante1 = new Estudiante("Leidys","Gutierrez",29778183,"5B");
console.log(estudiante1.datosEstudiante());
console.log(`Estudiante ${estudiante1.nombre} ${estudiante1.apellido} es de nacionalidad ${estudiante1.nacionalidad}`);

let estudiante2 = new Estudiante("Luis Garcés","Novio de Leidys",28566120,"5B");
console.log(estudiante2.datosEstudiante());
estudiante2.nacionalidad = "Colombiano/a";
console.log(`Estudiante ${estudiante2.nombre} ${estudiante2.apellido} es de nacionalidad ${estudiante2.nacionalidad}`);