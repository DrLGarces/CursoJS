class Empleado{
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
