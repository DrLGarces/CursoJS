class Empleado{
<<<<<<< HEAD
    constructor(nombre, id, sueldoBase){
        this._nombre = nombre;
        this._id = id;
        this._sueldoBase = sueldoBase;
    }
    
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get id(){
        return this._id;
    }
    set id(id){
        this._id = id;
    }
    get sueldoBase(){
        return this._sueldoBase;
    }
    set sueldoBase(sueldoBase){
        this._sueldoBase = sueldoBase;
    }

    datosGenerales(){
        return `Empleado: ${this._nombre}, ID: ${this._id}`;
    }
    
    recibirSueldo(){
        return `Se han depositado ${this._sueldoBase} dólares`;
    }

    toString(){
        return this.datosGenerales();
    }
}

class Programador extends Empleado{
    constructor(nombre, id, sueldoBase, lenguaje){
        super(nombre,id,sueldoBase);
        this._lenguaje = lenguaje;
    }

    datosGenerales(){
        return super.datosGenerales()+", Lenguaje de programación: "+ this._lenguaje;
    }

    programar(){
        console.log(`${this._nombre} está codeando en ${this._lenguaje}`);
    }

}

class Gerente extends Empleado{
    constructor(nombre, id, sueldoBase, departamento){
        super(nombre,id,sueldoBase);
        this._departamento = departamento;
    }

    datosGenerales(){
        return super.datosGenerales() + ", Departamento: "+this._departamento;
    }    

    dirigir(){
        console.log(`${this._nombre} está supervisando el departamento de ${this._departamento}`);
    }
}

let Dev1 = new Programador("Luis", 18, 900, "Javascript");
let Ger1 = new Gerente("Leidys",19 , 1200, "Tecnologia");

//Flujo de pruebas

console.log(Dev1.datosGenerales());
Dev1.programar();
console.log(Dev1.recibirSueldo());
//Método datosGenerales modificado a través de la sobreescritura del método original.
console.log(Dev1.datosGenerales());

console.log("===============================================");
console.log(Ger1.datosGenerales());
Ger1.dirigir();
console.log(Ger1.datosGenerales());
console.log("==============================================================================");

console.log(" "+Dev1);
=======
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
>>>>>>> d23a0056cc564b05986f8d1438f223758ce5bdb7
