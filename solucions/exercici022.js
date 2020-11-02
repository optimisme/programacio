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
        switch(animal) {
            case 'gos':
            case 'gat':
            case 'hamster':
                console.log(`Un ${animal} és un animal domesticat`)
                break;
            default:
                console.log(`Un ${animal} és un animal salvatge`)
        }
    }

    prompt.end()
}

main()