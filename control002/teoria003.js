const prompt = require('prompt-promise');

/*

Quina és la sortida del següent programa

*/

async function main () {
    
    let cadA = 'Hola'
    let cadB = 'Bulma'

    console.log(`${cadA} ${cadB}`)
    console.log(cadB.charAt(2))
    console.log(cadB.substring(2, 4))
    console.log(cadA.substr(1, 3))
    console.log(cadA + cadB)
    console.log(cadB.replace('u', 'a'))

    prompt.end()
}

main()
