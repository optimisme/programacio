const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui:

    3
    4
    5
    6
    7


Des de dos números anteriors a 5 fins a dos posteriors a 5

*/

async function main () {

    let numero = parseFloat(await prompt("Escriu un número: "))
    let cnt = 0

    for (cnt = numero - 2; cnt <= (numero + 2); cnt = cnt + 1) {
        console.log(cnt)
    }
    
    prompt.end()
}

main()