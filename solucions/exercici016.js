const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui (segons l'entrada de l'usuari):

    El client vol menjar pasta o arros
    El client vol menjar sopa i fruita
    El client vol gelat de postre
    El client vol carn i cafè
    El client vol yogurt o flam
    El client vol una combinació extranya

*/

async function main () {

    let menjar = await prompt("Escull un menjar entre pasta, arròs, sopa o carn:")
    let postre = await prompt("Escull un postre entre fruita, gelat, yogurt, flam o cafè :")

    // Posa condicions perquè els següents resultats tinguin sentit segons les dades introduides per l'usuari
    if (menjar === 'pasta' || menjar === 'arros') {
        console.log('El client vol menjar pasta o arros')
    }
    if (menjar === 'sopa' && postre === 'fruita') {
        console.log('El client vol menjar sopa i fruita')
    }
    if (postre === 'gelat') {
        console.log('El client vol gelat de postre')
    }
    if (menjar === 'carn' && postre === 'cafe') {
        console.log('El client vol carn i cafè')
    }
    if (postre === 'yogurt' || postre === 'flam') {
        console.log('El client vol yogurt o flam')
    }
    
    prompt.end()
}

main()