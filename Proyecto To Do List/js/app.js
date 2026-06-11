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
                const span = li.querySelector(".js-nombre-tarea");
                const btnEditar = e.target;
                editarTarea(li,span,btnEditar);
        }
        if(e.target.classList.contains("btn-guardar")){
                const li = e.target.closest("li");
                const span = li.querySelector(".js-nombre-tarea");
                Guardar(li);
        }

});

function eliminarTarea(li){
        li.remove();
}

function editarTarea(li, span, btnEditar){
        const input = document.createElement("input");
        input.type = "text";
        input.value = span.textContent;
        input.classList.add("form-control","form-comtrol-sm");
        span.replaceWith(input);
        btnEditar.textContent = "Guardar";
        btnEditar.classList.remove("btn-editar");
        btnEditar.classList.add("btn-guardar");
}


function Guardar(li,span){
        const input = li.querySelector("input");
        span.textContent = input.value;
        input.replaceWith(span);
        btnEditar.textContent="Editar";
        btnEditar.classList.remove("btn-guardar");
        btnEditar.classList.add("btn-editar");
}
