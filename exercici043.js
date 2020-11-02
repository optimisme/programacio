const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui com en el següent exemple:

    Escriu uns quants números separats per un espai: 2 3 4 5 6
    La suma dels números imparells que has introduit és: 8
    La multiplicacio dels números parells que has introduit és: 48

Un altre exemple:

    Escriu uns quants números separats per un espai: 10 5 2 4 7 9
    La suma dels números imparells que has introduit és: 21
    La multiplicacio dels números parells que has introduit és: 80

Ha de funcionar per qualsevol grup de números que escrigui l'usuari

*/

async function main () {

    let cnt = 0
    let text = await prompt("Escriu uns quants números separats per un espai: ")
    let numerosText = []
    let numeros = []
    let numero = 0
    let suma = 0
    let multiplicacio = 1
    let parell = false

    numerosText = text.split(' ')

    // El següent codi, transforma l'array de textos que hi ha a 'numerosText' en un array de números i el guarda a la variable 'numeros'
    numeros = numerosText.map((numero) => { return parseFloat(numero) })

    for (cnt = 0; cnt < numeros.length; cnt = cnt + 1) {
        numero = numeros[cnt]
        parell = ((numero % 2) == 0)

        // Fes que el valor de suma, sumi el valor del numero actual, només si aquest numero és imparell
        // Fes que el valor de multiplicio, multipliqui pel valor del numero actual, només si aquest numero és parell      
    }

    console.log('La suma dels números imparells que has introduit és:', suma)
    console.log('La multiplicacio dels números parells que has introduit és:', multiplicacio)

    prompt.end()
}

main()