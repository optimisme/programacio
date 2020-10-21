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

    // Posa el següent console.log dins d'un bucle fins al número
    // introduit per l'usuari, i fes que compti de dos en dos
    console.log('#', cnt)

    prompt.end()
}

main()