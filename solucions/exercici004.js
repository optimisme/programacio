const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui:

    Quant diners et deu en Marc? 523
    Quant diners li vols perdonar? 23
    El deute d'en Marc és de 523 €
    Després de perdonar-li 23, ara el deute és de 500

On 523 i 23 són valors introduïts per l'usuari

*/

async function main () {

    let deute = parseFloat(await prompt("Quant diners et deu en Marc? "))
    let condonament = parseFloat(await prompt("Quant diners li vols perdonar? "))

    console.log('El deute d\'en Marc és de', deute, '€')
    
    deute = deute - condonament
    
    console.log(`Després de perdonar-li ${condonament}, ara el deute és de ${deute}`)

    prompt.end()
}

main()
