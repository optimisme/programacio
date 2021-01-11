const prompt = require('prompt-promise');

/*

Quina és la sortida del següent programa

*/

async function main () {
    
    let numeroA = 1
    let numeroB = 2
    let tmp = 0

    tmp = numeroA
    numeroA = numeroB
    numeroB = tmp

    console.log(numeroA, numeroB, tmp)

    prompt.end()
}

main()
