const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
mostri un array amb les paraules que començen amb vocal:

    Escriu una frase amb almenys 5 paraules: un anec camina amb les potes enfangades
    Les paraules que comencen amb vocal: [ 'un', 'anec', 'amb', 'enfangades' ]
*/

function comencaAmbVocal (paraula) {

    let lletra = paraula.charAt(0)

    if (['A', 'E', 'I', 'O', 'U',
         'a', 'e', 'i', 'o', 'u'].indexOf(lletra) == -1) return false
    return true
}

async function main () {
    
    let txt = ''
    let arr = []
    let cnt = 0
    let out = []

    txt = await prompt('Escriu una frase amb almenys 5 paraules: ')
    arr = txt.split(' ')

    
    for (cnt = 0; cnt < arr.length; cnt = cnt + 1) {
        if (comencaAmbVocal(arr[cnt])) {
            out.push(arr[cnt])
        }
    }

    console.log('Les paraules que comencen amb vocal:', out)

    prompt.end()
}

main()
