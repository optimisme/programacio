const prompt = require('prompt-promise');

/*

En aquest seguit d'exercicis implementarem un joc 
tipus 'buscamines' que funciona des del terminal.

En aquest exercici podràs jugar, però no es detecterà cap guanyador
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

function intentaJugadaO (comanda, taulell) {

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

function buscaJugadaX (taulell, posicions) {
    let posicio = {linia: false, x: 0, y: 0 }
    let casella0 = taulell[posicions[0].y][posicions[0].x]
    let casella1 = taulell[posicions[1].y][posicions[1].x]
    let casella2 = taulell[posicions[2].y][posicions[2].x]

    if (casella0 == 'O' && casella1 == 'O' && casella2 == '-') {
        posicio.linia = true
        posicio.x = posicions[2].x
        posicio.y = posicions[2].y
    } else if (casella0 == 'O' && casella1 == '-' && casella2 == 'O') {
        posicio.linia = true
        posicio.x = posicions[1].x
        posicio.y = posicions[1].y
    } else if (casella0 == '-' && casella1 == 'O' && casella2 == 'O') {
        posicio.linia = true
        posicio.x = posicions[0].x
        posicio.y = posicions[0].y
    }

    if (taulell[0][0] != '-' && posicio.x == 0 && posicio.y == 0) {
        if (taulell[1][1] == '-')       { posicio.x = 1; posicio.y = 1 } 
        else if (taulell[0][2] == '-')  { posicio.x = 2; posicio.y = 0 } 
        else if (taulell[2][0] == '-')  { posicio.x = 0; posicio.y = 2 } 
        else if (taulell[2][2] == '-')  { posicio.x = 2; posicio.y = 2 } 
        else if (taulell[0][1] == '-')  { posicio.x = 1; posicio.y = 0 } 
        else if (taulell[1][0] == '-')  { posicio.x = 0; posicio.y = 1 } 
        else if (taulell[1][2] == '-')  { posicio.x = 2; posicio.y = 1 } 
        else if (taulell[2][1] == '-')  { posicio.x = 1; posicio.y = 2 }
    }

    return posicio
}

function jugaOrdinador (taulell, liniesPossibles) {
    let posicio = {linia: false, x: 0, y: 0 }

    posicio = buscaJugadaX(taulell, liniesPossibles[0])
    if (posicio.linia === false) { posicio = buscaJugadaX(taulell, liniesPossibles[1]) }
    if (posicio.linia === false) { posicio = buscaJugadaX(taulell, liniesPossibles[2]) }
    if (posicio.linia === false) { posicio = buscaJugadaX(taulell, liniesPossibles[3]) }
    if (posicio.linia === false) { posicio = buscaJugadaX(taulell, liniesPossibles[4]) }
    if (posicio.linia === false) { posicio = buscaJugadaX(taulell, liniesPossibles[5]) }
    if (posicio.linia === false) { posicio = buscaJugadaX(taulell, liniesPossibles[6]) }
    if (posicio.linia === false) { posicio = buscaJugadaX(taulell, liniesPossibles[7]) }

    taulell[posicio.y][posicio.x] = 'X'
}

function partidaAcabada (taulell) {

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
        [{x:2, y: 0}, {x: 1, y: 1}, {x: 0, y: 2}],
        [{x:0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}],
        [{x:0, y: 0}, {x: 0, y: 1}, {x: 0, y: 2}],
        [{x:2, y: 0}, {x: 2, y: 1}, {x: 2, y: 2}],
        [{x:0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}],
        [{x:0, y: 2}, {x: 1, y: 2}, {x: 2, y: 2}]
    ]

    while (sortir === false) {
        dibuixaTaulell(taulell)
        comanda = await prompt("Escull una casella (columna,fila) o escriu 'sortir': ")
        if (comanda === 'sortir') {
            sortir = true
            resultats.abandona = true
        } else {
            jugadaValida = intentaJugadaO(comanda, taulell)
            if (jugadaValida) {
                resultats.intents = resultats.intents + 1
                dibuixaTaulell(taulell)
                // TODO: guarda a la variable 'guanyador' de l'objecte 'resultats'
                //       el retorn de la funció 'partidaAcabada' quan la crides
                //       amb els paràmetres 'taulell' i 'liniesPossibles'

                // TODO: Afegeix una condició que comprovi que
                //       la variable 'guanyador' de l'objecte 'resultats' és igual a 'ningu'
                //       si és així, dins d'aquesta comprovació:
                //       - Demana amb 'await prompt' el text: "Ara jugarà l\'ordinador, apreta 'intro'"
                //       - Crida a la funció 'jugaOrdinador' amb parametres 'taulell' i 'liniesPossibles'
                //       - Guarda a la variable 'guanyador' de l'objecte 'resultats
                //         el retorn de la funció 'partidaAcabada'

                // TODO: Afegeix una condició que comprovi que 
                //       la variable 'guanyador' de l'objecte 'resultats' és diferent de 'ningu'
                //       si és així, dins d'aquesta comprovació posa la variable 'sortir' a certa
            }
        }
    }

    dibuixaTaulell(taulell)

    return resultats
}

function mostraResultats (resultats) {

    console.log("Resultats de la partida:")
}