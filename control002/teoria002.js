const prompt = require('prompt-promise');

/*

Quina és la sortida del següent programa

*/

async function main () {
    
    let varA = 2
    let varB = 2.5
    let varC = 'a'
    let varD = 'hola'
    let varE = [0, 1, 2]
    let varF = ['a', 'b', 'c']
    let varG = { nom: "goku", edat: 10 }

    console.log(typeof varA)
    console.log(typeof varB)
    console.log(typeof varC)
    console.log(typeof varD)
    console.log(typeof varE)
    console.log(typeof varF)
    console.log(typeof varG)

    prompt.end()
}

main()
