const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui:

    Escriu un numero enter: 1
    Escriu un altre numero enter: 2
    Escriu un tercer numero enter: 3
    1 + 2 + 3 = 6

*/

function sumaNumeros (a, b, c) {

    // TODO: Fes que aquesta funció retorni la suma dels tres paràmetres que reb
}

async function main () {

    let numero0 = parseFloat(await prompt("Escriu un numero enter: "))
    let numero1 = parseFloat(await prompt("Escriu un altre numero enter: "))
    let numero2 = parseFloat(await prompt("Escriu un tercer numero enter: "))
    let suma = 0

    // TODO: Crida la funció 'sumaNumeros' amb els paràmetres 'numero0', 'numero1', 'numero2'
    //       guarda el resultat que retorna aquesta funció, a la variable 'suma'
    suma = sumaNumeros(numero0, numero1, numero2)

    console.log(`${numero0} + ${numero1} + ${numero2} = ${suma}`)

    prompt.end()
}

main()