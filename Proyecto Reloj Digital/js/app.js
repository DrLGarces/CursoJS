function mostrarReloj() {
    const fecha = new Date();
    


    // Extraemos las partes que nos interesan
    const horas = fecha.getHours();
    let horasStr = horas.toString();
    horasStr = horasStr.padStart(2,'0');
    
    const minutos = fecha.getMinutes();
    let minutosStr = minutos.toString();
    minutosStr = minutosStr.padStart(2,'0');

    const segundos = fecha.getSeconds();
    let segundosStr = segundos.toString();
    segundosStr = segundosStr.padStart(2,'0');



    // Formato de cadena de texto
    const horaFormateada = `${horasStr}:${minutosStr}:${segundosStr}`;
    console.log(horaFormateada);
}

mostrarReloj();

setInterval(mostrarReloj,1000);