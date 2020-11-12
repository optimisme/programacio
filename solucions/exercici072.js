const prompt = require('prompt-promise')
const fs = require('fs')

/*

Modifica el següent programa segons les instruccions,
el resultat esperat és:

    Escriu un valor numèric: 4
    La variable varNumerica és de tipus number, i té de valor 4
    Escriu un petit text: hola
    La variable varText és de tipus string, i té de valor hola
    Escriu números separats per espai: 3 4 5
    La variable varArray és de tipus array, i té de valor [3,4,5]

*/

async function main () {

    let varNumerica = 0        
    let varText = ''
    let varArray = [] 

    // TODO: Demana a l'usuari que introdueixi un número
    //       fes que aquest número es quedi guardat a la variable varNumerica en format de número (no de text)
    varNumerica = parseFloat(await prompt("Escriu un valor numèric: "))

    // TODO: Demana a l'usuari que introdueixi un text
    //       fes que aquest text es quedi guardat a la variable varText en format de text
    varText = await prompt("Escriu un petit text: ")
    
    // TODO: Demana a l'usuari que introdueixi números separats per espai
    //       fes que aquest números es quedin guardats a la variable varArray en format d'array
    varArray = (await prompt("Escriu números separats per espai: ")).split(' ')

    console.log(`La variable varNumerica és de tipus ${typeof varNumerica}, i té de valor ${varNumerica}`)
    console.log(`La variable varText és de tipus ${typeof varText}, i té de valor ${varText}`)
    console.log(`La variable varArray és de tipus ${(varArray instanceof Array) ? 'array' : typeof varArray}, i té de valor [${varArray}]`)

    prompt.end()
}

main()