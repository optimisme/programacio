const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui:

    Escriu un número: 23
    Escriu un número: 34
    23 és més petit que 34

On '23' i '34' són números introduits per l'usuari, o bé:

    Escriu un número: 34
    Escriu un número: 23
    34 és més gran que 23

On '34' i '23' són números introduits per l'usuari

*/

async function main () {

    let numA = parseFloat(await prompt("Escriu un número: "))
    let numB = parseFloat(await prompt("Escriu un número: "))

    // TODO: Posa aquí una comparació per saber si numA és més petit o més gran que numB
    // Si són iguals, que no escrigui res

    console.log(numA, 'és més petit que', numB)
    console.log(numA, 'és més gran que', numB)

    prompt.end()
}

main()