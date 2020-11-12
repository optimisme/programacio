const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui:

    Escriu un numero enter: 3
    Escriu un altre numero enter: 4
    La suma de 3 i 4 és 7

*/

function sumaNumeros (a, b) {

    return a + b
}

async function main () {

    let numero0 = parseFloat(await prompt("Escriu un numero enter: "))
    let numero1 = parseFloat(await prompt("Escriu un altre numero enter: "))
    let suma = 0

    suma = sumaNumeros(numero0, numero1)

    // Escriu aquí el contingut de la variable 'suma' com en l'exemple
    console.log(`La suma de ${numero0} i ${numero1} és ${suma}`)

    prompt.end()
}

main()