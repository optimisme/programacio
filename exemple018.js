const prompt = require('prompt-promise');



function escriu (text) {

    console.log(`> ${text}`)
    console.log('------------')
}

function escriuDadesPersona (persona) {

    console.log(`Nom: ${persona.nom}`)
    console.log(`Edat: ${persona.edat}`)
    console.log(`---`)
}

async function main () {

    let obj = []
    let cnt = 0

    obj.push({
        nom: 'Albert',
        edat: 41
    })

    obj.push({
        nom: 'Alvaro',
        edat: 5
    })

    obj.push({
        nom: 'Zahir',
        edat: 23
    })

    obj.push({
        nom: 'Samuel',
        edat: 16
    })

    obj.push({
        nom: 'Albert',
        edat: 17
    })


    for (cnt = 0; cnt < obj.length; cnt = cnt + 1) {
        escriuDadesPersona(obj[cnt])
    }
    
    prompt.end()
}

main()