class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    
    get Marca(){
        return this._marca;
    }
    set Marca(marca){
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    toString(){
        return `[Tipo]: ${this._tipoEntrada}, [Marca]: ${this._marca}`;
    }

}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        Raton.contadorRatones++;
        this._idRaton = Raton.contadorRatones;
    }
    toString(){
        return `[ID Raton]:${this._idRaton}, [Tipo]: ${this._tipoEntrada}, [Marca]: ${this._marca}`;
    }

}
class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        Teclado.contadorTeclados++;
        this._idTeclado = Teclado.contadorTeclados;
    }
    toString(){
        return `[ID Teclado]:${this._idTeclado}, [Tipo]: ${this._tipoEntrada}, [Marca]: ${this._marca}`;
    }

}
class Monitor{
    static contadorMonitores = 0;
    constructor(marca, tamanio){
        Monitor.contadorMonitores++;
        this._idMonitor = Monitor.contadorMonitores;
        this._marca = marca;
        this._tamanio = tamanio;
    }
    get Marca(){
        return this._marca;
    }
    set Marca(marca){
        this._marca = marca;
    }
    get Tamanio(){
        return this._tamanio;
    }
    set Tamanio(tamanio){
        this._tamanio = tamanio;
    }
    toString(){
        return `[ID Monitor]:${this._idMonitor}, [Marca]: ${this._marca}, [Tamaño]: ${this._tamanio},`;
    }
}




let r1 = new Raton ("Bluethoot","MSI");
console.log(r1.toString())

let t1 = new Teclado("USB", "RedDragon");
console.log(t1.toString());
let t2 = new Teclado("USB", "Logitech");
console.log(t2.toString());

let m1 = new Monitor("Alhua", 27);
console.log(m1.toString());