const prompt = require('prompt-promise')
const fs = require('fs')

/*

Modifica el següent programa segons les instruccions,
el resultat esperat és:

    Escriu números separats per espai ' ': 5 1 2 3 4 5 6 7 8 9
    Els números més grans que 5 són 6 7 8 9

    Escriu números separats per espai ' ': 10 5 50 6 60 7 70 8 80 9 90
    Els números més grans que 10 són 50 60 70 80 90
*/

async function main () {

    let cnt = 0
    let arr = []
    let rst = []
    let a = 0
    let b = 0

    // TODO: Demana a l'usuari que introdueixi números separats per espai ' '
    //       posa aquests números en un array
    //       crea un array buit anomenat 'rst'
    //       amb l'ajuda d'un bucle posa en aquest nou array
    //       els números introduits per l'usuari que són més grans
    //       que el primer número dels introduits per l'usuari
    arr = (await prompt("Escriu números separats per espai ' ': ")).split(' ')
    a = parseFloat(arr[0])
    for (cnt = 0; cnt < arr.length; cnt = cnt + 1) {
        b = parseFloat(arr[cnt])
        if (b > a) {
            rst.push(b)
        }
    }

    console.log(`Els números més grans que ${a} són ${rst.join(' ')}`)

    prompt.end()
}

main()