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

    // Posa aquí el codi per tal d'escriure els texts segons el color escollit

    prompt.end()
}

main()