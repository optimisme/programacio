const prompt = require('prompt-promise');

async function run () {

    let numeroGossos = await prompt("Quants gossos tens? ")

    if (numeroGossos == 0) {

        console.log("Sense cap gos no pots ser feliç")

    } else if (numeroGossos < 2) {

        console.log("Es deu sentir sol, pobret")

    } else {
        
        console.log("Quina feinada cuidar", numeroGossos, "gossos")
    }

    prompt.end()
}

run()
