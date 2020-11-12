const prompt = require('prompt-promise')
const fs = require('fs')

/*

Modifica el següent programa segons les instruccions
per esborrar la carpeta 'copia' i els seus arxius

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

async function esborrarCarpeta (path) {

    try {
        await fs.promises.rmdir(path)
    } catch (e) {
        if (e.code != 'ENOENT') {
            console.log(e)
        }
    }
}

async function esborrarArxiu (arxiu) {

    await fs.promises.unlink(arxiu)
}

async function main () {

    let cnt = ''
    let nom = ''
    let arxius = []

    // Fes servir la funció 'llistarArxius', per
    // tenir la llista dels arxius de la carpeta 'copia'
    // crida la funció amb un 'await' al davant
    // guarda el resultat a la variable 'arxius'
    arxius = await llistarArxius('./copia')

    // Per cada un dels arxius de la carpeta 'copia'
    // esborra l'arxiu amb
    // await esborrarArxiu('copia/' + nom)
    // Escriu per pantalla "S'ha esborrat l'arxiu: " i el nom de l'arxiu
    for (cnt = 0; cnt < arxius.length; cnt = cnt + 1) {
        nom = arxius[cnt]
        await esborrarArxiu('copia/' + nom)
        console.log(`S'ha esborrat l'arxiu: 'copia/${nom}'`)
    }

    // Esborra la carpeta 'copia' fent servir
    // la funció 'esborrarCarpeta'
    // crida la funció amb un 'await' al davant
    await esborrarCarpeta('copia')

    prompt.end()
}

main()