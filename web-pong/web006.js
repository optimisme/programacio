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

let fps = null          // Iniciem la variable que gestionarà els FPS

function init() {

    // Iniciem l'objecte fps
    fps = new FPS()

    // Iniciem les funcions de captura de tecles
    document.body.addEventListener('keydown', teclaApretada)
    document.body.addEventListener('keyup',   teclaAlliberada)

    // Agafem les referències
    refJugador = document.getElementById('jugador')
    refPilota = document.getElementById('pilota')
    refMarcador = document.getElementById('marcador')

    // Iniciem el bucle del joc
    run()
}

function run () {

    // Actualitzem les dades de l'objecte 'fps'
    fps.run()

    mouJugador()
    xocJugadorTaulell()

    mouPilota()
    xocPilotaTaulell()
    xocPilotaJugador()

    // Actualitzem els valors dels elements HTML
    refJugador.style.left = jugadorLeft + 'px'
    refPilota.style.top = pilotaTop + 'px'
    refPilota.style.left = pilotaLeft + 'px'
    refMarcador.innerHTML = marcador

    // Tornar a executar la funció 'run'
    // (al següent cicle de refresc)
    requestAnimationFrame(run)
}

function mouJugador () {

    let distanciaJugador = fps.distancia(250)

    // TODO: canvia els augments i disminucions
    //       +1, -1 del jugador, per el valor
    //       que hi hagi a la variable
    //       'distanciaJugador'

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

    let distanciaPilota = fps.distancia(100)

    // TODO: canvia els augments i disminucions
    //       +1, -1 de la pilota, per el valor
    //       que hi hagi a la variable
    //       'distanciaPilota'

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
        marcador = marcador - 5
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
        marcador = marcador + 1
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

// FPS (frames per second)
// ens ajuda a controlar la velocitat en diferents
// tipus d'equips (més ràpids i més lents)
class FPS { 
    constructor () {
        this.actual = 0
        this.anterior = 0
        this.diferencia = 0
        this.valor = 0
    }
    run () {
        this.actual = new Date()
        this.diferencia = (this.actual - this.anterior) / 1000
        this.valor = 1000 / (this.diferencia * 1000)
        if (this.valor < 1) {
            this.diferencia = 0
        }
        this.anterior = this.actual
    }
    // valor: és la distància que volem recórrer en 1 segon
    // retorna: la distànca que ha recorregut en l'últim frame
    //          tenint en compte els FPS (frames per segon) actuals
    distancia (valor) {
        return this.diferencia * valor
    }
}
