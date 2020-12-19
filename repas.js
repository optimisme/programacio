const prompt = require('prompt-promise');

function dibuixaEstrelles (quantitat) {

    let cnt = 0
    let txt = ''

    for (cnt = 0; cnt < quantitat; cnt = cnt + 1) {

        txt = txt + '*'
    }

    return txt
}

async function main () {

    let txt = await prompt('Escriu molts numeros separats per espai: ')
    let arr = (txt.split(' ')).map((numero) => { return parseFloat(numero) })
    let gran = -Infinity
    let petit = Infinity
    let cnt = 0

    for (cnt = 0; cnt < arr.length; cnt = cnt + 1) {
        if (gran < arr[cnt]) {
            gran = arr[cnt]
        }
        if (petit > arr[cnt]) {
            petit = arr[cnt]
        }
    }

    console.log(gran, petit)

    prompt.end()
}

main()
