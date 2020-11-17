
let taulellAmple = 500  // Iniciem aquests valors com al CSS
let taulellAlt = 400

let refJugador = null   // Iniciem les variables del jugador
let jugadorLeft = 100
let jugadorDireccio = 'cap'

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

    let limitAmple = 0
    let limitAlt = 0

    // Movem el jugador segons les
    // fletxes del teclat apretades

    if (jugadorDireccio == 'esquerra') {
        jugadorLeft = jugadorLeft - 1
    }

    if (jugadorDireccio == 'dreta') {
        jugadorLeft = jugadorLeft + 1
    }

    // Limitem els moviments del jugador

    limitAmple = taulellAmple - 100

    if (jugadorLeft <= 0) {
        jugadorLeft = 0
    }

    if (jugadorLeft >= limitAmple) {
        jugadorLeft = limitAmple
    }

    limitAlt = taulellAlt - 50

    refJugador.style.left = jugadorLeft + 'px'

    // Movem la pilota segons
    // la direcció corresponent

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

    // Limitem els moviments de la pilota

    limitAmple = taulellAmple - 15  // Perquè 15 és l'ample de la pilota
    limitAlt = taulellAlt - 15      // Perquè 15 és l'alt de la pilota

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

    if (xocPilotaJugador()) {
        if (pilotaDireccio === 'avallDreta') {
            pilotaDireccio = 'amuntDreta'
        }
        if (pilotaDireccio === 'avallEsquerra') {
            pilotaDireccio = 'amuntEsquerra'
        }
        // TODO: augmenta en 1 el valor de la variable marcador        
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

    // Modificar els elements HTML
    refPilota.style.top = pilotaTop + 'px'
    refPilota.style.left = pilotaLeft + 'px'

    // TODO: Posa el valor refMarcador.innerHTML
    //       amb la puntuació de la variable 'marcador'

    // Tornar a executar la funció 'run'
    // (al següent cicle de refresc)
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

// Aquesta funcio retorna 'true' si
// la pilota xoca amb el jugador
function xocPilotaJugador () {

    let pilotaPartInferior = pilotaTop + 15     // És la posició top de la pilota més la seva alçada (15)
    let pilotaMeitatX = pilotaLeft + 7.5        // És la posició left del jugador més la meitat del seu ample (7.5)
    let jugadorTop = 350                        // És la posició top del jugador, segons el CSS (350)
    let jugadorLimitDreta = jugadorLeft + 100   // És la posició del cantó dret del jugador, on està més el seu ample (100) 
    let rst = false

    if (pilotaPartInferior >= jugadorTop &&
        pilotaMeitatX >= jugadorLeft && 
        pilotaMeitatX <= jugadorLimitDreta) {

        rst = true
    }
    
    return rst
}