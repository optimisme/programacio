const fs = require('fs')
const spawn = require('child_process').spawn;

async function runNode (file, inputs, args) {
    return new Promise((resolve, reject) => {
        let child = null
        let out = ''
        let cntInput = 0
        child = spawn('node ' + file, args, { shell: true })
        child.stdin.setEncoding('utf-8')
        child.stdout.on('data', (data) => {
            if (cntInput < inputs.length) {
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

    let carpetaSolucions = './solucions/'
    let out = await runNode(`${carpetaSolucions}exercici${num}.js`, inputs)

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

    let crides = JSON.parse(await fs.promises.readFile('./test-crides.json', 'utf-8'))

    for (cnt = 0; cnt < crides.length; cnt = cnt + 1) {
        arrRst.push(await comprova(crides[cnt].num, crides[cnt].inputs, crides[cnt].args))
    }

    // await fs.promises.writeFile('test-validacions.json', JSON.stringify(arrRst, null, 4), { encoding: 'utf8' })
}

main()