

let refJugador = null

function init() {

    // Quan s'ha carregat la pàgina es crida
    // a aquesta funció, aleshores ja podem
    // agafar una referència al 'div' amb id='jugador'

    refJugador = document.getElementById('jugador')

    // Amb les referències a objectes HTML
    // com la de jugador, podem canviar les propietats
    // d'aquest objecte des de Javascript,
    // per exemple, podem canviar-li el color de fons

    refJugador.style.backgroundColor = 'lightBlue'

    // Fixa't que les propietats CSS s'escriuen juntes
    // enlloc de amb guió, i amg una lletra majúscula
    // després d'on al CSS tenim el guió

    // També podem canviar el codi de dins
    // d'aquest objecte HTML

    refJugador.innerHTML = 'Jugador 1'
    
}