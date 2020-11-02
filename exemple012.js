const prompt = require('prompt-promise');

async function main () {


    let str = 'Cotxe Casa Cotxe Cel Pa Cotxe Sabata'
    let arr = str.split('Cotxe')
    let res = arr.join('Moto')
    
    console.log(str)
    console.log(arr)
    console.log(res)
}

main()