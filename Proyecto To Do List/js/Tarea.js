class Tarea{
    static contadorTareas = 0;

    constructor(nombre, prioridad){
        this._nombre = nombre;
        this._prioridad = prioridad;
        this._idTarea = Tarea.contadorTareas++;
    }

    get Nombre(){
        return this._nombre;
    }
    set Nombre(nombre){
        this._nombre = nombre;
    }
    get Prioridad(){
        return this._prioridad;
    }
    set Prioridad(prioridad){
        this._prioridad = prioridad;
    }
    get IdTarea(){
        return this._idTarea;
    }
}