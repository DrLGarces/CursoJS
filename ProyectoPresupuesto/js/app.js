//app.js
import Movimiento from './Movimiento.js';
const saldoActual = document.querySelector(".saldo-actual");
const contenedorIngresos = document.querySelector(".contenedor-ingresos");
const contenedorEgresos = document.querySelector(".contenedor-egresos");
const formMovimientos = document.getElementById("form-movimiento");
const btnAgregar = document.getElementById("btnAgregar");

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

btnAgregar.addEventListener("click",(e)=>{
    e.preventDefault();
    let data = new FormData(formMovimientos);
    let tipo = data.get("tipo");
    let descripcion = data.get("descripcion");
    let monto = Number(data.get("monto"));
    let movimiento = new Movimiento(tipo, descripcion, monto);
    actualizar();
});








