
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

// FPS (framse per second)
// ens ajuda a controlar la velocitat en diferents
// tipus d'equips (més ràpids i més lents)
class FPS { 
    constructor () {
        this.actual = 0
        this.anterior = 0
        this.diferencia = 0
        this.fpsValue = 0
    }
    run () {
        this.actual = new Date()
        this.diferencia = (this.actual - this.anterior) / 1000
        this.fpsValue = 1000 / (this.diferencia * 1000)
        if (this.fpsValue < 1) {
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
let fps = new FPS()     // Iniciem el contador de FPS

function init() {
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

    // Actualitzem l'objecte FPS
    fps.run()

    let limitAmple = 0
    let limitAlt = 0

    // Per tal de que la velocitat de les animacions
    // (jugador i pilota) sigui igual i fluida
    // en tots els sistemes, cal tenir en compte
    // els FPS (frames que dibuixa cada segon)

    // Enlloc de dir-li, els píxels que s'ha de moure
    // a cada frame (com fins ara amb el +1 o -1)
    // cridarem a la funció 'fps.distancia(valor)'
    // i com a paràmetres li passem la distància
    // en pixels que volem que faci en 1 segon,
    // aquesta funció ens retornarà la distància
    // que ha recorregut a la velocitat FPS actual

    let distanciaJugador = fps.distancia(250)
    let distanciaPilota = fps.distancia(100)

    // Movem el jugador segons les
    // fletxes del teclat apretades

    if (jugadorDireccio == 'esquerra') {
        jugadorLeft = jugadorLeft - distanciaJugador
    }

    if (jugadorDireccio == 'dreta') {
        jugadorLeft = jugadorLeft + distanciaJugador
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

    // TODO: Canvia els +1 o -1 per el valor
    //       de la variable 'distanciaPilota'
    switch (pilotaDireccio) {
        case 'avallDreta':
            pilotaTop = pilotaTop + distanciaPilota
            pilotaLeft = pilotaLeft + distanciaPilota
            break
        case 'avallEsquerra':
            pilotaTop = pilotaTop + distanciaPilota
            pilotaLeft = pilotaLeft - distanciaPilota
            break
        case 'amuntDreta':
            pilotaTop = pilotaTop - distanciaPilota
            pilotaLeft = pilotaLeft + distanciaPilota
            break
        case 'amuntEsquerra':
            pilotaTop = pilotaTop - distanciaPilota
            pilotaLeft = pilotaLeft - distanciaPilota
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
        marcador = marcador + 1
        
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

    // Modificar els elements HTML
    refPilota.style.top = pilotaTop + 'px'
    refPilota.style.left = pilotaLeft + 'px'

    refMarcador.innerHTML = marcador

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

// Aquesta funcio retorna 'true' si
// la pilota xoca amb el jugador
function xocPilotaJugador () {

    let jugadorTop = 350 // És la posició top del jugador, segons el CSS (350)
    let rst = false

    let rectangleJugador    = {x: jugadorLeft, y: jugadorTop, width: 100, height: 15 }
    let rectanglePilota     = {x: pilotaLeft + 4, y: pilotaTop, width: 8, height: 15}
    
    if (rectangleJugador.x < (rectanglePilota.x  + rectanglePilota.width)  &&
        rectanglePilota.x  < (rectangleJugador.x + rectangleJugador.width) &&
        rectangleJugador.y < (rectanglePilota.y  + rectanglePilota.height) &&
        rectanglePilota.y  < (rectangleJugador.y + rectangleJugador.height)) {
        rst = true
    }
    
    return rst
}