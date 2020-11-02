const prompt = require('prompt-promise');

async function main () {


    let fruites = ['Poma', 'Pera', 'Datil', 'Tomaquet', 'Plàtan', 'Préssec', 'Papaya']
    let subArr = fruites.slice(1, 4)

    console.log(fruites)
    console.log(subArr)
}

main()