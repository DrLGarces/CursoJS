const validarTransferencia = (monto, saldoDisponible) =>{
    try {
        if(monto > saldoDisponible) throw "Fondos insuficientes para realizar operación.";
        if(monto <= 0) throw "El monto debe ser mayor a cero";

        console.log(`transferencia de ${monto} autorizada.`);
        return (`transferencia de ${monto} autorizada.`);
        
    }catch (error) {
        console.log(error);
    }finally{
        console.log("Finalizando conexión segura a banco...");
    }
}
validarTransferencia(100, 200);


