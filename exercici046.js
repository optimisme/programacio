const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui:

    L'animal és un gos
    L'animal és de color negre
    L'animal té 8 anys

    Modifiquem les dades de l'objecte "animal"

    L'animal és un gat
    L'animal és de color blanc
    L'animal té 14 anys
*/

async function main () {

    let animal = {
            tipus: 'gos',
            color: 'negre',
            edat: 8
        }

    console.log('L\'animal és un', animal.tipus)
    // Fes que escrigui aquí el color de l'animal
    console.log('L\'animal té', animal.edat, 'anys')

    console.log('\nModifiquem les dades de l\'objecte "animal"\n')

    animal.tipus = 'gat'
    // Modifica aquí el color de l'objecte animal perquè sigui "blanc"
    // Modifica aquí l'edat de l'objecte animal perquè tingui 14 anys

    console.log('L\'animal és un', animal.tipus)
    console.log('L\'animal és de color', animal.color)
    // Escriu aquí l'edat de l'objecte animal
   
    prompt.end()
}

main()