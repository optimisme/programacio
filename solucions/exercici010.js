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

    if (numA < numB) {
        console.log(numA, 'és més petit que', numB)
    }

    if (numA > numB) {
        console.log(numA, 'és més gran que', numB)
    }

    // Atenció que si són iguals no escriu res

    prompt.end()
}

main()