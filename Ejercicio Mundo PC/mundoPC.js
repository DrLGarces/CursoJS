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
        return `[Tipo]: ${this._tipoEntrada}, [Marca]: ${this._marca}
        `;
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
        return `[ID Raton]:${this._idRaton}[Tipo]: ${this._tipoEntrada}, [Marca]: ${this._marca}
        `;
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
        return `[ID Teclado]:${this._idTeclado}, [Tipo]: ${this._tipoEntrada}, [Marca]: ${this._marca}
        `;
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
        return `[ID Monitor]:${this._idMonitor}, [Marca]: ${this._marca}, [Tamaño]: ${this._tamanio}
        `;
    }
}

class Computadora{
    static contadorComputadoras = 0;
    constructor(nombre, monitor, teclado, raton){
        Computadora.contadorComputadoras++;
        this._idComputadora = Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton
    }
    get Nombre(){
        return this._nombre;
    }
    set Nombre(nombre){
        this._nombre = nombre;
    }
    get Monitor(){
        return this._monitor;
    }
    set Monitor(monitor){
        this._monitor = monitor;
    }
    get Teclado(){
        return this._teclado;
    }
    set Teclado(teclado){
        this._teclado = teclado;
    }
    get Raton(){
        return this._raton;
    }
    set Raton(raton){
        this._raton = raton;
    }
    toString(){
        return `[ID PC]: ${this._idComputadora} [Nombre]: ${this._nombre} [Monitor]: ${this._monitor} [Teclado]: ${this._teclado} [Raton]: ${this._raton}`;
    }

}
class Orden{
    static contadorOrdenes = 0;
    constructor(){
        Orden.contadorOrdenes++;
        this._idOrden = Orden.contadorOrdenes;
        this._computadoras = [];
    }
    agregarComputadora(Computadora){
        this._computadoras.push(Computadora);
    }
    toString(){
        return `[ID Orden]: ${this._idOrden}
        [Computadoras]: ${this._computadoras}`;
    }
}




let r1 = new Raton ("Bluethoot","MSI");
// console.log(r1.toString())
let r2 = new Raton ("USB","HP");
let t1 = new Teclado("USB", "RedDragon");
// console.log(t1.toString());
let t2 = new Teclado("USB", "Logitech");
// console.log(t2.toString());

let m1 = new Monitor("Alhua", 27);
let m2 = new Monitor("Lenovo", 24);
// console.log(m1.toString());

let compu1 = new Computadora("PC-Luis",m1,t1,r1);
// console.log(compu1.toString());
let compu2 = new Computadora("PC-Marian",m2,t2,r2)
// console.log(compu2.toString());

let orden1 = new Orden();
orden1.agregarComputadora(compu1);
orden1.agregarComputadora(compu2);

console.log(orden1.toString());