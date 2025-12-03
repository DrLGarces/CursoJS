function calcularPromedioPonderado(calificaciones){

    let totalPeso=0, totalcalificaciones=0; valorPonderado=0;

    for(let i=0;i<calificaciones.length;i++){
        
        totalPeso += calificaciones[i].peso;
        valorPonderado += calificaciones[i].calificacion *(calificaciones[i].peso/100);

    }
    let promedio;
    promedio =(valorPonderado/totalPeso)*100;
    return promedio;
}


let calificaciones = [{ calificacion: 85, peso: 20 },{ calificacion: 92, peso: 50 },{ calificacion: 78, peso: 30 } ];


console.log(calcularPromedioPonderado(calificaciones));