//app.js
import Movimiento from './Movimiento.js';
const saldoActual = document.querySelector(".saldo-actual");
const contenedorIngresos = document.querySelector(".contenedor-ingresos");
const contenedorEgresos = document.querySelector(".contenedor-egresos");
let tx1 = new Movimiento("Ingreso","Sueldo",300);
let tx2 = new Movimiento("Egreso", "Comida",120);

const actualizar = () =>{
    let formatoSaldoActual = `$${Movimiento.saldoActual}`;
    saldoActual.innerHTML = formatoSaldoActual; 

    let formatoIngresos = `$${Movimiento.ingresos}`;
    contenedorIngresos.innerHTML = formatoIngresos;

    let formatoEgresos = `$${Movimiento.egresos}`;
    contenedorEgresos.innerHTML = formatoEgresos;
}

actualizar();







