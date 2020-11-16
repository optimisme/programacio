/*
    Al final d'aquest exercici:

    Has de veure una animació
    amb el rectangle vermell movent-se
*/

let cnv = null
let ctx = null

let jugadorX = 200

function init () {

    cnv = document.getElementById('cnv')
    ctx = cnv.getContext('2d', { alpha: false })

    run ()
}

function run () {

    // Si cada vegada que funciona el bucle del joc
    // modifiquem el valor de 'jugadorX', podem crear
    // una animació simple

    // TODO: augmenta en 1 el valor de jugadorX

    // TODO: si jugadorX és més gran que 400
    //       posa jugadorX a 400 per aturar-lo

    // Pintem el fons de blanc cada vegada
    // que redibuixem la pantalla
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, 500, 400)

    // Dibuixem el rectangle del jugador
    // a la posicio de la variable jugadorX

    ctx.fillStyle = 'black'
    ctx.fillRect(jugadorX, 380, 100, 10)

    requestAnimationFrame(run)
}