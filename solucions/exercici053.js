const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui:

    Escriu el teu color favorit: blau
    El color és: blau

*/

function escriuColor (color) {

    // Fes que s'escrigui el contingut del paràmetre 'color' com a l'exemple
    console.log(`El color és: ${color}`)
}

async function main () {

    let color = await prompt("Escriu el teu color favorit: ")

    escriuColor(color)

    prompt.end()
}

main()