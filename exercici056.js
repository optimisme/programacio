const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui:

    Escriu un numero enter: 3
    Escriu un altre numero enter: 5
    3 * 5 = 15

*/

// TODO: Fes la funció 'multiplicaNumeros' que rebi dos paràmetres 'a' i 'b'
//       i retorni el resultat de multiplicar-los

async function main () {

    let numA = parseFloat(await prompt("Escriu un numero enter: "))
    let numB = parseFloat(await prompt("Escriu un altre numero enter: "))
    let multiplicacio = 0

    // TODO: Crida la funció 'multiplicaNumeros' amb els paràmetres 'numA', 'numB'
    //       guarda el resultat que retorna aquesta funció, a la variable 'multiplicacio'

    // TODO: Escriu aquí el contingut de la variable 'multiplicacio' com en l'exemple

    prompt.end()
}

main()