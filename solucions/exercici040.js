const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui com en el següent exemple:

    Escriu un número entre 0 i 5: 3
    Escriu un número entre 5 i 9: 7
    L'array original és: [
       0, 1,  1,  2,  3,
       5, 8, 13, 21, 34,
      55
    ]
    El subarray escollit per l'usuari va des de la posició 3 fins a la posicio 7
    El subarray escollit per l'usuari és: [ 2, 3, 5, 8 ]

Un altre exemple amb els números 2 i 9:

    Escriu un número entre 0 i 5: 2
    Escriu un número entre 5 i 9: 9
    L'array original és: [
       0, 1,  1,  2,  3,
       5, 8, 13, 21, 34,
      55
    ]
    El subarray escollit per l'usuari va des de la posició 2 fins a la posicio 9
    El subarray escollit per l'usuari és: [
      1,  2,  3, 5,
      8, 13, 21
    ]
*/

async function main () {

    let numeros = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    let posicioInicial = parseFloat(await prompt("Escriu un número entre 0 i 5: "))
    let posicioFinal = parseFloat(await prompt("Escriu un número entre 5 i 9: "))
    let subArray = []

    // Fes que subArray tingui els continguts del troç d'array que hi ha entre els números introduïts per l'usuari,
    // fes servir la funció 'slice' de JavaScript
    subArray = numeros.slice(posicioInicial, posicioFinal)

    console.log('L\'array original és:', numeros)
    console.log('El subarray escollit per l\'usuari va des de la posició', posicioInicial, 'fins a la posicio', posicioFinal)
    console.log('El subarray escollit per l\'usuari és:', subArray)

    prompt.end()
}

main()