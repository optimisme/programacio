const prompt = require('prompt-promise')
const fs = require('fs')

/*

Modifica el següent programa segons les instruccions

*/

/* TODO:

    Crea una funció 'executaComanda' que rebrà dos paràmetres 'comanda' i 'joc'
    - El paràmetre 'comanda' és la comanda introduida per l'usuari en el bucle 'while' del 'main'
    - El paràmetre 'joc' és l'objecte de joc del 'main'

    Dins d'aquesta funció, fes les següents condicions:
    
    - Si la pantalla és 'bosc' i la comanda 'ajuda' escriu: 
      'Ets al bosc, pots demanar: ajuda, mirar, caminar, escalar, cridar'
    
    - Si la pantalla és 'vall' i la comanda 'ajuda' escriu: 
      'Ets a la vall, pots demanar: ajuda, mirar, tornar, escalar, cridar'
    
    - Si la pantalla és 'muntanya' i la comanda 'ajuda' escriu: 
      'Ets a la muntanya, pots demanar: ajuda, mirar, caminar, cridar'

    - Si la pantalla és 'bosc' i la comanda 'mirar' escriu: 
      'Des del bosc, pots veure una vall, una muntanya i el cel'
    
    - Si la pantalla és 'vall' i la comanda 'mirar' escriu: 
      'Des de la vall, pots veure un bosc, una muntanya i el cel'
    
    - Si la pantalla és 'muntanya' i la comanda 'mirar' escriu: 
      'Des de la muntanya, pots veure una vall, un bosc, una ciutat i el cel'
    
    - Si la pantalla és 'bosc' i la comanda 'caminar' escriu: 
      'Camines a la vall'
      i posa el valor 'vall' a la variable 'pantalla' de l'objecte 'joc'
    
    - Si la pantalla és 'vall' i la comanda 'tornar' escriu: 
      'Tornes al bosc, estàs en un bosc perdut i és fosc'
      i posa el valor 'bosc' a la variable 'pantalla' de l'objecte 'joc'
    
    - Si la pantalla és 'muntanya' i la comanda 'caminar' escriu: 
      'Camines fins a la ciutat'
      i posa la variable 'guanyat' de l'objecte 'joc' a certa, 
      per indicar que s'ha guanyat la partida
    
    - Si la comanda és 'escalar' escriu:
      'Pujes a dalt de la muntanya'
      i posa el valor 'muntanya' a la variable 'pantalla' de l'objecte 'joc'

    - Si la comanda és 'cridar' escriu:
      `Els llops senten que crides, venen i se't menjen`
      i posa la variable 'perdut' de l'objecte 'joc' a certa, 
      per indicar que s'ha perdut la partida
    
    - En qualsevol altre cas escriu:
      'No entenc la comanda'
*/

function executaComanda (comanda, joc) {

    if (joc.pantalla === 'bosc' && comanda === 'ajuda') {

        console.log('Ets al bosc, pots demanar: (ajuda, mirar, caminar, escalar, cridar)')

    } else if (joc.pantalla === 'vall' && comanda === 'ajuda') {

        console.log('Ets a la vall, pots demanar: (ajuda, mirar, tornar, escalar, cridar)')

    } else if (joc.pantalla === 'muntanya' && comanda === 'ajuda') {

        console.log('Ets a la muntanya, pots demanar: (ajuda, mirar, caminar, cridar)')

    } else if (joc.pantalla === 'bosc' && comanda === 'mirar') {

        console.log('Des del bosc, pots veure una vall, una muntanya i el cel')

    } else if (joc.pantalla === 'vall' && comanda === 'mirar') {

        console.log('Des de la vall, pots veure un bosc, una muntanya i el cel')

    } else if (joc.pantalla === 'muntanya' && comanda === 'mirar') {

        console.log('Des de la muntanya, pots veure una vall, un bosc, una ciutat i el cel')

    } else if (joc.pantalla === 'bosc' && comanda === 'caminar') {

        console.log('Camines a la vall')
        joc.pantalla = 'vall'

    } else if (joc.pantalla === 'vall' && comanda === 'tornar') {

        console.log('Tornes al bosc, estàs en un bosc perdut i és fosc')
        joc.pantalla = 'bosc'

    } else if (joc.pantalla === 'muntanya' && comanda === 'caminar') {

        console.log('Camines fins a la ciutat')
        joc.guanyat = true

    } else if (comanda === 'escalar') {

        console.log('Pujes a dalt de la muntanya')
        joc.pantalla = 'muntanya'

    } else if (comanda === 'cridar') {

        console.log(`Els llops senten que crides, venen i se't menjen`)
        joc.perdut = true

    } else {

        console.log('No entenc la comanda')
    }
}

async function main () {

    let comanda = ''
    let jugar = true
    let joc = {
        guanyat: false,
        perdut: false,
        pantalla: 'bosc'
    }

    console.log('Hola viatjer,')
    console.log('Estàs en un bosc perdut i és fosc ...')
    console.log('Escriu \x1b[32m"ajuda"\x1b[0m si no saps què pots fer')

    while (jugar) {
        // TODO: Demana una comanda a l'usuari i guarda el valor a la variable comanda
        //       el text que has de fer servir és: '\x1b[2mQuè vols fer? \x1b[0m'
        comanda = await prompt('\x1b[2mQuè vols fer? \x1b[0m')

        // TODO: Crida a la funció 'executaComanda' que has creat anteriorment,
        //       amb els paràmetres necessaris
        executaComanda(comanda, joc)

        // TODO: Si el joc està 'guanyat' o 'perdut' posa la variable jugar a false
        //       per sortir del bucle i acabar la partida
    }

    // TODO: Si s'ha guanyat el joc, escriure: '\x1b[32mHas sobreviscut, gracies per jugar!\x1b[0m\n'
    //       Si s'ha perdut, esriure: '\x1b[31mGame over, loser\x1b[0m\n'

    prompt.end()
}

main()