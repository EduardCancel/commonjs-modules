/* 

Importa la tua funzione da names.js
Importa la tua funzione da hobbies.js
Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. 
All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto. 

*/

const { fullName } = require("./name");
const { hobbiesFc } = require("./hobbies");

function complete() {
    return {
        fullName: fullName("Eduard", "Cancel"),
        hobbies: hobbiesFc("Motorcycles", "Gaming", "Work"),
    };
}

console.log(complete());
