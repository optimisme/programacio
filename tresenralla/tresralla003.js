const prompt = require('prompt-promise');

/*

En aquest seguit d'exercicis implementarem un joc 
tipus 'buscamines' que funciona des del terminal.

En aquest exercici la sortida esperada és:

    La funció "mostraResultats" mostra els resultats de la partida
      aquesta funció reb un objecte amb els "resultats" com a paràmetre
      aquesta funció no retorna cap informació
*/

async function main () {

    let taulell = []
    let resultats = {}

    taulell = iniciaTaulell()

    resultats = await jugar(taulell)

    // TODO: Crida aquí la funció "mostraResultats"
    // passa-li com a paràmetre els resultats que has
    // agafat de la funció "jugar"

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

    return resultats
}

function mostraResultats (resultats) {

    console.log('La funció "mostraResultats" mostra els resultats de la partida')
    console.log('   aquesta funció reb un objecte amb els "resultats" com a paràmetre')
    console.log('   aquesta funció no retorna cap informació')
}