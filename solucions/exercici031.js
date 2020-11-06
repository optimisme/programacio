const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui com en el següent exemple:

    La posició de la paraula "cavall": 3
    La posició de la paraula "cotxe": -1
    Fixa't que quan no troba una paraula diu que la posició és -1!

Aquests valors poden ser diferents si la cadena de text 'conte' canvia

*/

async function main () {


    let conte = 'El cavall de la granja es va escapar i no va tornar fins a la nit'
    let posicioCavall = 0
    let posicioCotxe = 0

    // TODO: Fes que la variable 'posicioCavall' contingui la posició de la paraula 'cavall' a la cadena de text 'conte'

    // TODO: Fes que la variable 'posicioCotxe' contingui la posició de la paraula 'cotxe' a la cadena de text 'conte'

    console.log('La posició de la paraula "cavall":', posicioCavall)
    console.log('La posició de la paraula "cotxe":', posicioCotxe)
    console.log('Fixa\'t que quan no troba una paraula diu que la posició és -1!')

    prompt.end()
}

main()