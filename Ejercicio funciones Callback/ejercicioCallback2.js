const autenticarUsuario = (usuario, password, callback) => {
    console.log("Conectando con el servidor...");
    setTimeout(()=>{
        try{
            msj="";
            if(usuario=="admin" && password=="admin"){
            msj="Inicio de sesión exitoso";
        }else{
            throw "Usuario o clave inválidos.";
        }
        }catch(error){
            msj=error;
        }
        callback(msj);
        
    },3000)







}

autenticarUsuario("admin","admin",(resultado)=>{
    console.log(resultado);
});