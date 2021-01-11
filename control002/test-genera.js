const fs = require('fs')
const spawn = require('child_process').spawn;

let carpetaSolucions = './solucions/'
let crides = [
    { "num": "001", "inputs": [ "teclat pantalla" ], "args": [] },
    { "num": "001", "inputs": [ "bicicleta pedal" ], "args": [] },
    { "num": "001", "inputs": [ "neu pluja" ], "args": [] },
    { "num": "001", "inputs": [ "mar peix" ], "args": [] },
    { "num": "002", "inputs": [ "cullera 1" ], "args": [] },
    { "num": "002", "inputs": [ "cullera 2" ], "args": [] },
    { "num": "002", "inputs": [ "cullera 3" ], "args": [] },
    { "num": "002", "inputs": [ "cullera 4" ], "args": [] },
    { "num": "002", "inputs": [ "cabas 1" ], "args": [] },
    { "num": "002", "inputs": [ "cabas 2" ], "args": [] },
    { "num": "002", "inputs": [ "cabas 3" ], "args": [] },
    { "num": "002", "inputs": [ "cabas 4" ], "args": [] },
    { "num": "002", "inputs": [ "disc 1" ], "args": [] },
    { "num": "002", "inputs": [ "disc 2" ], "args": [] },
    { "num": "002", "inputs": [ "disc 3" ], "args": [] },
    { "num": "002", "inputs": [ "disc 4" ], "args": [] },
    { "num": "002", "inputs": [ "roda 1" ], "args": [] },
    { "num": "002", "inputs": [ "roda 2" ], "args": [] },
    { "num": "002", "inputs": [ "roda 3" ], "args": [] },
    { "num": "002", "inputs": [ "roda 4" ], "args": [] },
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