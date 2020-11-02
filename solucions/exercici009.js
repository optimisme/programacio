const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui:

    Escriu un número entre 0 i 100: 4
    4 és menor de 50

On '4' és un número introduït per l'usuari, o bé:

    Escriu un número entre 0 i 100: 60
    60 és més gran o igual a 50

On '60' és un número introduït per l'usuari

*/

async function main () {

    let numero = parseFloat(await prompt("Escriu un número entre 0 i 100: "))

    if (numero < 50) {
        console.log(`${numero} és menor de 50`)
    } else {
        console.log(`${numero} és més gran o igual a 50`)
    }

    prompt.end()
}

main()