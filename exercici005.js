const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui:

    En Joan va amb  bicicleta
    La marta va amb  cotxe
    Quan es trobin es canviaràn de transport i ...
    En Joan va amb  cotxe
    La marta va amb  bicicleta

Però no utilitzis mai les paraules 'bicicleta' o 'cotxe, 
fes servir 'varC' com a variable d'intercanvi

*/

async function main () {

    let varA = 'bicicleta'
    let varB = 'cotxe'
    let varC = ''

    console.log('En Joan va amb ', varA)
    console.log('La marta va amb ', varB)

    // Intercanvia aquí els valors de varA i varB fent servir varC

    console.log('Quan es trobin es canviaràn de transport i ...')

    console.log('En Joan va amb ', varA)
    console.log('La marta va amb ', varB)
}

main()
