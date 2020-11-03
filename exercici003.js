const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui:

    El deute d'en Marc és de 1500 €
    Després de perdonar-li una part, ara el deute és de 1250 €

*/

async function main () {

    let deute = 1500

    console.log('El deute d\'en Marc és de', deute, '€')
    
    // TODO: Resta aquí 250€ al deute d'en Marc

    console.log('Després de perdonar-li una part, ara el deute és de', deute, '€')

}

main()
