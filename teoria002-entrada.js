const prompt = require('prompt-promise');

/*

Si necessitem que l'usuari introdueixi dades, hem de:

- Carregar la llibreria 'prompt-promise' (mirar linia 1 d'aquest programa)
- Cridar la comanda 'prompt' des de una funció 'asincrona' amb 'await'
- Tancar la introducció de dades amb un 'prompt.end()' al final de la funció 'main'

Aquest és un exemple de programa mínim,
executa'l amb:

    node teoria002-entrada.js

*/

async function main () {

    let text = await prompt('Escriu un text: ')

    console.log(`L'usuari ha escrit: '${text}'`)

    prompt.end()
}

main()
