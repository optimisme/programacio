const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui com en el següent exemple:

    Paraules de l'array que acaben en "a":
    ara
    sabata
    icona


*/

async function main () {

    let cnt = 0
    let paraules = ['cotxe', 'ara', 'plàtan', 'estiu', 'sabata', 'icona', 'bosc', 'ordinador', 'neu', 'utòpic', 'zoo']
    let paraula = ''
    let ultimaLletra = ''

    console.log('Paraules de l\'array que acaben en "a":')
    for (cnt = 0; cnt < paraules.length; cnt = cnt + 1) {
        paraula = paraules[cnt]
        ultimaLletra = paraula.charAt(paraula.length - 1)
        // Posa aquí una condició que comprovi si la última lletra de la paraula és una 'a' i l'escrigui si es compleix la condició
    }

    prompt.end()
}

main()