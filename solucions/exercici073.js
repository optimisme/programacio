const prompt = require('prompt-promise')
const fs = require('fs')

/*

Modifica el següent programa segons les instruccions,
el resultat esperat és:

    Escriu números separats per coma ',': 4,5,6,7,8
    La suma dels números introduis és 30

*/

async function main () {

    let cnt = 0
    let arr = []
    let rst = 0

    // TODO: Demana a l'usuari que introdueixi números separats per coma ','
    //       posa aquests números en un array
    //       fes un bucle per sumar tots els números de l'array
    //       dona el resultat obtingut
    arr = (await prompt("Escriu números separats per coma ',': ")).split(',')
    for (cnt = 0; cnt < arr.length; cnt = cnt + 1) {
        rst = rst + parseFloat(arr[cnt])
    }

    console.log(`La suma dels números introduis és ${rst}`)

    prompt.end()
}

main()