const contenedorHora = document.querySelector(".contenedor-hora");
const contenedorFecha = document.querySelector(".contenedor-fecha");
const contenedorReloj = document.querySelector(".contenedor-reloj");
const diasSemana = ["Lun","Mar","Mie","Jue","Vier","Sab","Dom"];
const meses = ["Enero","Febrero","Marzo","Abril","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
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

    let diaSemana = diasSemana[fecha.getDay()];
    let mes = meses[fecha.getMonth()];
    let diaMes = fecha.getDate();

    let fechaFormateada = `${diaSemana}, ${diaMes} de ${mes}`;
    // Formato de cadena de texto
    const horaFormateada = `${horasStr}:${minutosStr}:${segundosStr}`;

    contenedorHora.innerHTML = horaFormateada;
    contenedorFecha.innerHTML = fechaFormateada;

    contenedorReloj.classList.toggle("sombra");
}
mostrarReloj();
setInterval(mostrarReloj,1000);



