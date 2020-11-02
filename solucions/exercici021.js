const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui:

    Color verd
    Color blau
    Color vermell
    Color grod
    Color taronja
    Color lila

*/

async function main () {

    let colors = ['verd', 'blau', 'vermell', 'groc', 'taronja', 'lila']
    let cnt = 0

    for (cnt = 0; cnt < colors.length; cnt = cnt + 1) {
        console.log('Color', colors[cnt])
    }

    prompt.end()
}

main()