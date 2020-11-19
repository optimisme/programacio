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
    // TODO: inicia 'refPilota' amb la referència al div amb id 'pilota'

    // Iniciem el bucle del joc
    run()
}

function run () {

    mouJugador()
    xocJugadorTaulell()

    // TODO: crida a la funció 'mouPilota()'
    // TODO: crida a la funció 'xocPilotaTaulell()'

    // Actualitzem els valors dels elements HTML
    refJugador.style.left = jugadorLeft + 'px'

    // TODO: posa el valor 'top' de l'estil de refPilota a "pilotaTop + 'px'"
    // TODO: posa el valor 'left' de l'estil de refPilota a "pilotaLeft + 'px'"

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
            // TODO: Suma o resta un 1 a
            //       pilotaTop i pilotaLeft
            //       per animar la pilota en la
            //       direcció 'avallEsquerra'
            break
        case 'amuntDreta':
            pilotaTop = pilotaTop - 1
            pilotaLeft = pilotaLeft + 1
            break
        case 'amuntEsquerra':
            // TODO: Suma o resta un 1 a
            //       pilotaTop i pilotaLeft
            //       per animar la pilota en la
            //       direcció 'amuntesquerra'
            break
    }
}

function xocPilotaTaulell () {

    let limitAmple = taulellAmple - 15  // Perquè 15 és l'ample de la pilota
    let limitAlt = taulellAlt - 15      // Perquè 15 és l'alt de la pilota

    if (pilotaLeft <= 0) {
        // TODO: Si la pilota xoca conta la part
        //       esquerra de la pantalla, ha de
        //       canviar de direcció:
        //       - Si està amb 'avallEsquerra'
        //         a de canviar a 'avallDreta'
        //       - Si està amb 'amuntEsquerra'
        //         a de canviar a 'amuntDreta'
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
        // TODO: Si la pilota xoca conta la part
        //       superior de la pantalla, ha de
        //       canviar de direcció:
        //       - Si està amb 'amuntEsquerra'
        //         a de canviar a 'avallEsquerra'
        //       - Si està amb 'amuntDreta'
        //         a de canviar a 'avallDreta'
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