const transferir = (monto, saldoActual)=>{
    return new Promise((resolver, rejected)=>{
        setTimeout(() => {
        
        if(monto<=saldoActual){
            resolver(`Transacción exitosa! Se transfirieron $${monto}`);
        }else{
            rejected('Transacción fallida. No cuenta con fondos suficientes.');
        }
    }, 2000);
    })
}

transferir(2500,2000).then(mensaje=>console.log(mensaje)).catch(error=>console.log(error));