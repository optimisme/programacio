const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que et suggereixi
una serie segons les següents edats:

- Menys de 10 anys, 'La patrulla canina'
- Entre 10 i 15 anys, 'Tokyo Ghoul'
- Entre 15 i 18 anys, 'Stranger things'
- Entre 18 i 35 anys, 'The Boys'
- Entre 35 i 50 anys, 'Euphoria'

- Més the 50 anys et demanarà: 'Ets molt romàntic?'

- Si la resposta és que 'No', et suggerirà: 'Sharp objects'
- Sinó 'Big little lies'

*/

async function main () {

    let edat = await prompt("- Quina edat tens? (Escriu un número) ")

    if (edat < 5) {

        console.log("Podries veure 'La patrulla canina'")

    } else if (edat < 18) {

    } else {

    }


    prompt.end()
}

main()
