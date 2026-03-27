const verificarSubs =(usuario)=>{
    return new Promise((resolver, rejected)=>{
        console.log("Consultando base de datos.")

        setTimeout(()=>{
            if(usuario[1]=="Premium")resolver("Acceso concedido. Enjoy the movie!");
            else rejected("Acceso denegado. Debe ser usuario Premium");
        },1500);
    });
}

let usuario1 = ["Luis","Free"];
let usuario2 = ["Marian","Premium"];

verificarSubs(usuario2)
    .then((mensaje)=>console.log(mensaje))
    .catch((error)=>console.log(error));


const funcion_de_2segundos = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("GEI")
            }, 6000);
        })
}

const consultar_pokemon = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto', {method: 'GET'});
    const data = response.json();
    return data;
}

// console.log(await funcion_de_2segundos());
console.log(await consultar_pokemon())

console.log('Tilin');



// YO TE PROMETO QUE TE VOY A RETORNAR ALGO (Tiempo...)