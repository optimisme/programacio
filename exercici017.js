const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui:

    # 0
    # 1
    # 2
    # 3

Tants cops com demani l'usuari (en aquest exemple, 3)

*/

async function main () {

    let numero = parseFloat(await prompt("Fins a quin número vols comptar?"))
    let cnt = 0

    for (cnt = 0; cnt <= numero; cnt = cnt + 1) {
        // Fes que escrigui aquí el número que anem comptant
    }

    prompt.end()
}

main()