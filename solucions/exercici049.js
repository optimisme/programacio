const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui:

    La Marta medeix 165 i pesa 60
    En Marc medeix 176 i pesa 70
    La Marta té el cabell pelroig i és de caràcter alegre
    En Marc té el cabell castany i és de caràcter malhumorat
    La Marta té pigues
    En Marc no té pigues
    Els estudis de la Marta:
            eso
            batxillerat
            biologia
    Els estudis d'en Marc:
            eso
            smx

*/

async function main () {

    let marta = {
            alt: 165,
            pes: 60,
            cabell: 'pelroig',
            pigues: true,
            caracter: 'alegre',
            estudis: ['eso', 'batxillerat', 'biologia']
        },
        marc = {
            alt: 176,
            pes: 70,
            cabell: 'castany',
            pigues: false,
            caracter: 'malhumorat',
            estudis: ['eso', 'smx']
        }
    let cnt = 0

    console.log('La Marta medeix', marta.alt, 'i pesa', marta.pes)
    
    // Modifica aquí el codi perquè escrigui l'alçada i el pes d'en Marc
    console.log('En Marc medeix', marc.alt, 'i pesa', marc.pes)

    console.log('La Marta té el cabell', marta.cabell, 'i és de caràcter', marta.caracter)
    
    // Modifica aquí el codi, perquè escrigui el cabell i el caràcter d'en Marc
    console.log('En Marc té el cabell', marc.cabell, 'i és de caràcter', marc.caracter)

    if (marta.pigues) {
        console.log('La Marta té pigues') 
    } else { 
        console.log('La Marta no té pigues')
    }

    // Modifica aquí el codi, perquè escrigui si en Marc té o no té pigues, segons la variable 'pigues' del seu objecte
    if (marc.pigues) {
        console.log('En Marc té pigues') 
    } else { 
        console.log('En Marc no té pigues')
    }

    console.log('Els estudis de la Marta:')
    for (cnt = 0; cnt < marta.estudis.length; cnt = cnt + 1) {
        console.log('\t', marta.estudis[cnt])
    }

    console.log('Els estudis d\'en Marc:')
    
    // Afegeix aquí un bucle que escrigui els estudis d'en Marc
    for (cnt = 0; cnt < marc.estudis.length; cnt = cnt + 1) {
        console.log('\t', marc.estudis[cnt])
    }

    prompt.end()
}

main()