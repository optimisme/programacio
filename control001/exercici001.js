const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
mostri un insult a partir d'una part del cos i un adjectiu:

    Escriu dos números entre 1 i 5 separats per espai: 2 4
    Ets un nas curt

    Escriu dos números entre 1 i 5 separats per espai: 1 5
    Ets un cara gamarús
*/

async function main () {
    
    let part = ['cara', 'nas', 'coll', 'panxa', 'peu']
    let adjectiu = ['tort', 'pàmfil', 'gros', 'curt', 'gamarús']
    let txt = await prompt('Escriu dos números entre 1 i 5 separats per espai: ')


    prompt.end()
}

main()
