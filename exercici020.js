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
    
    // TODO: Fes que escrigui aquí els animals de les posicions 0, 1 i 2
    // TODO: Fes que escrigui aquí el total d'animals amb la propietat '.length' de l'array

    prompt.end()
}

main()