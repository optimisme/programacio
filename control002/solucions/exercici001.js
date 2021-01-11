const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
mostri l'array amb les paraules intercanviades d'ordre

    Escriu dues paraules separades per espai: sol lluna
    [ 'lluna', 'sol' ]

    Escriu dues paraules separades per espai: esquirol pinyo
    [ 'pinyo', 'esquirol' ]
*/

async function main () {
    
    let txt = await prompt('Escriu dues paraules separades per espai: ')
    let arr = txt.split(' ')

    let tmp = arr[0]
    arr[0] = arr[1]
    arr[1] = tmp

    console.log(arr)

    prompt.end()
}

main()
