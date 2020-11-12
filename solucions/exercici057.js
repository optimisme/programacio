const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui:

    Escriu un color: blau
    Escriu un altre color: taronja
    L'objecte del color blau és 'mar'
    L'objecte del color taronja és 'carbasa'

*/

function escullObjecte (color) {

    let objecte = ''

    switch (color) {
    case 'blau':
        objecte = 'mar'
        break;
    case 'verd':
        objecte = 'arbre'
        break;
    case 'vermell':
        objecte = 'tomàquet'
        break;
    case 'taronja':
        objecte = 'carbasa'
        break;
    case 'groc':
        objecte = 'llimona'
        break;
    case 'default':
        objecte = '?'
    }

    // Fes ques aquesta funció retorni 'objecte'
    return objecte
}

async function main () {

    let color0 = await prompt("Escriu un color: ")
    let color1 = await prompt("Escriu un altre color: ")
    let resultat = ''

    resultat = escullObjecte(color0)
    console.log(`L'objecte del color ${color0} és '${resultat}'`)

    // Crida a la funció 'escullObjecte' amb el valor de la variable 'color1' com a paràmetre
    resultat = escullObjecte(color1)

    // Escriu el resultat obtingut com a l'exemple
    console.log(`L'objecte del color ${color1} és '${resultat}'`)

    prompt.end()
}

main()