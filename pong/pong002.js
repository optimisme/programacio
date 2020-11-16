/*
    Al final d'aquest exercici:

    - Has de poder controlar el rectangle
      vermell amb les fletxes 'dreta' i 'esquerra'
      del teclat
    - El moviment no serà fluid, això ho arreglerem
      al pong003
*/

let cnv = null
let ctx = null

let jugadorX = 200

function init () {
    // Perquè l'usuari pogui interactuar amb el joc
    // cal que sapiguem quan apreta o deixa anar
    // una tecla, per això definim aquestes
    // funcions

    // Les següents dues linies de codi, li diuen al 
    // navegador, què ha de fer quan s'apreta o s'allibera
    // una tecla. En aquest cas, ha de cridar les funcions:
    // 'teclaApretada' i 'teclaAlliberada'
    document.body.addEventListener('keydown', teclaApretada)
    document.body.addEventListener('keyup',   teclaAlliberada)

    cnv = document.getElementById('cnv')
    ctx = cnv.getContext('2d', { alpha: false })

    run ()
}

function run () {

    // TODO: Si el valor de posicioX és menor que 0
    //       posa posicioX a 0 per aturar-lo

    if (jugadorX > 400) {
        jugadorX = 400
    }

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

function teclaApretada (e) {

    switch (e.key) {
    case 'ArrowLeft':   
        // TODO: Fes que el valor de posicioX
        //       disminueixi en 10
        break
    case 'ArrowRight': 
        jugadorX = jugadorX + 10
        break
    }
}
function teclaAlliberada (e) {
    switch (e.key) {
        case 'ArrowLeft':   
            break
        case 'ArrowRight': 
            break
        }
}