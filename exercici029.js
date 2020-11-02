const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui com en el següent exemple:

    La paraula bosc està a la posicio 28
    La paraula guineu està a la posicio 46

Aquests valors poden ser diferents si la cadena de text 'conte' canvia

*/

async function main () {


    let conte = 'Una ovella es va perdre pel bosc fins que una guineu se la va menjar'
    let posicioBosc = 0
    let posicioGuineu = 0

    // Fes que la variable 'posicioBosc' contingui la posició de la paraula 'bosc' a la cadena de text 'conte'

    // Fes que la variable 'posicioGuineu' contingui la posició de la paraula 'guineu' a la cadena de text 'conte'

    console.log('La paraula bosc està a la posicio', posicioBosc)
    console.log('La paraula guineu està a la posicio', posicioGuineu)

    prompt.end()
}

main()
