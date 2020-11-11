const prompt = require('prompt-promise')
const fs = require('fs')

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui:

    S'ha copiat README.md
    S'ha copiat package-lock.json
    S'ha copiat package.json

*/

async function llistarArxius (directori) {

    let arxius = []

    try {
        arxius = await fs.promises.readdir(directori)
    } catch (e) {
        if (e.code != 'ENOENT') {
            console.log(e)
        }
    }

    return arxius
}

async function crearCarpeta (nom) {

    try {
        await fs.promises.mkdir(nom)
    } catch (e) {
        if (e.code != 'EEXIST') {
            console.log(e)
        }
    }
}

async function copiarArxiu (arxiu, desti) {

    await fs.promises.copyFile(arxiu, desti)
}

async function main () {

    let cnt = ''
    let nom = ''
    let arxius = []

    // TODO: Fes servir la funció 'llistarArxius', per
    //       tenir la llista de la carpeta actual
    //       crida aquesta funció amb un 'await' al davant
    //       guarda la resposta, a la variable 'arxius'
    //       recorda que el directori de la carpeta actual és './'

    // TODO: Crea una carpeta anomenada 'copia' fent servir la funció 'crearCarpeta'
    //       crida aquesta funció amb un 'await' al davant

    // TODO: Per cada un dels arxius de la carpeta actual
    //       que tens guardats a la variable 'arxius'
    //       copia'l a la carpeta 'copia' amb
    //       await copiarArxiu(nom, 'copia/' + nom)
    //       només si el seu nom conté un 'exercici01' o un 'exercici02'
    for (cnt = 0; cnt < arxius.length; cnt = cnt + 1) {
        nom = arxius[cnt]
        if(nom.indexOf('exercici01') >= 0 /* TODO: Aquí falta la condició del 2 */) {
            // TODO: Copia l'arxiu segons l'explicació
        }
            
    }

    console.log(await llistarArxius('./copia/'))

    prompt.end()
}

main()