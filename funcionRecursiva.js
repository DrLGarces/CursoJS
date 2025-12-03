// Reducir de 10 a 1 con una función
let n=10;
function Reduccion(num){
    if(num!=1){
        console.log(`Número actual: ${num}`);
        num=num-1;

        Reduccion(num);
    }else{
        console.log(`Ahora si, el número es ${num}`);
    }
}
Reduccion(n);