const prompt = require('prompt-promise');

async function main () {

    let alumnes = []

    alumnes.push({
        nom: "Albert",
        cognom: "Palacios",
        edat: 41,
        altura: 181
    })

    alumnes.push({
        nom: "Marc",
        cognom: "Safont",
        edat: 19,
        altura: 193
    })

    alumnes[1].nom = 'Pepito'

    console.log(alumnes[1].nom)

}

main()
