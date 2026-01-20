class Socio{
    #idSocio;
    #costoMensual;
    static contadorSocios = 0;

    static get PRECIO_BASE(){
        return 20;
    } 
    constructor(nombre, costoFinal){
        Socio.contadorSocios++;
        this.#idSocio = Socio.contadorSocios;
        this._nombre = nombre;
        this.#costoMensual = costoFinal;
    }

    obtenerCuota(){
        return this.#costoMensual;
    }

    get idSocio(){
        return this.#idSocio;
    }

    toString(){
        return `[Socio ID: ${this.idSocio}] Nombre: ${this._nombre}`;
    }
}

class SocioPremium extends Socio{
    constructor(nombre, accesoLive){
        super(nombre, (Socio.PRECIO_BASE + 15));
        this._accesoLive = accesoLive;
    }

    toString(){
        if(this._accesoLive==true){
            return super.toString()+ `Acceso a LIVE: SI`;
        }else{
            return super.toString()+ `Acceso a LIVE: NO`;
        }
    
    }
}

class SocioBasic extends Socio{
    constructor(nombre, tieneEntrenador){

        if(tieneEntrenador == true){
            super(nombre, (Socio.PRECIO_BASE+5));
            this._tieneEntrenador = tieneEntrenador;
        }else{
            super(nombre, (Socio.PRECIO_BASE));    
            this._tieneEntrenador = tieneEntrenador;
        }
        
    }

    toString(){
        return `Socio Básico ${this._nombre}`;
    }
}

function imprimirFactura(Socio){
    console.log(`Factura de: ${Socio.toString()} | Total a pagar ${Socio.obtenerCuota()}`);
}

let socioP = new SocioPremium("Luis", true);
let socioB = new SocioBasic("Nombre",false);
let arr = [socioP,socioB];

for (const socio of arr) {
    imprimirFactura(socio);
}
