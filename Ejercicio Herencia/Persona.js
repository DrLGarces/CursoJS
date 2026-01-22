class Persona{
    static contadorPersonas = 0;
    constructor(nombre, apellido, edad){
        Persona.contadorPersonas++;
        this._idPersona = Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get IdPersona (){
        return this._idPersona;
    }

    get Nombre (){
        return this._nombre;
    }

    set Nombre (nombre){
        this._nombre = nombre;
    }
    get Apellido (){
        return this._apellido;
    }

    set Apellido (apellido){
        this._apellido = apellido;
    }
    get Edad (){
        return this._edad;
    }

    set Edad (edad){
        this._edad = edad;
    }

    toString(){
        return `[ID]: ${this._idPersona} Nombre Completo: ${this._nombre} ${this._apellido} edad: ${this._edad}`;
    }
}
class Empleado extends Persona{
    static contadorEmpleados = 0;
    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        Empleado.contadorEmpleados++;
        this.id_Empleado = Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    get Sueldo (){
        return this._sueldo;
    }

    set Sueldo (sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return super.toString()+ ` Sueldo: ${this._sueldo}`;
    }


}

class Cliente extends Persona{
    static contadorClientes = 0;
    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        Cliente.contadorClientes++;
        this._idCliente =Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }
    get IdCliente(){
        return this._idCliente;
    }
    get FechaRegistro(){
        return this._fechaRegistro;
    }

    set FechaRegistro(fecha){
        this._fechaRegistro = fecha;
    }
    toString(){
        return super.toString()+ ` Fecha de registro: ${this._fechaRegistro}`;
    }

}



let p1 = new Persona("Luis","Garces",24);
console.log(p1.toString());

let e1 = new Empleado("Luis","Garces",24,2000);
console.log(e1.toString());

fecha = new Date();

let c1 = new Cliente("Pedro", "Yepez", 38, fecha);
console.log(c1.toString());