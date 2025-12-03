let var1 = null;
// if(typeof var1 == "number"){
//     console.log("Variable es tipo number");
// }

switch(typeof var1){
    case "string":
        console.log("Variable tipo string");
        break;
    case "boolean":
        console.log("Variable de tipo booleana");
        break;
    case "null":
        console.log("Variable null");
        break;
    default:
        console.log("No hay conincidendias");
        break;
}