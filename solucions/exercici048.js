const prompt = require('prompt-promise');

/*

Modifica el següent programa per tal que la sortida
al executar-lo escrigui les dades de l'objecte "persona",
segons els paràmetres introduïts per l'usuari

    Escriu el teu nom: Mark
    Quin és el teu color preferit? verd
    Quants anys tens? 53
    Quina és la teva alçada en cm? 178
    Llista les teves aficions (separant-les per un espai): musica esqui videojocs opera
    {
        nom: 'Mark',
        color: 'verd',
        edat: 53,
        alt: 178,
        aficions: [ 'musica', 'esqui', 'videojocs', 'opera' ]
    }

*/

async function main () {

    let persona = {
            nom: '',
            color: '',
            edat: 0,
            alt: 0,
            aficions: []
        }

    persona.nom = await prompt("Escriu el teu nom: ")

    // TODO: Pregunta aquí el color preferit de l'usuari 
    // i guarda el valor a la variable 'color' de l'objecte 'persona'

    persona.edat = parseFloat(await prompt("Quants anys tens? "))

    // TODO: Pregunta aquí l'alçada en cm de l'usuari 
    // i guarda el valor a la variable 'alt' de l'objecte 'persona'

    // TODO: Pregunta aquí les aficions de l'usuari, separades per un 'espai'
    // fes servir la funció 'split' per transformar-les en un array
    // guarda el resultat a la variable 'aficions' de l'objecte 'persona'

    console.log(persona)

    prompt.end()
}

main()