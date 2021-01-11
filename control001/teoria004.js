const prompt = require('prompt-promise');

/*

Què mostrarà aquest programa per pantalla?

*/

async function main () {
    
    let cadena = '*'

    for (let i = 0; i < 5; i++) {
        cadena = cadena + ''
        console.log(i)
        console.log(cadena)
    }

    prompt.end()
}

main()
