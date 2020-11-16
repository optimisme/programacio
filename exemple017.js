const prompt = require('prompt-promise');


function sumaNumeros (a, b, c) {

    let rst = 0

    rst = a + b + c

    return rst
}

function ajuntaTextos (text0, text1) {

    return text0 + text1
}

async function main () {

    let suma = sumaNumeros(5, 6, 7)

    console.log(suma)

    console.log(ajuntaTextos('Hola', 'Albert'))
    
    prompt.end()
}

main()