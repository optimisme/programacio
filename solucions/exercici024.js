const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui:

    3
    2
    1
    0

Tants cops com demani l'usuari (en aquest exemple, 4)

*/

async function main () {

    let numero = parseFloat(await prompt("Escriu un número entre 1 i 100?"))
    let cnt = 0

    for (cnt = numero; cnt >= 0; cnt = cnt - 1) {
        console.log(cnt)
    }
    
    prompt.end()
}

main()