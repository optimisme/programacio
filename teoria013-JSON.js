/*

Aquest és un exemple de programa mínim,
executa'l amb:

    node teoria013-JSON.js

*/

async function main () {

    // A vegades ens interessa guardar dades
    // de variables en arxius (o bases de dades)

    // O al revés, tranformar dades d'arxius
    // en variables

    // Per fer-ho hem de transformar els objectes
    // en cadenes de text, i guardar aquestes
    // cadenes de text (o al revés)

    // Actualment es fa amb un format anomenat JSON

    let bicicleta = {
        marca: 'BH',
        electrica: false,
        radi: 20
    }

    console.log('\n1:')
    console.log('L\'objecte bicicleta conté:', bicicleta)
    console.log(`La marca de la bicicleta és: ${bicicleta.marca}`)

    /*
    La sortida d'aquest codi és: (executa'l per veure que triga 2 segons)
    1:
    L'objecte bicicleta conté: { marca: 'BH', electrica: false, radi: 20 }
    La marca de la bicicleta és: BH
    */

    // Aquest exemple transforma l'objecte 'bicicleta'
    // en una cadena de text que es pot guardar en
    // un arxiu o base de dades
    // ho fa amb 'JSON.stringify'

    let bicicletaJSON = JSON.stringify(bicicleta)
    console.log('\n2:')
    console.log('Transformació a JSON simple')
    console.log(bicicletaJSON)

    /*
    La sortida d'aquest codi és: (executa'l per veure que triga 2 segons)
    2:
    Transformació a JSON simple
    {"marca":"BH","electrica":false,"radi":20}
    */

    // Si volem que a més ens conservi els
    // salts de línia i ens tabuli correctament
    // ho podem fer amb els paràmetres 'null i 2'
    // on '2' són els espais que farà servir per la tabulació

    let bicicletaJSONtext = JSON.stringify(bicicleta, null, 2)
    console.log('\n3:')
    console.log('Transformació a JSON amb salts de linia i tabulació')
    console.log(bicicletaJSONtext)

    /*
    La sortida d'aquest codi és: (executa'l per veure que triga 2 segons)
    3:
    Transformació a JSON amb salts de linia i tabulació
    {
    "marca": "BH",
    "electrica": false,
    "radi": 20
    }
    */

    // Per fer la operació contrària, 
    // transformar un text tipus JSON en un objecte
    // fem servir 'JSON.parse'
    // Feu servir aquesta funció dins d'un 'try/catch'
    // perquè si el text no és JSON compatible
    // fa fallar el programa

    console.log('\n4:')
    bicicleta = null
    console.log('L\'objecte bicicleta conté:', bicicleta)

    try {
        bicicleta = JSON.parse(bicicletaJSON)
    } catch (e) {
        console.log('Error al parsejar el JSON')
    }

    console.log('L\'objecte bicicleta recuperat d\'un text JSON és:', bicicleta)
    console.log(`La marca de la bicicleta és: ${bicicleta.marca}`)

    /*
    La sortida d'aquest codi és: (executa'l per veure que triga 2 segons)
    4:
    L'objecte bicicleta conté: null
    L'objecte bicicleta recuperat d'un text JSON és: { marca: 'BH', electrica: false, radi: 20 }
    La marca de la bicicleta és: BH
    */
}

main()
