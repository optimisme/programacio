
/*

Aquest és un exemple de programa mínim,
executa'l amb:

    node teoria004-cadenes.js

*/

async function main () {

    // Hi ha diferents funcions que ens
    // ens permeten manipular cadenes de text
    // aquí se'n llisten les més útils

    let cad = 'Hola, programar és fàcil'
 
    console.log('\n1:')
    console.log(`El text 'cad' conté [${cad}]`)
 
    // Podem saber la llargada d'una cadena de text amb '.length'

    console.log('\n2:')
    console.log(`El text 'cad' conté [${cad}]`)
    console.log(`La llargada de la cadena de text 'cad' és ${cad.length}`)

    // Podem saber en quina posició està un element dins d'una cadena de text amb '.indexOf("element")'
    // aquesta funció ens retornarà '-1' si l'element no és dins de la cadena de text

    console.log('\n3:')
    console.log(`El text 'cad' conté [${cad}]`)
    console.log(`En aquest text la paraula 'fàcil' és a la posició: ${cad.indexOf('fàcil')}`)
    console.log(`En aquest text la paraula 'dificil' és a la posició: ${cad.indexOf('dificil')}`)

    // Podem ajuntar cadenes de text
    // amb l'operador +

    console.log('\n4:')
    console.log(`El text 'cad' conté [${cad}]`)
    console.log(`La llargada de la cadena de text 'cad' és ${cad.length}`)
    cad = cad + `. Només has d'estudiar una mica`
    console.log(`El text 'cad' conté [${cad}]`)
    console.log(`La llargada de la cadena de text 'cad' és ${cad.length}`)

    // Podem obtenir quin caràcter hi ha en una posició concreta
    // de la cadena de text amb '.charAt(posicio)'
    console.log('\n5:')
    console.log(`El text 'cad' conté [${cad}]`)
    console.log(`A la posició 0, el caràcter és "${cad.charAt(0)}"`)
    console.log(`A la posició 1, el caràcter és "${cad.charAt(1)}"`)
    console.log(`A la posició 2, el caràcter és "${cad.charAt(2)}"`)

    // Podem agafar parts d'un array amb '.substring(inici, fi)'
    console.log('\n6:')
    console.log(`El text 'cad' conté [${cad}]`)
    console.log(`La subcadena entre els caràcters 2 i 5 és "${cad.substring(1, 5)}"`)
    console.log(`La subcadena entre els caràcters 2 i 5 és "${cad.substring(6, 15)}"`)

    // Si enlloc de dir la posició final, necessitem dir la longitud
    // hem de fer servir '.substr(inici, long)'
    console.log('\n7:')
    console.log(`El text 'cad' conté [${cad}]`)
    console.log(`La subcadena a partir del caràcter 1 fins al caràcter 4 és "${cad.substr(1, 4)}"`)
    console.log(`La subcadena a partir del caràcter 6 fins al caràcter 9 és "${cad.substr(6, 9)}"`)

    // Podem reempleçar subcadenes de text, dins d'una cadena
    // cadena de text amb: '.replace()'

    console.log('\n8:')
    console.log(`El text 'cad' conté [${cad}]`)
    console.log(`Rempleçar la primera aparició de 'programar' per 'cuinar': ${cad.replace('programar', 'cuinar')}"`)
    console.log(`Rempleçar tote les aparicions de 'a' per '(@)': ${cad.replace(/a/g, '(@)')}"`)

}

main()
