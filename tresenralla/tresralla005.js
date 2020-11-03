const prompt = require('prompt-promise');

/*

En aquest seguit d'exercicis implementarem un joc 
tipus 'buscamines' que funciona des del terminal.

En aquest exercici la sortida esperada és:

    # 0 1 2
    0 - - - 
    1 - - - 
    2 - - -
    Resultats de la partida:
*/

async function main () {

    let taulell = []
    let resultats = {}

    taulell = iniciaTaulell()

    resultats = await jugar(taulell)

    mostraResultats(resultats)

    prompt.end()
}

main()

function iniciaTaulell () {

    // TODO: Modifica la següent inicialització de taulell, per tal que:
    //       - taulell tingui a dins 3 arrays
    //       - cada un dels tres arrays de taulell tingui a dins 3 texts amb '-'
    let taulell = []

    return taulell
}

function dibuixaFila (fila) {
    let cntColumna = 0
    let text = ''

    // TODO: Fes un bucle que imprimeixi la informació del contingut de l'array 'fila'
    //       que rep aquesta funció com a paràmetre
    //       - Aquest bucle ha de contar fent servir la variable 'cntColumna'
    //       - Aquest bucle ha de contar des de 0 mentre 'cntColumna' sigui menor que
    //         la longitud de l'array 'fila'
    //       - Dins d'aquest bucle s'ha de modificar el valor de la variable 'text'
    //         per tal que tingui: 
    //             el valor de la variable text 
    //             més l'element de la fila que correspon a 'cntColumna' 
    //             més un espai en blanc

    return text
}

function dibuixaFiles (taulell) {
    let cntFila = 0
    let fila = []
    let text = ''

    for (cntFila = 0; cntFila < taulell.length; cntFila = cntFila + 1) {
        // TODO: Fes que la variable fila, tingui el valor de cada una
        //       de les files del taulell

        text = cntFila + ' ' + dibuixaFila(fila)
        
        // TODO: Imprimeix per pantalla el contingut de la variable 'text'
    }
}

function dibuixaTaulell (taulell) {

    process.stdout.write('\033c') // Aquest codi el terminal

    console.log('# 0 1 2')

    // TODO: Crida aquí la funció 'dibuixaFiles' i passa-li com a paràmetre el 'taulell'
}

async function jugar (taulell) {

    let sortir = false
    let resultats = {
        intents: 0,
        abandona: false,
        guanyador: 'ningu'
    }
    let comanda = ''
    let jugadaValida = false

    dibuixaTaulell(taulell)

    return resultats
}

function mostraResultats (resultats) {

    console.log("Resultats de la partida:")
}