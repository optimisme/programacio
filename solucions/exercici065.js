const prompt = require('prompt-promise')
const fs = require('fs')

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui:

    Escriu el text que volguis guardar a l'arxiu: Hola que tal
    Hola que tal
*/

async function llegirArxiu (nom) {

    let contingutsArxiu = await fs.promises.readFile(nom, 'utf-8')

    return contingutsArxiu
}

async function escriuArxiu (nom, text) {

    await fs.promises.writeFile(nom, text, { encoding: 'utf8' })
}

async function main () {

    let text = await prompt("Escriu el text que volguis guardar a l'arxiu: ")
    let nomArxiu = './exercici065.txt'

    // Crida la funció 'escriuArxiu' i passa-li com a paràmetres
    // nomArxiu i la variable text
    // posa 'await' abans de la funció, perquè esperi a l'escriptura
    await escriuArxiu(nomArxiu, text)

    console.log(await llegirArxiu(nomArxiu))

    prompt.end()
}

main()