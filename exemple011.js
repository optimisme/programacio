const prompt = require('prompt-promise');

async function main () {


    let str = 'Cotxe Casa Cotxe Cel Pa Cotxe Sabata'
    let resultadoPrimera = str.replace('Cotxe', 'Moto')
    let resultadoTodas = str.replace(/Cotxe/g, 'Moto')
    
    console.log(str)
    console.log(resultadoPrimera)
    console.log(resultadoTodas)
}

main()
