const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui (segons afició):

    M'agrada fer música
    M'agrada practicar un esport
    M'agrada estar amb els amics
    M'agrada provar nous menjars
    M'agrada viatjar
    M'agrada qualsevol cosa 

Fes-ho amb condicio tipus 'switch'

*/

async function main () {

    let edat = parseFloat(await prompt("Quina és la teva afició? (musica, esport, amics, menjar, viatjar) "))

    // Posa aquí el codi per tal d'escriure els texts segons l'afició

    prompt.end()
}

main()