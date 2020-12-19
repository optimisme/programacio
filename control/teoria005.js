const prompt = require('prompt-promise');

/*

Què mostrarà aquest codi amb l'entrada "7"?

*/

function esParell (valor) {
    return ((valor % 2) == 0)
}

async function main () {
    
    let txt = await prompt('Escriu un número entre 2 i 9: ')
    let num = parseFloat(txt)
    let cnt = 0

    for (cnt = 0; cnt < num; cnt = cnt + 1) {
        if (esParell(cnt)) {
            console.log(cnt)
        }
    }

    prompt.end()
}

main()
