const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui com en el següent exemple:

    Escriu uns quants números separats per un espai: 1 2 3 4
    La suma dels números que has introduit és: 10

Ha de funcionar per qualsevol grup de números que escrigui l'usuari

*/

async function main () {

    let cnt = 0
    let text = await prompt("Escriu uns quants números separats per un espai: ")
    let numerosText = []
    let numeros = []
    let numero = 0
    let suma = 0

    numerosText = text.split(' ')

    // El següent codi, transforma l'array de textos que hi ha a 'numerosText' en un array de números i el guarda a la variable 'numeros'
    numeros = numerosText.map((numero) => { return parseFloat(numero) })

    for (cnt = 0; cnt < numeros.length; cnt = cnt + 1) {
        numero = numeros[cnt]

        // Fes que la variable 'suma' valgui el valor que té actualment més el valor del número actual de l'array
    }

    console.log('La suma dels números que has introduit és:', suma)

    prompt.end()
}

main()