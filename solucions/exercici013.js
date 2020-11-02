const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui (segons l'edat):

    Menys de 10 anys ets un nen
    Entre 10 i 18 anys ets un adolescent
    Entre 19 i 30 anys encara ets jove
    Entre 40 i 60 anys ets un adult
    Més de 60 anys estàs fet un xaval 

Fes-ho amb condicions tipus 'if', 'else if', 'else'

*/

async function main () {

    let edat = parseFloat(await prompt("Quina edat tens? "))

    if (edat < 10) {
        console.log('Menys de 10 anys ets un nen')
    } else if (edat < 18) {
        console.log('Entre 10 i 18 anys ets un adolescent')
    } else if (edat < 30) {
        console.log('Entre 19 i 30 anys encara ets jove')
    } else if (edat < 60) {
        console.log('Entre 40 i 60 anys ets un adult')
    } else {
        console.log('Més de 60 anys estàs fet un xaval')
    }

    prompt.end()
}

main()