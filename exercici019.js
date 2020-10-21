const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui:

    El color de la posició 0 és verd
    El color de la posició 0 és blau
    El color de la posició 0 és vermell
    El color de la posició 0 és groc
    En total hi ha 6 colors a l'array

*/

async function main () {

    let colors = ['verd', 'blau', 'vermell', 'groc', 'taronja', 'lila']
    
    console.log('El color de la posició 0 és', colors[0])

    // Fes que escrigui aquí el color de la posició 1

    console.log('El color de la posició 2 és', colors[2])

    // Fes que escrigui aquí el color de la posició 3

    console.log('En total hi ha ', colors.length,' colors a l\'array')

    prompt.end()
}

main()