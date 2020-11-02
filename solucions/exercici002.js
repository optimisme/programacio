const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui:

    L'Anna té 200 €
    En Pau té 300 €
    Tots dos junts tenen  500 €

Fes servir les variables, no escriguis els números directament

*/

async function main () {

    let dinersAnna = 200
    let dinersPau = 300
    let total = 0

    console.log('L\'Anna té', dinersAnna, '€')
    console.log('En Pau té', dinersPau, '€')

    total = dinersAnna + dinersPau

    console.log('Tots dos junts tenen', total, '€')

}

main()
