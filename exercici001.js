const prompt = require('prompt-promise');

/*

Afegeix les línies que faci falta entre els dos 'console.log', 
i fes servir la variable 'valorC', per tal que:

El primer console.log escrigui "Valors originals:  Casa Gran"
El primer console.log escrigui "Valors originals:  Gran Casa"

Sense modificar les línies de console.log originals

*/

async function main () {

    let valorA = 'Casa'
    let valorB = 'Gran'
    let valorC = ''

    console.log('Valors originals: ', valorA, valorB)



    console.log('Valors modificats:', valorA, valorB)
}

main()
