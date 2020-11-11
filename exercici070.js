const prompt = require('prompt-promise')
const fs = require('fs')

/*

Modifica el següent programa segons les instruccions

*/

async function llegirArxiuJSON (nom) {

    let obj = {}

    try {
        obj = JSON.parse(await fs.promises.readFile(nom, 'utf-8'))
    } catch (e) {
        console.log(e)
    }

    return obj
}


async function main () {

    let cnt = 0
    let llista = await llegirArxiuJSON('./exercici070.json')
    let consola = {}
    let data0 = new Date()
    let data1 = new Date()
    let arr = []

    // Llista el nom de totes les consoles fabricades durant els anys 80
    arr = []
    for (cnt = 0; cnt < llista.length; cnt = cnt + 1) {
        consola = llista[cnt]
        data0 = new Date(consola.data)
        data1 = new Date('1990-1-1')

        if (data0.getTime() < data1.getTime()) {
            arr.push(consola.nom)
        }
    }
    console.log(`Consoles fabricades als 80: ${arr}`)

    // Llista totes les consoles més ràpides de 100MHz (0.1Ghz)
    arr = []
    // TODO: Emplena l'array segons la consulta anterior
    console.log(`Consoles més ràpides de 100MHz: ${arr}`)

    // Llista totes les consoles fabricades per Sega
    arr = []
    // TODO: Emplena l'array segons la consulta anterior
    console.log(`Consoles fabricades per Sega: ${arr}`)

    // Llista totes les consoles amb processador PowerPC
    arr = []
    // TODO: Emplena l'array segons la consulta anterior
    console.log(`Consoles fabricades amb processador PowerPC: ${arr}`)

    // Llista totes les consoles de sony que fan servir AMD
    arr = []
    // TODO: Emplena l'array segons la consulta anterior
    console.log(`Consoles de Sony amb processador AMD: ${arr}`)

    // Llista totes les consoles de Apple, Atari o Commodore
    arr = []
    // TODO: Emplena l'array segons la consulta anterior
    console.log(`Consoles alternatives rares: ${arr}`)

    // Llista totes les consoles de Microsoft de color blanc
    arr = []
    // TODO: Emplena l'array segons la consulta anterior
    console.log(`Consoles blanques de Microsoft: ${arr}`)

    // Llista totes que han venut igual o més de 100 milions d'unitats
    arr = []
    // TODO: Emplena l'array segons la consulta anterior
    console.log(`Consoles que han venut més de 100M d'unitat: ${arr}`)

    prompt.end()
}

main()