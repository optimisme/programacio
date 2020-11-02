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

    let aficio = await prompt("Quina és la teva afició? (musica, esport, amics, menjar, viatjar) ")

    switch (aficio) {
        case 'musica':
            console.log('M\'agrada fer música')
            break;
        case 'esport':
            console.log('M\'agrada practicar un esport')
            break;
        case 'amics':
            console.log('M\'agrada estar amb els amics')
            break;
        case 'menjar':
            console.log('M\'agrada provar nous menjars')
            break;
        case 'viatjar':
            console.log('M\'agrada viatjar')
            break;
        default:
            console.log('M\'agrada qualsevol cosa')
    }

    prompt.end()
}

main()