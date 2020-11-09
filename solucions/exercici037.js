const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui com en el següent exemple:

    Paraules de l'array que començen en vocal:
    ara
    estiu
    icona
    ordinador
    utòpic

*/

async function main () {

    let cnt = 0
    let paraules = ['cotxe', 'ara', 'plàtan', 'estiu', 'sabata', 'icona', 'bosc', 'ordinador', 'neu', 'utòpic', 'zoo']
    let paraula = ''
    let primeraLletra = ''

    console.log('Paraules de l\'array que començen en vocal:')
    for (cnt = 0; cnt < paraules.length; cnt = cnt + 1) {
        paraula = paraules[cnt]
        // modifica aquí el valor de 'primeraLletra' perquè contingui la primera lletra del text 'paraula'
        primeraLletra = paraula.charAt(0)

        // afegint només dues línies de codi, modifica el següent switch perquè escrigui només les paraules que començen per vocal
        switch(primeraLletra) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                console.log(paraula)
                break;
            default:
        }
    }

    prompt.end()
}

main()