const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
mostri el material escollit segons l'objecte triat

    Escriu un objecte i un numero entre 1 i 4 separats per espai: cullera 3
    plàstic

    Escriu un objecte i un numero entre 1 i 4 separats per espai: disc 1
    vinil

    Escriu un objecte i un numero entre 1 i 4 separats per espai: cabas 2
    tela
*/

async function main () {

    let obj = {
        cullera: ['ferro', 'fusta', 'plàstic', 'acer'],
        disc: ['vinil', 'ceràmica', 'plàstic', 'or'],
        cabas: ['plastic', 'tela', 'vimet', 'goma'],
        roda: ['fusta', 'ferro', 'cautxú', 'plastic']
    }
    let txt = await prompt('Escriu un objecte i un numero entre 1 i 4 separats per espai: ')
    let arr = txt.split(' ')

    let objEscollit = arr[0]
    let numEscollit = parseFloat(arr[1]) - 1

    let arrEscollit = obj[objEscollit]
    let matEscollit = arrEscollit[numEscollit]

    console.log(matEscollit)

    prompt.end()
}

main()
