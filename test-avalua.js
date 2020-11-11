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

async function comprova (num, inputs, args, solucio) {

    let carpeta = './'
    let out = await runNode(`${carpeta}exercici${num}.js`, inputs)

    if (out == '') {
        console.log(`${num} - \x1b[31mKO\x1b[0m - ${inputs}`)
        console.log(`Hi ha algun error amb l'execució`)
        return [num, 0]
    }

    if (out == solucio) {
        console.log(`${num} - \x1b[32mOK\x1b[0m - ${inputs}`)
        return [num, 1]
    } else {
        console.log(`${num} - \x1b[31mKO\x1b[0m - ${inputs}`)
        console.log(`S'esperava:`)
        console.log(`${solucio.replace(/ /g, '·')}`)
        console.log(`S'ha obtingut:`)
        console.log(`${out.replace(/ /g, '·')}`)
        return [num, 0]
    }
}

async function main () {

    let arrRst = []
    let objRst = {}
    let arrKys = []
    let key = ''
    let cnt = 0
    let nota = 0
    let crides = JSON.parse(await fs.promises.readFile('./test-validacions.json', 'utf-8'))

    for (cnt = 0; cnt < crides.length; cnt = cnt + 1) {
        arrRst.push(await comprova(crides[cnt].num, crides[cnt].inputs, crides[cnt].args, crides[cnt].out))
    }

    for (cnt = 0; cnt < arrRst.length; cnt = cnt + 1) {
        key = arrRst[cnt][0]
        if (objRst[key] === undefined) {
            objRst[key] = { ok: 0, ko: 0 }
        }
        if (arrRst[cnt][1] == 1) {
            objRst[key].ok += 1
        } else {
            objRst[key].ko += 1
        }
    }

    arrKys = Object.keys(objRst)
    for (cnt = 0; cnt < arrKys.length; cnt = cnt + 1) {
        key = arrKys[cnt]
        nota = nota + (objRst[key].ok / (objRst[key].ok + objRst[key].ko))
    }

    nota = 10 * (nota / arrKys.length)

    console.log('Nota:', nota.toFixed(1))
}

main()