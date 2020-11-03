const prompt = require('prompt-promise');

/*

En aquest seguit d'exercicis implementarem un joc 
tipus 'buscamines' que funciona des del terminal.

En aquest exercici la sortida esperada és:

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

    process.stdout.write('\033c') // Aquest codi el terminal

    console.log('# 0 1 2')
    dibuixaFiles (taulell)
}

function intentaJugada (comanda, taulell) {

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
        console.log("Escull una casella (columna,fila) o escriu 'sortir'")
        comanda = await prompt("Escull una casella (columna,fila) o escriu 'sortir': ")
        if (comanda === 'sortir') {
            sortir = true
            // TODO: posa a certa, la variable 'abandona' de l'objecte 'resultats'
        } else {
            // TODO: crida la funció 'intentaJugada' amb els paràmetres 'comanda' i 'taulell'
            //       guarda el resultat d'aquesta crida a la variable 'jugadaValida'
        }
    }

    dibuixaTaulell(taulell)

    return resultats
}

function mostraResultats (resultats) {

    console.log("Resultats de la partida:")
}