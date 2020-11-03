const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui com en el següent exemple:

    - Escriu tipus d'animals separats per espai ? gos gat guineu llepard
    Els animals de l'array:
    gos
    gat
    guineu
    llepard

També ha de funcionar amb altres animals

*/

async function main () {

    let cnt = 0
    let animals = await prompt("- Escriu tipus d'animals separats per espai ? ")
    let arr = []

    // TODO: Transforma aquí els continguts de la variable 'animals' en un array i guarda aquest array a la variable 'arr'

    console.log('Els animals de l\'array:')
    for (cnt = 0; cnt < arr.length; cnt = cnt + 1) {
        console.log(arr[cnt])
    }

    prompt.end()
}

main()