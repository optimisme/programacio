let taulellAmple = 500  // Iniciem aquests valors com al CSS
let taulellAlt = 400

let refJugador = null   // Iniciem les variables del jugador
let jugadorLeft = 100
let jugadorDireccio = 'quiet'

let refPilota = null    // Iniciem les variables de la pilota
let pilotaTop = 200
let pilotaLeft = 250
let pilotaDireccio = 'avallDreta'

function init() {

    // Iniciem les funcions de captura de tecles
    document.body.addEventListener('keydown', teclaApretada)
    document.body.addEventListener('keyup',   teclaAlliberada)

    // Agafem les referències
    refJugador = document.getElementById('jugador')
    refPilota = document.getElementById('pilota')

    // Iniciem el bucle del joc
    run()
}

function run () {

    mouJugador()
    xocJugadorTaulell()

    mouPilota()
    xocPilotaTaulell()
    // TODO: Crida a la funció 'xocPilotaJugador()'

    // Actualitzem els valors dels elements HTML
    refJugador.style.left = jugadorLeft + 'px'
    refPilota.style.top = pilotaTop + 'px'
    refPilota.style.left = pilotaLeft + 'px'

    // Tornar a executar la funció 'run'
    // (al següent cicle de refresc)
    requestAnimationFrame(run)
}

function mouJugador () {

    if (jugadorDireccio == 'esquerra') {
        jugadorLeft = jugadorLeft - 1
    }

    if (jugadorDireccio == 'dreta') {
        jugadorLeft = jugadorLeft + 1
    }
}

function xocJugadorTaulell () {

    let posicioMaxJugador = taulellAmple - 100

    if (jugadorLeft <= 0) {
        jugadorLeft = 0
    }
    
    if (jugadorLeft >= posicioMaxJugador) {
        jugadorLeft = posicioMaxJugador
    }
}

function mouPilota () {

    switch (pilotaDireccio) {
        case 'avallDreta':
            pilotaTop = pilotaTop + 1
            pilotaLeft = pilotaLeft + 1
            break
        case 'avallEsquerra':
            pilotaTop = pilotaTop + 1
            pilotaLeft = pilotaLeft - 1
            break
        case 'amuntDreta':
            pilotaTop = pilotaTop - 1
            pilotaLeft = pilotaLeft + 1
            break
        case 'amuntEsquerra':
            pilotaTop = pilotaTop - 1
            pilotaLeft = pilotaLeft - 1
            break
    }
}

function xocPilotaTaulell () {

    let limitAmple = taulellAmple - 15  // Perquè 15 és l'ample de la pilota
    let limitAlt = taulellAlt - 15      // Perquè 15 és l'alt de la pilota

    if (pilotaLeft <= 0) {
        if (pilotaDireccio === 'avallEsquerra') {
            pilotaDireccio = 'avallDreta'
        }
        if (pilotaDireccio === 'amuntEsquerra') {
            pilotaDireccio = 'amuntDreta'
        }
    }

    if (pilotaLeft >= limitAmple) {
        if (pilotaDireccio === 'avallDreta') {
            pilotaDireccio = 'avallEsquerra'
        }
        if (pilotaDireccio === 'amuntDreta') {
            pilotaDireccio = 'amuntEsquerra'
        }
    }

    if (pilotaTop <= 0) {
        if (pilotaDireccio === 'amuntEsquerra') {
            pilotaDireccio = 'avallEsquerra'
        }
        if (pilotaDireccio === 'amuntDreta') {
            pilotaDireccio = 'avallDreta'
        }
    }

    if (pilotaTop >= limitAlt) {
        if (pilotaDireccio === 'avallDreta') {
            pilotaDireccio = 'amuntDreta'
        }
        if (pilotaDireccio === 'avallEsquerra') {
            pilotaDireccio = 'amuntEsquerra'
        }
    }
}

function xocPilotaJugador () {
    
    let xoquen = false

    let rectangleJugador = {x: jugadorLeft, y: 350,       width: 100, height: 5 } // Segons CSS
    let rectanglePilota  = {x: pilotaLeft,  y: pilotaTop, width: 15,  height: 15 }

    let distanciaLeft = 0
    let distanciaTop = 0
    
    if (rectangleJugador.x < (rectanglePilota.x + rectanglePilota.width) &&
        rectangleJugador.y < (rectanglePilota.y + rectanglePilota.height) &&
        rectanglePilota.x  < (rectangleJugador.x + rectangleJugador.width) &&
        rectanglePilota.y  < (rectangleJugador.y + rectangleJugador.height)) {
        xoquen = true
    }

    if (xoquen) {
        distanciaLeft = pilotaLeft - jugadorLeft
        distanciaTop = pilotaTop - 350 // 300 és la posició 'top' del jugador

        if (pilotaDireccio === 'avallDreta') {
            pilotaDireccio = 'amuntDreta'
            pilotaTop = 335 // Que és 350 - 15 de l'alt de la pilota
        } else if (pilotaDireccio === 'avallEsquerra') {
            // TODO: Si la pilota xoca amb el jugador
            //       en la direcció 'avallEsquerra'
            //       canvia la direcció de la pilota
            //       a 'amuntEsquerra'
            //       i posa la pilota a la posició 'top' 335
            //       on 335 = 350 - 15 de l'alt de la pilota
        } else if (pilotaDireccio === 'amuntDreta') {
            pilotaDireccio = 'avallDreta'
            pilotaTop = 355 // Que és 350 + 5 de l'alt del jugador
        } else if (pilotaDireccio === 'amuntEsquerra') {
            // TODO: Si la pilota xoca amb el jugador
            //       en la direcció 'amuntEsquerra'
            //       canvia la direcció de la pilota
            //       a 'avallEsquerra'
            //       i posa la pilota a la posició 'top' 365
            //       on 355 = 350 + 5 de l'alt del jugador
        }
    }
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
                jugadorDireccio = 'quiet'
            }
            break
        case 'ArrowRight': 
            if (jugadorDireccio === 'dreta') {
                jugadorDireccio = 'quiet'
            }
            break
        }
}