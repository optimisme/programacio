const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui com en el següent exemple:

    La llargada de la paraula casa és 8
    La llargada de la paraula coca-cola és 9
    La llargada de la paraula sony és 4
    La llargada de la paraula colgate és 7
    La llargada de la paraula tesla és 5
    La llargada de la paraula adidas és 6
    La llargada de la paraula apple és 5

Aquests valors poden ser diferents si la cadena de text 'marques' canvia

*/

async function main () {

    let cnt = 0
    let paraula = 'nintendo'
    let marques = ['coca-cola', 'sony', 'colgate', 'tesla', 'adidas', 'apple']
    let marca = ''

    console.log('La llargada de la paraula casa és', paraula.length)

    for (cnt = 0; cnt < marques.length; cnt = cnt + 1) {
        marca = marques[cnt]
        
        // Fes que escrigui aquí el text "La llargada de la paraula XXX és YY"
        // on XXX representa cada una de les paraules de l'array 'marques' i YY la seva llargada
    }

    prompt.end()
}

main()