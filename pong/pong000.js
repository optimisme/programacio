/*
    Al final d'aquest exercici:

    Has de veure
    un fons negre amb dos rectangles al mig
    un vermell i l'altre verd
*/

let cnv = null
let ctx = null

// La funció 'init()' es crida quan la pàgina està
// carregada, i inicia tot el codi del joc
function init () {

    // La variable 'cnv' conté una referència
    // al element 'cnv' del codi HTML
    cnv = document.getElementById('cnv')

    // La variable 'ctx' conté una referència
    // al context de dibuix de l'objecte 'canvas'
    // és la que ens permetrà dibuixar-hi cosses
    ctx = cnv.getContext('2d', { alpha: false })

    run ()
}

// La funció 'run()' executa el bucle del joc
// és a dir, és el codi que es repeteix a cada frame
function run () {

    // Aquí hi ha d'anar la lògica del joc

    // Aquest codi dibuixa un rectangle negre:

    ctx.fillStyle = 'black'
    ctx.fillRect(200, 380, 100, 10)

    // TODO: Fes que dibuixi una altre
    //       rectangle de color verd
    //       a la posicio Y 10 enlloc de 380

    // Per tal que sigui un bucle, sincronitzat
    // correctament amb el refresc de la pantalla
    // fem servir 'requestAnimationFrame'
    requestAnimationFrame(run)
}