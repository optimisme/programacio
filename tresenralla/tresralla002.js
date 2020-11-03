const prompt = require('prompt-promise');

/*

En aquest seguit d'exercicis implementarem un joc 
tipus 'buscamines' que funciona des del terminal.

En aquest exercici la sortida esperada és:

    La funció "jugar" serà el bucle d'aquest joc
      aquesta funció reb un "taulell" com a paràmetre
      aquesta funció retorna els resultats de la partida
    La funció "jugar" ha rebut com a paràmetre []
    { intents: 0, abandona: false, guanya: false }
*/

async function main () {

    let taulell = []
    let resultats = {}

    taulell = iniciaTaulell()

    // TODO: Crida aquí la funció "jugar"
    // amb un 'await' davant de la crida,
    // passa-li la variable 'taulell' com a paràmetre
    // guarda el seu retorn a la variable resultats

    console.log(resultats)

    prompt.end()
}

main()

function iniciaTaulell () {

    let taulell = []

    return taulell
}

async function jugar (taulell) {

    let sortir = false
    let resultats = {
        intents: 0,
        abandona: false,
        guanyador: 'ningu'
    }
    let comanda = ''
    let jugadaValida = false

    console.log('La funció "jugar" serà el bucle d\'aquest joc')
    console.log('   aquesta funció reb un "taulell" com a paràmetre')
    console.log('   aquesta funció retorna els resultats de la partida')
    console.log('La funció "jugar" ha rebut com a paràmetre', taulell)


    return resultats
}