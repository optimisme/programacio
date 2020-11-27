let taulellAmple = 500  // Iniciem aquests valors com al CSS
let taulellAlt = 400

let refJugador = null   // Iniciem les variables del jugador
let jugadorLeft = 100
let jugadorDireccio = 'quiet'

function init() {

    // Podem configurar la pàgina web, perquè
    // executi funcions 'teclaApretada' i 'teclaAlliberada'
    // quan s'apreta o s'aixeca una tecla

    document.body.addEventListener('keydown', teclaApretada)
    document.body.addEventListener('keyup',   teclaAlliberada)

    // Agafem les referències
    refJugador = document.getElementById('jugador')

    // Iniciem el bucle del joc
    run()
}

function run () {

    mouJugador()

    xocJugadorTaulell()

    // Actualitzem els valors dels elements HTML
    refJugador.style.left = jugadorLeft + 'px'

    // Tornar a executar la funció 'run'
    // (al següent cicle de refresc)
    requestAnimationFrame(run)
}

function mouJugador () {

    // TODO: fes que el valor de la variable
    //       jugadorLeft s'incrementi en 1
    //       només si la direcció del 
    //       jugador és 'dreta'
    //       i que es decrementi en 1
    //       si la direcció és esquerra
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