const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui:

    Hola funcions

*/

function escriuHola () {

    // Fes que escrigui 'Hola funcions' per pantalla
    console.log('Hola funcions')
}

async function main () {

    escriuHola()

    prompt.end()
}

main()