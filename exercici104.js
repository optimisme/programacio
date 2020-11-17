
let taulellAmple = 500  // Iniciem aquests valors com al CSS
let taulellAlt = 400

let refJugador = null   // Iniciem les variables del jugador
let jugadorLeft = 100
let jugadorDireccio = 'cap'

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

    // TODO: Afegeix una condició, si
    //       la funcio 'xocPilotaJugador()' 
    //       torna cert, aleshores fer el
    //       mateix que es fa a la condició
    //       'pilotaTop >= limitAlt'

    if (pilotaTop >= limitAlt) {
        if (pilotaDireccio === 'avallDreta') {
            pilotaDireccio = 'amuntDreta'
        }
        if (pilotaDireccio === 'avallEsquerra') {
            pilotaDireccio = 'amuntEsquerra'
        }
    }

    // Modificar els elements HTML
    refPilota.style.top = pilotaTop + 'px'
    refPilota.style.left = pilotaLeft + 'px'

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

    // TODO: Inicia les següents variables,
    //       segons la descripció del seu valor
    let pilotaPartInferior = 0  // És la posició top de la pilota més la seva alçada (15)
    let pilotaMeitatX = 0       // És la posició left del jugador més la meitat del seu ample (7.5)
    let jugadorTop = 0          // És la posició top del jugador, segons el CSS (350)
    let jugadorLimitDreta = 0   // És la posició del cantó dret del jugador, on està més el seu ample (100) 
    let rst = false

    if (pilotaPartInferior >= jugadorTop &&
        pilotaMeitatX >= jugadorLeft && 
        pilotaMeitatX <= jugadorLimitDreta) {

        rst = true
    }
    
    return rst
}