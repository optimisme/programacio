/*

Aquest és un exemple de programa mínim,
executa'l amb:

    node teoria011-funcionsasync.js

*/

async function espera (segons) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve() }, segons * 1000)
    })
}


async function main () {

    // A vegades no sabem quanta
    // estona trigarà una funció a executar-se
    // alguns exemples:
    // - Quan esperem l'input d'un usuari
    // - Quan llegim un arxiu
    // - Quan agafem dades d'internet

    // En aquests casos fem servir
    // funcions 'asyncrones' que
    // retornen una 'promesa'
    // (la promesa de que t'esperis que et diràn algo)

    // Les funcions 'async' només les podem
    // cridar des d'una altra funció 'async'

    // Per sort, la funció main és
    // 'async' i pot cridar altres funcions
    // 'async'

    // Les funcions 'async' les hem de cridar
    // amb un 'await' al davant

    console.log('\n1:')
    console.log('Espera 2 segons ...')
    await espera(2)
    console.log('Ja!')

    /*
    La sortida d'aquest codi és:
    1:
    Espera 2 segons ...
    Ja!
    */
}

main()
