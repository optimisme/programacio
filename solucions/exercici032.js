const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui com en el següent exemple:

    La posició de la paraula "colgate": 2
    La posició de la paraula "nike": -1
    Fixa't que quan no troba una paraula diu que la posició és -1!

Aquests valors poden ser diferents si la cadena de text 'marques' canvia

*/

async function main () {


    let marques = ['coca-cola', 'sony', 'colgate', 'tesla', 'adidas', 'apple']
    let posicioColgate = 0
    let posicioNike = 0

    // Fes que la variable 'posicioColgate' contingui la posició de la paraula 'colgate' a l'array marques
    posicioColgate = marques.indexOf('colgate')

    // Fes que la variable 'posicioNike' contingui la posició de la paraula 'cotxe' a l'array marques
    posicioNike = marques.indexOf('nike')

    console.log('La posició de la paraula "colgate":', posicioColgate)
    console.log('La posició de la paraula "nike":', posicioNike)
    console.log('Fixa\'t que quan no troba una paraula diu que la posició és -1!')

    prompt.end()
}

main()