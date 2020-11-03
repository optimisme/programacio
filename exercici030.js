const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui com en el següent exemple:

    El conte amb vaca: Una vaca molt feliç es va perdre pel bosc fins que una guineu se la va menjar i es va quedar feliç
    El conte amb amargada: Una ovella molt amargada es va perdre pel bosc fins que una guineu se la va menjar i es va quedar amargada

Aquests valors poden ser diferents si la cadena de text 'conte' canvia

*/

async function main () {


    let conte = 'Una ovella molt feliç es va perdre pel bosc fins que una guineu se la va menjar i es va quedar feliç'
    let conteAmbVaca = ''
    let conteAmbAmargada = ''

    // Reemplaça la paraula 'ovella' de conte per la paraula 'vaca' i guarda el resultat a la variable 'conteAmbVaca'

    // Reemplaça totes les aparicions de la paraula 'feliç' per 'amargada' de conte i guarda el resultat a la variable 'conteAmbAmargada'

    console.log('El conte amb vaca:', conteAmbVaca)
    console.log('El conte amb amargada:', conteAmbAmargada)

    prompt.end()
}

main()