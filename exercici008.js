const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui:

    Quin és el teu equip preferit?  
    El teu equip preferit és el Munich

On 'Munich' ha de ser l'equip preferit introduit per l'usuari

*/

async function main () {

    let equip = '' // Demana aquí l'equip preferit de l'usuari

    console.log('El teu equip preferit és el', equip)

    prompt.end()
}

main()
