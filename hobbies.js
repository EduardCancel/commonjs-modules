/* 

Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree. La funzione dovrebbe restituire un array di stringhe contenenti gli hobby.
Esporta la funzione dal file.

*/

function threeParameters(hobbyOne, hobbyTwo, hobbyThree){
    let param = []
    param.push(hobbyOne, hobbyTwo, hobbyThree)
    return param
}

console.log(threeParameters("Motorcycles", "Gaming", "Work"));

module.esxports = threeParameters

