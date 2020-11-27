let taulellAmple = 500  // Iniciem aquests valors com al CSS
let taulellAlt = 400

let refJugador = null   // Iniciem les variables del jugador
let jugadorLeft = 100
let jugadorDireccio = 'quiet'

let refPilota = null    // Iniciem les variables de la pilota
let pilotaTop = 200
let pilotaLeft = 250
let pilotaDireccio = 'avallDreta'

let refMarcador = null  // Iniciem les variables del marcador
let marcador = 0

function init() {

    // Iniciem les funcions de captura de tecles
    document.body.addEventListener('keydown', teclaApretada)
    document.body.addEventListener('keyup',   teclaAlliberada)

    // Agafem les referències
    refJugador = document.getElementById('jugador')
    refPilota = document.getElementById('pilota')
    // TODO: Inicia la variable 'refMarcador' amb l'objecte HTML que té id='marcador'

    // Iniciem el bucle del joc
    run()
}

function run () {

    mouJugador()
    xocJugadorTaulell()

    mouPilota()
    xocPilotaTaulell()
    xocPilotaJugador()

    // Actualitzem els valors dels elements HTML
    refJugador.style.left = jugadorLeft + 'px'
    refPilota.style.top = pilotaTop + 'px'
    refPilota.style.left = pilotaLeft + 'px'

    // TODO: Posa el valor refMarcador.innerHTML
    //       amb la puntuació de la variable 'marcador'

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
        // TODO: disminueix en 5 el valor de la variable marcador
    }
}

function xocPilotaJugador () {
    
    let xoquen = false

    let rectangleJugador = {x: jugadorLeft, y: 350,       width: 100, height: 5 } // Segons CSS
    let rectanglePilota  = {x: pilotaLeft,  y: pilotaTop, width: 15,  height: 15 }
   
    if (rectangleJugador.x < (rectanglePilota.x + rectanglePilota.width) &&
        rectangleJugador.y < (rectanglePilota.y + rectanglePilota.height) &&
        rectanglePilota.x  < (rectangleJugador.x + rectangleJugador.width) &&
        rectanglePilota.y  < (rectangleJugador.y + rectangleJugador.height)) {
        xoquen = true
        // TODO: augmenta en 1 el valor de la variable marcador
    }

    if (xoquen) {
        if (pilotaDireccio === 'avallDreta') {
            pilotaDireccio = 'amuntDreta'
            pilotaTop = 335 // Que és 350 - 15 de l'alt de la pilota
        } else if (pilotaDireccio === 'avallEsquerra') {
            pilotaDireccio = 'amuntEsquerra'
            pilotaTop = 335
        } else if (pilotaDireccio === 'amuntDreta') {
            pilotaDireccio = 'avallDreta'
            pilotaTop = 355 // Que és 350 + 5 de l'alt del jugador
        } else if (pilotaDireccio === 'amuntEsquerra') {
            pilotaDireccio = 'avallEsquerra'
            pilotaTop = 355
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