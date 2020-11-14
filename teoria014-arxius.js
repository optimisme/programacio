const fs = require('fs')

/*

Aquest és un exemple de programa mínim,
executa'l amb:

    node teoria014-arxius.js

*/

async function escriuArxiu (nom, text) {

    try {
        await fs.promises.writeFile(nom, text, { encoding: 'utf8' })
    } catch (e) {
        console.log(`Hi ha hagut un al esrciure l'arxiu '${nom}'`)
    }
}

async function afegeixArxiu (nom, text) {

    try {
        await fs.promises.appendFile(nom, text, { encoding: 'utf8' })
    } catch (e) {
        console.log(`Hi ha hagut un al afegir dades a l'arxiu '${nom}'`)
    }
}

async function esborrarArxiu (arxiu) {

    try {
        await fs.promises.unlink(arxiu)
    } catch (e) {
        if (e.code != 'ENOENT') {
            console.log(`Hi ha hagut un error al esborrar l'arxiu '${arxiu}'`)
        } else {
            console.log(`L'arxiu '${arxiu}' no es pot esborrar perquè no existeix`)
        }
    }
}

async function crearCarpeta (nom) {

    try {
        await fs.promises.mkdir(nom)
    } catch (e) {
        if (e.code != 'EEXIST') {
            console.log(`Hi ha hagut un al crear la carpeta '${nom}'`)
        } else {
            console.log(`La carpeta '${nom}' ja existeix`)
        }
    }
}

async function copiarArxiu (arxiu, desti) {

    try {
        await fs.promises.copyFile(arxiu, desti)
    } catch (e) {
        console.log(`Hi ha hagut un al copiar l'arxiu '${arxiu}' cap a '${desti}'`)
    }
}

async function llistarArxius (directori) {

    let arxius = []

    try {
        arxius = await fs.promises.readdir(directori)
    } catch (e) {
        if (e.code != 'ENOENT') {
            console.log(`Hi ha hagut un error al llistar el directori '${directori}'`)
        } else {
            console.log(`El directori '${directori}' no es pot llistar perquè no existeix`)
        }
    }

    return arxius
}
async function esborrarCarpeta (directori) {

    try {
        await fs.promises.rmdir(directori)
    } catch (e) {
        if (e.code != 'ENOENT') {
            console.log(`Hi ha hagut un error al esborrar el directori '${directori}'`)
        } else {
            console.log(`El directori '${directori}' no es pot esborrar perquè no existeix`)
        }
    }
}

async function main () {

    // Els llenguatges de programació
    // permeten operar amb arxius, així:
    // - Es poden guardar i llegir dades
    // - Es poden fer operacions en massa sobre arxius
    // ...

    // Per poder fer operacions amb arxius
    // amb 'node', cal cridar la llibreria
    // const fs = require('fs')

    // En aquesta teoria no hi ha exemples,
    // les funcions amb arxius anteriors
    // han de ser autoexplicatives

    console.log(`No hi ha cap exemple per aquesta teoria`)

}

main()
