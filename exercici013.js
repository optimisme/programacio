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

    // Posa aquí el codi per tal d'escriure els texts segons l'edat introduida

    prompt.end()
}

main()