const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui com en el següent exemple:

    cotxe :
        La primera lletra és c
        La longitud és 5
        La última lletra és e
    ara :
        La primera lletra és a
        La longitud és 3
        La última lletra és a
    plàtan :
        La primera lletra és p
        La longitud és 6
        La última lletra és n

*/

async function main () {

    let cnt = 0
    let paraules = ['cotxe', 'ara', 'plàtan']
    let paraula = ''

    for (cnt = 0; cnt < paraules.length; cnt = cnt + 1) {
        paraula = paraules[cnt]
        console.log(paraula,':')
        console.log('  La primera lletra és', paraula.charAt(0))
        console.log('  La longitud és', paraula.length)
        // Esciu aquí la última lletra de cada paraula de l'array, com a l'exemple de sortida
    }

    prompt.end()
}

main()