let estudiante = {
    nombre: "luis",
    edad: "25",
    notas: [17,16,20,11],

    calcularPromedio: function () { 
        let sumtotal = 0;
        this.notas.forEach(nota => {
            sumtotal += nota;
        });
        let promedio = sumtotal / this.notas.length;
        return promedio;
    },

    mostrarInfo: function(){
        return `El estudiante ${this.nombre} tiene un promedio de: ${this.calcularPromedio()}`;
    }
}

console.log(estudiante.calcularPromedio());
console.log(estudiante.mostrarInfo());

for (Propiedad in estudiante){
    console.log(Propiedad);
    console.log(estudiante[Propiedad]);
}