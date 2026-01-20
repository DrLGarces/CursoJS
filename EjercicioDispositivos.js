class Dispositivo{
    constructor(marca, modelo){
        this._marca = marca;
        this._modelo = modelo;
    }
    descripcion(){
        return `Dispositivo: ${this._marca} ${this._modelo} `;
    }
}

class Smartphone extends Dispositivo{
    constructor(marca, modelo, sistemaOperativo){
        super(marca, modelo);
        this._sistemaOperativo = sistemaOperativo;
    }

    descripcion(){
        return `Smarthphone: ${this._marca} ${this._modelo}, SO: ${this._sistemaOperativo}`;
    }

    llamar(){
        console.log("Llamando...");
    }
}

class Laptop extends Dispositivo{
    constructor(marca, modelo, ram){
        super(marca, modelo);
        this._ram = ram;
    }

    descripcion(){
        return `Laptop: ${this._marca} ${this._modelo}, RAM: ${this._ram}GB`;
    }

    procesar(){
        console.log(`Se están procesando datos con los ${this._ram}GB de memoria RAM`);
    }
}


//Flujo de pruebas

let tlf = new Smartphone("Samsung", "A56", "Android");
let lp = new Laptop("Lenovo","Thinkpad","16");
let dispositivos = [tlf,lp];
for (let disp of dispositivos){
    console.log(disp.descripcion());
}