/*

Aquest és un exemple de programa mínim,
executa'l amb:

    node teoria010-funcionsarrow.js

*/

async function main () {

    // A vegades no sabem quant
    // necessitem declarar una funció 
    // dins el mateix codi (el main o una altra funció)

    // Les funcions 'arrow' ens permeten
    // declarar funcions dins el mateix codi
    // i guardar-les com si fóssin una variable

    // La gràcia de les funcions arrow és que
    // poden accedir a les variables
    // locals d'aquell codi, com si fóssin globals

    // Les funcions arrow no es declaren amb 
    // 'function nomFuncio(paràmetres) { /* codi de la funcio */ }'
    // sinó que es declaren amb '(paràmetres) => { /* codi de la funcio */ }'

    console.log('\n1:')
    let a = 5
    let funcX = (x) => {
        console.log(`El valor del paràmetre 'x' és: ${x}`)
        console.log(`El valor de la variable 'a' és: ${a}`)
    }

    funcX(4)

    /*
    La sortida d'aquest codi és:
    1:
    El valor del paràmetre 'x' és: 4
    El valor de la variable 'a' és: 5
    */
}

main()
