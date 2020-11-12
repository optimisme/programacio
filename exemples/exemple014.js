const prompt = require('prompt-promise');

async function main () {

    let alumne = {
        nom: "Albert",
        cognom: "Palacios",
        edat: 41,
        altura: 181
    }

    console.log(alumne)

    alumne.nom = 'Pepito'
    alumne.edat = 35

    console.log(alumne)
    console.log(alumne.nom)
    console.log(alumne.edat)

}

main()
