/*

Aquest és un exemple de programa mínim,
executa'l amb:

    node teoria003-variables.js

*/

async function main () {

    // Una variable és un espai de memòria on guardem una dada
    // les variables es declaren amb 'let',
    // el nom de variable que volguem i un valor inicial

    let variable = 0

    // Podem escriure el valor de les varibales fent servir
    // 'console.log' de diferents maneres:

    console.log('\n1:')
    console.log('El contingut de la variable "variable" és:', variable)
    console.log(`El contingut de la variable 'variable' és: ${variable}`)

    /*
    La sortida d'aquest codi és:
    1:
    El contingut de la variable "variable" és: 0
    El contingut de la variable 'variable' és: 0
    */
    
    // Podem canviar els valors de les variables en qualsevol
    // moment, això ho fem amb el símbol '='
    // Fixa't que 'let' només es posa quan es declara la variable

    variable = 16

    // Un cop canvit el valor, el podem tornar a escriure
    // per veure els canvis

    console.log('\n2:')
    console.log(`El contingut de la variable 'variable' és: ${variable}`)

    /*
    La sortida d'aquest codi és:
    2:
    El contingut de la variable 'variable' és: 16
    */

    // Les variables poden guardar molts tipus de dades,
    // els tipus de dades més comuns són els següents:

    let varNumerica = 0     // Un número
    let varText = 'hola'    // Un text   
    let varBooleana = true  // Pot ser true (certa) o false (mentida)

    // Podem saber el tipus de dades que guarda una variable
    // amb la comanda 'typeof'

    console.log('\n3:')
    console.log(`La variable 'varNumerica' és de tipus '${typeof varNumerica}' i té el valor ${varNumerica}`)
    console.log(`La variable 'varText' és de tipus '${typeof varText}' i té el valor '${varText}'`)
    console.log(`La variable 'varBooleana' és de tipus '${typeof varBooleana}' i té el valor (${varBooleana})`)

    /*
    La sortida d'aquest codi és:
    3:
    La variable 'varNumerica' és de tipus 'number' i té el valor 0
    La variable 'varText' és de tipus 'string' i té el valor 'hola'
    La variable 'varBooleana' és de tipus 'boolean' i té el valor (true) és: 16
    */

    // També es poden cambiar els valors d'aquestes variables
    // amb el símbol '='
    // Fixa't que 'let' només es posa quan es declara la variable

    varNumerica = 1
    varText = 'adeu'
    varBooleana = false

    console.log('\n4:')
    console.log(`La variable 'varNumerica' és de tipus '${typeof varNumerica}' i té el valor ${varNumerica}`)
    console.log(`La variable 'varText' és de tipus '${typeof varText}' i té el valor '${varText}'`)
    console.log(`La variable 'varBooleana' és de tipus '${typeof varBooleana}' i té el valor (${varBooleana})`)

    /*
    La sortida d'aquest codi és:
    4:
    La variable 'varNumerica' és de tipus 'number' i té el valor 1
    La variable 'varText' és de tipus 'string' i té el valor 'adeu'
    La variable 'varBooleana' és de tipus 'boolean' i té el valor (false)
    */

    // Hi han variables més complexes, que poden guardar
    // diversos valors diferents, els arrays guarden
    // una llista de dades d'un mateix tipus

    let varArrayNumeric = [0, 8, 16, 32, 64, 128]
    let varArrayText = ['Programar', 'és', 'fàcil']
    let varArrayBoolea = [true, false, true, false]
 
    console.log('\n5:')
    console.log(`La variable 'varArrayNumeric' conté: [${varArrayNumeric}}`)
    console.log(`La variable 'varArrayText' conté: [${varArrayText}]`)
    console.log(`La variable 'varArrayBoolea' conté: [${varArrayBoolea}]`)
 
    /*
    La sortida d'aquest codi és:
    5:
    La variable 'varArrayNumeric' conté: [0,8,16,32,64,128}
    La variable 'varArrayText' conté: [Programar,és,fàcil]
    La variable 'varArrayBoolea' conté: [true,false,true,false]
    */

    // Per saber el valor que guarda una posició
    // concreta d'un array, ho fem amb el número de la 
    // posició començant a contar des de 0
    // Es fa posant el número de la posició entre claudators []

    console.log('\n6:')
    console.log(`El valor de la posició 0 de 'varArrayNumeric' és ${varArrayNumeric[0]}`)
    console.log(`El valor de la posició 1 de 'varArrayNumeric' és ${varArrayNumeric[1]}`)
    console.log(`El valor de la posició 2 de 'varArrayNumeric' és ${varArrayNumeric[2]}`)
    console.log(`El valor de la posició 3 de 'varArrayNumeric' és ${varArrayNumeric[3]}`)

    /*
    La sortida d'aquest codi és:
    6:
    El valor de la posició 0 de 'varArrayNumeric' és 0
    El valor de la posició 1 de 'varArrayNumeric' és 8
    El valor de la posició 2 de 'varArrayNumeric' és 16
    El valor de la posició 3 de 'varArrayNumeric' és 32
    */

    console.log('\n7:')
    console.log(`El valor de la posició 0 de 'varArrayText' és '${varArrayText[0]}'`)
    console.log(`El valor de la posició 1 de 'varArrayText' és '${varArrayText[1]}'`)
    console.log(`El valor de la posició 2 de 'varArrayText' és '${varArrayText[2]}`)

    /*
    La sortida d'aquest codi és:
    7:
    El valor de la posició 0 de 'varArrayText' és 'Programar'
    El valor de la posició 1 de 'varArrayText' és 'és'
    El valor de la posició 2 de 'varArrayText' és 'fàcil
    */

    // També es poden cambiar els valors que hi ha
    // en un array amb el símbol '='

    varArrayNumeric[0] = 1
    varArrayNumeric[1] = 2
    varArrayNumeric[3] = 3

    console.log('\n8:')
    console.log(`El valor de la posició 0 de 'varArrayNumeric' és ${varArrayNumeric[0]}`)
    console.log(`El valor de la posició 1 de 'varArrayNumeric' és ${varArrayNumeric[1]}`)
    console.log(`El valor de la posició 2 de 'varArrayNumeric' és ${varArrayNumeric[2]}`)
    console.log(`El valor de la posició 3 de 'varArrayNumeric' és ${varArrayNumeric[3]}`)

    /*
    La sortida d'aquest codi és:
    8:
    El valor de la posició 0 de 'varArrayNumeric' és 1
    El valor de la posició 1 de 'varArrayNumeric' és 2
    El valor de la posició 2 de 'varArrayNumeric' és 16
    El valor de la posició 3 de 'varArrayNumeric' és 3
    */

    // Les variables tipus objecte, poden guardar
    // tots els tipus de dades anteriors,
    // fins i tot altres objectes

    let varObjecte = {
        numero: 0,
        text: 'Arbre',
        boolea: true,
        arrayNumeric: [256, 512, 2014],
        arrayText: ['Programar', 'implica', 'esforç'],
        arrayBoolea: [false, false, true],
        joguina: {
            text: 'Matrioshka',
            color: 'vermell'
        }
    } 

    // Per saber el valor que guarda una variable
    // interna a un objecte, es posa un . i el nom
    // de la variable de la que en volem conèixer el 
    // contingut

    console.log('\n9:')
    console.log(`El valor de la variable 'numero' dins l'objecte 'varObjecte' és ${varObjecte.numero}`)
    console.log(`El valor de la variable 'text' dins l'objecte 'varObjecte' és ${varObjecte.text}`)
    console.log(`El valor de la variable 'boolea' dins l'objecte 'varObjecte' és ${varObjecte.boolea}`)
    console.log(`El valor de la variable 'arrayNumeric' dins l'objecte 'varObjecte' és [${varObjecte.arrayNumeric}]`)
    console.log(`El valor de la variable 'arrayNumeric[0]' dins l'objecte 'varObjecte' és ${varObjecte.arrayNumeric[0]}`)
    console.log(`El valor de la variable 'arrayNumeric[1]' dins l'objecte 'varObjecte' és ${varObjecte.arrayNumeric[1]}`)
    console.log(`El valor de la variable 'arrayNumeric[2]' dins l'objecte 'varObjecte' és ${varObjecte.arrayNumeric[2]}`)
    console.log(`El valor de la variable 'arrayText' dins l'objecte 'varObjecte' és [${varObjecte.arrayText}]`)
    console.log(`El valor de la variable 'arrayText[0]' dins l'objecte 'varObjecte' és '${varObjecte.arrayText[0]}'`)
    console.log(`El valor de la variable 'arrayText[1]' dins l'objecte 'varObjecte' és '${varObjecte.arrayText[1]}'`)
    console.log(`El valor de la variable 'arrayText[2]' dins l'objecte 'varObjecte' és '${varObjecte.arrayText[2]}'`)
    console.log(`El valor de la variable 'objecte' dins l'objecte 'varObjecte' és ${varObjecte.objecte}`)
    console.log(`El valor de la variable 'text' dins l'objecte 'joguina' de dins l'objecte 'varObjecte' és '${varObjecte.joguina.text}'`)
    console.log(`El valor de la variable 'color' dins l'objecte 'joguina' de dins l'objecte 'varObjecte' és '${varObjecte.joguina.color}'`)
    console.log()

    /*
    La sortida d'aquest codi és:
    9:
    El valor de la variable 'numero' dins l'objecte 'varObjecte' és 0
    El valor de la variable 'text' dins l'objecte 'varObjecte' és Arbre
    El valor de la variable 'boolea' dins l'objecte 'varObjecte' és true
    El valor de la variable 'arrayNumeric' dins l'objecte 'varObjecte' és [256,512,2014]
    El valor de la variable 'arrayNumeric[0]' dins l'objecte 'varObjecte' és 256
    El valor de la variable 'arrayNumeric[1]' dins l'objecte 'varObjecte' és 512
    El valor de la variable 'arrayNumeric[2]' dins l'objecte 'varObjecte' és 2014
    El valor de la variable 'arrayText' dins l'objecte 'varObjecte' és [Programar,implica,esforç]
    El valor de la variable 'arrayText[0]' dins l'objecte 'varObjecte' és 'Programar'
    El valor de la variable 'arrayText[1]' dins l'objecte 'varObjecte' és 'implica'
    El valor de la variable 'arrayText[2]' dins l'objecte 'varObjecte' és 'esforç'
    El valor de la variable 'objecte' dins l'objecte 'varObjecte' és undefined
    El valor de la variable 'text' dins l'objecte 'joguina' de dins l'objecte 'varObjecte' és 'Matrioshka'
    El valor de la variable 'color' dins l'objecte 'joguina' de dins l'objecte 'varObjecte' és 'vermell'
    */

    // També es poden cambiar els valors que hi ha
    // en un objecte amb el símbol '='

    varObjecte.numero = 5
    varObjecte.text = 'Flor'
    varObjecte.arrayNumeric[0] = 1
    varObjecte.arrayNumeric[1] = 2
    varObjecte.arrayNumeric[2] = 3
    varObjecte.joguina.text = 'Baldufa'

    console.log('\n10:')
    console.log(`El valor de la variable 'numero' dins l'objecte 'varObjecte' és ${varObjecte.numero}`)
    console.log(`El valor de la variable 'text' dins l'objecte 'varObjecte' és ${varObjecte.text}`)
    console.log(`El valor de la variable 'arrayNumeric' dins l'objecte 'varObjecte' és [${varObjecte.arrayNumeric}]`)
    console.log(`El valor de la variable 'text' dins l'objecte 'joguina' de dins l'objecte 'varObjecte' és '${varObjecte.joguina.text}'`)

    /*
    La sortida d'aquest codi és:
    10:
    El valor de la variable 'numero' dins l'objecte 'varObjecte' és 5
    El valor de la variable 'text' dins l'objecte 'varObjecte' és Flor
    El valor de la variable 'arrayNumeric' dins l'objecte 'varObjecte' és [1,2,3]
    El valor de la variable 'text' dins l'objecte 'joguina' de dins l'objecte 'varObjecte' és 'Baldufa'
    */
    
    // Les variables de text es poden convertir en numèriques
    // de dues maneres

    let numText = '3.56'
    let numDecimal = parseFloat(numText)
    let numEnter = parseInt(numText)

    console.log('\n11:')
    console.log(`El text '${numText} es pot transformar en decimal: ${numDecimal}`)
    console.log(`El text '${numText} es pot transformar en enter: ${numEnter}`)

    /*
    La sortida d'aquest codi és:
    11:
    El text '3.56 es pot transformar en decimal: 3.56
    El text '3.56 es pot transformar en enter: 3
    */

    // Igualment un número decimal es pot transformar en enter
    numDecimal = 4.467
    numEnter = parseInt(numDecimal)

    console.log('\n12:')
    console.log(`El valor enter de '${numDecimal}' és: ${numEnter}`)

    /*
    La sortida d'aquest codi és:
    12:
    El valor enter de '4.467' és: 4
    */
}

main()