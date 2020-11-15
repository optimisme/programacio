/*

Aquest és un exemple de programa mínim,
executa'l amb:

    node teoria006-comparacions.js

*/

async function main () {

    // Una comparació, compara elements
    // per dir-nos si són 'certes' o 'falses'
    // per fer comparacions es fan servir:

    // El simbol ===, cert si dos elements són iguals (també en tipus)
    // El simbol == , cert si dos elements són iguals (no compara el tipus)
    // El simbol <  , cert si el primer element és menor que el segon
    // El simbol <= , cert si el primer element és menor o igual que el segon
    // El simbol >  , cert si el primer element és més gran que el segon
    // El simbol >= , cert si el primer element és més gran o igual que el segon
    // El simbol !==, cert si dos elements no són iguals (també en tipus)
    // El simbol != , cert si dos elements no són iguals (no compara el tipus)

    console.log('\n1:')
    console.log(`La comparació entre 3===3 dóna com a resutat '${3===3}'`)
    console.log(`La comparació entre 3==="3" dóna com a resutat '${3==="3"}'`)
    console.log(`La comparació entre 2==2 dóna com a resutat '${2==2}'`)
    console.log(`La comparació entre 2=="2" dóna com a resutat '${2=="2"}'`)

    /*
    La sortida d'aquest codi és:
    1:
    La comparació entre 3===3 dóna com a resutat 'true'
    La comparació entre 3==="3" dóna com a resutat 'false'
    La comparació entre 2==2 dóna com a resutat 'true'
    La comparació entre 2=="2" dóna com a resutat 'true'
    */

    console.log('\n2:')
    console.log(`La comparació entre 3!==3 dóna com a resutat '${3!==3}'`)
    console.log(`La comparació entre 3!=="3" dóna com a resutat '${3!=="3"}'`)
    console.log(`La comparació entre 2!=2 dóna com a resutat '${2!=2}'`)
    console.log(`La comparació entre 2!="2" dóna com a resutat '${2!="2"}'`)

    /*
    La sortida d'aquest codi és:
    2:
    La comparació entre 3!==3 dóna com a resutat 'false'
    La comparació entre 3!=="3" dóna com a resutat 'true'
    La comparació entre 2!=2 dóna com a resutat 'false'
    La comparació entre 2!="2" dóna com a resutat 'false'
    */

    console.log('\n3:')
    console.log(`La comparació entre 3<3 dóna com a resutat '${3<3}'`)
    console.log(`La comparació entre 3<=3 dóna com a resutat '${3<=3}'`)
    console.log(`La comparació entre 3<5 dóna com a resutat '${3<5}'`)
    console.log(`La comparació entre 3<1 dóna com a resutat '${3<1}'`)

    /*
    La sortida d'aquest codi és:
    3:
    La comparació entre 3<3 dóna com a resutat 'false'
    La comparació entre 3<=3 dóna com a resutat 'true'
    La comparació entre 3<5 dóna com a resutat 'true'
    La comparació entre 3<1 dóna com a resutat 'false'
    */

    // També es poden comparar variables amb números o variables entre elles

    let a = 3
    let b = 2

    console.log('\n4:')
    console.log(`La comparació entre a<b dóna com a resutat '${a<b}', on 'a' val ${a} i 'b' val ${b}`)
    console.log(`La comparació entre a<=b dóna com a resutat '${a<=b}', on 'a' val ${a} i 'b' val ${b}`)
    console.log(`La comparació entre a<5 dóna com a resutat '${a<5}', on 'a' val ${a} i 'b' val ${b}`)
    console.log(`La comparació entre 1<b dóna com a resutat '${1<b}', on 'a' val ${a} i 'b' val ${b}`)

    /*
    La sortida d'aquest codi és:
    4:
    La comparació entre a<b dóna com a resutat 'false', on 'a' val 3 i 'b' val 2
    La comparació entre a<=b dóna com a resutat 'false', on 'a' val 3 i 'b' val 2
    La comparació entre a<5 dóna com a resutat 'true', on 'a' val 3 i 'b' val 2
    La comparació entre 1<b dóna com a resutat 'true', on 'a' val 3 i 'b' val 2
    */

    // A part de números, també podem comparar texts

    let c = 'hola'
    let d = 'adeu'

    console.log('\n5:')
    console.log(`La comparació entre c === 'hola' dóna com a resutat '${c === 'hola'}', on 'c' val ${c}`)
    console.log(`La comparació entre c === d dóna com a resutat '${c === d}', on 'c' val ${c} i 'd' val ${d}`)

    /*
    La sortida d'aquest codi és:
    5:
    La comparació entre c === 'hola' dóna com a resutat 'true', on 'c' val hola
    La comparació entre c === d dóna com a resutat 'false', on 'c' val hola i 'd' val adeu
    */

    // A vegades necessitem comparar més d'una condició al mateix temps
    // ho podem fer amb:
    // && per comparar si les dues condicions són certes
    // || per comparar si una de les dues condicions és certa

    let c0 = (3 > 2) && (3 > 1)
    let c1 = (3 > 2) && (3 >= 4)
    
    console.log('\n6:')
    console.log(`El resultat de la comparació "(3 > 2) && (3 > 1)" és ${c0}`)
    console.log(`El resultat de la comparació "(3 > 2) && (3 >= 4)" és ${c1}`)


    /*
    La sortida d'aquest codi és:
    6:
    El resultat de la comparació "(3 > 2) && (3 > 1)" és true
    El resultat de la comparació "(3 > 2) && (3 >= 4)" és false
    */

    let d0 = (3 > 2) || (3 > 1)
    let d1 = (3 > 2) || (3 >= 4)

    console.log('\n7:')
    console.log(`El resultat de la comparació "(3 > 2) || (3 > 1)" és ${d0}`)
    console.log(`El resultat de la comparació "(3 > 2) || (3 >= 4)" és ${d1}`)

    /*
    La sortida d'aquest codi és:
    7:
    El resultat de la comparació "(3 > 2) || (3 > 1)" és true
    El resultat de la comparació "(3 > 2) || (3 >= 4)" és true
    */

    let objecte = 'boli'
    let planta = 'orquidia'

    console.log('\n8:')
    console.log(`El resultat de la comparació "objecte === 'boli' || planta === 'pomera'" és ${objecte === 'boli' || planta === 'pomera'}`)
    console.log(`El resultat de la comparació "objecte === 'boli' && planta === 'pomera'" és ${objecte === 'boli' && planta === 'pomera'}`)
    console.log(`El resultat de la comparació "objecte === 'boli' && planta === 'orquidia'" és ${objecte === 'boli' && planta === 'orquidia'}`)

    /*
    La sortida d'aquest codi és:
    8:
    El resultat de la comparació "objecte === 'boli' || planta === 'pomera'" és true
    El resultat de la comparació "objecte === 'boli' && planta === 'pomera'" és false
    El resultat de la comparació "objecte === 'boli' && planta === 'orquidia'" és true
    */
}

main()
