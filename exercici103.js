

let refJugador = null
let jugadorTop = 100
let jugadorLeft = 100
let jugadorDireccio = 'cap'

function init() {
    // Fem que les funcions 'teclaApretada' i 'teclaAlliberada'
    // es cridin quan l'usuari apreta o allibera una tecla
    document.body.addEventListener('keydown', teclaApretada)
    document.body.addEventListener('keyup',   teclaAlliberada)

    // Agafem la referència a la capa 'jugador'
    refJugador = document.getElementById('jugador')
    run()
}

function run () {

    // Movem el jugador segons les
    // fletxes del teclat apretades

    if (jugadorDireccio == 'esquerra') {
        jugadorLeft = jugadorLeft - 1
    }

    if (jugadorDireccio == 'dreta') {
        jugadorLeft = jugadorLeft + 1
    }

    // Limitem els moviments del jugador

    let webAmple = window.innerWidth
    let limitAmple = webAmple - 100

    if (jugadorLeft <= 0) {
        jugadorLeft = 0
    }

    if (jugadorLeft >= limitAmple) {
        jugadorLeft = limitAmple
    }

    let webAlt = window.innerHeight
    let limitAlt = webAlt - 50

    // TODO: Limita que el jugador no
    //       pogui estàr més amunt que el 
    //       valor 0 del top

    if (jugadorTop >= limitAlt) {
        jugadorTop = limitAlt
    }

    refJugador.style.top = jugadorTop + 'px'
    refJugador.style.left = jugadorLeft + 'px'

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