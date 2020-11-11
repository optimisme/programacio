const prompt = require('prompt-promise')
const fs = require('fs')

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui:

    Lorem Ipsum is simply dummy text of the printing 
    and typesetting industry. Lorem Ipsum has been 
    the industry's standard dummy text ever since 
    ...

*/

async function llegirArxiu (nom) {

    let contingutsArxiu = await fs.promises.readFile(nom, 'utf-8')

    return contingutsArxiu
}

async function main () {

    // TODO: Crida la funció 'llegirArxiu' i passa-li com a paràmetre
    //       './exercici064.txt'
    //       mostra el resultat per pantalla

    prompt.end()
}

main()