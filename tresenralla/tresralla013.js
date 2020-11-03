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

function buscaJugadaX (taulell, linia) {
    let posicio = {trobada: false, x: 0, y: 0 }
    let casella0 = taulell[linia[0].y][linia[0].x]
    let casella1 = taulell[linia[1].y][linia[1].x]
    let casella2 = taulell[linia[2].y][linia[2].x]

    if (casella0 == 'O' && casella1 == 'O' && casella2 == '-') {
        posicio.trobada = true
        posicio.x = linia[2].x
        posicio.y = linia[2].y
    } else if (casella0 == 'O' && casella1 == '-' && casella2 == 'O') {
        posicio.trobada = true
        posicio.x = linia[1].x
        posicio.y = linia[1].y
    } else if (casella0 == '-' && casella1 == 'O' && casella2 == 'O') {
        posicio.trobada = true
        posicio.x = linia[0].x
        posicio.y = linia[0].y
    }

    // Si no ha trobat una posició i la 0,0 està ocupada, en busquem una altre
    if (taulell[0][0] != '-' && posicio.trobada == false) {
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
    let posicio = {trobada: false, x: 0, y: 0 }

    posicio = buscaJugadaX(taulell, liniesPossibles[0])
    if (posicio.trobada === false) { posicio = buscaJugadaX(taulell, liniesPossibles[1]) }
    if (posicio.trobada === false) { posicio = buscaJugadaX(taulell, liniesPossibles[2]) }
    if (posicio.trobada === false) { posicio = buscaJugadaX(taulell, liniesPossibles[3]) }
    if (posicio.trobada === false) { posicio = buscaJugadaX(taulell, liniesPossibles[4]) }
    if (posicio.trobada === false) { posicio = buscaJugadaX(taulell, liniesPossibles[5]) }
    if (posicio.trobada === false) { posicio = buscaJugadaX(taulell, liniesPossibles[6]) }
    if (posicio.trobada === false) { posicio = buscaJugadaX(taulell, liniesPossibles[7]) }

    taulell[posicio.y][posicio.x] = 'X'
}

function esLinia (jugador, taulell, linia) {

    if (taulell[linia[0].y][linia[0].x] == jugador &&
        taulell[linia[1].y][linia[1].x] == jugador &&
        taulell[linia[2].y][linia[2].x] == jugador) {
        return true
    } else {
        return false
    }
}

function partidaAcabada (taulell, liniesPossibles) {
    let cnt = 0

    for (cnt = 0; cnt < liniesPossibles.length; cnt = cnt + 1) {
        if (esLinia('O', taulell, liniesPossibles[cnt])) {
            return 'O'
        }
    }

    for (cnt = 0; cnt < liniesPossibles.length; cnt = cnt + 1) {
        if (esLinia('X', taulell, liniesPossibles[cnt])) {
            return 'X'
        }
    }

    // TODO: Comprova si totes les caselles del taulell tenen un caràcter diferent a '-'
    //       en aquest cas (que totes siguin diferents a '-') retorna el text 'empat'

    return 'ningu'
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
                resultats.guanyador = partidaAcabada(taulell, liniesPossibles)
                if (resultats.guanyador == 'ningu') {
                    await prompt("Ara jugarà l\'ordinador, apreta 'intro'")
                    jugaOrdinador(taulell, liniesPossibles)
                    resultats.guanyador = partidaAcabada(taulell, liniesPossibles)
                } 
                if (resultats.guanyador != 'ningu') {
                    sortir = true
                }
            }
        }
    }

    dibuixaTaulell(taulell)

    return resultats
}

function mostraResultats (resultats) {

    console.log("Resultats de la partida:")
}