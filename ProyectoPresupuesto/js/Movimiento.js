//Movimiento.js

export default class Movimiento{
    static ingresos = 0;
    static egresos = 0;
    constructor(tipo, descripcion, monto){
        this._tipo = tipo;
        this._descripcion = descripcion;
        this._monto = monto;
        if(tipo == "Ingreso"){
            Movimiento.ingresos += monto;
        }else if(tipo == "Egreso"){
            Movimiento.egresos +=monto;
        }

    }
    static get saldoActual(){
        return Movimiento.ingresos - Movimiento.egresos;
    }

    static get ingresos(){
        return Movimiento.ingresos;
    }

    static get egresos(){
        return Movimiento.egresos;
    }
    

}


