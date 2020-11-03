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

    process.stdout.write('\033c') // Aquest codi el terminal

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
    } // TODO: Aqui falta un 'else if' pel case que
      //       casella0 és '-', casella1 és 'O' i casella2 és 'O'
      //       - A dins d'aquest 'else if' has d'informar que 
      //         la variable 'linia' de l'objecte posició és cert
      //       - Has de posar els valors de les variables x i y
      //         de l'objecte posició, segons els valors x i y
      //         de la posició 0 de l'array 'posicions'

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
    // TODO: Les dues linies anteriors, busquen futures linies del jugador pels cassos 0, 1 i 2
    //       acaba de buscar futures linies, pels cassos 3, 4, 5, 6 i 7

    taulell[posicio.y][posicio.x] = 'X'
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
                await prompt("Ara jugarà l\'ordinador, apreta 'intro'")
                jugaOrdinador(taulell, liniesPossibles)
            }
        }
    }

    dibuixaTaulell(taulell)

    return resultats
}

function mostraResultats (resultats) {

    console.log("Resultats de la partida:")
}