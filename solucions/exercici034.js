const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui com en el següent exemple:

    La lletra que hi ha a la posició 3 de la cadena de text és: c
    La lletra que hi ha a la posició 4 de la cadena de text és: a
    La lletra que hi ha a la posició 5 de la cadena de text és: s
    La lletra que hi ha a la posició 6 de la cadena de text és: a

Aquests valors poden ser diferents si la cadena de text 'text' canvia

*/

async function main () {

    let text = 'la casa es petita però bonica'
    let lletra = ''

    lletra = text.charAt(3)
    console.log('La lletra que hi ha a la posició 3 de la cadena de text és:', lletra)

    // TODO: Escriu aquí la lletra de la posició 4 segons l'exemple de resultat


    lletra = text.charAt(5)
    console.log('La lletra que hi ha a la posició 5 de la cadena de text és:', lletra)


    // TODO: Escriu aquí la lletra de la posició 6 segons l'exemple de resultat

    prompt.end()
}

main()