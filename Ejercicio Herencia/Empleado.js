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