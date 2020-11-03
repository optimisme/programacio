const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui:

    Escriu un número: 23
    Escriu un número: 34
    La suma d'aquests números és 57

On '23' i '34' són números introduits per l'usuari, i '57' la seva suma

*/

async function main () {

    let numA = parseFloat(await prompt("Escriu un número: "))
    let numB = parseFloat(await prompt("Escriu un número: "))
    let suma = 0

    // TODO: Fes la suma de 'numA' i 'numB' i guarda el resultat a la variable 'suma'

    console.log('La suma d\'aquests números és', suma)

    prompt.end()
}

main()
