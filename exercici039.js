const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui com en el següent exemple:

    Escriu uns quants números separats per un espai:23 24 25 26 27
    Números imparells que ha escrit l'usuari:
    El número 23 és imparell
    El número 25 és imparell
    El número 27 és imparell

Ha de funcionar per qualsevol grup de números que escrigui l'usuari

*/

async function main () {

    let cnt = 0
    let text = await prompt("Escriu uns quants números separats per un espai:")
    let numerosText = []
    let numeros = []
    let numero = 0
    let parell = false

    numerosText = text.split(' ')

    // El següent codi, transforma l'array de textos que hi ha a 'numerosText' en un array de números i el guarda a la variable 'numeros'
    numeros = numerosText.map((numero) => { return parseFloat(numero) })

    console.log('Números imparells que ha escrit l\'usuari:')

    // Posa aquí un bucle que escrigui els números imparells que ha introduït l'usuari
   
    prompt.end()
}

main()