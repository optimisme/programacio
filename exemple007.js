const prompt = require('prompt-promise');

async function main () {

    let numero3 = 3
    let text3 = "3"

    console.log('La comparació true === true és ',     true === true)
    console.log('La comparació true === false és ',    true === false)
    console.log('La comparació false === true és ',    false === true)
    console.log('La comparació false === false és ',   false === false)

    console.log('La comparació true && true és ',      true && true)
    console.log('La comparació true && false és ',     true && false)
    console.log('La comparació false && true és ',     false && true)
    console.log('La comparació false && false és ',    false && false)


    console.log('La comparació true || true és ',      true || true)
    console.log('La comparació true || false és ',     true || false)
    console.log('La comparació false || true és ',     false || true)
    console.log('La comparació false || false és ',    false || false)

    prompt.end()
}

main()
