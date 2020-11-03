const prompt = require('prompt-promise');

/*

En aquest seguit d'exercicis implementarem un joc 
tipus 'buscamines' que funciona des del terminal.

En aquest exercici la sortida esperada és:

    # 0 1 2
    0 - - - 
    1 - - - 
    2 - - - 
    Escull una casella (columna,fila) o escriu 'sortir': sortir
    Resultats de la partida:

En cas que l'usuari escrigui algo diferent a 'sortir' es repeteix la pregunta
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

    let taulell = [
        ['-', '-', '-'],
        ['-', '-', '-'],
        ['-', '-', '-']
    ]

    return taulell
}

function dibuixaFila (fila) {
    let cntColumna = 0
    let text = ''

    for (cntColumna = 0; cntColumna < fila.length; cntColumna = cntColumna + 1) {
        text = text + fila[cntColumna] + ' '
    }

    return text
}

function dibuixaFiles (taulell) {
    let cntFila = 0
    let fila = []
    let text = ''

    for (cntFila = 0; cntFila < taulell.length; cntFila = cntFila + 1) {
        fila = taulell[cntFila]
        text = cntFila + ' ' + dibuixaFila(fila)
        console.log(text)
    }
}

function dibuixaTaulell (taulell) {

    process.stdout.write('\033c') // Aquest codi neteja el terminal

    console.log('# 0 1 2')
    dibuixaFiles (taulell)
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

    while (sortir === false) {
        dibuixaTaulell(taulell)
        // TODO: demana a l'usuari el següent text
        //       "Escull una casella (columna,fila) o escriu 'sortir': "
        //       guarda el que introdueix l'usuari a la variable 'comanda'
        
        // TODO: fes una comparació, si la variable 'comanda' === 'sortir'
        //       aleshores possa la variable 'sortir' a certa
        //       en qualsevol altre cas, escriu 'Seguir jugant' per pantalla
    }

    dibuixaTaulell(taulell)

    return resultats
}

function mostraResultats (resultats) {

    console.log("Resultats de la partida:")
}