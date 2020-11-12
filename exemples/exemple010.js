const prompt = require('prompt-promise');

async function main () {


    let str = 'Hola Pep, avui aniré a comprar pà avui'
    let posAvui = str.indexOf('avui')
    let posComprar = str.indexOf('comprar')
    let recorteAvui = ''
    let recorteComprar = ''

    console.log(str)
    console.log(posAvui)

    recorteAvui = str.substring(posAvui, posAvui + 4) // Posició inicial i final

    console.log(recorteAvui)

    recorteComprar = str.substr(posComprar, 7) // Posició inicial i llargada del retall

    console.log(recorteComprar)

    prompt.end()
}

main()
