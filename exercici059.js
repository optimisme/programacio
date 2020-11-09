const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui:

    Escriu un numero enter: 5
    Escriu un altre numero enter: 3
    Escriu un tercer numero enter: 1
    El valor més gran és 5

Un altre exemple:

    Escriu un numero enter: 1
    Escriu un altre numero enter: 5
    Escriu un tercer numero enter: 2
    El valor més gran és 5

Un altre exemple:

    Escriu un numero enter: 1
    Escriu un altre numero enter: 3
    Escriu un tercer numero enter: 5
    El valor més gran és 5

*/

function mesGran (a, b, c) {

    let resultat = 0

    // TODO: Fes que resultat tingui el valor més gran entre els rebuts per 'a', 'b', 'c'

    return resultat
}

async function main () {

    let numero0 = parseFloat(await prompt("Escriu un numero enter: "))
    let numero1 = parseFloat(await prompt("Escriu un altre numero enter: "))
    let numero2 = parseFloat(await prompt("Escriu un tercer numero enter: "))
    let gran = 0

    // TODO: Crida la funció 'mesGran' amb els tres numeros rebuts i guarda el resultat a la variable 'gran'

    // TODO: Escriu la resposta segons els exemples

    prompt.end()
}

main()