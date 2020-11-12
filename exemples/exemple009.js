const prompt = require('prompt-promise');

async function main () {


    let cotxes = ['audi', 'citroen', 'tesla']
    let str = cotxes.join(', ')

    console.log(cotxes)
    console.log(str)

    prompt.end()
}

main()
