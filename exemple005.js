const prompt = require('prompt-promise');

async function run () {

    let fruita = await prompt("- Quina fruita t'agrada? ")

    switch (fruita) {
        case 'platan':
            console.log("El plàtan porta potasi")
            break
        case 'taronja':
            console.log("La taronja porta vitamina C")
            break
        case 'maduixa':
            console.log("La maduixa ajuda a la circulació")
            break
        default:
            console.log("La fruita és bona per la salut")
    }

    prompt.end()
}

run()
