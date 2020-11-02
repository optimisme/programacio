const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui:

    En Pep està trist
    Després de parlar amb tu en Pep està content

*/

async function main () {

    let anims = 'trist'

    console.log('En Pep està', anims)

    anims = 'content'

    console.log('Després de parlar amb tu en Pep està', anims)

}

main()
