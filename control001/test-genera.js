const fs = require('fs')
const spawn = require('child_process').spawn;

let carpetaSolucions = './solucions/'
let crides = [
    { "num": "001", "inputs": [ "1 1" ], "args": [] },
    { "num": "001", "inputs": [ "1 2" ], "args": [] },
    { "num": "001", "inputs": [ "1 3" ], "args": [] },
    { "num": "001", "inputs": [ "1 4" ], "args": [] },
    { "num": "001", "inputs": [ "1 5" ], "args": [] },
    { "num": "001", "inputs": [ "2 1" ], "args": [] },
    { "num": "001", "inputs": [ "2 2" ], "args": [] },
    { "num": "001", "inputs": [ "2 3" ], "args": [] },
    { "num": "001", "inputs": [ "2 4" ], "args": [] },
    { "num": "001", "inputs": [ "2 5" ], "args": [] },
    { "num": "001", "inputs": [ "3 1" ], "args": [] },
    { "num": "001", "inputs": [ "3 2" ], "args": [] },
    { "num": "001", "inputs": [ "3 3" ], "args": [] },
    { "num": "001", "inputs": [ "3 4" ], "args": [] },
    { "num": "001", "inputs": [ "3 5" ], "args": [] },
    { "num": "001", "inputs": [ "4 1" ], "args": [] },
    { "num": "001", "inputs": [ "4 2" ], "args": [] },
    { "num": "001", "inputs": [ "4 3" ], "args": [] },
    { "num": "001", "inputs": [ "4 4" ], "args": [] },
    { "num": "001", "inputs": [ "4 5" ], "args": [] },
    { "num": "001", "inputs": [ "5 1" ], "args": [] },
    { "num": "001", "inputs": [ "5 2" ], "args": [] },
    { "num": "001", "inputs": [ "5 3" ], "args": [] },
    { "num": "001", "inputs": [ "5 4" ], "args": [] },
    { "num": "001", "inputs": [ "5 5" ], "args": [] },
    { "num": "002", "inputs": [ "A davant de la casa hi ha un arbre molt gran i emplenat de fulles" ], "args": [] },
    { "num": "002", "inputs": [ "A la font pots trobar aigua fresca, clara, saludable i ecològica" ], "args": [] },
    { "num": "002", "inputs": [ "Els esquirols pujen al roure i agafen fusta per la seva gleva" ], "args": [] },
    { "num": "002", "inputs": [ "Ara has de anar a comprar ordi i una mica de escarola" ], "args": [] },
    { "num": "002", "inputs": [ "Aquest edifici és tant alt que far basarda anar-hi pel davant" ], "args": [] },
    { "num": "002", "inputs": [ "A davant de la casa hi ha un arbre molt gran i emplenat de fulles" ], "args": [] },
    { "num": "002", "inputs": [ "En un altre moment hauries anat a agafar ametlles torrades" ], "args": [] },
    { "num": "002", "inputs": [ "Ni ara ni després podràs ausentar-te de la aula si és hora de clase" ], "args": [] },
    { "num": "002", "inputs": [ "Quina mandra agafar el cotxe per anar al centre a mirar espardenyes" ], "args": [] },
    { "num": "002", "inputs": [ "Tasa asa tesa esa tisa isa tosa osa tusa usa" ], "args": [] },
    { "num": "002", "inputs": [ "Avui fa fred però no tan fred com el primer dia al gener" ], "args": [] },
]

async function runNode (file, inputs, args) {
    return new Promise((resolve, reject) => {
        let child = null
        let out = ''
        let cntInput = 0
        child = spawn(`node ${file}`, args, { cwd: carpetaSolucions, shell: true })
        child.stdin.setEncoding('utf-8')
        child.stdout.on('data', (data) => {
            let str = data.toString()
            if (str.slice(-1) === ':' 
             || str.slice(-1) === '?' 
             || str.slice(-2) === ': ' 
             || str.slice(-2) === '? '
             || str.slice(-6) === '? \x1b[0m'
             || str.indexOf(': (') >= 0
             || str.indexOf('? (') >= 0) {
                child.stdin.write(inputs[cntInput])
                out = out + data + inputs[cntInput] + '\n'
                cntInput = cntInput + 1
            } else {
                out = out + data
            }
       })
       child.stdout.on('close', () => {
            resolve(out)
       })
    })
}

async function comprova (num, inputs, args) {

    
    let out = await runNode(`exercici${num}.js`, inputs)

    console.log(num, inputs)

    return {
        num: num,
        inputs: inputs,
        args: args,
        out: out
    }
}

async function main () {

    let cnt = 0
    let arrRst = []

    for (cnt = 0; cnt < crides.length; cnt = cnt + 1) {
        arrRst.push(await comprova(crides[cnt].num, crides[cnt].inputs, crides[cnt].args))
    }

    await fs.promises.writeFile('test-validacions.json', JSON.stringify(arrRst, null, 4), { encoding: 'utf8' })
}

main()