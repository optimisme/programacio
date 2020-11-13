const prompt = require('prompt-promise')
const fs = require('fs')

/*

Modifica el següent programa segons les instruccions

En aquest codi, implementarem un altre cop l'aventura de text de l'exercici 075,
però guardant la informació de les pantalles en un objecte, enlloc de al codi

Per això, guardarem en un objecte:

- La llista de pantalles
- Per cada pantalla, la llista de comandes que accepta cada pantalla
- Per cada comanda, la llista d'accions que s'han d'executar quan es demana la comanda

*/

let joc = {
  guanyat: false,
  perdut: false,
  pantalla: 'bosc',
  item: ''
}

let pantalles = {
    bosc: {
        ajuda: [
            { accio: 'escriu', valor: 'Ets al bosc, pots demanar: ajuda, mirar, caminar, escalar, cridar' }
        ],
        mirar: [
            { accio: 'escriu', valor: 'Des del bosc, pots veure una vall, una muntanya i el cel' }
        ],
        caminar: [
            { accio: 'escriu', valor: 'Camines a la vall' },
            { accio: 'codi', valor: 'joc.pantalla = "vall"' }
        ],
        escalar: [
            { accio: 'escriu', valor: 'Pujes a dalt de la muntanya' },
            { accio: 'codi', valor: 'joc.pantalla = "muntanya"' }
        ],
        cridar: [
            { accio: 'escriu', valor: 'Els llops senten que crides, venen i se\'t menjen' },
            { accio: 'codi', valor: 'joc.perdut = true' }
        ],
    },
    vall: {
        ajuda: [
            { accio: 'escriu', valor: 'Ets a la vall, pots demanar: ajuda, mirar, tornar, escalar, cridar' }
        ],
        mirar: [
            { accio: 'escriu', valor: 'Des de la vall, pots veure un bosc, una muntanya i el cel' }
        ],
        tornar: [
            { accio: 'escriu', valor: 'Tornes al bosc, estàs en un bosc perdut i és fosc' },
            { accio: 'codi', valor: 'joc.pantalla = "bosc"' }
        ],
        escalar: [
            { accio: 'escriu', valor: 'Pujes a dalt de la muntanya' },
            { accio: 'codi', valor: 'joc.pantalla = "muntanya"' }
        ],
        cridar: [
            { accio: 'escriu', valor: 'Els llops senten que crides, venen i se\'t menjen' },
            { accio: 'codi', valor: 'joc.perdut = true' }
        ],
    },
    muntanya: {
        ajuda: [
            { accio: 'escriu', valor: 'Ets a la muntanya, pots demanar: ajuda, mirar, caminar, cridar' }
        ],
        mirar: [
            { accio: 'escriu', valor: 'Des de la muntanya, pots veure una vall, un bosc, una ciutat i el cel' }
        ],
        caminar: [
            { accio: 'escriu', valor: 'Camines fins a la ciutat' },
            { accio: 'codi', valor: 'joc.guanyat = true' }
        ],
        cridar: [
            { accio: 'escriu', valor: 'Els llops senten que crides, venen i se\'t menjen' },
            { accio: 'codi', valor: 'joc.perdut = true' }
        ],
    }
}

function executaInstruccio (instruccio) {

    if (instruccio.accio === 'escriu') {

        // TODO: Escriu per pantalla el text que hi ha a la variable 'valor'
        //       de l'objecte 'instruccio' que reb aquesta funció com a paràmetre
        console.log(instruccio.valor)
    }

    if (instruccio.accio === 'codi') {

        // TODO: Fes servir 'eval' per executar el codi que hi ha a la variable 'valor'
        //       de l'objecte 'instruccio' que reb aquesta funció com a paràmetre
        eval(instruccio.valor)
    }
}

function executaComanda (comanda) {

    let referenciaPantalla = pantalles[joc.pantalla]

    // TODO: Inicialitza una variable 'comandesPantalla'
    //       amb les claus que té disponible l'objecte 'referenciaPantalla'
    let comandesPantalla = Object.keys(referenciaPantalla)

    let instruccionsComanda = []
    let cnt = 0

    if (comandesPantalla.indexOf(comanda) === -1) {

        console.log('No entenc la comanda')

    } else {

        instruccionsComanda = referenciaPantalla[comanda]
        // TODO: Per cada una de les instruccions que hi ha a la variable
        //       'instruccionsComanda', crida a la funció
        //       'executaInstruccio' amb aquesta instrucció com a paràmetre
        for (cnt = 0; cnt < instruccionsComanda.length; cnt = cnt + 1) {
            executaInstruccio(instruccionsComanda[cnt])
        }
    }
}

async function main () {

    let comanda = ''
    let jugar = true

    console.log('Hola viatjer,')
    console.log('Estàs en un bosc perdut i és fosc ...')
    console.log('Escriu \x1b[32m"ajuda"\x1b[0m si no saps què pots fer')

    while (jugar) {
        // Demana una comanda a l'usuari i guarda el valor a la variable comanda
        comanda = await prompt('\x1b[2mQuè vols fer? \x1b[0m')

        // Crida a la funció 'executaComanda' amb els paràmetres necessaris
        executaComanda(comanda)

        // Si el joc està 'guanyat' o 'perdut' posa la variable jugar a false
        // per sortir del bucle i acabar la partida
        if (joc.guanyat || joc.perdut) {
            jugar = false
        }
    }

    // Si s'ha guanyat el joc, escriure: '\x1b[32mHas sobreviscut, gracies per jugar!\x1b[0m\n'
    // Si s'ha perdut, esriure: '\x1b[31mGame over, loser\x1b[0m\n'
    if (joc.guanyat) {
        console.log('\x1b[32mHas sobreviscut, gracies per jugar!\x1b[0m\n')
    } else {
        console.log('\x1b[31mGame over, loser\x1b[0m\n')
    }

    prompt.end()
}

main()