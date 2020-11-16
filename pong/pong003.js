/*
    Al final d'aquest exercici:

    - Has de veure l'animació de moure
      la fletxa fluida quan es deixa el
      teclat apretat en una direcció
      fins als limits del taulell del joc
*/

let cnv = null
let ctx = null

let jugadorX = 200
let jugadorDireccio = 'cap'

function init () {
    document.body.addEventListener('keydown', teclaApretada)
    document.body.addEventListener('keyup',   teclaAlliberada)

    cnv = document.getElementById('cnv')
    ctx = cnv.getContext('2d', { alpha: false })

    run ()
}

function run () {

    // TODO: Modifica el següent switch perquè si
    //       el valor de 'direccio' és 
    //       'dreta', augmenta posicioX en 1

    switch(jugadorDireccio) {
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

    // Pintem el fons de blanc cada vegada
    // que redibuixem la pantalla
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, 500, 400)

    // Dibuixem el rectangle del jugador
    // a la posicio de la variable jugadorX

    ctx.fillStyle = 'black'
    ctx.fillRect(jugadorX, 380, 100, 10)

    requestAnimationFrame(run)
}

function teclaApretada (e) {

    switch (e.key) {
    case 'ArrowLeft':   
        jugadorDireccio = 'esquerra'
        break
    case 'ArrowRight': 
        // TODO: posa direccio a 'dreta'
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
            // TODO: si la direccio és 'dreta'
            //       posa el valor 'cap' a 
            //       la variable 'direccioJugador'
            break
        }
}