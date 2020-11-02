const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui:

    # 0
    # 2
    # 4
    # 6

Tants cops com demani l'usuari (en aquest exemple, 6)
Fixa't que compte de dos en dos

*/

async function main () {

    let numero = parseFloat(await prompt("Fins a quin número vols comptar?"))
    let cnt = 0

    for (cnt = 0; cnt <= numero; cnt = cnt + 2) {
        console.log('#', cnt)
    }

    prompt.end()
}

main()