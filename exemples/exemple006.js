const prompt = require('prompt-promise');

async function main () {

    let numero3 = 3
    let text3 = "3"

    console.log('La comparació ==  entre un número i un text és: ', numero3 == text3)
    console.log('La comparació === entre un número i un text és: ', numero3 === text3)
    console.log('La comparació !=  entre un número i un text és: ', numero3 != text3)
    console.log('La comparació !== entre un número i un text és: ', numero3 !== text3)

    prompt.end()
}

main()
