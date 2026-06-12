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

        listaTareas.appendChild(clonTemplate);
        formTareas.reset();
});

listaTareas.addEventListener("click",(e)=>{
        console.log("Click detectado en:", e.target.classList);
        if(e.target.classList.contains("btn-eliminar")){
                const li = e.target.closest("li");
                eliminarTarea(li);
        }
        else if(e.target.classList.contains("btn-editar")){
                const li = e.target.closest("li");
                const span = li.querySelector(".js-nombre-tarea");
                const btnEditar = e.target;
                editarTarea(li,span,btnEditar);
        }
        else if(e.target.classList.contains("btn-guardar")){
                const li = e.target.closest("li");
                const btnEditar = e.target;
                Guardar(li, btnEditar);
        }

});

function eliminarTarea(li){
        li.remove();
}

function editarTarea(li, span, btnEditar){
        const input = document.createElement("input");
        input.type = "text";
        input.value = span.textContent;
        input.classList.add("form-control","form-control-sm");
        span.replaceWith(input);
        btnEditar.textContent = "Guardar";
        btnEditar.classList.remove("btn-editar");
        btnEditar.classList.add("btn-guardar");
}


function Guardar(li, btnEditar){
        const input = li.querySelector("input");
        const span = document.createElement("span");
        span.classList.add("js-nombre-tarea");
        span.textContent = input.value;
        input.replaceWith(span);
        btnEditar.textContent="Editar";
        btnEditar.classList.remove("btn-guardar");
        btnEditar.classList.add("btn-editar");
}
