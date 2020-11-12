const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui:

    arr0 amb un 2: 2,3,4,5,6,7,8,9,10,11
    arr0 amb un 3: 3,4,5,6,7,8,9,10,11,12
    arr1 amb un 2: 11,10,9,8,7,6,5,4,3,2
    arr1 amb un 3: 12,11,10,9,8,7,6,5,4,3

*/

function suma (a, b) {

    return a + b
}

// Fes una funció 'sumaArray' que rebi
// un array i un número com a paràmetres
// aquesta funció ha de retornar un array
// amb el resultat de cridar la funció suma
// entre cada element de l'array i el numero rebut
function sumaArray (arr, num) {

    let rst = []
    let cnt = 0

    for (cnt = 0; cnt < arr.length; cnt = cnt + 1) {
        rst.push(suma(arr[cnt], num))
    }

    return rst
}

async function main () {

    let arr0 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let arr1 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
    let rst = []
    
    rst = sumaArray(arr0, 2)
    console.log(`arr0 amb un 2: ${rst}`)

    rst = sumaArray(arr0, 3)
    console.log(`arr0 amb un 3: ${rst}`)

    rst = sumaArray(arr1, 2)
    console.log(`arr1 amb un 2: ${rst}`)

    rst = sumaArray(arr1, 3)
    console.log(`arr1 amb un 3: ${rst}`)

    prompt.end()
}

main()