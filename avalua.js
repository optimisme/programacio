let spawn = require('child_process').spawn,
    child;

async function runNode (file, inputs, args) {
    return new Promise((resolve, reject) => {
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

    let carpeta = './'
    let carpetaSolucions = './solucions/'
    let out = await runNode(`${carpeta}exercici${num}.js`, inputs)
    let outOk = await runNode(`${carpetaSolucions}exercici${num}.js`, inputs)

    if (out == outOk) {
        console.log(`${num} \x1b[32mOK\x1b[0m - ${inputs}`)
        return [num, 1]
    } else {
        console.log(`${num} \x1b[31mKO\x1b[0m - ${inputs}`)
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

    arrRst.push(await comprova('001', [], null))
    arrRst.push(await comprova('002', [], null))
    arrRst.push(await comprova('003', [], null))
    arrRst.push(await comprova('004', ['500', '50'], null))
    arrRst.push(await comprova('004', ['200', '25'], null))
    arrRst.push(await comprova('005', [], null))
    arrRst.push(await comprova('006', ['blau'], null))
    arrRst.push(await comprova('006', ['taronja'], null))
    arrRst.push(await comprova('007', ['25', '50'], null))
    arrRst.push(await comprova('007', ['2', '5'], null))
    arrRst.push(await comprova('008', ['voltregà'], null))
    arrRst.push(await comprova('008', ['manlleu'], null))
    arrRst.push(await comprova('009', ['25'], null))
    arrRst.push(await comprova('009', ['50'], null))
    arrRst.push(await comprova('009', ['75'], null))
    arrRst.push(await comprova('010', ['50', '25'], null))
    arrRst.push(await comprova('010', ['25', '50'], null))
    arrRst.push(await comprova('010', ['40', '40'], null))
    arrRst.push(await comprova('011', ['verd'], null))
    arrRst.push(await comprova('011', ['blau'], null))
    arrRst.push(await comprova('011', ['vermell'], null))
    arrRst.push(await comprova('011', ['groc'], null))
    arrRst.push(await comprova('011', ['lila'], null))
    arrRst.push(await comprova('012', ['verd'], null))
    arrRst.push(await comprova('012', ['blau'], null))
    arrRst.push(await comprova('012', ['vermell'], null))
    arrRst.push(await comprova('012', ['groc'], null))
    arrRst.push(await comprova('012', ['lila'], null))
    arrRst.push(await comprova('013', ['9'], null))
    arrRst.push(await comprova('013', ['10'], null))
    arrRst.push(await comprova('013', ['11'], null))
    arrRst.push(await comprova('013', ['17'], null))
    arrRst.push(await comprova('013', ['18'], null))
    arrRst.push(await comprova('013', ['19'], null))
    arrRst.push(await comprova('013', ['29'], null))
    arrRst.push(await comprova('013', ['30'], null))
    arrRst.push(await comprova('013', ['31'], null))
    arrRst.push(await comprova('013', ['39'], null))
    arrRst.push(await comprova('013', ['40'], null))
    arrRst.push(await comprova('013', ['41'], null))
    arrRst.push(await comprova('013', ['59'], null))
    arrRst.push(await comprova('013', ['60'], null))
    arrRst.push(await comprova('013', ['61'], null))
    arrRst.push(await comprova('014', ['musica'], null))
    arrRst.push(await comprova('014', ['esports'], null))
    arrRst.push(await comprova('014', ['amics'], null))
    arrRst.push(await comprova('014', ['menjar'], null))
    arrRst.push(await comprova('014', ['viatjar'], null))
    arrRst.push(await comprova('014', ['saltar'], null))
    arrRst.push(await comprova('015', ['gat', 'corda'], null))
    arrRst.push(await comprova('015', ['gat', 'pilota'], null))
    arrRst.push(await comprova('015', ['gos', 'corda'], null))
    arrRst.push(await comprova('015', ['gos', 'pilota'], null))
    arrRst.push(await comprova('016', ['pasta', 'fruita'], null))
    arrRst.push(await comprova('016', ['arròs', 'fruita'], null))
    arrRst.push(await comprova('016', ['sopa', 'fruita'], null))
    arrRst.push(await comprova('016', ['carn', 'gelat'], null))
    arrRst.push(await comprova('016', ['carn', 'cafè'], null))
    arrRst.push(await comprova('016', ['arròs', 'yogurt'], null))
    arrRst.push(await comprova('016', ['arròs', 'flam'], null))
    arrRst.push(await comprova('017', ['5'], null))
    arrRst.push(await comprova('017', ['9'], null))
    arrRst.push(await comprova('018', ['5'], null))
    arrRst.push(await comprova('018', ['8'], null))
    arrRst.push(await comprova('019', [], null))
    arrRst.push(await comprova('020', [], null))
    arrRst.push(await comprova('021', [], null))
    arrRst.push(await comprova('022', [], null))
    arrRst.push(await comprova('023', ['2'], null))
    arrRst.push(await comprova('023', ['5'], null))
    arrRst.push(await comprova('024', ['8'], null))
    arrRst.push(await comprova('024', ['16'], null))
    arrRst.push(await comprova('025', ['7'], null))
    arrRst.push(await comprova('025', ['42'], null))
    arrRst.push(await comprova('026', ['gat gos guineu lleó ovella'], null))
    arrRst.push(await comprova('026', ['conill roselló'], null))
    arrRst.push(await comprova('027', [], null))
    arrRst.push(await comprova('028', [], null))
    arrRst.push(await comprova('029', [], null))
    arrRst.push(await comprova('030', [], null))
    arrRst.push(await comprova('031', [], null))
    arrRst.push(await comprova('032', [], null))
    arrRst.push(await comprova('033', [], null))
    arrRst.push(await comprova('034', [], null))
    arrRst.push(await comprova('035', [], null))
    arrRst.push(await comprova('036', [], null))
    arrRst.push(await comprova('037', [], null))
    arrRst.push(await comprova('038', ['22 25 12 181 2 3 4 5 6 7 8 9'], null))
    arrRst.push(await comprova('039', ['1 2 3 4 5 6 7 8 9'], null))
    arrRst.push(await comprova('039', ['22 25 12 18 17 15 44'], null))
    arrRst.push(await comprova('040', ['1', '8'], null))
    arrRst.push(await comprova('040', ['4', '6'], null))
    arrRst.push(await comprova('041', ['4', '22'], null))
    arrRst.push(await comprova('041', ['17', '37'], null))
    arrRst.push(await comprova('042', ['22 25 12'], null))
    arrRst.push(await comprova('042', ['12 18 17 15 44'], null))
    arrRst.push(await comprova('043', ['22 25 12 7 5 6'], null))
    arrRst.push(await comprova('044', [], null))
    arrRst.push(await comprova('045', [], null))
    arrRst.push(await comprova('046', [], null))
    arrRst.push(await comprova('047', [], null))
    arrRst.push(await comprova('048', ['Albert', 'verd', '41', '181', 'programació musica passejar'], null))
    arrRst.push(await comprova('049', [], null))
    arrRst.push(await comprova('050', ['La Marta i en Manel tornen de l\'hort amb una eixada, alls i patates'], null))
    arrRst.push(await comprova('051', [], null))
    arrRst.push(await comprova('052', [], null))
    arrRst.push(await comprova('053', ['verd'], null))
    arrRst.push(await comprova('053', ['groc'], null))
    arrRst.push(await comprova('054', ['3', '5'], null))
    arrRst.push(await comprova('054', ['11', '4'], null))
    arrRst.push(await comprova('055', ['11', '4', '16'], null))
    arrRst.push(await comprova('055', ['8', '200', '25'], null))
    arrRst.push(await comprova('056', ['6', '7'], null))
    arrRst.push(await comprova('056', ['11', '19'], null))
    arrRst.push(await comprova('057', ['verd', 'blau'], null))
    arrRst.push(await comprova('057', ['groc', 'vermell'], null))
    arrRst.push(await comprova('057', ['blanc', 'taronja'], null))
    arrRst.push(await comprova('058', ['6', '7'], null))
    arrRst.push(await comprova('058', ['11', '19'], null))
    arrRst.push(await comprova('058', ['5', '5'], null))
    arrRst.push(await comprova('059', ['1', '2', '3'], null))
    arrRst.push(await comprova('059', ['1', '3', '2'], null))
    arrRst.push(await comprova('059', ['2', '1', '3'], null))
    arrRst.push(await comprova('059', ['2', '3', '2'], null))
    arrRst.push(await comprova('059', ['3', '1', '2'], null))
    arrRst.push(await comprova('059', ['3', '2', '1'], null))
    arrRst.push(await comprova('059', ['3', '1', '1'], null))
    arrRst.push(await comprova('059', ['2', '2', '1'], null))
    arrRst.push(await comprova('059', ['3', '1', '3'], null))
    arrRst.push(await comprova('059', ['1', '2', '1'], null))
    arrRst.push(await comprova('060', ['34'], null))
    arrRst.push(await comprova('060', ['35'], null))
    arrRst.push(await comprova('060', ['36'], null))
    arrRst.push(await comprova('060', ['49'], null))
    arrRst.push(await comprova('060', ['50'], null))
    arrRst.push(await comprova('060', ['51'], null))
    arrRst.push(await comprova('061', [], null))
    arrRst.push(await comprova('062', [], null))
    arrRst.push(await comprova('063', [], null))
    arrRst.push(await comprova('064', ['exercici064.txt'], null))
    //arrRst.push(await comprova('065', ['En Pelut i en Pelat han anat a passejar'], null))
    //arrRst.push(await comprova('066', ['En Pelut i en Pelat han anat a passejar', 'i han jugat a la gespa del parc'], null))
    arrRst.push(await comprova('069', ['king', '3'], null))

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