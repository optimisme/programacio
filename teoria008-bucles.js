/*

Aquest és un exemple de programa mínim,
executa'l amb:

    node teoria008-bucles.js

*/

async function main () {

    // Els bucles permeten executar unes mateixes
    // linies de codi diverses vegades

    // El bucle 'for' funciona amb una
    // variable que conta un valor
    // entre un número inicial i una
    // condició de sortida

    // Cada cop que s'executa el codi del bucle
    // la variable que conta, canvia de valor
    // segons el paràmetre final del 'for'

    console.log('\n1:')

    let cnt = 0
    for (cnt = 0; cnt < 3; cnt = cnt + 1) {
        console.log(`El valor de 'cnt' és: ${cnt}`)
    }

    // Això és molt útil per fer operacions
    // amb 'arrays', per exemple, per
    // escriure tots els valors d'un array
    // manualment hem de:

    console.log('\n2:')

    let arr = ['A', 'B', 'C', 'D', 'E']
    console.log(`El valor de la posició 0 de l'array és ${arr[0]}`)
    console.log(`El valor de la posició 1 de l'array és ${arr[1]}`)
    console.log(`El valor de la posició 2 de l'array és ${arr[2]}`)
    console.log(`El valor de la posició 3 de l'array és ${arr[3]}`)
    console.log(`El valor de la posició 4 de l'array és ${arr[4]}`)

    // Fer-ho amb un bucle té dues avantatges:
    // - No cal repetir codi, se n'encarrega el bucle
    // - No cal saber quants elements té l'array (ho fem amb '.length')

    console.log('\n3:')
    for (cnt = 0; cnt < arr.length; cnt = cnt + 1) {
        console.log(`El valor de la posició ${cnt} de l'array és ${arr[cnt]}`)
    }

    // L'últim paràmetre del bucle for no té
    // perquè comptar de 1 en 1, ni cap endavant
    // en el següent exemple compte endarrera de 2 en 2
    
    // Cal anar en compte que es compleixi la condició de sortida!

    console.log('\n4:')
    for (cnt = (arr.length - 1); cnt >= 0 ; cnt = cnt - 2) {
        console.log(`El valor de la posició ${cnt} de l'array és ${arr[cnt]}`)
    }

    // A vegades no sabem a priori quants cops
    // cal repetir un bucle, fins a la condició de sortida
    // (no podem contar un número de vegades)

    // En aquest cas, fem servir un bucle 'while'
    // que repeteix un mateix troç de codi, fins que es compleix
    // la condició de sortida

    console.log('\n5:')
    let lletres = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
    cnt = 0
    while (lletres[cnt] != 'd' && cnt < lletres.length) {
        console.log(`A la posició ${cnt}, hi ha una ${lletres[cnt]} encara no hem trobat una 'd'`)
        cnt = cnt + 1
    }
    if (lletres[cnt] == 'd') {
        console.log(`Hem trobat una 'd' a la posició ${cnt}`)
    } else {
        console.log(`No hi ha cap lletra 'd'`)
    } 
}

main()
