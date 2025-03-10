/* 

Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
Esporta la funzione dal file.

*/


/* function fullName(firstName, lastName){
    return {
        firstName : firstName,
        lastName : lastName
    };
}

console.log(fullName("Eduard", "Cancel"));


module.exports = {fullName} */

const fullName = (firstName, lastName) => ({ firstName, lastName });

console.log(fullName("Eduard", "Cancel"));

module.exports = { fullName };
