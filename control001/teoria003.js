const prompt = require('prompt-promise');

/*

Què mostrarà aquest codi amb l'entrada 'gat' i 'pilota'?
*/

async function main () {
    
    let animal = await prompt('Escull un animal, gat o gos:')
    let joc = await prompt('Escull un joc, corda o pilota:')

    if (animal === 'gat' || joc === 'corda') {
        console.log('El gat juga')
    } else if (animal === 'gat' || joc === 'pilota') {
        console.log('El gat ignora la pilota')
    } else if (animal === 'gos' || joc === 'corda') {
        console.log('El gos mossega')
    } else if (animal === 'gos' || joc === 'pilota') {
        console.log('El gos juga amb la pilota')
    }

    prompt.end()
}

main()
