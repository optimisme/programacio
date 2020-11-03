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

    process.stdout.write('\033c') // Aquest codi neteja el terminal

    console.log('# 0 1 2')
    dibuixaFiles (taulell)
}

function intentaJugada (comanda, taulell) {

    let arr = comanda.split(',')
    let x = arr[0]
    let y = arr[1]

    if (x >= 0 && x <= 2 && y >= 0 && y <= 2 && taulell[y][x] === '-') {
        taulell[y][x] = 'O'
        return true
    } else {
        return false
    }
}

function jugaOrdinador (taulell) {

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
    let liniesPossibles = [
        [{x:0, y: 0}, {x: 1, y: 1}, {x: 2, y: 2}],
        [{x:1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}],
    ]

    // TODO: - Al 3 en ralla només hi ha 8 tipus de linies possibles:
    //            les dues que fan una creu a les diagonals
    //            les dues que fan una creu (vertical i horitzontal)
    //            les horitzontals (a dalt i a baix) i les verticals (dreta i esquerra)
    //         a l'array anterior, hi ha l'exemple de com definir les
    //         dues linies que fan la creu diagonal
    //       - Afegeix les 6 linies que falten a l'array 'liniesPossibles'

    while (sortir === false) {
        dibuixaTaulell(taulell)
        comanda = await prompt("Escull una casella (columna,fila) o escriu 'sortir': ")
        if (comanda === 'sortir') {
            sortir = true
            resultats.abandona = true
        } else {
            jugadaValida = intentaJugada(comanda, taulell)

            // TODO: afegeix una condició, de manera que si 'jugadaValida' és certa
            //       - Incrementi en 1 el valor de la variable 'intents de l'objecte 'resultats'
            //       - Cridi a la funcio 'dibuixaTaulell' amb la variable 'taulell' com a paràmetre
            //       - Esperi l'entrada de l'usuari, amb un 'await prompt' i el text "Ara jugarà l'\ordinador"
            //       - Cridi la funció 'jugaOrdinador' amb 'taulell' i 'liniesPossibles' com a paràmetres
        }
    }

    dibuixaTaulell(taulell)

    return resultats
}

function mostraResultats (resultats) {

    console.log("Resultats de la partida:")
}