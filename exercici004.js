const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui:


*/

async function main () {

    let deute = 1500
    let condonament = parseFloat(await prompt("Quant diners li vols perdonar? "))

    console.log('El deute d\'en Marc és de ', deute, '€')
    
    // Resta aquí el valor de 'condonament' al deute d'en Marc

    console.log('Després de perdonar-li', condonament,', ara el deute és de ', deute)
}

main()
