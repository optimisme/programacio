const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo sigui:

Si és < 35, aleshores 'Fer el gandul'
Si és >=35 i < 50, aleshores 'Aprofitar el dia a dia'
Si és >= 50, aleshores 'Contemplar als altres'

Exemples:

    Escriu la teva edat: 34
    Segons la teva edat t'agrada Fer el gandul

    Escriu la teva edat: 35
    Segons la teva edat t'agrada Aprofitar el dia a dia

    Escriu la teva edat: 50
    Segons la teva edat t'agrada Contemplar als atres
*/

// Fes una funció 'tipusEdat' que retorni el text corresponen a l'enunciat, 
// segons l'edat que reb per paràmetre
function tipusEdat (edat) {

    let rst = ''

    if (edat < 35) {
        rst = 'Fer el gandul'
    } else if (edat < 50) {
        rst = 'Aprofitar el dia a dia'
    } else {
        rst = 'Contemplar als atres'
    }

    return rst
}

async function main () {

    let num = parseFloat(await prompt("Escriu la teva edat: "))
    let rst = ''

    // Crida la funció 'tipusEdat' amb els tres numero introduït per l'usuari
    rst = tipusEdat(num)

    // Escriu la resposta segons els exemples
    console.log(`Segons la teva edat t'agrada ${rst}`)


    prompt.end()
}

main()