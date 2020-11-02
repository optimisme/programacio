const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui:

    A la posició 0 hi ha un gos
    A la posició 1 hi ha un gat
    A la posició 2 hi ha un ocell
    En total hi ha 5 animals

No pots fer servir les paraules 'gos', 'gat' o 'ocell' directament,
has d'agafar les dades de l'array 'animals'

*/

async function main () {

    let animals = ['gos', 'gat', 'ocell', 'cabra', 'llop']
    
    console.log('A la posició 0 hi ha un', animals[0])
    console.log('A la posició 1 hi ha un', animals[1])
    console.log('A la posició 2 hi ha un', animals[2])
    console.log('En total hi ha', animals.length,'animals')

    prompt.end()
}

main()