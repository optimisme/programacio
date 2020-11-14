/*

Aquest és un exemple de programa mínim,
executa'l amb:

    node teoria007-condicions.js

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

    console.log('1:')
    console.log(`La comparació entre 3===3 dóna com a resutat '${3===3}'`)
    console.log(`La comparació entre 3==="3" dóna com a resutat '${3==="3"}'`)
    console.log(`La comparació entre 2==2 dóna com a resutat '${2==2}'`)
    console.log(`La comparació entre 2=="2" dóna com a resutat '${2=="2"}'`)

    console.log('2:')
    console.log(`La comparació entre 3!==3 dóna com a resutat '${3!==3}'`)
    console.log(`La comparació entre 3!=="3" dóna com a resutat '${3!=="3"}'`)
    console.log(`La comparació entre 2!=2 dóna com a resutat '${2!=2}'`)
    console.log(`La comparació entre 2!="2" dóna com a resutat '${2!="2"}'`)

    // Les condicions ens permeten decidir si un troç
    // de codi s'executa o s'ignora
    // la notació és: 'if (condició)'
    // les condicions només poden ser certes o falses
    
    console.log('\n2:')

    if (true) {
        console.log(`El codi dins d'una condició certa, s'executa`)
    }

    if (false) {
        console.log(`El codi dins d'una condició falsa, no s'executa`)
    }

    // Les condicions poden definir el codi que
    // cal executar si la condició no es compleix
    // això es fa amb un 'else'

    console.log('\n3:')

    let salutacio = 'hi'
    if (salutacio === 'hola') {
        console.log(`Aquest codi només s'executa si es compleix la condició`)
    } else {
        console.log(`La part de l'else només s'executa si la condició anterior no s'ha complert`)
    }

    // A vegades necessitem comparar més d'una condició
    // abans de decidis si executar el codi que hi ha a 'else'
    // això ho podem fer amb 'else if'

    onsole.log('\n4:')

    let objecte = 'radio'
    if (objecte === 'tele') {

        console.log(`Aquest codi només s'executa si "objecte" té el valor "tele"`)

    } else if (objecte === 'radio') {

        console.log(`Aquest codi només s'executa si "objecte" té el valor "radio"`)

    } else {

        console.log(`Aquest codi només s'executa si "objecte" no val ni "tele" ni "radio"`)
    }

    // Fixa't que anem descartant per ordre de condicions, així 
    // en el següent exemple no cal comparar si l'edat és més gran que
    // les anteriors ja comparades

    onsole.log('\n5:')

    let edat = 25
    if (edat <= 10) {
        console.log('Ets un nen')
    } else if (edat < 18) {
        console.log('Ets un adolescent')
    } else {
        console.log('Ets un adult')
    }

    // A vegades volem comparar una variable
    // amb diverses possibilitats, això es fa amb un 'switch'
    // el codi que posem a 'default'
    // és el que s'executa si no hi ha cap coincidència

    console.log('\n6:')
    let color = 'blau'
    switch (color) {
        case 'blau':
            console.log('El mar és blau')
            break
        case 'verd':
            console.log('La gespa és verda')
            break
        default:
            console.log('Quin color tant lleig')
    }

    // Si no posem 'break' després d'una coincidència
    // s'excecuta el codi de la següent coincidència
    console.log('\n7:')
    color = 'blau'
    switch (color) {
        case 'blau':
            console.log('El mar és blau')
        case 'verd':
            console.log('La gespa és verda')
            break
        default:
            console.log('Quin color tant lleig')
    }
}

main()
