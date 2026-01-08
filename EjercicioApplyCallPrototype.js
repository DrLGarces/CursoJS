function vehiculo(marca, modelo){
    this.marca = marca;
    this.modelo = modelo;
}

vehiculo.prototype.encendido = false;
vehiculo.prototype.descripcion = function(){
    return `Vehiculo: ${this.marca} ${this.modelo}, ${this.encendido}`;
}
vehiculo.prototype.arrancar = function () {
    this.encendido = true;
    console.log("Vehiculo encendido");
}

function escanearSistema(fecha, mecanico) {
    return `Revisión del ${this.marca} ${this.modelo} realizada el ${fecha} por ${mecanico}.`;
}


auto1 = new vehiculo("Chevrolet","century");
console.log(auto1.descripcion());
console.log(escanearSistema.call(auto1,"27/08/2025","Chiquito"));


auto2 = new vehiculo("Chevrolet","Camaro");
console.log(auto2.descripcion());
let datosRevision = ["22/2/2024","Juan Carlos"];
console.log(escanearSistema.apply(auto2,datosRevision));

auto1.arrancar();
console.log(auto1.descripcion());