/*

Aquest és un exemple de programa mínim,
executa'l amb:

    node teoria010-funcionsarrow.js

*/

async function main () {

    // A vegades el codi falla,
    // per exemple:
    // - Quan volem llegir un arxiu que no existeix
    // - Quan cridem a una funció que no existeix
    // - Quan accedim a una posició d'un array que no existeix

    // Si no estem segurs que el nostre codi falli
    // hem de vigilar que no es quedi del tot 
    // penjat amb un error

    // Ho fem amb l'estructura 
    // 'try { /* codi a intentar */ } catch (e) { /* codi en cas d'error */ }'
    // la variable 'e' conté el missatge d'error obtingut

    console.log('\n1:')
    let a = 0
    try {
        cridaABC()
    } catch (e) {
        console.log(`Hi ha hagut un error al codi, (${e.toString().split('\n')[0]})`)
    }

    console.log('El programa acaba sense penjar-se')

    /*
    La sortida d'aquest codi és: (executa'l per veure que triga 2 segons)
    1:
    Hi ha hagut un error al codi, (ReferenceError: cridaABC is not defined)
    El programa acaba sense penjar-se
    */
}

main()
