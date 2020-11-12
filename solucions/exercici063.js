const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui:

    Array resultant és: 9,8,7,6,5,4,3,2,1,0

*/

// Fes una funció 'giraArray' que rebi
// un array com a paràmetre i que 
// retorni el mateix array però 
// amb els números invertits
function giraArray (arr) {

    let rst = []
    let cnt = 0

    for (cnt = (arr.length - 1); cnt >= 0; cnt = cnt - 1) {
        rst.push(arr[cnt])
    }

    return rst
}

async function main () {

    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let rst = []
    
    rst = giraArray(arr)
    console.log(`Array resultant és: ${rst}`)

    prompt.end()
}

main()