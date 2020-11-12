const prompt = require('prompt-promise');

async function main () {

    let treballadors = [{
            nom: "Marta",
            cognom: "Cadàs",
            edat: 35,
            altura: 175,
            aficions: ['esquí', 'música', 'platja']
        },
        {
            nom: "Andreu",
            cognom: "Pérez",
            edat: 25,
            altura: 178,
            aficions: ['futbol', 'bicicleta', 'música']
        },
        {
            nom: "Laia",
            cognom: "Ot",
            edat: 52,
            altura: 167,
            aficions: ['cuina', 'bicicleta']
        }]
    let cnt = 0
    let treballador = {}

    // Llistar treballadors que els agrada la música
    for (cnt = 0; cnt < treballadors.length; cnt = cnt + 1) {
        treballador = treballadors[cnt]
        if (treballador.aficions.indexOf('música') != -1) {
            console.log('A', treballador.nom,'li agrada la música')
        }
    }

}

main()