/* 

Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree. La funzione dovrebbe restituire un array di stringhe contenenti gli hobby.
Esporta la funzione dal file.

*/


/* function hobbiesFc(hobbyOne, hobbyTwo, hobbyThree){
    let array = []
    array.push(hobbyOne, hobbyTwo, hobbyThree)
    return array
}

console.log(hobbiesFc("Motorcycles", "Gaming", "Work"));

module.exports = {hobbiesFc};
 */

const hobbiesFc = (hobbyOne, hobbyTwo, hobbyThree) => [hobbyOne, hobbyTwo, hobbyThree];

console.log(hobbiesFc("Motorcycles", "Gaming", "Work"));

module.exports = { hobbiesFc };

