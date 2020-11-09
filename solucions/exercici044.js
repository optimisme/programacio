const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui:

    - El cotxe d'en Toni és un Citroen C2
      té un motor de 70 cavalls
      i funciona amb gasolina
      a més, té una ocupació de 4 persones
      i és de color negre
      No és un cotxe ecològic
      Els seus extras són:
            elevadures
            aire acondicionat
            comandament remot

*/

async function main () {

    // TODO: Modifica el següent objecte cotxe, perquè la sortida sigui correcte

    let cotxe = {
            nom: 'Citroen C2',
            motor: 70,
            color: 'negre',
            ocupació: 4,
            combustible: 'gasolina',
            extras: ['elevadures', 'aire acondicionat', 'comandament remot'],
            ecologic: false
        }
    let cnt = 0

    console.log('- El cotxe d\'en Toni és un', cotxe.nom)
    console.log('  té un motor de', cotxe.motor, 'cavalls')
    console.log('  i funciona amb', cotxe.combustible)
    console.log('  a més, té una ocupació de', cotxe.ocupació, 'persones')
    console.log('  i és de color', cotxe.color)

    if (cotxe.ecologic) {
        console.log('  És un cotxe ecològic')
    } else {
        console.log('  No és un cotxe ecològic')
    }

    console.log('  Els seus extras són:')

    for (cnt = 0; cnt < cotxe.extras.length; cnt = cnt + 1) {
        console.log('\t', cotxe.extras[cnt])
    }

    prompt.end()
}

main()