class Producto{
    static contadorProductos = 0;
    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        // console.log(Producto.contadorProductos);
        this._nombre = nombre;
        this._precio = precio;
    }

    get IdProducto(){
        return this._idProducto;
    }

    get Nombre(){
        return this._nombre;
    }
    set Nombre(nombre){
        this._nombre = nombre;
    }
    get Precio(){
        return this._precio;
    }
    set Precio(precio){
        this._precio = precio;
    }

    toString(){
        return `[ID Producto]: ${this._idProducto}, [Nombre]: ${this._nombre}, [Precio]: ${this._precio}`;
    }

}
class orden{
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS(){
        return 5;
    }
    constructor(){
        this.productos = [];
        this.idOrden = ++orden.contadorOrdenes;
        this.contadorProductosAgregados = 0;
    }

    agregarProducto(producto){
        if(this.productos.length<= orden.MAX_PRODUCTOS ){
            this.productos.push(producto);
            // this.contadorProductosAgregados++;
        }else{
            console.log("Se ha alcanzado el máximo de productos para esta orden");
        }
    }

    calcularTotal(){
        let total = 0;
        for (let producto of this.productos) {
            total += producto.Precio;
        }
        return total;
    }

    mostrarOrden(){
        console.log(`[ID-ORDEN]: ${this.idOrden}
            [Productos]: ${this.productos.toString()}
            [Total a pagar]: ${this.calcularTotal()}`);
    }
}


let p1 = new Producto("Shampoo",200);
// console.log(p1.toString());

let p2 = new Producto("Jabon",100);
// console.log(p2.toString());

let orden1 = new orden();

let productonew = new Producto("Talco",500);
orden1.agregarProducto(productonew);
orden1.agregarProducto(p1);
orden1.agregarProducto(p2);
orden1.mostrarOrden();
console.log(orden1.calcularTotal());