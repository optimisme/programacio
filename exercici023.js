const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui:

    #
    ##
    ###
    ####

Tants cops com demani l'usuari (en aquest exemple, 4)

*/

async function main () {

    let numero = parseFloat(await prompt("Fins a quin número vols comptar?"))
    let cnt = 0
    let cadena = ''

    for (cnt = 0; cnt < numero; cnt = cnt + 1) {
        // TODO: Aquí, concatena (suma) un '#' a cadena
        console.log(cadena)
    }

    prompt.end()
}

main()