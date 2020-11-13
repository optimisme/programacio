const prompt = require('prompt-promise')
const fs = require('fs')

/*

Modifica el següent programa segons les instruccions,
el resultat esperat és:

    Les propietats de l'objecte "persona" són: nom,cognom,edat,cabell,genere
    Propietat "nom", valor: Pepito
    Propietat "cognom", valor: Grillo
    Propietat "edat", valor: 35
    Propietat "cabell", valor: Castany
    Propietat "genere", valor: Neutre
    Les propietats de l'objecte "alumne" són: nom,cognom,grup,edat
    Propietat "nom", valor: Neil
    Propietat "cognom", valor: Armstrong
    Propietat "grup", valor: Ciencies
    Propietat "edat", valor: 25
*/

function crida (a, b, c) {

    console.log(a, b, c)
}

async function main () {

    let cnt = 0
    let propietat = ''

    let persona = {
        nom: 'Pepito',
        cognom: 'Grillo',
        edat: 35,
        cabell: 'Castany',
        genere: 'Neutre'
    }

    let alumne =  {
        nom: 'Neil',
        cognom: 'Armstrong',
        grup: 'Ciencies',
        edat: 25
    }

    // La comanda 'Object.getKeys()' retorna les propietats que
    // hi ha en un objecte, en forma d'array
    let propietatsPersona = Object.keys(persona)
    let propietatsAlumne =  []

    console.log(`Les propietats de l'objecte "persona" són: ${propietatsPersona}`)

    // TODO: fes un bucle que mostri els valors de cada propietat de persona

    // TODO: posa dins la variable 'propietatsAlumne' les propietats 
    //       de l'objecte 'alumne' en forma d'array fent servir 'Object.keys'

    console.log(`Les propietats de l'objecte "alumne" són: ${propietatsAlumne}`)

    // TODO: fes un bucle que mostri els valors de cada propietat de persona

    prompt.end()
}

main()