

let refJugador = null
let jugadorTop = 100
let jugadorLeft = 100

function init() {



    refJugador = document.getElementById('jugador')

    run()
}

// La funció 'run' s'executa tota l'estona de manera
// contínua, la necessitem quan volem fer jocs i/o
// animacions sense CSs

function run () {

    jugadorLeft = jugadorLeft + 1

    // TODO: fes que el valor de 'jugadorTop'
    //       s'incrementi en 1 cada vegada
    //       que s'executa la funció 'run'

    // Podem llegir propietats de la pàgina web,
    // com per exemple la mida de la finestra
    // on es dibuixa

    let webAmple = window.innerWidth

    // Si el quadre intenta sortir de l'ample
    // de la finestra, aturar-lo al seu limit
    // El limit està a l'ample de la finestra 
    // menys la mida d'ample del jugador

    let limitAmple = webAmple - 100

    if (jugadorLeft >= limitAmple) {
        jugadorLeft = limitAmple
    }

    // TODO: posa una condició com la anterior
    //       per limitar fins a on es mou
    //       el jugador segons l'alt de la finestra
    //       i la mida 'height' del propi jugador

    // Posem la capa amb id='jugador'
    // a la posició corresponent segons
    // jugadorTop i jugadorLeft
    // modificant el seu estil

    refJugador.style.top = jugadorTop + 'px'
    refJugador.style.left = jugadorLeft + 'px'

    requestAnimationFrame(run)
}