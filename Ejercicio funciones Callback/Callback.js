const solicitarRegiro = (monto, saldoActual, callback) =>{
    console.log("Contando dinero");
    setTimeout(()=>{
        let msj ="";
        if(monto > saldoActual){
            msj = "El monto excede su saldo actual.";
        }else{
            msj = `Retiro exitoso. Ahora su saldo actual es ${saldoActual-monto}`;
        }
        callback(msj);
    }, 2500);

}


solicitarRegiro(1000, 2250,(resultado) =>{
    console.log(resultado);
} );