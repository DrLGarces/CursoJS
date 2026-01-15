class Empleado{
    #sueldo;
    constructor(nombre, id, sueldo){
        this._nombre = nombre;
        this._id = id;
        this.#sueldo = sueldo;
    }
    obtenerDetalles(){
        return `ID: ${this._id} Nombre: ${this._nombre},`;
    }
    toString(){
        return this.obtenerDetalles();
    }
}
class Programador extends Empleado{
    constructor(nombre, id, sueldo, lenguaje){
        super(nombre, id, sueldo);
        this._lenguaje = lenguaje;
    }
    obtenerDetalles(){
        return super.obtenerDetalles() + ` Lenguaje:${this._lenguaje}`;
    }
    toString(){
        return (`Programador: ${this._nombre}`);
    }
}
class Gerente extends Empleado{
    constructor(nombre, id, sueldo, departamento){
        super(nombre, id, sueldo);
        this._departamento = departamento;
    }
    obtenerDetalles(){
        return super.obtenerDetalles() + ` Departamento:${this._departamento}`;
    }
}

function imprimirDetallesEmpleado(obj){
    console.log(obj.obtenerDetalles());
}

//PRUEBASSS
let dev = new Programador("Luis", 24, 1000, "JS");
let ger = new Gerente("Leidys", 23, 1200, "Tecnologia");

let listaEmpleados = [dev, ger];

for(empleado of listaEmpleados){
    imprimirDetallesEmpleado(empleado);
}
