const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui:

    Array resultant entre arr0 i arr0: 0,2,4,6,8,10,12,14,16,18
    Array resultant entre arr0 i arr1: 9,9,9,9,9,9,9,9,9,9
    Array resultant entre arr1 i arr1: 18,16,14,12,10,8,6,4,2,0

*/

function suma (a, b) {

    return a + b
}

// TODO: Fes una funció 'sumaArrays' que rebi
//       dos arrays com a paràmetres
//       aquesta funció ha de retornar un array
//       amb el resultat de cridar la funció suma
//       entre cada element dels arrays

async function main () {

    let arr0 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let arr1 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
    let rst = []
    
    rst = sumaArrays(arr0, arr0)
    console.log(`Array resultant entre arr0 i arr0: ${rst}`)

    rst = sumaArrays(arr0, arr1)
    console.log(`Array resultant entre arr0 i arr1: ${rst}`)

    rst = sumaArrays(arr1, arr1)
    console.log(`Array resultant entre arr1 i arr1: ${rst}`)

    prompt.end()
}

main()