/*

Aquest és un exemple de programa mínim,
executa'l amb:

    node teoria009-funcions.js

*/

let varProva = 3

function escriu (text) {

    console.log(text)
}

function sumaTres (a, b, c) {

    return a + b + c
}

function sumaMolts (...args) {

    let cnt = 0
    let suma = 0

    for (cnt = 0; cnt < args.length; cnt = cnt + 1) {
        suma = suma + args[cnt]
    }

    return suma
}

function prova () {
    let varProva = 2

    console.log(`A nivell local, 'varProva' val: ${varProva}`)
    varProva = 4    
    console.log(`A nivell local, 'varProva' val: ${varProva}`)
}

function pintaParet (color, eina) {

    console.log(`Vols pintar la paret de color "${color}" amb "${eina}"`)
}

async function main () {

    // Una funció permet tenir unes línies
    // de codi reservades, que cridem
    // quan ens fan falta (normalment per
    // executar accions específiques)

    // Les funcions, normalment es declaren
    // amb 'function nomDeLaFuncio(parametres)

    // Els paràmetres van a dins dels parèntesis,
    // i a la definició de la funció, actuen
    // com variables que agafen el valor
    // del moment que es crida a la funció

    // És a dir, en el següent exemple, 
    // el paràmetre 'text' de la funció, 
    // tindrà el valor 'Hola'

    console.log('\n1:')
    escriu('Hola')

    /*
    La sortida d'aquest codi és:
    1:
    Hola
    */

    // A les funcions se li poden posar
    // tants paràmetres com necessitem

    // A més, les funciones ens poden retornar
    // un valor amb 'return'
    // quan es crida a 'return' ja no es 
    // continuen executant les instruccions
    // que el segueixen

    // En el següent exemple:
    // - El paràmetre 'a' de la funció valdrà 1
    // - El paràmetre 'b' de la funció valdrà 3
    // - El paràmetre 'c' de la funció valdrà 6

    console.log('\n2:')
    console.log(`El resultat de cridar a 'sumaTres(1, 3, 6)': ${sumaTres(1, 3, 6)}`)

    /*
    La sortida d'aquest codi és:
    2:
    El resultat de cridar a 'sumaTres(1, 3, 6)': 10
    */

    // A vegades no sabem quans paràmetres 
    // tindrà una funció, aleshores podem
    // fer servir '...args'

    // En aquest cas, dins la funció
    // els paràmetres estaràn a l'array 'args'

    console.log('\n3:')
    console.log(`El resultat de cridar a 'sumaMolts(1)': ${sumaMolts(1)}`)
    console.log(`El resultat de cridar a 'sumaMolts(1, 3)': ${sumaMolts(1, 3)}`)
    console.log(`El resultat de cridar a 'sumaMolts(1, 3, 6)': ${sumaMolts(1, 3, 6)}`)

    /*
    La sortida d'aquest codi és:
    3:
    El resultat de cridar a 'sumaMolts(1)': 1
    El resultat de cridar a 'sumaMolts(1, 3)': 4
    El resultat de cridar a 'sumaMolts(1, 3, 6)': 10
    */

    // Per entendre què són els paràmetres,
    // pensa que són les indicacions de com
    // s'ha de fer una ordre, mira el següent exemple

    console.log('\n4:')
    pintaParet('vermell', 'rodillo')
    pintaParet('blau', 'pinzell')

    /*
    La sortida d'aquest codi és:
    4:
    Vols pintar la paret de color "vermell" amb "rodillo"
    Vols pintar la paret de color "blau" amb "pinzell"
    */

    // Quan fem servir funcions, tenim 2 tipus de variables:
    // - Les variables 'globals' que conserven el valor a tot el codi
    // - Les variables 'locals' que només conserven el valor dins la funció

    // En el següent exemple es fa servir un mateix nom de variable
    // 'varProva', veuràs que a nivell global té valor '3'
    // A la funció 'prova' hi ha una variable 'local' amb el
    // mateix nom, que no afecta al valor de la variable 'global'

    console.log('\n5:')
    console.log(`A nivell global, 'varProva' val: ${varProva}`)
    prova()
    console.log(`A nivell global, 'varProva' val: ${varProva}`)

    /*
    La sortida d'aquest codi és:
    5:
    A nivell global, 'varProva' val: 3
    A nivell local, 'varProva' val: 2
    A nivell local, 'varProva' val: 4
    A nivell global, 'varProva' val: 3
    */
}

main()
