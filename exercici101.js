let taulellAmple = 500  // Iniciem aquests valors com al CSS
let taulellAlt = 400

let refJugador = null   // Iniciem les variables del jugador
let jugadorLeft = 100

function init() {

    // Agafem les referències
    refJugador = document.getElementById('jugador')

    // Iniciem el bucle del joc
    run()
}

// La funció 'run' s'executa tota l'estona de manera
// recursiva, la necessitem quan volem fer jocs i/o
// animacions sense CSS

function run () {

    let limitAmple = 0

    // TODO: Fest que jugadorLeft s'incrementi
    //       en 1 cada vegada que s'executa
    //       aquesta funció

    // Si el quadre intenta sortir de l'ample
    // de la finestra, aturar-lo al seu limit
    // El limit està a l'ample de la finestra 
    // menys la mida d'ample del jugador

    limitAmple = taulellAmple - 100

    if (jugadorLeft >= limitAmple) {
        jugadorLeft = limitAmple
    }

    // Posem la capa amb id='jugador'
    // a la posició corresponent segons
    // jugadorLeft
    // modificant el seu estil

    refJugador.style.left = jugadorLeft + 'px'

    // Tornar a executar la funció 'run'
    // (al següent cicle de refresc)
    requestAnimationFrame(run)
}