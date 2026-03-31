function descargarArchivo(name, time) {
return prom = new Promise(resolver=>{
    setTimeout(()=>{
        resolver(`Descargado: ${name}`)
    },time);
});
}
async function InicioDeDescarga() {
    console.log("iniciando descargas...");
    
    
    descargarArchivo("Musica", 8000).then(mensaje => console.log(mensaje));
    descargarArchivo("texturas",6000).then(mensaje => console.log(mensaje));
    descargarArchivo("Mapa",2000).then(mensaje => console.log(mensaje));
    
    console.log("Descargas finalizadas. Ya se puede jugar");
}

InicioDeDescarga();