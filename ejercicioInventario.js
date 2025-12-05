let producto = {
    nombre:"",
    precio:0,
    stock:0,

    venta : function(quantity){
        this.stock -= quantity;
        return `Ahora el stock es de ${this.stock}`;
    },

    setAtributos: function (name,price,stock) {
        this.nombre = name;
        this.precio = price;
        this.stock = stock;
        let valores = `El nombre del producto es ${this.nombre}, el precio es ${this.precio} y hay en stock ${this.stock}`;
        return  valores
    }
}

console.log(producto.setAtributos("Doritos",10,20));
console.log(producto.venta(4));
console.log(producto.venta(3));