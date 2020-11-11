const prompt = require('prompt-promise')
const fs = require('fs')

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui:

    Escriu el text que volguis guardar a l'arxiu: Primera linia
    Escriu més text, per afegir a l'arxiu: Segona linia
    Primera linia
    Segona linia

*/

async function llegirArxiu (nom) {

    let contingutsArxiu = await fs.promises.readFile(nom, 'utf-8')

    return contingutsArxiu
}

async function escriuArxiu (nom, text) {

    await fs.promises.writeFile(nom, text, { encoding: 'utf8' })
}

async function afegeixArxiu (nom, text) {

    await fs.promises.appendFile(nom, text, { encoding: 'utf8' })
}

async function main () {

    let text = await prompt("Escriu el text que volguis guardar a l'arxiu: ")
    let nomArxiu = './exercici066.txt'

    await escriuArxiu(nomArxiu, text)

    await afegeixArxiu(nomArxiu, '\n') // '\n' és un salt de linia

    // TODO: Demana a l'usuari que afegeixi un text per a l'arxiu

    // TODO: Afegeix el nou text que ha escrit l'usuari a l'arxiu amb 
    //       la funció 'afegeixArxiu', escriu 'await' abans de cridar la funció

    console.log(await llegirArxiu(nomArxiu))

    prompt.end()
}

main()