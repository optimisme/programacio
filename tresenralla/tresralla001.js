const prompt = require('prompt-promise');

/*

En aquest seguit d'exercicis implementarem un joc 
tipus 'tres en ralla' que funciona des del terminal.

En aquest exercici la sortida esperada és:

    La funció "iniciaTaulell" iniciarà el taulell de la partida
       aquesta funció no agafa reb cap paràmetre
       aquesta funció ha de retornar un taulell inicialitzat
    []

*/

async function main () {

    let taulell = []
    let resultats = {}

    // TODO: Crida aquí la funció "iniciaTaulell"
    // guarda el seu retorn a la variable taulell

    console.log(taulell)

    prompt.end()
}

main()

function iniciaTaulell () {

    let taulell = []

    console.log('La funció "iniciaTaulell" iniciarà el taulell de la partida')
    console.log('   aquesta funció no agafa reb cap paràmetre')
    console.log('   aquesta funció ha de retornar un taulell inicialitzat')

    return taulell
}
