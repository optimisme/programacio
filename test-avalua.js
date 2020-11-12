const fs = require('fs')
const spawn = require('child_process').spawn;

let callArgs = process.argv.slice(2);

async function runNode (file, inputs, args) {
    return new Promise((resolve, reject) => {
        let child = null
        let out = ''
        let cntInput = 0

        child = spawn('node ' + file, args, { cwd: './', shell: true })
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

async function comprova (num, inputs, args, solucio, detalls) {

    let out = await runNode(`exercici${num}.js`, inputs)

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
        if (detalls) {
            console.log(`S'esperava:`)
            console.log(`${solucio.replace(/ /g, '·')}`)
            console.log(`S'ha obtingut:`)
            console.log(`${out.replace(/ /g, '·')}`)
        }
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
    let detalls = (callArgs[1] === 'detalls')
    let crides = JSON.parse(await fs.promises.readFile('./test-validacions.json', 'utf-8'))

    if (callArgs.length === 0) {
        // Sense arguments mostra un missatge d'ajuda

        console.log('Falta un argument, per exemple:')
        console.log('  node test-avalua.js 010')
        console.log('  node test-avalua.js 010 detalls')
        console.log('  node test-avalua.js tots')
        console.log('  node test-avalua.js tots detalls')

    } else if (callArgs[0] === 'tots') {
        // Amb l'argument 'tots' comprova tots els exercicis i mostra una nota
        
        // Valida cada un dels exercicis
        for (cnt = 0; cnt < crides.length; cnt = cnt + 1) {
            arrRst.push(await comprova(crides[cnt].num, crides[cnt].inputs, crides[cnt].args, crides[cnt].out, detalls))
        }
    
        // Calcula les execucions correctes i les errònies de cada exercici
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
    
        // Calcula la nota total ponderada
        arrKys = Object.keys(objRst)
        for (cnt = 0; cnt < arrKys.length; cnt = cnt + 1) {
            key = arrKys[cnt]
            nota = nota + (objRst[key].ok / (objRst[key].ok + objRst[key].ko))
        }
        nota = 10 * (nota / arrKys.length)
    
        // Mostra el resultat
        console.log('Nota:', nota.toFixed(1))

    } else {

        // Valida l'exercici que coincideix amb el primer argument (tots els tests d'aquest exercici)
        for (cnt = 0; cnt < crides.length; cnt = cnt + 1) {

            if (crides[cnt].num === callArgs[0]) {

                arrRst.push(await comprova(crides[cnt].num, crides[cnt].inputs, crides[cnt].args, crides[cnt].out, detalls))
            }
        }
    }
}

main()