const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui (segons l'entrada de l'usuari):

    El gat juga amb una corda
    El gat ignora la pilota
    El gos mossega la corda
    El gos juga amb la pilota

*/

async function main () {

    let animal = await prompt("Escull un animal, gat o gos:")
    let joc = await prompt("Escull un joc, corda o pilota:")

    if (animal === 'gat' && joc === 'corda') {
        // Escriu aquí la frase corresponent
    } else if (animal === 'gat' && joc === 'pilota') {
        // Escriu aquí la frase corresponent
    } else if (aniimal === 'gos' && joc ==='corda') {
        // Escriu aquí la frase corresponent
    } else {
        // Escriu aquí la frase corresponent
    }

    prompt.end()
}

main()