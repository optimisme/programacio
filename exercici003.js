const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que endevini
el teu caràcter segons el teu color preferit a 
partir de la següent llista:

verd: tranquil
blau: fred i distant
lila: analític
vermell: impulsiu
taronja: enèrgic
gris: emàtic
groc: sociable

Qualsevol altre color serà: "Ets una persona fosca i amargada"

*/

async function run () {

    let color = await prompt("- Quin és el teu color preferit? ")

    switch (color) {
        case 'verd':
            console.log("Tens un caràcter tranquil")
            break
        default:
    }


    prompt.end()
}

run()
