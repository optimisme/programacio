const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui:

    Un gos és un animal domesticat
    Un gat és un animal domesticat
    Un hamster és un animal domesticat
    Un cabrit és un animal salvatge
    Un llop és un animal salvatge
    Un cocodril és un animal salvatge

*/

async function main () {

    let animals = ['gos', 'gat', 'hamster', 'cabrit', 'llop', 'cocodril']
    let cnt = 0
    let animal = ''

    for (cnt = 0; cnt < animals.length; cnt = cnt + 1) {
        animal = animals[cnt]
        // TODO: Posa condicions aquí per tal que la sortida sigui com a l'exemple
        console.log('Un', animal, 'és un animal salvatge')
        console.log('Un', animal, 'és un animal domesticat')
    }

    prompt.end()
}

main()