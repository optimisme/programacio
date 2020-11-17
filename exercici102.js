

let refJugador = null
let jugadorTop = 100
let jugadorLeft = 100
let jugadorDireccio = 'cap'

function init() {

    // Podem configurar la pàgina web, perquè
    // executi funcions 'teclaApretada' i 'teclaAlliberada'
    // quan s'apreta o s'aixeca una tecla

    document.body.addEventListener('keydown', teclaApretada)
    document.body.addEventListener('keyup',   teclaAlliberada)

    refJugador = document.getElementById('jugador')
    run()
}

function run () {

    if (jugadorDireccio == 'esquerra') {
        jugadorLeft = jugadorLeft - 1
    }

    // TODO: fes que el valor de la variable
    //       jugadorLeft s'incrementi en 1
    //       si la direcció del jugador és
    //       'dreta'

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
        // TODO: fes que la variable
        //       jugadorDireccio tingui el 
        //       valor 'dreta' si apreten
        //       la fletxa dreta
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
            // TODO: fes que la direcció del
            //       jugador tingui el valor
            //       'cap' si alliberen la tecla
            //       'ArrowRight' (fletxa dreta)
            //       i la variable 'jugadorDirecció'
            //       té el valor 'dreta'
            break
        }
}