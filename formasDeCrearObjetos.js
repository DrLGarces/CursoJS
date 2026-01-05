function Estudiante(nombre, apellido, cedula, seccion){
    this.nombre = nombre;
    this.apellido = apellido;
    this.cedula = cedula;
    this.seccion = seccion;

    this.datosEstudiante = function(){
        return `Datos de estudiante -> Nombre: ${this.nombre}, Apellido: ${this.apellido}, Cedula: ${this.cedula} y sección: ${this.seccion}`;
    }
}

let estudiante1 = new Estudiante("Leidys","Gutierrez",29778183,"5B");
console.log(estudiante1.datosEstudiante());

let estudiante2 = new Estudiante("Luis Garcés","Novio de Leidys",28566120,"5B");
console.log(estudiante2.datosEstudiante());