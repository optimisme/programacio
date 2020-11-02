const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui (segons el color):

    El parc del poble té moltes plantes de color verd
    El mar és blau
    Tinc un jersei de color vermell
    En Picachu és de color groc
    Ni idea de quin color és aquest

Fes-ho amb condicions tipus 'switch'

*/

async function main () {

    let color = await prompt("Escriu un d'aquests colors (verd, blau, vermell, groc): ")

    switch (color) {
        case 'verd':
            console.log('El parc del poble té moltes plantes de color verd')
            break;
        case 'blau':
            console.log('El mar és blau')
            break;
        case 'vermell':
            console.log('Tinc un jersei de color vermell')
            break;
        case 'groc':
            console.log('En Picachu és de color groc')
            break;
        default:
            console.log('Ni idea de quin color és aquest')
    }

    prompt.end()
}

main()