
/*

Aquest és un exemple de programa mínim,
executa'l amb:

    node teoria005-arrays.js

*/

async function main () {

    // Hi ha diferents funcions que ens
    // ens permeten manipular arrays
    // aquí se'n llisten les més útils

    let arr = ['Programar', 'és', 'fàcil']
 
    console.log('\n1:')
    console.log(`L'array 'arr' conté [${arr}]`)
 
    // Podem saber la llargada d'un array amb '.length'

    console.log('\n2:')
    console.log(`L'array 'arr' conté [${arr}]`)
    console.log(`La llargada de l'array 'arr' és ${arr.length}`)

    // Podem saber en quina posició està un element dins d'un array amb '.indexOf("element")'
    // aquesta funció ens retornarà '-1' si l'element no és dins de l'array

    console.log('\n3:')
    console.log(`L'array 'arr' conté [${arr}]`)
    console.log(`En aquest array la paraula 'fàcil' és a la posició: ${arr.indexOf('fàcil')}`)
    console.log(`En aquest array la paraula 'dificil' és a la posició: ${arr.indexOf('dificil')}`)

    // Podem afegir elements a un array amb '.push("element")
    // aquests elements queden al final de l'array

    console.log('\n4:')
    console.log(`L'array 'arr' conté [${arr}]`)
    console.log(`La llargada de l'array 'arr' és ${arr.length}`)
    arr.push('si')
    arr.push('practiques')
    arr.push('cada')
    arr.push('dia')
    console.log(`L'array 'arr' conté [${arr}]`)
    console.log(`La llargada de l'array 'arr' és ${arr.length}`)

    // Podem treure elements de l'inici d'un array amb '.shift()'
    console.log('\n5:')
    console.log(`L'array 'arr' conté [${arr}]`)
    console.log(`La llargada de l'array 'arr' és ${arr.length}`)
    let tmp0 = arr.shift()
    let tmp1 = arr.shift()
    console.log(`Després de dos 'shift', l'array 'arr' conté [${arr}]`)
    console.log(`La llargada de l'array 'arr' és ${arr.length}`)
    console.log(`La variable 'tmp0' conté ${tmp0}`)
    console.log(`La variable 'tmp1' conté ${tmp1}`)

    // Podem agafar parts d'un array amb '.slice(inici, final)'
    // si li pasem un número negatiu, agafa des del fina de l'array

    let nums = [0, 2, 4, 8, 16, 32, 64, 128, 256]
    let sub0 = nums.slice(4, 6)
    let sub1 = nums.slice(7, 8)
    let sub2 = nums.slice(-3)

    console.log('\n6:')
    console.log(`L'array 'nums' conté [${nums}]`)
    console.log(`L'array 'sub0' conté [${sub0}]`)
    console.log(`L'array 'sub1' conté [${sub1}]`)
    console.log(`L'array 'sub1' conté [${sub2}]`)

    // Podem transformar una cadena de text en un array
    // amb '.split(separador)'

    console.log('\n7:')
    text = 'Hola, em dic Buzz'
    arr = text.split(' ')
    console.log(`El text '${text}' transformat a array, fent servir ' ' com a separador: [${arr}]`)
    text = '24;25;26;27;28;29'
    arr = text.split(';')
    console.log(`El text '${text}' transformat a array, fent servir ';' com a separador: [${arr}]`)
    text = 'neu-bufanda-fred'
    arr = text.split('-')
    console.log(`El text '${text}' transformat a array, fent servir '-' com a separador: [${arr}]`)

    // Al revés, podem transformar un array en un text
    // ajuntant els seus elements amb '.join(separador)

    console.log('\n8:')
    arr = ['Hola', 'em', 'dic', 'Aldrin']
    text = arr.join(' ')
    console.log(`L'array [${arr}] transformat a text, fent servir ' ' com a separador: '${text}'`)
    arr = ['34', '35', '36', '37']
    text = arr.join(',')
    console.log(`L'array [${arr}] transformat a text, fent servir ',' com a separador: '${text}'`)
    arr = ['banyador','piscina','calor']
    text = arr.join('#')
    console.log(`L'array [${arr}] transformat a text, fent servir '# com a separador: '${text}'`)

}

main()
