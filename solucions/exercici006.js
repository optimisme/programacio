const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui:

    Quin és el teu color preferit?  
    El teu color preferit és blau

On 'blau' ha de ser el color preferit introduit per l'usuari

*/

async function main () {

    let color = await prompt("Quin és el teu color preferit? ")

    console.log('El teu color preferit és', color)

    prompt.end()
}

main()
