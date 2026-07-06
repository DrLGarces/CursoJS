//app.js
import Movimiento from './Movimiento.js';
const saldoActual = document.querySelector(".saldo-actual");
const contenedorIngresos = document.querySelector(".contenedor-ingresos");
const contenedorEgresos = document.querySelector(".contenedor-egresos");
const formMovimientos = document.getElementById("form-movimiento");
const btnAgregar = document.getElementById("btnAgregar");

const actualizar = () =>{
    let formatoSaldoActual = `$${Movimiento.saldoActual}`;
    saldoActual.innerHTML = formatoSaldoActual; 

    let formatoIngresos = `$${Movimiento.ingresos}`;
    contenedorIngresos.innerHTML = formatoIngresos;

    let formatoEgresos = `$${Movimiento.egresos}`;
    contenedorEgresos.innerHTML = formatoEgresos;
}

actualizar();

btnAgregar.addEventListener("click",(e)=>{
    e.preventDefault();
    let data = new FormData(formMovimientos);
    let tipo = data.get("tipo");
    let descripcion = data.get("descripcion");
    let monto = Number(data.get("monto"));
    let movimiento = new Movimiento(tipo, descripcion, monto);
    actualizar();
});








