/*
    Al final d'aquest exercici:

    - Has de veure l'animació d'un
      cercle cap avall a la dreta
*/

let cnv = null
let ctx = null

let jugadorX = 200
let jugadorDireccio = 'cap'
let pilotaX = 250
let pilotaY = 200
let pilotaDireccio = 'avallDreta'

function init () {
    document.body.addEventListener('keydown', teclaApretada)
    document.body.addEventListener('keyup',   teclaAlliberada)

    cnv = document.getElementById('cnv')
    ctx = cnv.getContext('2d', { alpha: false })

    run ()
}

function run () {

    switch(jugadorDireccio) {
        case 'dreta':
            jugadorX = jugadorX + 1
            break
        case 'esquerra':
            jugadorX = jugadorX - 1
            break;
    }

    if (jugadorX < 0) {
        jugadorX = 0
    }

    if (jugadorX > 400) {
        jugadorX = 400
    }

    switch(pilotaDireccio) {
        case 'avallDreta':
            pilotaX = pilotaX + 1
            pilotaY = pilotaY + 1
            break
    }

    // Pintem el fons de blanc cada vegada
    // que redibuixem la pantalla
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, 500, 400)

    // Dibuixem el rectangle del jugador
    // a la posicio de la variable jugadorX

    ctx.fillStyle = 'black'
    ctx.fillRect(jugadorX, 380, 100, 10)

    // Dibuixem la pilota a les posicions
    // 'pilotaX' i 'pilotaY'
    ctx.beginPath()
    ctx.arc(pilotaX, pilotaY, 5, 0, 2 * Math.PI)
    ctx.fill()

    requestAnimationFrame(run)
}

function teclaApretada (e) {

    switch (e.key) {
    case 'ArrowLeft':   
        jugadorDireccio = 'esquerra'
        break
    case 'ArrowRight': 
        jugadorDireccio = 'dreta'
        break
    }
}
function teclaAlliberada (e) {
    switch (e.key) {
        case 'ArrowLeft':   
            if (jugadorDireccio === 'esquerra') {
                jugadorDireccio = 'cap'
            }
            break
        case 'ArrowRight': 
        if (jugadorDireccio === 'dreta') {
            jugadorDireccio = 'cap'
        }
            break
        }
}