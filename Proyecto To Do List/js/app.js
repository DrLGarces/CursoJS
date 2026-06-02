const btnAgregar = document.getElementById("btnAgregar");
const formTareas = document.getElementById("form-tareas");
const listaTareas = document.getElementById("lista-tareas");
const templateTarea = document.getElementById("template-tarea").content;


btnAgregar.addEventListener("click",()=>{
        let data = new FormData(formTareas);
        let prioridad = data.get("select-prioridad");
        let textoTarea = data.get("input-tarea");
        let tarea = new Tarea(textoTarea, prioridad);
        const clonTemplate = templateTarea.cloneNode(true);
        if(!textoTarea) return;
        clonTemplate.querySelector(".js-nombre-tarea").textContent = tarea.Nombre;
        const li = clonTemplate.querySelector("li");
        

        li.dataset.id = tarea.IdTarea;

        switch(tarea.Prioridad){
                case "Baja":
                        li.classList.add("list-group-item-success");
                        break;
                case "Media":
                        li.classList.add("list-group-item-warning");
                        break;
                case "Alta":
                        li.classList.add("list-group-item-danger");
                        break;
        
        }

        // clonTemplate.querySelector(".btn-eliminar").addEventListener("click",()=>{});
        // clonTemplate.querySelector(".btn-editar").addEventListener("click",()=>{console.log("Hola")});
        listaTareas.appendChild(clonTemplate);
        formTareas.reset();
});

listaTareas.addEventListener("click",(e)=>{
        if(e.target.classList.contains("btn-eliminar")){
                const li = e.target.closest("li");
                eliminarTarea(li);
        }
        if(e.target.classList.contains("btn-editar")){
                const li = e.target.closest("li");
                editarTarea
        }

});

function eliminarTarea(li){
        li.remove();
}

function editarTarea(li){

}
