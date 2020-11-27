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

    // TODO: crida aquí a la funció 'mouJugador()'

    // TODO: crida aquí a la funció 'xocJugadorTaulell()'

    // Posem la capa amb id='jugador'
    // a la posició corresponent segons
    // jugadorLeft
    // modificant el seu estil
    refJugador.style.left = jugadorLeft + 'px'

    // Tornar a executar la funció 'run'
    // (al següent cicle de refresc)
    requestAnimationFrame(run)
}

// TODO: Crea una funció que es digui 'mouJugador()'
//       sense paràmetres ni retorn
//       que incrementi 'jugadorLeft'
//       en 1 cada vegada que s'executa

// TODO: Crea una funció que es 
//       digui 'xocJugadorTaulell()'
//       sense paràmetres ni retorn
//       que compari:
//       - si 'jugadorLeft <= 0' aleshores
//         posa 'jugadorLeft' a 0
//       - si 'jugadorLeft >= posicioMaxJugador'
//         aleshores 'jugadorLeft = posicioMaxJugador'
//       on 'posicioMaxJugador' és 
//       'taulellAmple - 100' (100 correspon a l'ample del jugador)