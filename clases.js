class Producto{
    constructor(id, nombre, costo, precio, stock){
        this._id = id;
        this._nombre = nombre;
        this._costo = costo;
        this._precio = precio;
        this._stock = stock;
    }
    
    set id(id){
        this._id = id;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    set costo(costo){
        this._costo = costo;
    }

    set precio(precio){
        this._precio = precio;
    }

    set stock(stock){
        this._stock = stock;
    }

    get id (){
        return this._id;
    }

    get nombre (){
        return this._nombre;
    }

    get costo (){
        return this._costo;
    }

    get precio (){
        return this._precio;
    }

    get stock (){
        return this._stock;
    }

    mostrarDatos (){
        return `Datos de producto: Nombre:${this._nombre}, Costo:${this._costo}, Precio:${this._precio}, Stock:${this._stock}`;
    }
}

let product1 = new Producto(1,"Platanito", 402.5, 500, 20);
let product2 = new Producto(2,"Colgate", 303, 400, 20);
let product3 = new Producto(3,"Harina Pan", 188,20, 250, 20);

console.log(product1.mostrarDatos());
console.log(product2.mostrarDatos());
product2._precio = product2._precio + 30;
console.log(product2.mostrarDatos());