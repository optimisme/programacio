const prompt = require('prompt-promise');

/*

Fes un programa que demani d'escriure una frase i:
- mostri la llargada de cada paraula de la frase (ignorant 'en', 'la', 'i', 'al', 'a', 'el')
- digui si la primera lletra és vocal o consonant
- escrigui la última lletra de cada paraula

Per exemple:

    Escriu una frase: la Vero i en Toni han anat al taller a buscar el cotxe
    Vero:
      llarg = 4, lletres (V, o), la primera lletra és consonant
    Toni:
      llarg = 4, lletres (T, i), la primera lletra és consonant
    han:
      llarg = 3, lletres (h, n), la primera lletra és consonant
    anat:
      llarg = 4, lletres (a, t), la primera lletra és vocal
    taller:
      llarg = 6, lletres (t, r), la primera lletra és consonant
    buscar:
      llarg = 6, lletres (b, r), la primera lletra és consonant
    cotxe:
      llarg = 5, lletres (c, e), la primera lletra és consonant

*/

async function main () {

    let frase = await prompt("Escriu una frase: ")
    let arr = frase.split(' ')
    let cnt = 0
    let paraula = ''
    let primeraLletra = ''
    let ultimaLletra = ''

    for (cnt = 0; cnt < arr.length; cnt = cnt + 1) {
      paraula = arr[cnt]
      if (['en', 'la', 'i', 'al', 'a', 'el'].indexOf(paraula) == -1) {
        primeraLletra = paraula.charAt(0)
        ultimaLletra = paraula.charAt(paraula.length - 1)

        console.log(`${paraula}:`)

        switch (primeraLletra) {
          case 'a':
          case 'e':
          case 'i':
          case 'o':
          case 'u':
            console.log(`  llarg = ${paraula.length}, lletres (${primeraLletra}, ${ultimaLletra}), la primera lletra és vocal`)
            break;
          default:
            console.log(`  llarg = ${paraula.length}, lletres (${primeraLletra}, ${ultimaLletra}), la primera lletra és consonant`)
            break;
        }
      }
    }

    prompt.end()
}

main()