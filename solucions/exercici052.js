const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui:

    Hola funcions
    Adeu funcions

*/

function escriuHola () {

    console.log('Hola funcions')
}

// Posa aquí la funció 'escriuAdeu' que escrigui 'Adeu funcions' per pantalla
function escriuAdeu () {

    console.log('Adeu funcions')
}

async function main () {

    escriuHola()

    escriuAdeu()

    prompt.end()
}

main()