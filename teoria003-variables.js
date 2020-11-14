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

    // Podem canviar els valors de les variables en qualsevol
    // moment, això ho fem amb el símbol '='
    // Fixa't que 'let' només es posa quan es declara la variable

    variable = 16

    // Un cop canvit el valor, el podem tornar a escriure
    // per veure els canvis

    console.log('\n2:')
    console.log(`El contingut de la variable 'variable' és: ${variable}`)

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
 
    // Per saber el valor que guarda una posició
    // concreta d'un array, ho fem amb el número de la 
    // posició començant a contar des de 0
    // Es fa posant el número de la posició entre claudators []

    console.log('\n6:')
    console.log(`El valor de la posició 0 de 'varArrayNumeric' és ${varArrayNumeric[0]}`)
    console.log(`El valor de la posició 1 de 'varArrayNumeric' és ${varArrayNumeric[1]}`)
    console.log(`El valor de la posició 2 de 'varArrayNumeric' és ${varArrayNumeric[2]}`)
    console.log(`El valor de la posició 3 de 'varArrayNumeric' és ${varArrayNumeric[3]}`)

    console.log('\n7:')
    console.log(`El valor de la posició 0 de 'varArrayText' és '${varArrayText[0]}'`)
    console.log(`El valor de la posició 1 de 'varArrayText' és '${varArrayText[1]}'`)
    console.log(`El valor de la posició 2 de 'varArrayText' és '${varArrayText[2]}`)

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
}

main()