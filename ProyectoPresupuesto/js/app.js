//app.js
import Movimiento from './Movimiento.js';
const saldoActual = document.querySelector(".saldo-actual");
const contenedorIngresos = document.querySelector(".contenedor-ingresos");
const contenedorEgresos = document.querySelector(".contenedor-egresos");
const formMovimientos = document.getElementById("form-movimiento");
const btnAgregar = document.getElementById("btnAgregar");
const tablaIngresos = document.getElementById("tabla-ingresos");
const tablaEgresos = document.getElementById("tabla-egresos");
let listaMovimientos = [];

const configurarBotonesElim = ()=>{
    const botonesEliminar = document.querySelectorAll(".btn-eliminar");

    botonesEliminar.forEach(btn => {
        btn.addEventListener("click",(e)=>{
            const id = Number(e.target.getAttribute("data-id"));
            const mov = listaMovimientos.find(m => m.Id ===id);
            if(mov){
                Movimiento.restarValores(mov.Tipo, mov.Monto);
                listaMovimientos = listaMovimientos.filter(m => m.Id !== id);
                actualizar();
            }
        });
    });

}


const actualizar = () =>{
    let formatoSaldoActual = `$${Movimiento.saldoActual}`;
    saldoActual.innerHTML = formatoSaldoActual; 

    let formatoIngresos = `$${Movimiento.ingresos}`;
    contenedorIngresos.innerHTML = formatoIngresos;

    let formatoEgresos = `$${Movimiento.egresos}`;
    contenedorEgresos.innerHTML = formatoEgresos;

    tablaIngresos.innerHTML = "";
    tablaEgresos.innerHTML = "";
    
    listaMovimientos.forEach(mov => {
    let linea =
    `<tr>
        <td class="col-descripcion">${mov.Descripcion}</td>
        <td class="col-monto">${mov.Monto}</td>
        <td>
            <button class="btn btn-sm btn-outline-danger btn-eliminar" data-id="${mov.Id}">❌</button>
        </td>
    </tr>`;
        if(mov.Tipo =="Ingreso"){
            tablaIngresos.innerHTML += linea;
        }else if(mov.Tipo == "Egreso"){
            tablaEgresos.innerHTML += linea;
        }
    });
    configurarBotonesElim();
    
}

actualizar();

btnAgregar.addEventListener("click",(e)=>{
    e.preventDefault();
    let data = new FormData(formMovimientos);
    let tipo = data.get("tipo");
    let descripcion = data.get("descripcion");
    let monto = Number(data.get("monto"));

    if(descripcion && monto) {
        let movimiento = new Movimiento(tipo, descripcion, monto);
        listaMovimientos.push(movimiento);
        actualizar();
        formMovimientos.reset(); 
    }
});










