const prompt = require('prompt-promise')
const fs = require('fs')

/*

Modifica el següent programa segons les instruccions,
el resultat esperat és

    La variable varNumerica és de tipus number
    La variable varText és de tipus string
    La variable varBooleana és de tipus boolean
    La variable varArray és de tipus array
    La variable varObjecte és de tipus object

*/

async function main () {

    let varNumerica = 0         // Inicialitza aquesta variable amb un número
    let varText = ''            // Inicialitza aquesta variable amb una cadena de text
    let varBooleana = false     // Inicialitza aquesta variable amb un valor booleà
    let varArray = []           // Inicialitza aquesta variable amb un array  
    let varObjecte = {}         // Inicialitza aquesta variable amb un objecte

    console.log(`La variable varNumerica és de tipus ${typeof varNumerica}`)
    console.log(`La variable varText és de tipus ${typeof varText}`)
    console.log(`La variable varBooleana és de tipus ${typeof varBooleana}`)
    console.log(`La variable varArray és de tipus ${(varArray instanceof Array) ? 'array' : typeof varArray}`)
    console.log(`La variable varObjecte és de tipus ${typeof varObjecte}`)

    prompt.end()
}

main()