const prompt = require('prompt-promise');

async function main () {


    let fruites = await prompt("- Escriu fruites separades per espai ? ")
    let arr = fruites.split(' ')

    console.log(fruites)
    console.log(arr)
    console.log(arr[1])


    prompt.end()
}

main()
