const prompt = require('prompt-promise')
const fs = require('fs')

/*

Modifica el següent programa segons les instruccions

En aques codi, ampliarem les comandes i tipus d'accions del joc

- A la pantalla 'bosc' hi haura dues comandes noves 'menjar' i 'nedar'
- A la pantalla 'vall' hi haura la comanda nova 'galopar'
- A la pantalla 'muntanya' hi haura les comandes noves 'menjar' i 'dormir'

Com que s'afegeix una nova instrucció: 'escriuSi', caldrà modificar 
la funció 'executaInstruccio' perquè la interpreti. Aquesta nova instrucció
avaluarà una condició que hi ha a l'objecte de dades de les pantalles
i executa la instrucció si es compleix aquesta condició

En videojocs AAA, aquest tipus d'scripting es sol fer amb un llenguatge  
anomenat Lua 'https://www.lua.org/manual/5.4/'

*/

let joc = {
  guanyat: false,
  perdut: false,
  pantalla: 'bosc',
  item: '',
  gana: false
}

let pantalles = {
    bosc: {
        ajuda: [
            { accio: 'escriu', valor: 'Ets al bosc, pots demanar: ajuda, mirar, caminar, escalar, cridar, nedar i menjar' }
        ],
        mirar: [
            { accio: 'escriu', valor: 'Des del bosc, pots veure una vall, una muntanya, un riu, una pomera i el cel' }
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
        menjar: [
            { accio: 'escriuSi', condicio: 'joc.gana === true', valor: 'Menjes una poma de la pomera' },
            { accio: 'escriuSi', condicio: 'joc.gana === false', valor: 'No tens gana' },
            { accio: 'codi', valor: 'joc.gana = false' }
        ],
        // TODO: Afegeix aquí les accions de la comanda 'nedar', aquestes accions han de ser:
        //       - Escriure un text: 'Al riu hi ha cocodrils, venen i se\'t menjen'
        //       - Executar un codi per posar 'joc.perdut' a certa
    },
    vall: {
        ajuda: [
            { accio: 'escriu', valor: 'Ets a la vall, pots demanar: ajuda, mirar, tornar, escalar, cridar, galopar' }
        ],
        mirar: [
            { accio: 'escriu', valor: 'Des de la vall, pots veure un bosc, una muntanya, una mula i el cel' }
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
        // TODO: Afegeix aquí les accions de la comanda 'galopar', aquestes accions han de ser:
        //       - Escriure un text: 'Pujes a la mula i vas fins a una ciutat'
        //       - Executar un codi per posar 'joc.guanyat' a certa
    },
    muntanya: {
        ajuda: [
            { accio: 'escriu', valor: 'Ets a la muntanya, pots demanar: ajuda, mirar, caminar, cridar, menjar i dormir' }
        ],
        mirar: [
            { accio: 'escriu', valor: 'Des de la muntanya, pots veure una vall, un bosc, una ciutat, una pomera i el cel' }
        ],
        caminar: [
            { accio: 'escriu', valor: 'Camines fins a la ciutat' },
            { accio: 'codi', valor: 'joc.guanyat = true' }
        ],
        cridar: [
            { accio: 'escriu', valor: 'Els llops senten que crides, venen i se\'t menjen' },
            { accio: 'codi', valor: 'joc.perdut = true' }
        ],
        // TODO: Afegeix aquí les accions de la comanda 'dormir', aquestes accions han de ser:
        //       - Escriure un text: 'Dorms tota la nit ...'
        //       - Escriure un text: 'Et lleves mort de fred i amb molta gana'
        //       - Executar un codi per posar 'joc.gana' a certa

        // TODO: Afegeix aquí les accions de la comanda 'menjar', aquestes accions han de ser:
        //       - Amb l'accio "escriuSi", escriu 'Menjes una poma de la pomera' si 'joc.gana' és certa
        //       - Amb l'accio "escriuSi", escriu 'No tens gana' si 'joc.gana' és falsa
        //       - Executar un codi per posar 'joc.gana' a falsa
        //       Fes servir l'acció 'menjar' de la pantalla 'bosc' com a exemple

    }
}

function executaInstruccio (instruccio) {

    let condicio = false

    if (instruccio.accio === 'escriu') {

        console.log(instruccio.valor)
    }

    if (instruccio.accio === 'escriuSi') {
        // TODO: Fes servir la comanda 'eval' per avaluar la condició
        //       de la variable 'instruccio.condicio)
        //       guarda el resultat d'aquesta avaluació a la variable 'condicio'

        // TODO: Si la variable 'condicio' és certa, escriu el valor de 'instruccio.valor'
    }

    if (instruccio.accio === 'codi') {

        eval(instruccio.valor)
    }
}

function executaComanda (comanda) {

    let referenciaPantalla = pantalles[joc.pantalla]
    let comandesPantalla = Object.keys(referenciaPantalla)
    let instruccionsComanda = []
    let cnt = 0

    if (comandesPantalla.indexOf(comanda) === -1) {

        console.log('No entenc la comanda')

    } else {

        instruccionsComanda = referenciaPantalla[comanda]
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