const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui:

    L'alumne fa el curs: 1
    L'alumne fa els estudis: smx
    L'alumne normalment és: maleducat
    Els comunicats de l'alumne:
    - 10/02
    - 15/03
    - 08/07

*/

async function main () {

    let alumne = {
            curs: 1,
            estudis: 'smx',
            conducta: 'maleducat',
            comunicats: ['10/02', '15/03', '08/07'],
        }
    let cnt = 0

    console.log('L\'alumne fa el curs:', alumne.curs)
    console.log('L\'alumne fa els estudis:', alumne.estudis)
    // TODO: Escriu aquí la conducta que té habitualment l'alumne
    
    console.log('Els comunicats de l\'alumne:')
    for (cnt = 0; cnt < alumne.comunicats.length; cnt = cnt + 1) {
        // TODO: Escriu aquí els comunicats de l'alumne, tenint en compte aquest bucle
    }
   
    prompt.end()
}

main()