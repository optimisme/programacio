const prompt = require('prompt-promise');

/*

En aquest seguit d'exercicis implementarem un joc 
tipus 'buscamines' que funciona des del terminal.

En aquest exercici la sortida esperada és:

    Aquí s'ha de dibuixar el taulell segons els continguts del paràmetre "taulell"
    Resultats de la partida:
*/

async function main () {

    let taulell = []
    let resultats = {}

    taulell = iniciaTaulell()

    resultats = await jugar(taulell)

    mostraResultats(resultats)

    prompt.end()
}

main()

function iniciaTaulell () {

    let taulell = []

    return taulell
}

// TODO: Afegeix aquí una funcio anomenada "dibuixaTaulell", 
//       que tingui com a paràmetre un camp anomenat "taulell"
//       i que no retorni cap valor
// De moment, aquesta funció que escrigui: 
// Aquí s'ha de dibuixar el taulell segons els continguts del paràmetre "taulell"

async function jugar (taulell) {

    let sortir = false
    let resultats = {
        intents: 0,
        abandona: false,
        guanyador: 'ningu'
    }
    let comanda = ''
    let jugadaValida = false

    // TODO: Crida aquí a la funció "dibuixaTaulell" i passa-li "taulell" com a paràmetre

    return resultats
}

function mostraResultats (resultats) {

    console.log("Resultats de la partida:")
}