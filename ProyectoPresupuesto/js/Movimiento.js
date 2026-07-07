//Movimiento.js

export default class Movimiento{
    static _ingresos = 0;
    static _egresos = 0;
    static contadorMovimientos = 0;
    constructor(tipo, descripcion, monto){
        this._id = Movimiento.contadorMovimientos++;
        this._tipo = tipo;
        this._descripcion = descripcion;
        this._monto = Number(monto);
        if(tipo == "Ingreso"){
            Movimiento._ingresos += monto;
        }else if(tipo == "Egreso"){
            Movimiento._egresos += monto;
        }
    }
    static get saldoActual(){
        return Movimiento.ingresos - Movimiento.egresos;
    }

    static get ingresos(){
        return Movimiento._ingresos;
    }

    static get egresos(){
        return Movimiento._egresos;
    }

    get Id(){
        return this._id;
    }
    
    get Descripcion(){
        return this._descripcion;
    }

    get Monto(){
        return this._monto;
    }
    get Tipo(){
        return this._tipo;
    }

}


