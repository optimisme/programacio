const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui:

    Quin és el teu equip preferit? Munich
    El teu equip preferit és el Munich

On 'Munich' ha de ser l'equip preferit introduit per l'usuari

*/

async function main () {

    let equip = await prompt("Quin és el teu equip preferit? ")

    console.log('El teu equip preferit és el', equip)

    prompt.end()
}

main()
