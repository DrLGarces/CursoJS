class Empleado{
    #sueldo;
    static iterador = 0;
    static get MAX_OBJ(){
        return `Actualmente hay ${Empleado.iterador} y el máximo es de 5`;
    }
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this.#sueldo = sueldo;
        ++Empleado.iterador;
        if(Empleado.iterador > 5){
            console.log("Se han alcanzado el máximo de Empleados");
        }else{
            this._id = Empleado.iterador;
        }
        
    }
    obtenerDetalles(){
        return `ID: ${this._id} Nombre: ${this._nombre},`;
    }
    toString(){
        return this.obtenerDetalles();
    }
}
class Programador extends Empleado{
    constructor(nombre, sueldo, lenguaje){
        super(nombre, sueldo);
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
    constructor(nombre,sueldo, departamento){
        super(nombre, sueldo);
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
let dev = new Programador("Luis", 1000, "JS");
let ger = new Gerente("Leidys", 1200, "Tecnologia");

let listaEmpleados = [dev, ger];

for(empleado of listaEmpleados){
    imprimirDetallesEmpleado(empleado);
}
let emp = new Empleado("Juan",200);
let emp2 = new Empleado("Juan",200);
let emp3 = new Empleado("Juan",200);

console.log(Empleado.MAX_OBJ);
let emp4 = new Empleado("Pedro",200);
console.log(emp4.obtenerDetalles());
