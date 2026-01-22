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