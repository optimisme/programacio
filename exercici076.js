const prompt = require('prompt-promise')
const fs = require('fs')

/*

Modifica el següent programa segons les instruccions,
el resultat esperat és:

    5
    1
    3 2 1
    1 2 3
*/

function crida (a, b, c) {

    console.log(a, b, c)
}

async function main () {

    // La comanda 'eval' executa una instrucció de codi en format de text

    let a = 3
    let b = 2
    let c = 1
    let instruccio = 'crida(a, b, c)'

    c = a + b
    console.log(c)

    eval('c = a - b')
    console.log(c)

    // TODO: Fes servir 'eval' per executar la instrucció que hi
    //       ha a la variable 'instruccio'

    instruccio = 'crida(c, b, a)'

    // TODO: Torna a fer servir 'eval' per executar la instrucció que hi
    //       ha a la variable 'instruccio'

    prompt.end()
}

main()