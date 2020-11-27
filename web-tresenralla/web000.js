let linies = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

let taulell = ['-', '-', '-', '-', '-', '-', '-', '-', '-']

function apreta(num) {

    let valor = taulell[num]

    if (valor === '-') {
        taulell[num] = 'O'
        jugaOrdinador()
    }

    dibuixaTaulell()
}

function jugaOrdinador () {

    let cnt = 0
    let posicio = -1

    for (cnt = 0; cnt < linies.length; cnt = cnt + 1) {
        posicio = buscaJugada(linies[cnt])
        if (posicio !== -1) break
    }
    
    if (posicio === -1) {
        if (taulell[4] === '-') posicio = 4
        else if (taulell[0] === '-') posicio = 0
        else if (taulell[2] === '-') posicio = 2
        else if (taulell[6] === '-') posicio = 6
        else if (taulell[8] === '-') posicio = 8
        else if (taulell[1] === '-') posicio = 1
        else if (taulell[3] === '-') posicio = 3
        else if (taulell[5] === '-') posicio = 5
        else if (taulell[7] === '-') posicio = 7
    }

    taulell[posicio] = 'X'
}

function buscaJugada (linia) {

    let posicio = -1
    let casella0 = taulell[linia[0]]
    let casella1 = taulell[linia[1]]
    let casella2 = taulell[linia[2]]

    if (casella0 == '-' && casella1 == 'O' && casella2 == 'O') {
        posicio = linia[0]
    } else if (casella0 == 'O' && casella1 == '-' && casella2 == 'O') {
        posicio = linia[1]
    } else if (casella0 == 'O' && casella1 == 'O' && casella2 == '-') {
        posicio = linia[2]
    }

    return posicio
}

function dibuixaTaulell () {
    let cnt = 0
    let ref = null

    for (cnt = 0; cnt < taulell.length; cnt = cnt + 1) {
        ref = document.getElementById('num' + cnt)
        ref.innerHTML = taulell[cnt]
    }
}