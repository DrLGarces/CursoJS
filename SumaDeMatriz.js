let matriz = [[10, 5, 2],[8, 15, 3],[4, 1, 20]], total=0, totalfil=0;
// console.log(matriz.length);
for(let col=0 ; col<matriz.length ; col++){

    for(let fil=0 ; fil<matriz[col].length ; fil++){
        console.log(`${matriz[col][fil]}`);
        total+=matriz[col][fil];
        if(totalfil<matriz[col].length){

        }
    }
}
console.log(total);