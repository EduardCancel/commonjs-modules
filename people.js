/* 

Importa la tua funzione da names.js
Importa la tua funzione da hobbies.js
Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. 
All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto. 

*/

const fullName = require("./name")
const hobbiesFc = require("./hobbies")


function complete(){
    const {firstName, lastName} = fullName("Eduard", "Cancel");
    const [hobbyOne, hobbyTwo, hobbyThree] = hobbiesFc("Motorcycles", "Gaming", "Work")
    return {
        fullName: {firstName, lastName},
        hobbiesFc: [hobbyOne, hobbyTwo, hobbyThree],
    };
}


console.log(complete());

