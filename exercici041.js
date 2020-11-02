const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui com en el següent exemple:

    Escriu un número: 3
    Escriu un número més gran que l'anterior: 20
    La cadena de text original és: La ovella més bonica va saltar la tanca per anar a veure aigua al riu
    La subcadena escollida per l'usuari va des de la posició 3 fins a la posicio 20
    La subcadena escollida per l'usuari és: ovella més bonica

Un altre exemple:

    Escriu un número: 19
    Escriu un número més gran que l'anterior: 39
    La cadena de text original és: La ovella més bonica va saltar la tanca per anar a veure aigua al riu
    La subcadena escollida per l'usuari va des de la posició 19 fins a la posicio 39
    La subcadena escollida per l'usuari és: a va saltar la tanca

*/

async function main () {

    let text = 'La ovella més bonica va saltar la tanca per anar a veure aigua al riu'
    let posicioInicial = parseFloat(await prompt("Escriu un número: "))
    let posicioFinal = parseFloat(await prompt("Escriu un número més gran que l'anterior: "))
    let subCadena = ''

    // Fes que subCadena tingui els continguts del troç de text que hi ha entre els números introduïts per l'usuari,
    // fes servir la funció 'substring' de JavaScript

    console.log('La cadena de text original és:', text)
    console.log('La subcadena escollida per l\'usuari va des de la posició', posicioInicial, 'fins a la posicio', posicioFinal)
    console.log('La subcadena escollida per l\'usuari és:', subCadena)

    prompt.end()
}

main()